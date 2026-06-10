// Approximate Goa border coordinates for tracing and masking
export const GOA_BORDER_COORDS: [number, number][] = [
  [15.805, 73.685], // Terekhol / Querim Extreme North-West
  [15.820, 73.740], // Pernem Northern boundary
  [15.810, 73.840], // Ibrampur / Maharashtra border
  [15.770, 73.910], // Near Dodamarg
  [15.740, 74.020], // Bicholim border
  [15.710, 74.090], // Satari Northern corner
  [15.650, 74.190], // Chorla Ghat East (Satari forest border)
  [15.540, 74.250], // Satari East
  [15.420, 74.310], // Sanguem Eastern border (near Castle Rock)
  [15.220, 74.260], // Sanguem South-East
  [15.020, 74.180], // Netravali South-East
  [14.935, 74.120], // Cotigao South-East (near Karnataka)
  [14.895, 74.055], // Loliem (Southernmost coast)
  [14.945, 74.015], // Galgibaga / Talpona Coast
  [15.010, 73.965], // Palolem Coast
  [15.090, 73.935], // Agonda / Cabo de Rama Coast
  [15.210, 73.905], // Varca / Colva Coast
  [15.340, 73.845], // Cansaulim Coast
  [15.405, 73.775], // Vasco da Gama / Mormugao Headland
  [15.460, 73.795], // Panjim / Tiswadi (Mandovi Confluence)
  [15.545, 73.745], // Candolim / Calangute Coast
  [15.595, 73.725], // Anjuna / Vagator Coast
  [15.685, 73.705], // Morjim / Ashwem Coast
  [15.775, 73.690], // Arambol Coast
  [15.805, 73.685]  // Close the loop
];

// Inverted polygon for Leaflet mask (defines the outer boundaries of the world with Goa as a hole)
export const WORLD_MASK_COORDS = [
  [
    [90, -180],
    [90, 180],
    [-90, 180],
    [-90, -180],
    [90, -180]
  ], // Outer Ring (The World)
  GOA_BORDER_COORDS // Inner Cutout (Goa)
];

// Standard Goa center & viewing bounds
export const GOA_CENTER: [number, number] = [15.34, 74.03];
export const GOA_BOUNDS = {
  southWest: [14.65, 73.25] as [number, number],
  northEast: [16.05, 74.55] as [number, number]
};

export interface Region {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  highlights: string[];
  district: 'North Goa' | 'South Goa';
}

export const MUNICIPAL_REGIONS: Region[] = [
  {
    id: 'loliem',
    name: 'Loliem',
    lat: 14.935,
    lng: 74.045,
    district: 'South Goa',
    description: 'A serene and eco-conscious coastal sanctuary nestled in extreme South Goa. Known for pristine sand bays, rugged cliffs, and rich biodiversity, Loliem represents Vianaar’s long-term commitment to active heritage-integrated boutique vacation retreats.',
    highlights: [
      'Pristine South Goa Charm',
      'High-Biodiversity Coastal Slopes',
      'Sustainable Development'
    ]
  },
  {
    id: 'assagao',
    name: 'Assagao',
    lat: 15.598,
    lng: 73.774,
    district: 'North Goa',
    description: 'Known globally as the "Valley of Flowers" and the colonial heart of North Goa. Assagao is highly sought after for its quiet, tree-shaded avenues, heritage Portuguese villas, and refined fine-dining experiences.',
    highlights: [
      'Valley of Flowers Architecture',
      'Portuguese Heritage Restorations',
      'Quiet Tree-lined Boulevards'
    ]
  },
  {
    id: 'anjuna',
    name: 'Anjuna',
    lat: 15.580,
    lng: 73.742,
    district: 'North Goa',
    description: 'An elegant counterpoint of historic boho-culture and modern beachside luxury. Anjuna houses several highly acclaimed modern holiday homes perched perfectly near legendary orange cliffs and swaying palm trees.',
    highlights: [
      'Spectacular Ocean Vistas',
      'Vibrant Art & Boho Culture',
      'Red Cliffside Landmarks'
    ]
  },
  {
    id: 'siolim',
    name: 'Siolim',
    lat: 15.622,
    lng: 73.765,
    district: 'North Goa',
    description: 'Peacefully positioned along the banks of the mighty Chapora River. Siolim is highly treasured for its slow-paced, rustic village life, gorgeous Church square, and ancient coconut groves.',
    highlights: [
      'Superb Riverside Settings',
      'Authentic local Goan Village living',
      'Proximity to Chapora River'
    ]
  },
  {
    id: 'reismagos',
    name: 'Reis Magos',
    lat: 15.503,
    lng: 73.805,
    district: 'North Goa',
    description: 'Positioned dramatically where the majestic Mandovi River empties into the Arabian Sea. Reis Magos holds premium clifftop landmarks looking straight onto Panjim city and the historic military fort.',
    highlights: [
      'Mandovi Estuary Conflux',
      'Clifftop Panoramic Elevations',
      'Historic Reis Magos Fort Proximity'
    ]
  },
  {
    id: 'saligao',
    name: 'Saligao',
    lat: 15.552,
    lng: 73.778,
    district: 'North Goa',
    description: 'A land of emerald green paddy fields, traditional Goan-Catholic architecture, and deep rural tranquility. Saligao hosts heritage-loving residents, offering quiet village pathways.',
    highlights: [
      'Lush Emerald Paddy Fields',
      'Mae de Deus Church Landmark',
      'Timeless Goan-Catholic manors'
    ]
  },
  {
    id: 'pernem',
    name: 'Pernem / Mandrem',
    lat: 15.670,
    lng: 73.725,
    district: 'North Goa',
    description: 'Goa’s northernmost agricultural and wellness district. Pernem boasts spectacular rolling hills, clean backwater creeks, and gorgeous eco-living environments close to Mandrem and Ashwem’s tranquil white sands.',
    highlights: [
      'Eco-Conscious Wilderness Sites',
      'Proximity to MOPA Airport',
      'Virgin Beach Access'
    ]
  }
];

