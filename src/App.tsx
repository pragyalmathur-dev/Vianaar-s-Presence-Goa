import { HelpCircle } from 'lucide-react';
import MapComponent from './components/MapComponent';

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#143024] overflow-hidden font-sans font-light antialiased text-[#D9E8C0]">
      {/* 1. LUXURIOUS SLENDER TOP BAR */}
      <header className="py-2.5 px-6 bg-[#234D3B] border-b border-white/10 flex flex-row justify-between items-center shrink-0 select-none">
        <div className="space-y-0.5">
          <h1 className="text-xl md:text-2xl font-serif font-normal tracking-wide text-white leading-tight">
            Vianaar's <span className="italic text-[#D9E8C0]">Presence</span> in Goa
          </h1>
          <p className="text-xs font-sans font-light text-[#D9E8C0]/80 tracking-wider uppercase">
            120+ Projects | 1500+ Homes
          </p>
        </div>

        {/* Brand Guideline Aesthetic Footnote / Sub-text */}
        <div className="block text-right">
          <p className="text-[10px] font-sans font-light text-[#D9E8C0]/40 tracking-widest uppercase">
            Design Led Residences | Surrounded by Nature
          </p>
        </div>
      </header>

      {/* 2. MAIN MAP VIEWPORT */}
      <main className="flex-1 relative w-full h-full bg-[#143024] overflow-hidden">
        
        {/* Floating Brand Guidelines Help Overlay */}
        <div className="absolute top-4 right-4 z-[999] group">
          <button className="p-2 rounded-xl bg-[#234D3B]/90 hover:bg-[#1b3d2e] border border-white/15 text-[#D9E8C0] hover:text-white transition-all shadow-md">
            <HelpCircle className="w-4 h-4" />
          </button>
          <div className="absolute right-0 mt-2 w-56 p-3.5 bg-[#234D3B]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl text-[11px] text-[#D9E8C0] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
            <p className="font-serif font-normal text-[#D9E8C0] mb-1.5 text-xs tracking-wide">Interactive Guide</p>
            <ul className="space-y-1 list-disc list-inside font-sans font-light text-[10px] text-[#D9E8C0]/60">
              <li>Pinch or scroll map to zoom.</li>
              <li>Goa borders beautifully isolated.</li>
              <li>Minimal elegance defined.</li>
            </ul>
          </div>
        </div>

        {/* THE CLEAN INTEGRATED LEAFLET MAP ELEMENT */}
        <div className="w-full h-full p-2 bg-[#143024]">
          <MapComponent />
        </div>

      </main>
    </div>
  );
}
