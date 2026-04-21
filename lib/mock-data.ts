// Mock Data for Development
// Use this when Directus is not available
// Source: SKV.Lighting products (used with permission for development)

export interface Product {
  id: string;
  name: string;
  slug: string;
  category?: string;
  price_range?: string;
  image?: string;
  description: string;
  tech_specs: Record<string, any>;
  features?: string[];
  technology?: string;
  environment?: string;
  [key: string]: any;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client?: string;
  location?: string;
  completion_date?: string;
  description: string;
  [key: string]: any;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    sku: "BOE-BTQ025",
    name: "Module LED BOE BTQ025",
    slug: "module-led-boe-btq025",
    description: "Module LED BOE BTQ025 là module LED trong nhà với bước điểm ảnh 2.5mm, công nghệ SMD2121. Độ phân giải 128×64 pixels, kích thước module 320×160mm. Hỗ trợ bảo trì phía trước, tuổi thọ ≥100.000 giờ.",
    short_description: "Module LED BOE 2.5mm, SMD2121, 160.000 điểm/m²",
    brand: "BOE MLED",
    price: 4500000,
    unit: "module",
    tech_specs: {
      pixel_pitch: "2.5mm",
      led_type: "SMD2121",
      module_resolution: "128 × 64",
      module_size: "320 × 160mm",
      pixel_density: "160.000 điểm/m²",
      brightness: "≥ 800 nits",
      refresh_rate: "≥ 3840Hz",
      viewing_angle: "≥ 160°/160°",
      contrast_ratio: "≥ 8000:1",
      power_avg: "130W/m²",
      power_max: "420W/m²",
      lifespan: "≥ 100.000 giờ",
      ico: "14 ~ 16 bit",
      ico_temperature: "-30 ~ 60 °C"
    },
    environment: "indoor",
    application: ["rental", "fixed", "ho troi", "hoi truong"],
    technology: "SMD",
    images: ["/images/products/module-boe-btq025.jpg"],
    meta_title: "Module LED BOE BTQ025 | Luxwave",
    meta_description: "Module LED BOE BTQ025 2.5mm, SMD2121, độ sáng ≥800 nits. Liên hệ: 0862.30.1919",
    status: "published",
    sort: 1
  },
  {
    id: "2",
    sku: "BOE-BTQ020",
    name: "Module LED BOE BTQ020",
    slug: "module-led-boe-btq020",
    description: "Module LED BOE BTQ020 là module LED trong nhà với bước điểm ảnh 2.0mm, công nghệ SMD. Độ phân giải cao, phù hợp cho các ứng dụng cần độ chi tiết cao.",
    short_description: "Module LED BOE 2.0mm, độ phân giải cao",
    brand: "BOE MLED",
    price: 5200000,
    unit: "module",
    tech_specs: {
      pixel_pitch: "2.0mm",
      led_type: "SMD",
      module_resolution: "160 × 80",
      module_size: "320 × 160mm",
      brightness: "≥ 800 nits",
      refresh_rate: "≥ 3840Hz",
      viewing_angle: "≥ 160°/160°",
      lifespan: "≥ 100.000 giờ"
    },
    environment: "indoor",
    application: ["rental", "fixed", "phong hop"],
    technology: "SMD",
    images: ["/images/products/module-boe-btq020.jpg"],
    meta_title: "Module LED BOE BTQ020 | Luxwave",
    meta_description: "Module LED BOE BTQ020 2.0mm, độ phân giải cao",
    status: "published",
    sort: 2
  },
  {
    id: "3",
    sku: "BOE-BTX-FL018",
    name: "Module LED BOE BTX FL018",
    slug: "module-led-boe-btx-fl018",
    description: "Module LED BOE BTX FL018 với bước điểm ảnh 1.86mm, công nghệ COB. Độ tương phản cao, hình ảnh sắc nét, phù hợp cho phòng họp, phòng hội nghị cao cấp.",
    short_description: "Module LED BOE BTX 1.86mm, COB technology",
    brand: "BOE MLED",
    price: 6800000,
    unit: "module",
    tech_specs: {
      pixel_pitch: "1.86mm",
      led_type: "COB",
      module_resolution: "172 × 86",
      module_size: "320 × 160mm",
      brightness: "≥ 800 nits",
      refresh_rate: "≥ 3840Hz",
      contrast_ratio: "≥ 20000:1",
      lifespan: "≥ 100.000 giờ"
    },
    environment: "indoor",
    application: ["phong hop", "hội nghị", "studio"],
    technology: "COB",
    images: ["/images/products/module-boe-btx-fl018.jpg"],
    meta_title: "Module LED BOE BTX FL018 COB | Luxwave",
    meta_description: "Module LED BOE BTX FL018 COB 1.86mm, độ tương phản cao",
    status: "published",
    sort: 3
  },
  {
    id: "4",
    sku: "BOE-BTX-FL020",
    name: "Module LED BOE BTX FL020",
    slug: "module-led-boe-btx-fl020",
    description: "Module LED BOE BTX FL020 với bước điểm ảnh 2.0mm COB, công nghệ tiên tiến. Thiết kế mỏng nhẹ, dễ lắp đặt, bảo trì phía trước.",
    short_description: "Module LED BOE BTX 2.0mm COB",
    brand: "BOE MLED",
    price: 5800000,
    unit: "module",
    tech_specs: {
      pixel_pitch: "2.0mm",
      led_type: "COB",
      module_resolution: "160 × 80",
      module_size: "320 × 160mm",
      brightness: "≥ 800 nits",
      refresh_rate: "≥ 3840Hz",
      lifespan: "≥ 100.000 giờ"
    },
    environment: "indoor",
    application: ["phong hop", "showroom"],
    technology: "COB",
    images: ["/images/products/module-boe-btx-fl020.jpg"],
    meta_title: "Module LED BOE BTX FL020 | Luxwave",
    meta_description: "Module LED BOE BTX FL020 COB 2.0mm",
    status: "published",
    sort: 4
  },
  {
    id: "5",
    sku: "BOE-BYH-B012",
    name: "Cabin LED COB BOE MLED BYH Ultra P0.9",
    slug: "cabin-led-cob-boe-mled-byh-ultra-p0-9",
    description: "Cabin LED COB BOE MLED BYH Ultra P0.9 với bước điểm ảnh 0.9mm, độ phân giải siêu cao. Cabinet 600×337.5mm, độ phẳng tuyệt đối, phù hợp for phòng họp cao cấp, trung tâm điều hành.",
    short_description: "Cabin LED COB BOE P0.9 Ultra, độ phân giải 4K",
    brand: "BOE MLED",
    price: 85000000,
    unit: "cabinet",
    tech_specs: {
      pixel_pitch: "0.9mm",
      led_type: "COB",
      cabinet_resolution: "640 × 360",
      cabinet_size: "600 × 337.5 × 60mm",
      brightness: "≥ 600 nits",
      refresh_rate: "≥ 3840Hz",
      contrast_ratio: "≥ 20000:1",
      weight: "≤ 5.5kg/cabinet",
      lifespan: "≥ 100.000 giờ"
    },
    environment: "indoor",
    application: ["phòng họp", "trung tâm điều hành", "studio"],
    technology: "COB",
    images: ["/images/products/cabin-cob-boe.jpg"],
    meta_title: "Cabin LED COB BOE MLED BYH Ultra P0.9 | Luxwave",
    meta_description: "Cabin LED COB BOE P0.9 Ultra, độ phân giải cao. Liên hệ: 0862.30.1919",
    status: "published",
    sort: 5
  },
  {
    id: "6",
    sku: "BOE-BYH-B009",
    name: "Cabin LED COB BOE MLED BYH B012",
    slug: "cabin-led-cob-boe-mled-byh-b012",
    description: "Cabin LED COB BOE MLED BYH B012 với bước điểm ảnh 1.2mm, công nghệ COB tiên tiến. Cabinet nhôm đúc, độ phẳng ≤0.1mm, bảo trì phía trước.",
    short_description: "Cabin LED COB BOE P1.2, nhôm đúc cao cấp",
    brand: "BOE MLED",
    price: 65000000,
    unit: "cabinet",
    tech_specs: {
      pixel_pitch: "1.2mm",
      led_type: "COB",
      cabinet_resolution: "512 × 288",
      cabinet_size: "640 × 360 × 60mm",
      brightness: "≥ 600 nits",
      refresh_rate: "≥ 3840Hz",
      contrast_ratio: "≥ 20000:1",
      weight: "≤ 7kg/cabinet",
      lifespan: "≥ 100.000 giờ"
    },
    environment: "indoor",
    application: ["hội trường", "phòng họp", "trung tâm điều hành"],
    technology: "COB",
    images: ["/images/products/cabin-cob-boe-b009.jpg"],
    meta_title: "Cabin LED COB BOE MLED BYH B012 | Luxwave",
    meta_description: "Cabin LED COB BOE B012 P1.2mm, độ phẳng cao",
    status: "published",
    sort: 6
  },
  {
    id: "7",
    sku: "BOE-BTX-SERIES",
    name: "Module LED BOE BTX Series",
    slug: "module-led-boe-btx-series",
    description: "Module LED BOE BTX Series - dòng module COB đa dạng pixel pitch từ 1.5mm đến 3mm. Công nghệ COB với độ tương phản cao, hình ảnh sắc nét.",
    short_description: "Module LED BOE BTX Series - COB 1.5mm, 1.8mm, 2.5mm, 3mm",
    brand: "BOE MLED",
    price: 4200000,
    unit: "module",
    tech_specs: {
      pixel_pitch: "1.5/1.8/2.5/3.0mm",
      led_type: "COB",
      module_size: "320 × 160mm",
      brightness: "≥ 800 nits",
      refresh_rate: "≥ 3840Hz",
      lifespan: "≥ 100.000 giờ"
    },
    environment: "indoor",
    application: ["đa dụng"],
    technology: "COB",
    images: ["/images/products/module-boe-btx-series.jpg"],
    meta_title: "Module LED BOE BTX Series | Luxwave",
    meta_description: "Module LED BOE BTX Series - COB đa pixel pitch",
    status: "published",
    sort: 7
  }
];