export interface Beach {
  name: string;
  lat: number;
  lng: number;
}

export interface River {
  name: string;
  lat: number;
  lng: number;
}

export interface VianaarLocation {
  name: string;
  lat: number;
  lng: number;
}

export const VIANAAR_ESTATES: VianaarLocation[] = [
  { lat: 15.6601625, lng: 73.7697236, name: 'Parcem' },
  { lat: 15.6204534, lng: 73.7700813, name: 'Siolim' },
  { lat: 15.6763531, lng: 73.7825060, name: 'Parcem' },
  { lat: 15.5095952, lng: 73.8095728, name: 'Reis Magos' },
  { lat: 15.6730527, lng: 73.7184729, name: 'Mandrem' },
  { lat: 15.6707778, lng: 73.7321666, name: 'Mandrem' },
  { lat: 15.6056120, lng: 73.7563937, name: 'Assagao' },
  { lat: 15.6435228, lng: 73.7230478, name: 'Ashwem' },
  { lat: 15.641052,  lng: 73.743225,  name: 'Morjim' },
  { lat: 15.711880,  lng: 73.726525,  name: 'Pernem' },
  { lat: 15.629372,  lng: 73.735456,  name: 'Vagator' },
  { lat: 15.600214,  lng: 73.744033,  name: 'Assagao' },
  { lat: 15.572900,  lng: 73.778575,  name: 'Parra' },
  { lat: 15.583164,  lng: 73.798784,  name: 'Canca' },
  { lat: 15.585584,  lng: 73.781739,  name: 'Verla Canca' },
  { lat: 15.539845,  lng: 73.845567,  name: 'Salvador do Mundo' },
  { lat: 15.583638,  lng: 73.869631,  name: 'Aldona' },
  { lat: 15.511244,  lng: 73.783928,  name: 'Nerul' },
  { lat: 15.522830,  lng: 73.792863,  name: 'Saipem' },
  { lat: 15.602683,  lng: 73.751632,  name: 'Vagator' },
  { lat: 15.572409,  lng: 73.780930,  name: 'Parra' },
  { lat: 15.598388,  lng: 73.781031,  name: 'Assagao' },
  { lat: 15.602813,  lng: 73.752129,  name: 'Anjuna' },
  { lat: 15.605159,  lng: 73.748782,  name: 'Anjuna' }
];

export const BEACHES: Beach[] = [
  { lat: 15.668878, lng: 73.709476, name: 'Mandrem Beach' },
  { lat: 15.642733, lng: 73.717908, name: 'Ashwem Beach' },
  { lat: 15.684113, lng: 73.704233, name: 'Arambol Beach' },
  { lat: 15.275609, lng: 73.912983, name: 'Colva Beach' },
  { lat: 15.240591, lng: 73.923399, name: 'Benaulim Beach' },
  { lat: 15.199121, lng: 73.934317, name: 'Varca Beach' },
  { lat: 15.151829, lng: 73.946664, name: 'Betul Beach' },
  { lat: 15.042417, lng: 73.986702, name: 'Agonda Beach' },
  { lat: 15.016791, lng: 74.003673, name: 'Butterfly Beach' },
  { lat: 15.007297, lng: 74.026194, name: 'Palolem Beach' },
  { lat: 15.479263, lng: 73.806584, name: 'Miramar Beach' },
  { lat: 15.443603, lng: 73.856543, name: 'Siridao Beach' },
  { lat: 15.409638, lng: 73.816933, name: 'Vaddem Beach' },
  { lat: 15.620945, lng: 73.731048, name: 'Morjim Beach' },
  { lat: 15.606313, lng: 73.741108, name: 'Chapora Beach' },
  { lat: 15.602239, lng: 73.733635, name: 'Vagator Beach' },
  { lat: 15.593117, lng: 73.744530, name: 'Ozran Beach' },
  { lat: 15.585024, lng: 73.737222, name: 'Anjuna Beach' },
  { lat: 15.558708, lng: 73.749952, name: 'Baga Beach' },
  { lat: 15.548823, lng: 73.753622, name: 'Calangute Beach' },
  { lat: 15.519009, lng: 73.762386, name: 'Candolim Beach' },
  { lat: 15.500511, lng: 73.767459, name: 'Sinquerim Beach' }
];

export const RIVERS: River[] = [
  { lat: 15.506491, lng: 73.777642, name: 'Nerul River' },
  { lat: 15.632868, lng: 73.754775, name: 'Chapora River' },
  { lat: 15.504568, lng: 73.847746, name: 'Mandovi River' },
  { lat: 15.408124, lng: 73.920885, name: 'Zuari River' }
];
