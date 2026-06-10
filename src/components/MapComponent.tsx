import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { GOA_CENTER, WORLD_MASK_COORDS, GOA_BOUNDS, BEACHES, VIANAAR_ESTATES, RIVERS } from '../data';

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function MapComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!containerRef.current || mapInstanceRef.current) return;

    // Create Leaflet map centered on Goa
    const map = L.map(containerRef.current, {
      center: GOA_CENTER,
      zoom: 10,
      zoomControl: false, // Custom positioned zoom control below
      attributionControl: false, // Suppress default Leaflet attribution panel
      minZoom: 9,
      maxZoom: 13,
      maxBounds: L.latLngBounds(
        L.latLng(GOA_BOUNDS.southWest[0], GOA_BOUNDS.southWest[1]),
        L.latLng(GOA_BOUNDS.northEast[0], GOA_BOUNDS.northEast[1])
      ),
      maxBoundsViscosity: 0.95, // Soft rubber band effect at boundaries
    });

    mapInstanceRef.current = map;

    // Add zoom controls to top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Set initial tile layer
    L.tileLayer(TILE_LAYER, {
      attribution: TILE_ATTRIBUTION,
      maxZoom: 18,
    }).addTo(map);

    // Add Inverted Polygon Mask to blur outside Goa borders, utilizing our non-goa-blur-mask CSS class
    // Using deep forest green color brand accent style with super thin opacity for luxurious translucent aesthetic
    L.polygon(WORLD_MASK_COORDS as any, {
      className: 'non-goa-blur-mask',
      color: 'transparent', // No highlighting border line
      weight: 0,
      fillColor: '#234D3B', // Brand Green dark tint for non-Goa landmasses
      fillOpacity: 0.22,    // Allows underlying map features to be 30% blurred but fully visible (not blacked out)
      interactive: false,
    }).addTo(map);

    // Add Beach markers with rectangular green (Brand color) box with white text, shifted left with connecting dashed line
    BEACHES.forEach((beach, idx) => {
      // Create three levels of line lengths to gracefully stack nearby beaches
      const lineLength = idx % 3 === 0 ? 45 : idx % 3 === 1 ? 90 : 135;
      const rightOffset = lineLength + 4;

      const customIcon = L.divIcon({
        html: `
          <div class="relative select-none pointer-events-auto" style="font-family: 'Mulish', sans-serif;">
            <!-- Beautiful small marker dot precisely on the coordinate -->
            <div class="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#D9E8C0] border border-white/20 shadow-md flex items-center justify-center z-15">
              <div class="w-1 h-1 rounded-full bg-[#234D3B]"></div>
            </div>

            <!-- Dashed reference line extending to the left over the sea -->
            <div class="absolute top-0 -translate-y-1/2 border-t border-dashed border-[#234D3B]/90 z-0" 
                 style="width: ${lineLength}px; right: 4px;"></div>

            <!-- Brand Green label box containing clean white uppercase text -->
            <div class="absolute top-0 -translate-y-1/2 bg-[#234D3B] text-white text-[9px] md:text-[10px] font-sans font-light tracking-wide px-2.5 py-1.5 rounded border border-white/10 shadow-lg whitespace-nowrap uppercase leading-none"
                 style="right: ${rightOffset}px;">
              ${beach.name}
            </div>
          </div>
        `,
        className: 'custom-beach-marker',
        iconSize: [0, 0],
        iconAnchor: [0, 0], // Anchor exactly on the coordinate
      });

      L.marker([beach.lat, beach.lng], { icon: customIcon }).addTo(map);
    });

    // Add River markers with same writing and design style as beaches, but without a line/dot
    RIVERS.forEach((river) => {
      const customIcon = L.divIcon({
        html: `
          <div class="relative select-none pointer-events-auto" style="font-family: 'Cardo', Georgia, serif;">
            <!-- Cream (#D9E8C0) label box containing elegant brand green Cardo italic text, perfectly centered -->
            <div class="absolute -translate-x-1/2 -translate-y-1/2 bg-[#D9E8C0] text-[#234D3B] text-[10px] md:text-[11px] font-serif italic font-normal tracking-wide px-2.5 py-1.5 rounded border border-[#234D3B]/15 shadow-md whitespace-nowrap leading-none">
              ${river.name}
            </div>
          </div>
        `,
        className: 'custom-river-marker',
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      L.marker([river.lat, river.lng], { icon: customIcon }).addTo(map);
    });

    // Add luxury Vianaar Estate Markers with custom teardrop brand pins
    VIANAAR_ESTATES.forEach((estate) => {
      const customIcon = L.divIcon({
        html: `
          <div class="vianaar-property-pin-container select-none pointer-events-auto">
            <!-- Teardrop Pin Shape (SVG) with Brand styling -->
            <svg class="vianaar-pin-svg" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0C8.06 0 0 8.06 0 18C0 29.5 15 44.5 17.15 45.45C17.7 45.7 18.3 45.7 18.85 45.45C21 44.5 36 29.5 36 18C36 8.06 27.94 0 18 0Z" fill="#234D3B" stroke="#D9E8C0" stroke-width="1.5"/>
              <circle cx="18" cy="18" r="13.5" fill="white" />
            </svg>
            <!-- Logo inside the white circle with image error fallback -->
            <div class="logo-inner-wrapper">
               <img src="https://www.vianaar.com/images-vianaar/logo.svg" 
                    onerror="if (!this.dataset.fallbackIndex) { this.dataset.fallbackIndex = '1'; this.src = '/assets/logo/logo.svg'; } else if (this.dataset.fallbackIndex === '1') { this.dataset.fallbackIndex = '2'; this.src = '/assets/logo/logo.png'; } else { this.style.display = 'none'; this.nextElementSibling.style.display = 'flex'; }" 
                    class="uploaded-logo-img" alt="${estate.name}" />
               <div class="fallback-v-logo flex items-center justify-center p-0.5">
                  <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                    <defs>
                      <clipPath id="top-clip-fallback">
                        <rect x="0" y="70" width="400" height="280" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#top-clip-fallback)">
                      <path d="M 174 65 L 196 175 Q 200 195 204 175 L 226 65" stroke="#234D3B" stroke-width="6.8" stroke-linecap="square" />
                      <path d="M 164 65 L 186 175 Q 200 245 214 175 L 236 65" stroke="#234D3B" stroke-width="6.8" stroke-linecap="square" />
                      <path d="M 154 65 L 176 175 Q 200 295 224 175 L 246 65" stroke="#234D3B" stroke-width="6.8" stroke-linecap="square" />
                      <path d="M 144 65 L 166 175 Q 200 345 234 175 L 256 65" stroke="#234D3B" stroke-width="6.8" stroke-linecap="square" />
                      <path d="M 134 65 L 156 175 Q 200 395 244 175 L 266 65" stroke="#234D3B" stroke-width="6.8" stroke-linecap="square" />
                    </g>
                  </svg>
               </div>
            </div>
          </div>
        `,
        className: 'vianaar-div-icon',
        iconSize: [30, 38],
        iconAnchor: [15, 38], // Anchored perfectly on coordinate point
        popupAnchor: [0, -35]
      });

      const marker = L.marker([estate.lat, estate.lng], { icon: customIcon }).addTo(map);
      marker.bindPopup(`
        <div class="vianaar-luxury-popup select-none pointer-events-auto">
          <h4 class="vianaar-popup-title">${estate.name}</h4>
        </div>
      `, {
        className: 'vianaar-custom-popup-box',
        closeButton: false,
        minWidth: 90
      });
    });


    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#143024]">
      <div ref={containerRef} className="w-full h-full" id="goa-interactive-map" />
    </div>
  );
}