export const mockCategories = [
  { id: "1", name: "Màn hình LED", slug: "man-hinh-led", parent: null, sort: 1 },
  { id: "2", name: "Module LED", slug: "module-led", parent: "1", sort: 1 },
  { id: "3", name: "Cabin LED", slug: "cabin-led", parent: "1", sort: 2 },
  { id: "4", name: "LED trong nhà", slug: "led-trong-nha", parent: "1", sort: 3 },
  { id: "5", name: "LED ngoài trời", slug: "led-ngoai-troi", parent: "1", sort: 4 },
  { id: "6", name: "Đèn chiếu logo", slug: "den-chieu-logo", parent: null, sort: 2 },
  { id: "7", name: "Đèn sân khấu", slug: "den-san-khau", parent: null, sort: 3 },
  { id: "8", name: "Phụ kiện", slug: "phu-kien", parent: null, sort: 4 }
];

export const mockProjects = [
  {
    id: "1",
    title: "Màn hình LED Hội trường Công ty ABC",
    slug: "man-hinh-led-hoi-truong-abc",
    client: "Công ty ABC",
    location: "Hà Nội",
    completion_date: "2025-12-15",
    scale: "20m²",
    challenge: "Khách hàng cần một màn hình LED chất lượng cao cho hội trường với yêu cầu hiển thị hình ảnh sắc nét, video mượt mà trong các buổi họp và sự kiện nội bộ.",
    solution: "Chúng tôi đã tư vấn và lắp đặt màn hình LED P2.5 Indoor với kích thước 20m², sử dụng công nghệ SMD cho hình ảnh chất lượng cao. Hệ thống đi kèm bộ xử lý hình ảnh Novastar để đảm bảo tính ổn định.",
    images: ["/images/projects/project-1.jpg"],
    products: [mockProducts[0]],
    status: "published"
  },
  {
    id: "2",
    title: "Đèn chiếu logo Gobo Resort Flamingo",
    slug: "den-chieu-logo-gobo-resort-flamingo",
    client: "Flamingo Resort",
    location: "Đà Nẵng",
    completion_date: "2025-11-20",
    scale: "5 đèn",
    challenge: "Resort cần trang trí khu vực cổng và sảnh đón với hiệu ứng chiếu logo thương hiệu ấn tượng vào ban đêm.",
    solution: "Lắp đặt 5 bộ đèn chiếu logo GOBO LUX-500 tại các vị trí cổng chính, sảnh, và khu vực pool bar. Logo được thiết kế theo yêu cầu của khách hàng.",
    images: ["/images/projects/project-2.jpg"],
    products: [mockProducts[3]],
    status: "published"
  }
];

// API Functions using mock data
export async function getProducts(filters?: string): Promise<any[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  let products = [...mockProducts];
  
  // Simple filter simulation
  if (filters?.includes('indoor')) {
    products = products.filter(p => p.environment === 'indoor');
  }
  if (filters?.includes('outdoor')) {
    products = products.filter(p => p.environment === 'outdoor');
  }
  
  return products;
}

export async function getProductBySlug(slug: string): Promise<any | null> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockProducts.find(p => p.slug === slug) || null;
}

export async function getCategories(): Promise<any[]> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockCategories;
}

export async function getProjects(): Promise<any[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockProjects;
}

export async function getProjectBySlug(slug: string): Promise<any | null> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockProjects.find(p => p.slug === slug) || null;
}
