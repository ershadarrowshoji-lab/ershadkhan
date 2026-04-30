export interface Product {
  id: string;
  name: string;
  category: 'Towels' | 'Bedsheets' | 'Aprons';
  subCategory: string;
  description: string;
  materials: string;
  sizes: string[];
  moq: string;
  image: string;
  images?: string[];
  specifications?: { label: string; value: string }[];
}

export const PRODUCTS: Product[] = [
  // --- Towels ---
  {
    id: 'premium-cotton-towel',
    name: 'Premium Cotton Bath Towel',
    category: 'Towels',
    subCategory: 'Bath Towels',
    description: 'Our signature Premium Cotton Bath Towel is engineered for ultimate luxury. Crafted from 100% cotton, Ring spun /combed yard/Open end. It offers unparalleled softness and durability. Designed specifically for Five-Star hospitality standards, it maintains its plush texture even after repeated industrial laundering.',
    materials: '100% Long-Staple Giza Cotton',
    sizes: ['70x140cm', '50x100cm', '90x180cm'],
    moq: '2000 Pcs',
    image: 'https://images.unsplash.com/photo-1595111162234-933e461a2936?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595111162234-933e461a2936?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616644098427-0cf11b7d598b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622781564-1d9876a13d1e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628177142410-53866264f331?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: [
      { label: 'Weight (GSM)', value: '650' },
      { label: 'Weave', value: 'Double Loop Pile' },
      { label: 'Color Fastness', value: 'Grade 4 (AATCC)' },
      { label: 'Border', value: 'Elegant Dobby Border' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' }
    ]
  },
  {
    id: 'hand-towel-soft',
    name: 'Luxury Hand Towel Set',
    category: 'Towels',
    subCategory: 'Hand Towels',
    description: 'Perfect for bathrooms and gyms, these hand towels are durable and soft.',
    materials: 'Cotton Blend',
    sizes: ['30x50cm', '40x60cm'],
    moq: '1000 Pcs',
    image: 'https://images.unsplash.com/photo-1628177142410-53866264f331?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'face-towel-mini',
    name: 'Soft Face Towel Mini',
    category: 'Towels',
    subCategory: 'Face Towels',
    description: 'Gentle on skin, perfect for daily facial care routines.',
    materials: '100% Cotton',
    sizes: ['25x25cm', '30x30cm'],
    moq: '2000 Pcs',
    image: 'https://images.unsplash.com/photo-1616644098427-0cf11b7d598b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kitchen-towel-checker',
    name: 'Checked Kitchen Towel',
    category: 'Towels',
    subCategory: 'Kitchen Towels',
    description: 'Highly absorbent and durable towels for professional kitchen use.',
    materials: 'Cotton Canvas',
    sizes: ['40x60cm'],
    moq: '1000 Pcs',
    image: 'https://images.unsplash.com/photo-1605374465243-7f91891d9047?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cotton-diaper-washable',
    name: 'Soft Cotton Diaper',
    category: 'Towels',
    subCategory: 'Diaper',
    description: 'Reusable and skin-friendly cotton diapers for infants.',
    materials: 'Pure Cotton Gauze',
    sizes: ['Standard'],
    moq: '500 Pcs',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'industrial-duster',
    name: 'Multi-purpose Duster Cloth',
    category: 'Towels',
    subCategory: 'Duster',
    description: 'Effective cleaning and dusting cloths for industrial and home use.',
    materials: 'Microfiber / Cotton',
    sizes: ['30x30cm', '40x40cm'],
    moq: '5000 Pcs',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d1e?auto=format&fit=crop&w=800&q=80'
  },

  // --- Bedsheets ---
  {
    id: 'hotel-lux-sheet',
    name: 'Premium Hotel Bedsheet',
    category: 'Bedsheets',
    subCategory: 'Hotel Bedsheets',
    description: 'Experience the crisp, cool feel of high-end hotel bedding. Our Premium Hotel Bedsheets feature a classic 1cm satin stripe (Dobby White). These sheets are designed to withstand high-temperature washing and heavy-duty ironing without losing their luster.',
    materials: '80/20 Cotton-Polyester Blend',
    sizes: ['King (108"x112")', 'Queen (90"x108")', 'Single (60"x90")'],
    moq: '100 Sets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: [
      { label: 'Thread Count', value: '300 TC' },
      { label: 'Pattern', value: '1cm Satin Stripe' },
      { label: 'Wash Resistance', value: 'Chlorine Bleach Resistant' },
      { label: 'Construction', value: 'Piping & Twin Stitching' }
    ]
  },
  {
    id: 'home-soft-bedsheet',
    name: 'Comfort Home Bed Set',
    category: 'Bedsheets',
    subCategory: 'Home Bedsheets',
    description: 'Cozy and stylish bedsheets for everyday home comfort.',
    materials: 'Cotton Sateen',
    sizes: ['Double', 'Single'],
    moq: '200 Sets',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hospital-sterile-sheet',
    name: 'Medical Grade Hospital Sheet',
    category: 'Bedsheets',
    subCategory: 'Hospital Sheets',
    description: 'Sterile and durable sheets designed for healthcare environments.',
    materials: 'TC 180 Cotton Poly',
    sizes: ['Hospital Standard'],
    moq: '500 Sets',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },

  // --- Aprons ---
  {
    id: 'medical-apron-pro',
    name: 'Professional Hospital Apron',
    category: 'Aprons',
    subCategory: 'Hospital Apron',
    description: 'Protective medical aprons for doctors and healthcare staff.',
    materials: 'Water-repellent Fabric',
    sizes: ['Standard Adjustable'],
    moq: '200 Pcs',
    image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pro-chef-apron',
    name: 'Kitchen Master Apron',
    category: 'Aprons',
    subCategory: 'Kitchen Apron',
    description: 'Built for the heat of the kitchen. Our Master Apron uses heavy-duty canvas with reinforced cross-back straps to prevent neck strain during long shifts. Includes multiple utility pockets and a dedicated towel loop.',
    materials: 'Heavy Duck Canvas (12 oz)',
    sizes: ['Universal Fit (75cm x 85cm)'],
    moq: '100 Pcs',
    image: 'https://images.unsplash.com/photo-1620800318991-628d052a652f?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620800318991-628d052a652f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590735204423-d444444fd3ef?auto=format&fit=crop&w=800&q=80'
    ],
    specifications: [
      { label: 'Fabric Type', value: '100% Cotton Canvas' },
      { label: 'Straps', value: 'Removable Cross-Back' },
      { label: 'Pocket count', value: '3 Utility + 1 Loop' },
      { label: 'Reinforcement', value: 'Stress point bar-tacking' }
    ]
  },
  {
    id: 'working-heavy-apron',
    name: 'Heavy-Duty Working Apron',
    category: 'Aprons',
    subCategory: 'Working Apron',
    description: 'Rugged aprons for workshops, gardening, and heavy labor.',
    materials: 'Reinforced Denim / Leather',
    sizes: ['Large'],
    moq: '50 Pcs',
    image: 'https://images.unsplash.com/photo-1590735204423-d444444fd3ef?auto=format&fit=crop&w=800&q=80'
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'textile-trends-2026',
    title: 'Textile Industry Trends to Watch in 2026',
    excerpt: 'Explore the latest shifts in sustainable manufacturing and smart fabrics.',
    content: 'The textile industry is undergoing a massive transformation...',
    date: 'April 20, 2026',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'export-guide-asia',
    title: 'Mastering Textile Export to the Middle East',
    excerpt: 'Key considerations for quality standards and logistics in the MENA region.',
    content: 'Exporting to the Middle East requires attention to specific quality markups...',
    date: 'April 15, 2026',
    author: 'Export Manager',
    image: 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?auto=format&fit=crop&w=800&q=80'
  }
];
