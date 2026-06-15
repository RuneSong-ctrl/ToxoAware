import  { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import {
  Camera,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Loader2,
  ArrowLeft,
  Image as ImageIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Scanner() {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [facingMode, setFacingMode] = useState("environment");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
  };

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    setPreviewImage(imageSrc);
    setIsScanning(true);

    try {
      const res = await fetch(imageSrc);
      const blob = await res.blob();
      const formData = new FormData();
      formData.append("image", blob, "scan.jpg");

      const response = await fetch("http://localhost:8000/api/scan-meat", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsScanning(false);
    }
  }, [webcamRef]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    setIsScanning(true);

    try {
      const formData = new FormData();
      formData.append("image", file, file.name);

      const response = await fetch("http://localhost:8000/api/scan-meat", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsScanning(false);
    }
  };

  const resetScan = () => {
    setResult(null);
    setPreviewImage(null);
  };

  return (
    <div className="fixed inset-0 z-100 bg-slate-950 flex flex-col h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6 bg-linear-to-b from-slate-950/90 to-transparent">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 active:scale-90 transition-transform hover:bg-white/20"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-emerald-400 text-sm font-bold tracking-widest uppercase">
          AI Vision Live
        </div>
        <button
          onClick={toggleCamera}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 active:scale-90 transition-transform hover:bg-white/20"
        >
          <RefreshCw size={24} />
        </button>
      </div>

      <div className="relative flex-1 bg-black">
        {!previewImage && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        )}

        {result && (
          <div className="absolute inset-0 z-30 flex items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
            <div
              className={`w-full max-w-sm rounded-[2.5rem] p-8 border backdrop-blur-3xl ${result.safe_to_eat ? "bg-emerald-900/80 border-emerald-500/50 shadow-2xl shadow-emerald-500/30" : "bg-rose-900/80 border-rose-500/50 shadow-2xl shadow-rose-500/30"}`}
            >
              <div className="flex justify-center mb-6">
                {result.safe_to_eat ? (
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
                    <CheckCircle size={48} />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/40">
                    <AlertTriangle size={48} />
                  </div>
                )}
              </div>
              <h2 className="text-3xl font-bold text-white text-center mb-2">
                {result.doneness}
              </h2>
              <p
                className={`text-center font-medium mb-8 ${result.safe_to_eat ? "text-emerald-400" : "text-rose-400"}`}
              >
                {result.safe_to_eat
                  ? "Aman dari risiko parasit."
                  : "Belum aman! Masak lebih matang."}
              </p>
              <div className="flex justify-between items-center bg-black/40 rounded-2xl p-4 mb-8">
                <span className="text-slate-300 text-sm">Akurasi AI</span>
                <span className="text-white font-bold">
                  {result.confidence}%
                </span>
              </div>
              <button
                onClick={resetScan}
                className="w-full py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold active:scale-95 transition-all"
              >
                Pindai Ulang
              </button>
            </div>
          </div>
        )}

        {!result && !isScanning && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-emerald-500/50 rounded-3xl">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-emerald-500 rounded-tr-3xl"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-emerald-500 rounded-bl-3xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl"></div>
              <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

      {!result && (
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 bg-linear-to-t from-slate-950 via-slate-950/90 to-transparent flex justify-center items-center gap-8 z-20">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept="image/*"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            disabled={isScanning}
            className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50"
          >
            <ImageIcon size={24} />
          </button>

          <button
            onClick={capture}
            disabled={isScanning}
            className="relative w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white border-[6px] border-white shadow-xl shadow-emerald-500/40 active:scale-90 transition-transform disabled:opacity-50 disabled:scale-100 hover:bg-emerald-400"
          >
            {isScanning ? (
              <Loader2 size={32} className="animate-spin" />
            ) : (
              <Camera size={32} />
            )}
          </button>

          <div className="w-14 h-14"></div>
        </div>
      )}
    </div>
  );
}
