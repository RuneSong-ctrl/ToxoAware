import io
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
from ultralytics import YOLO

app = FastAPI(title="ToxoAware API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = YOLO("best.pt")

class ChatRequest(BaseModel):
    message: str

@app.get("/")
async def root():
    return {"message": "ToxoAware Backend is Running!"}

@app.post("/api/scan-meat")
async def scan_meat(image: UploadFile = File(...)):
    contents = await image.read()
    img = Image.open(io.BytesIO(contents)).convert("RGB")
    
    results = model.predict(img)
    
    doneness = "UNKNOWN"
    safe_to_eat = False
    confidence = 0.0

    if len(results) > 0:
        result = results[0]
        
        if hasattr(result, 'probs') and result.probs is not None:
            class_id = result.probs.top1
            confidence = float(result.probs.top1conf.item())
            doneness = result.names[class_id]
            
        elif hasattr(result, 'boxes') and result.boxes is not None and len(result.boxes) > 0:
            best_box = result.boxes[0]
            class_id = int(best_box.cls[0].item())
            confidence = float(best_box.conf[0].item())
            doneness = result.names[class_id]

        if doneness.lower() == "well done":
            safe_to_eat = True

    return {
        "status": "success",
        "doneness": doneness.upper(),
        "confidence": round(confidence * 100, 2),
        "safe_to_eat": safe_to_eat
    }

@app.post("/api/chat")
async def chat_buddy(request: ChatRequest):
    return {"reply": f"Ini adalah jawaban dari ToxoBuddy untuk: {request.message}"}