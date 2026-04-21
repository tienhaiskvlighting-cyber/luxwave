// Mock Data for Development
// Use this when Directus is not available

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
    sku: "LED-IN-P2.5",
    name: "Màn hình LED P2.5 Indoor",
    slug: "man-hinh-led-p2-5-indoor",
    description: "Màn hình LED trong nhà P2.5 với độ phân giải cao, phù hợp cho hội trường, sự kiện, quảng cáo trong nhà. Sử dụng công nghệ SMD cho hình ảnh sắc nét, màu sắc trung thực.",
    short_description: "Màn hình LED P2.5 Indoor - Độ phân giải cao, phù hợp hội trường, sự kiện",
    brand: "Luxwave",
    price: 15000000,
    unit: "m²",
    tech_specs: {
      pixel_pitch: "2.5mm",
      module_size: "320x160mm",
      resolution: "128x64 pixels",
      brightness: "1000 nits",
      refresh_rate: "3840Hz",
      viewing_angle: "160°/160°",
      ip_rating: "IP31",
      power_consumption: "500W/m²",
      lifespan: "100.000 giờ",
      weight: "6.5kg/m²"
    },
    environment: "indoor",
    application: ["rental", "fixed"],
    technology: "SMD",
    images: ["/images/products/led-p2-5.jpg"],
    meta_title: "Màn hình LED P2.5 Indoor | Luxwave",
    meta_description: "Màn hình LED trong nhà P2.5 chất lượng cao, bảo hành 2 năm. Liên hệ ngay: 0862.30.1919",
    status: "published",
    sort: 1
  },
  {
    id: "2",
    sku: "LED-IN-P3",
    name: "Màn hình LED P3 Indoor",
    slug: "man-hinh-led-p3-indoor",
    description: "Màn hình LED trong nhà P3 chi phí tối ưu, phù hợp cho các ứng dụng trong nhà với khoảng cách xem trung bình.",
    short_description: "Màn hình LED P3 Indoor - Giải pháp tiết kiệm cho doanh nghiệp",
    brand: "Luxwave",
    price: 12000000,
    unit: "m²",
    tech_specs: {
      pixel_pitch: "3mm",
      module_size: "192x192mm",
      resolution: "64x64 pixels",
      brightness: "800 nits",
      refresh_rate: "1920Hz",
      viewing_angle: "140°/140°",
      ip_rating: "IP31",
      power_consumption: "450W/m²",
      lifespan: "100.000 giờ",
      weight: "7kg/m²"
    },
    environment: "indoor",
    application: ["fixed"],
    technology: "SMD",
    images: ["/images/products/led-p3.jpg"],
    meta_title: "Màn hình LED P3 Indoor | Luxwave",
    meta_description: "Màn hình LED trong nhà P3 giá tốt, bảo hành 2 năm",
    status: "published",
    sort: 2
  },
  {
    id: "3",
    sku: "LED-OUT-P4",
    name: "Màn hình LED P4 Outdoor",
    slug: "man-hinh-led-p4-outdoor",
    description: "Màn hình LED ngoài trời P4 với độ sáng cao, chống nước IP65, phù hợp cho quảng cáo ngoài trời, sân vận động.",
    short_description: "Màn hình LED P4 Outdoor - Chống nước IP65, độ sáng cao",
    brand: "Luxwave",
    price: 18000000,
    unit: "m²",
    tech_specs: {
      pixel_pitch: "4mm",
      module_size: "256x128mm",
      resolution: "64x32 pixels",
      brightness: "5000 nits",
      refresh_rate: "3840Hz",
      viewing_angle: "140°/140°",
      ip_rating: "IP65",
      power_consumption: "700W/m²",
      lifespan: "100.000 giờ",
      weight: "12kg/m²"
    },
    environment: "outdoor",
    application: ["advertising", "sports"],
    technology: "DIP",
    images: ["/images/products/led-p4-outdoor.jpg"],
    meta_title: "Màn hình LED P4 Outdoor | Luxwave",
    meta_description: "Màn hình LED ngoài trời P4, IP65, độ sáng 5000 nits",
    status: "published",
    sort: 3
  },
  {
    id: "4",
    sku: "GOBO-500",
    name: "Đèn chiếu logo GOBO LUX-500",
    slug: "den-chieu-logo-gobo-500",
    description: "Đèn chiếu logo GOBO công suất 500W, chiếu hình ảnh thương hiệu lên tường, sàn. Phù hợp cho shop, khách sạn, resort.",
    short_description: "Đèn chiếu logo GOBO 500W - Làm nổi bật thương hiệu",
    brand: "Luxwave",
    price: 8500000,
    unit: "cái",
    tech_specs: {
      power: "500W",
      voltage: "220V",
      light_source: "LED",
      projection_size: "1-10m",
      material: "Aluminum",
      ip_rating: "IP65",
      lifespan: "50.000 giờ",
      weight: "3.5kg"
    },
    environment: "outdoor",
    application: ["advertising"],
    technology: "LED",
    images: ["/images/products/gobo-500.jpg"],
    meta_title: "Đèn chiếu logo GOBO LUX-500 | Luxwave",
    meta_description: "Đèn chiếu logo GOBO 500W, bảo hành 2 năm",
    status: "published",
    sort: 4
  },
  {
    id: "5",
    sku: "LED-VAY-RGB",
    name: "LED Vẫy RGB",
    slug: "led-vay-rgb",
    description: "Biển LED Vẫy RGB nhiều màu, điều khiển bằng máy tính, phù hợp cho quảng cáo shop, cửa hàng.",
    short_description: "Biển LED Vẫy RGB - Quảng cáo nổi bật, tiết kiệm điện",
    brand: "Luxwave",
    price: 2500000,
    unit: "m²",
    tech_specs: {
      pixel: "P10",
      color: "RGB",
      control: "Async/SD Card",
      voltage: "5V",
      power_consumption: "300W/m²",
      lifespan: "100.000 giờ"
    },
    environment: "outdoor",
    application: ["advertising"],
    technology: "DIP",
    images: ["/images/products/led-vay.jpg"],
    meta_title: "LED Vẫy RGB | Luxwave",
    meta_description: "Biển LED Vẫy RGB, điều khiển máy tính",
    status: "published",
    sort: 5
  }
];

export const mockCategories = [
  { id: "1", name: "Màn hình LED", slug: "man-hinh-led", parent: null, sort: 1 },
  { id: "2", name: "LED trong nhà", slug: "led-trong-nha", parent: "1", sort: 1 },
  { id: "3", name: "LED ngoài trời", slug: "led-ngoai-troi", parent: "1", sort: 2 },
  { id: "4", name: "Đèn chiếu logo", slug: "den-chieu-logo", parent: null, sort: 2 },
  { id: "5", name: "LED Decor", slug: "led-decor", parent: null, sort: 3 },
  { id: "6", name: "Phụ kiện", slug: "phu-kien", parent: null, sort: 4 }
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
