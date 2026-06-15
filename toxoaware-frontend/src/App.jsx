import "react";
import Scanner from "./Scanner";
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

const Home = () => {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 lg:col-span-8 relative overflow-hidden rounded-4xl bg-slate-900 text-white p-8 md:p-12 shadow-2xl shadow-slate-900/20 group cursor-pointer transition-transform hover:scale-[1.01]">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 p-8 opacity-10 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none">
            <Camera size={240} />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between items-start min-h-60">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6 border border-emerald-500/30">
                <Activity size={16} /> AI Vision Scanner
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Cek Kematangan
                <br />
                Daging Sapi.
              </h2>
              <p className="text-slate-300 max-w-lg text-sm md:text-lg leading-relaxed">
                Unggah foto atau pindai langsung dengan kamera cerdas kami untuk
                mendeteksi tingkat kematangan daging dan pastikan aman dari
                parasit.
              </p>
            </div>
            <Link
              to="/scanner"
              className="mt-10 bg-white text-slate-900 hover:bg-emerald-50 hover:text-emerald-700 font-bold py-4 px-8 rounded-2xl flex w-max items-center gap-3 transition-all shadow-xl hover:shadow-emerald-500/20 active:scale-95"
            >
              <Camera size={22} />
              Mulai Pemindaian
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-6">
          <Link
            to="/toxobuddy"
            className="flex-1 bg-linear-to-br from-indigo-600 to-sky-400 p-8 rounded-4xl shadow-xl text-white relative overflow-hidden group hover:scale-[1.02] transition-transform"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <MessageSquare size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-3xl mb-2">ToxoBuddy</h3>
            <p className="text-sky-100">Asisten AI Cerdas Anda</p>
            <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <ChevronRight size={20} />
            </div>
          </Link>

          <div className="flex-1 bg-white md:bg-white/60 backdrop-blur-xl border border-slate-200/50 p-8 rounded-4xl shadow-lg flex flex-col justify-center">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-rose-100 text-rose-500 rounded-2xl">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">
                  Fakta Cepat
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Parasit <i>Toxoplasma gondii</i> dapat hidup berbulan-bulan di
                  lingkungan atau tanah yang lembap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Link
          to="/skrining"
          className="bg-white md:bg-white/60 backdrop-blur-xl border border-slate-200/50 p-6 md:p-8 rounded-4xl shadow-lg hover:bg-white/80 transition-all hover:-translate-y-1 group"
        >
          <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <Stethoscope size={28} />
          </div>
          <h3 className="font-bold text-slate-800 text-xl mb-1">
            Skrining Dini
          </h3>
          <p className="text-sm text-slate-500">Deteksi risiko paparan</p>
        </Link>

        <Link
          to="/edukasi"
          className="bg-white md:bg-white/60 backdrop-blur-xl border border-slate-200/50 p-6 md:p-8 rounded-4xl shadow-lg hover:bg-white/80 transition-all hover:-translate-y-1 group"
        >
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <BookOpen size={28} />
          </div>
          <h3 className="font-bold text-slate-800 text-xl mb-1">
            Pusat Edukasi
          </h3>
          <p className="text-sm text-slate-500">Mitos & Fakta Medis</p>
        </Link>

        <Link
          to="/fasilitas"
          className="col-span-2 md:col-span-1 bg-white md:bg-white/60 backdrop-blur-xl border border-slate-200/50 p-6 md:p-8 rounded-4xl shadow-lg hover:bg-white/80 transition-all hover:-translate-y-1 group flex md:flex-col items-center md:items-start gap-5 md:gap-0"
        >
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center md:mb-5 shrink-0 group-hover:scale-110 transition-transform">
            <MapPin size={28} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-xl mb-1">
              Fasilitas Bali
            </h3>
            <p className="text-sm text-slate-500">RS & Lab Terdekat</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[50vh] md:h-[70vh] text-slate-500 animate-in fade-in duration-500">
    <div className="w-24 h-24 bg-slate-200/50 rounded-full flex items-center justify-center mb-6 animate-pulse">
      <Activity size={40} className="text-slate-400" />
    </div>
    <h2 className="text-2xl font-bold text-slate-700">Halaman {title}</h2>
    <p className="text-sm mt-2">Sedang dalam tahap pengembangan interaktif.</p>
  </div>
);

