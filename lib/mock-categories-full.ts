// Full Category Structure - Detailed by Pixel Pitch
// Updated 2026-04-21

export const fullCategories = [
  {
    id: "1",
    name: "Màn hình LED",
    slug: "man-hinh-led",
    icon: "📺",
    subcategories: [
      // === LED TRONG NHÀ ===
      { id: "tn-1", name: "Màn hình LED trong nhà COB P0.9", slug: "man-hinh-led-trong-nha-cob-p0.9", parent: "1" },
      { id: "tn-2", name: "Màn hình LED trong nhà COB P1.25", slug: "man-hinh-led-trong-nha-cob-p1.25", parent: "1" },
      { id: "tn-3", name: "Màn hình LED trong nhà P1.25", slug: "man-hinh-led-trong-nha-p1.25", parent: "1" },
      { id: "tn-4", name: "Màn hình LED trong nhà P1.538", slug: "man-hinh-led-trong-nha-p1.538", parent: "1" },
      { id: "tn-4b", name: "Màn hình LED trong nhà COB P1.56", slug: "man-hinh-led-trong-nha-cob-p1.56", parent: "1" },
      { id: "tn-4c", name: "Màn hình LED trong nhà P1.56", slug: "man-hinh-led-trong-nha-p1.56", parent: "1" },
      { id: "tn-5", name: "Màn hình LED trong nhà P1.86", slug: "man-hinh-led-trong-nha-p1.86", parent: "1" },
      { id: "tn-6", name: "Màn hình LED trong nhà P2", slug: "man-hinh-led-trong-nha-p2", parent: "1" },
      { id: "tn-7", name: "Màn hình LED trong nhà P2.5", slug: "man-hinh-led-trong-nha-p2.5", parent: "1" },
      { id: "tn-8", name: "Màn hình LED trong nhà P3.076", slug: "man-hinh-led-trong-nha-p3.076", parent: "1" },
      { id: "tn-9", name: "Màn hình LED trong nhà P4", slug: "man-hinh-led-trong-nha-p4", parent: "1" },

      // === LED NGOÀI TRỜI ===
      { id: "nt-1", name: "Màn hình LED ngoài trời P2.0", slug: "man-hinh-led-ngoai-troi-p2.0", parent: "1" },
      { id: "nt-2", name: "Màn hình LED ngoài trời P2.5", slug: "man-hinh-led-ngoai-troi-p2.5", parent: "1" },
      { id: "nt-3", name: "Màn hình LED ngoài trời P2.976", slug: "man-hinh-led-ngoai-troi-p2.976", parent: "1" },
      { id: "nt-4", name: "Màn hình LED ngoài trời P3.076", slug: "man-hinh-led-ngoai-troi-p3.076", parent: "1" },
      { id: "nt-5", name: "Màn hình LED ngoài trời P4", slug: "man-hinh-led-ngoai-troi-p4", parent: "1" },
      { id: "nt-6", name: "Màn hình LED ngoài trời P6.66", slug: "man-hinh-led-ngoai-troi-p6.66", parent: "1" },
      { id: "nt-7", name: "Màn hình LED ngoài trời P8", slug: "man-hinh-led-ngoai-troi-p8", parent: "1" },
      { id: "nt-8", name: "Màn hình LED ngoài trời P10", slug: "man-hinh-led-ngoai-troi-p10", parent: "1" },

      // === LED TRONG SUỐT ===
      { id: "ts-1", name: "LED trong suốt trong nhà", slug: "led-trong-suot-trong-nha", parent: "1" },
      { id: "ts-2", name: "LED trong suốt ngoài trời", slug: "led-trong-suot-ngoai-troi", parent: "1" },
      { id: "ts-3", name: "LED trong suốt tường kính", slug: "led-trong-suot-tuong-kinh", parent: "1" },
      { id: "ts-4", name: "LED trong suốt không viền", slug: "led-trong-suot-khong-vien", parent: "1" },
      { id: "ts-5", name: "LED trong suốt cửa tự động", slug: "led-trong-suot-cua-tu-dong", parent: "1" },
      { id: "ts-6", name: "LED film (dán kính)", slug: "led-film", parent: "1" },

      // === LED POSTER ===
      { id: "po-1", name: "LED Poster trong suốt", slug: "led-poster-trong-suot", parent: "1" },
      { id: "po-2", name: "LED Poster gập", slug: "led-poster-gap", parent: "1" },

      // === LED KÍNH ===
      { id: "ki-1", name: "LED kính LBH", slug: "led-kinh-lbh", parent: "1" },
      { id: "ki-2", name: "LED kính LCC", slug: "led-kinh-lcc", parent: "1" },
      { id: "ki-3", name: "LED kính NE", slug: "led-kinh-ne", parent: "1" },
      { id: "ki-4", name: "LED kính lan can", slug: "led-kinh-lan-can", parent: "1" },

      // === LED ĐẶC BIỆT ===
      { id: "db-1", name: "LED cong", slug: "led-cong", parent: "1" },
      { id: "db-2", name: "LED 3D", slug: "led-3d", parent: "1" },
      { id: "db-3", name: "LED Sky Fly", slug: "led-sky-fly", parent: "1" },
      { id: "db-4", name: "LED All-in-One", slug: "led-all-in-one", parent: "1" },
      { id: "db-5", name: "LED bảng hiệu", slug: "led-bang-hieu", parent: "1" },
      { id: "db-6", name: "LED bảng hiệu mini", slug: "led-bang-hieu-mini", parent: "1" },
      { id: "db-7", name: "LED bảng hiệu hai mặt", slug: "led-bang-hieu-hai-mat", parent: "1" },
      { id: "db-8", name: "LED tủ trưng bày", slug: "led-tu-trung-bay", parent: "1" },

      // === PHỤ KIỆN ===
      { id: "pk-1", name: "Module LED", slug: "module-led", parent: "1" },
      { id: "pk-2", name: "Cabin LED", slug: "cabin-led", parent: "1" },
      { id: "pk-3", name: "Card điều khiển LED", slug: "card-led", parent: "1" },
      { id: "pk-4", name: "Bộ xử lý hình ảnh", slug: "bo-xu-ly-hinh-anh", parent: "1" },
      { id: "pk-5", name: "Nguồn LED", slug: "nguon-led", parent: "1" },
      { id: "pk-6", name: "Cáp tín hiệu LED", slug: "cap-tin-hieu-led", parent: "1" },
    ]
  },
  {
    id: "2",
    name: "Đèn chiếu logo",
    slug: "den-chieu-logo",
    icon: "💡",
    subcategories: [
      { id: "2a", name: "Đèn GOBO", slug: "den-gobo", parent: "2" },
      { id: "2b", name: "Logo Projector", slug: "logo-projector", parent: "2" },
      { id: "2c", name: "Effect Projector", slug: "effect-projector", parent: "2" },
    ]
  },
  {
    id: "3",
    name: "LED Decor",
    slug: "led-decor",
    icon: "✨",
    subcategories: [
      { id: "3a", name: "LED Vẫy", slug: "led-vay", parent: "3" },
      { id: "3b", name: "Neon Flex", slug: "neon-flex", parent: "3" },
      { id: "3c", name: "LED cảnh quan", slug: "led-canh-quan", parent: "3" },
      { id: "3d", name: "Phim dán kính thông minh", slug: "phim-dan-kinh-thong-minh", parent: "3" },
    ]
  },
  // Solutions and other categories remain the same
];
