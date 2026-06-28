import "react";
import Scanner from "./Scanner";
import Skrining from "./Skrining";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Stethoscope,
  BookOpen,
  MapPin,
  MessageSquare,
  Camera,
  Sparkles,
  Activity,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";
import Edukasi from "./Edukasi";
import Fasilitas from "./Fasilitas";
import ToxoBuddy from "./ToxoBuddy";

const Home = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto pb-24 md:pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 relative bg-[#FF90E8] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 group">
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-black rotate-3">
            v2.0 LIVE
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between items-start min-h-60">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black text-black text-sm font-black uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Activity size={18} strokeWidth={3} /> AI VISION SCANNER
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 leading-none text-black uppercase tracking-tight">
                CEK KEMATANGAN
                <br />
                DAGING SAPI.
              </h2>
              <p className="text-black font-bold max-w-lg text-base md:text-xl border-l-4 border-black pl-4 my-6">
                Unggah foto atau pindai langsung. AI kami akan mendeteksi
                tingkat kematangan daging untuk memastikan aman dari parasit.
              </p>
            </div>
            <Link
              to="/scanner"
              className="mt-6 bg-[#C4A1FF] text-black border-4 border-black font-black uppercase py-4 px-8 flex w-max items-center gap-3 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-1.5 active:translate-y-[6px]"
            >
              <Camera size={24} strokeWidth={3} />
              MULAI PEMINDAIAN
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <Link
            to="/toxobuddy"
            className="flex-1 bg-[#FFC900] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 relative group block"
          >
            <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
              <MessageSquare size={32} className="text-black" strokeWidth={3} />
            </div>
            <h3 className="font-black text-3xl mb-2 text-black uppercase">
              ToxoBuddy
            </h3>
            <p className="text-black font-bold border-b-2 border-black inline-block pb-1">
              Asisten AI Cerdas Anda
            </p>
            <div className="absolute bottom-6 right-6 w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black group-hover:bg-white group-hover:text-black transition-colors">
              <ChevronRight size={24} strokeWidth={3} />
            </div>
          </Link>

          <div className="flex-1 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FF90E8] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                <Sparkles size={24} className="text-black" strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-black text-black text-xl mb-2 uppercase">
                  Fakta Cepat
                </h4>
                <p className="text-sm text-black font-bold">
                  Parasit Toxoplasma gondii dapat hidup berbulan-bulan di
                  lingkungan atau tanah lembap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          to="/skrining"
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 group"
        >
          <div className="w-14 h-14 bg-[#23A094] border-2 border-black flex items-center justify-center mb-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-12 transition-transform">
            <Stethoscope size={28} className="text-white" strokeWidth={3} />
          </div>
          <h3 className="font-black text-black text-xl mb-1 uppercase">
            Skrining Dini
          </h3>
          <p className="text-sm text-black font-bold border-t-2 border-black pt-2 mt-2">
            Deteksi risiko paparan
          </p>
        </Link>

        <Link
          to="/edukasi"
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 group"
        >
          <div className="w-14 h-14 bg-[#FF90E8] border-2 border-black flex items-center justify-center mb-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-rotate-12 transition-transform">
            <BookOpen size={28} className="text-black" strokeWidth={3} />
          </div>
          <h3 className="font-black text-black text-xl mb-1 uppercase">
            Pusat Edukasi
          </h3>
          <p className="text-sm text-black font-bold border-t-2 border-black pt-2 mt-2">
            Mitos & Fakta Medis
          </p>
        </Link>

        <Link
          to="/fasilitas"
          className="col-span-2 md:col-span-1 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 group flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0"
        >
          <div className="w-14 h-14 bg-[#C4A1FF] border-2 border-black flex items-center justify-center md:mb-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 group-hover:-rotate-12 transition-transform">
            <MapPin size={28} className="text-black" strokeWidth={3} />
          </div>
          <div className="flex-1 w-full">
            <h3 className="font-black text-black text-xl mb-1 uppercase">
              Fasilitas Bali
            </h3>
            <p className="text-sm text-black font-bold border-t-2 border-black pt-2 mt-2 w-full">
              RS & Lab Terdekat
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const DesktopSidebar = ({ location }) => {
  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "DASHBOARD" },
    { path: "/skrining", icon: Stethoscope, label: "SKRINING" },
    { path: "/edukasi", icon: BookOpen, label: "EDUKASI" },
    { path: "/fasilitas", icon: MapPin, label: "FASILITAS" },
    { path: "/toxobuddy", icon: MessageSquare, label: "TOXOBUDDY" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 bg-[#C4A1FF] border-r-4 border-black h-full text-black shrink-0 z-20 relative">
      <div className="p-8 border-b-4 border-black bg-[#FF90E8]">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-black flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-3xl text-white">
            T
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              ToxoAware
            </h1>
            <p className="text-xs font-bold uppercase bg-white border-2 border-black px-2 py-0.5 inline-block mt-1">
              Edukasi & Skrining
            </p>
          </div>
        </div>
      </div>
      <nav className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto">
        <div className="text-sm font-black uppercase border-b-4 border-black pb-2 mb-2">
          Menu Utama
        </div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-4 border-4 border-black transition-all 
font-black text-lg uppercase ${isActive ? "bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1" : "bg-transparent hover:bg-white/50 hover:translate-x-1"}`}
            >
              <item.icon size={24} strokeWidth={3} />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-3 h-3 bg-[#FF90E8] border-2 border-black" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default function App() {
  const location = useLocation();

  // =====================================================================
  // FUNGSI PENCEGAT OTOMATIS UNTUK MEMENUHI POIN 1 & POIN 2 DI FRONTEND
  // =====================================================================
  const handleDataFormat = (rawResponse) => {
    if (!rawResponse) return rawResponse;

    const confidenceValue = rawResponse.confidence || 0;
    const currentDoneness = rawResponse.doneness || "UNKNOWN";

    // Poin 2: Blokir hasil tebakan jika tingkat kepastian di bawah 5%
    if (confidenceValue < 5) {
      return {
        ...rawResponse,