const DesktopSidebar = ({ location }) => {
  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/skrining", icon: Stethoscope, label: "Skrining" },
    { path: "/edukasi", icon: BookOpen, label: "Edukasi" },
    { path: "/fasilitas", icon: MapPin, label: "Fasilitas" },
    { path: "/toxobuddy", icon: MessageSquare, label: "ToxoBuddy" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 bg-slate-900 border-r border-slate-800 h-full text-white shrink-0 py-8 px-6">
      <div className="flex items-center gap-4 mb-12 px-2">
        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 font-bold text-2xl text-white">
          T
        </div>
        <div>
          <h1 className="text-xl font-extrabold tracking-wide">ToxoAware</h1>
          <p className="text-xs text-emerald-400 font-medium">
            Edukasi & Skrining
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-3 flex-1">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
          Menu Utama
        </div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "text-slate-400 hover:bg-white/5 hover:text-slate-100"}`}
            >
              <item.icon
                size={22}
                className={
                  isActive
                    ? "text-emerald-400"
                    : "text-slate-500 group-hover:text-slate-300 transition-colors"
                }
              />
              <span className="font-medium text-sm">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-6 bg-emerald-500 rounded-full" />
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

  return (
    <div className="min-h-screen md:h-screen w-full bg-slate-50 md:bg-[#f8fafc] font-sans text-slate-800 flex flex-col md:flex-row overflow-hidden selection:bg-emerald-500 selection:text-white">
      <DesktopSidebar location={location} />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 pt-8 pb-4 px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-extrabold bg-linear-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
                ToxoAware
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Edukasi & Skrining
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-white shadow-sm text-emerald-700 font-bold text-sm">
              PR
            </div>
          </div>
        </header>

        <header className="hidden md:flex justify-between items-end px-12 pt-12 pb-8 shrink-0 bg-white/30 backdrop-blur-md border-b border-slate-200/50 z-10">
          <div>
            <p className="text-sm font-semibold text-emerald-600 mb-1 uppercase tracking-widest">
              Overview
            </p>
            <h1 className="text-3xl font-extrabold text-slate-800">
              {location.pathname === "/"
                ? "Dashboard Utama"
                : location.pathname === "/skrining"
                  ? "Formulir Skrining"
                  : location.pathname === "/toxobuddy"
                    ? "ToxoBuddy AI"
                    : location.pathname === "/edukasi"
                      ? "Pusat Edukasi"
                      : location.pathname === "/scanner"
                        ? "Kamera AI Vision"
                        : "Fasilitas Terdekat"}
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2">
              <MapPin size={16} className="text-emerald-500" />
              Denpasar, Bali
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-10 hide-scrollbar bg-mesh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route
              path="/skrining"
              element={<PlaceholderPage title="Skrining" />}
            />
            <Route
              path="/toxobuddy"
              element={<PlaceholderPage title="ToxoBuddy" />}
            />
            <Route
              path="/edukasi"
              element={<PlaceholderPage title="Edukasi" />}
            />
            <Route
              path="/fasilitas"
              element={<PlaceholderPage title="Fasilitas" />}
            />
          </Routes>
        </div>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-4">
        <div className="relative pointer-events-auto max-w-md mx-auto">
          <div className="absolute bottom-0 left-4 right-4 bg-white/90 backdrop-blur-2xl border border-slate-200/50 shadow-2xl rounded-4xl px-6 py-4 flex justify-between items-center">
            <Link
              to="/skrining"
              className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === "/skrining" ? "text-emerald-500" : "text-slate-400"}`}
            >
              <Stethoscope size={24} />
            </Link>
            <Link
              to="/edukasi"
              className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === "/edukasi" ? "text-emerald-500" : "text-slate-400"}`}
            >
              <BookOpen size={24} />
            </Link>

            <div className="relative -top-8">
              <Link
                to="/scanner"
                className="w-16 h-16 bg-linear-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center text-white shadow-xl shadow-emerald-500/40 border-[6px] border-slate-100 transition-transform active:scale-90"
              >
                <Camera size={28} />
              </Link>
            </div>

            <Link
              to="/fasilitas"
              className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === "/fasilitas" ? "text-emerald-500" : "text-slate-400"}`}
            >
              <MapPin size={24} />
            </Link>
            <Link
              to="/toxobuddy"
              className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === "/toxobuddy" ? "text-emerald-500" : "text-slate-400"}`}
            >
              <MessageSquare size={24} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
