// Mock Solutions Data - Updated with full categories from 4 competitors

export const mockSolutions = [
  // === THEO KHÔNG GIAN ===
  {
    id: "1",
    name: "Giải pháp màn hình LED cho Hội trường",
    slug: "led-hoi-truong",
    description: "Giải pháp toàn diện cho hội trường, auditorium với màn hình LED chất lượng cao, hỗ trợ trình chiếu, hội nghị trực tuyến.",
    target_audience: "Doanh nghiệp, trường học, nhà nước",
    features: ["Màn hình LED P2.5 - P3 cho hội trường", "Hệ thống âm thanh chuyên nghiệp", "Bộ xử lý hình ảnh đa nguồn vào", "Hỗ trợ hội nghị trực tuyến"],
    benefits: ["Hình ảnh sắc nét, màu sắc trung thực", "Góc nhìn rộng", "Dễ dàng kết nối"],
    products: ["1", "2"],
    image: "/images/solutions/hoi-truong.jpg",
    cta_text: "Tư vấn thiết kế hội trường",
    cta_link: "/lien-he?subject=hoi-truong"
  },
  {
    id: "2",
    name: "Giải pháp LED cho Khách sạn & Resort",
    slug: "giai-phap-khach-san",
    description: "Nâng tầm không gian khách sạn, resort với đèn chiếu logo GOBO, màn hình LED lobby, LED trang trí.",
    target_audience: "Khách sạn, resort, homestay",
    features: ["Đèn chiếu logo GOBO", "Màn hình LED lobby", "LED trang trí sân vườn", "Hệ thống điều khiển trung tâm"],
    benefits: ["Tạo ấn tượng mạnh với khách", "Không gian sang trọng", "Tiết kiệm điện"],
    products: ["3", "4"],
    image: "/images/solutions/khach-san.jpg",
    cta_text: "Yêu cầu báo giá khách sạn",
    cta_link: "/lien-he?subject=khach-san"
  },
  {
    id: "3",
    name: "Giải pháp LED quảng cáo ngoài trời",
    slug: "giai-phap-quang-cao",
    description: "Màn hình LED quảng cáo ngoài trời cho trung tâm thương mại, tòa nhà, đường phố.",
    target_audience: "Doanh nghiệp quảng cáo, TTTM, sự kiện",
    features: ["Màn hình LED Outdoor P4 - P10", "Biển LED Vẫy", "Màn hình LED trong suốt", "Điều khiển từ xa"],
    benefits: ["Độ sáng cao, nhìn rõ nắng", "Chống nước IP65", "Thu hút người đi đường"],
    products: ["3", "5"],
    image: "/images/solutions/quang-cao.jpg",
    cta_text: "Tư vấn quảng cáo LED",
    cta_link: "/lien-he?subject=quang-cao"
  },
  {
    id: "4",
    name: "Giải pháp LED cho Nhà xưởng",
    slug: "giai-phap-nha-xuong",
    description: "Chiếu sáng công nghiệp cho nhà xưởng, kho lạnh, phòng sạch với đèn LED highbay.",
    target_audience: "Nhà máy, kho bãi, xí nghiệp",
    features: ["Đèn LED Highbay", "Hệ thống chiếu sáng thông minh", "Tiết kiệm điện 60%"],
    benefits: ["Ánh sáng đồng đều", "Tiết kiệm điện 60-70%", "Tuổi thọ 50.000 giờ"],
    products: [],
    image: "/images/solutions/nha-xuong.jpg",
    cta_text: "Khảo sát nhà xưởng",
    cta_link: "/lien-he?subject=nha-xuong"
  },
  // === MỚI từ AdLed ===
  {
    id: "5",
    name: "Giải pháp màn hình LED cho Trường học",
    slug: "giai-phap-truong-hoc",
    description: "Màn hình LED cho phòng học, hội trường trường học, trung tâm đào tạo.",
    target_audience: "Trường học, trung tâm đào tạo, đại học",
    features: ["Màn hình LED phòng học", "LED bảng điện tử thông báo", "Hệ thống trình chiếu", "Tích hợp giáo dục trực tuyến"],
    benefits: ["Tăng tương tác học tập", "Hiển thị nội dung đa phương tiện", "Bền bỉ, dễ sử dụng"],
    products: ["1", "2"],
    image: "/images/solutions/truong-hoc.jpg",
    cta_text: "Tư vấn LED trường học",
    cta_link: "/lien-he?subject=truong-hoc"
  },
  // === MỚI từ SuntechLED ===
  {
    id: "6",
    name: "Giải pháp sân khấu tiệc cưới",
    slug: "giai-phap-san-khau",
    description: "Màn hình LED sân khấu cho tiệc cưới, sự kiện, biểu diễn nghệ thuật.",
    target_audience: "Nhà hàng tiệc cưới, trung tâm sự kiện, rạp hát",
    features: ["Màn hình LED sân khấu P2.5-P4", "LED Rental dễ lắp dựng", "Hệ thống điều khiển chuyên nghiệp", "LED backdrop"],
    benefits: ["Tạo không gian lộng lẫy", "Dễ lắp dựng/tháo gỡ", "Cho thuê linh hoạt"],
    products: ["1", "3"],
    image: "/images/solutions/san-khau.jpg",
    cta_text: "Tư vấn LED sân khấu",
    cta_link: "/lien-he?subject=san-khau"
  },
  {
    id: "7",
    name: "Giải pháp LED cho Sân vận động",
    slug: "giai-phap-san-van-dong",
    description: "Màn hình LED lớn cho sân vận động, sân bóng, trung tâm thể thao.",
    target_audience: "Sân vận động, câu lạc bộ thể thao, trung tâm thể thao",
    features: ["LED sân vận động độ sáng cao", "Màn hình tỷ số", "LED vòng quanh sân", "Hệ thống điều khiển thời gian thực"],
    benefits: ["Hiển thị rõ nắng gắt", "Cập nhật tỷ số trực tiếp", "Chống nước IP65+"],
    products: ["3"],
    image: "/images/solutions/san-van-dong.jpg",
    cta_text: "Tư vấn LED sân vận động",
    cta_link: "/lien-he?subject=san-van-dong"
  },
  // === MỚI từ SKV ===
  {
    id: "8",
    name: "Giải pháp LED cho Quán bar/Karaoke",
    slug: "giai-phap-bar-karaoke",
    description: "Màn hình LED, đèn sân khấu cho quán bar, club, karaoke, KTV.",
    target_audience: "Quán bar, club, karaoke, KTV, pub",
    features: ["Màn hình LED karaoke", "Đèn Moving Head", "Đèn Par LED", "Máy tạo khói", "LED tương tác"],
    benefits: ["Tạo không gian giải trí đỉnh", "Hiệu ứng ánh sáng chuyên nghiệp", "Dễ điều khiển"],
    products: [],
    image: "/images/solutions/bar-karaoke.jpg",
    cta_text: "Tư vấn LED bar/karaoke",
    cta_link: "/lien-he?subject=bar-karaoke"
  },
  // === MỚI từ SuntechLED ===
  {
    id: "9",
    name: "Giải pháp cho Đài truyền hình",
    slug: "giai-phap-dai-truyen-hinh",
    description: "Màn hình LED cho studio truyền hình, phòng thu, đài phát thanh.",
    target_audience: "Đài truyền hình, studio, nhà sản xuất nội dung",
    features: ["LED studio độ phân giải cao", "Màn hình nền studio", "Hệ thống chroma key", "Điều khiển màu sắc chính xác"],
    benefits: ["Hiển thị hoàn hảo trên TV", "Đồng bộ màu sắc", "Chạy 24/7 ổn định"],
    products: ["1"],
    image: "/images/solutions/dai-truyen-hinh.jpg",
    cta_text: "Tư vấn LED studio",
    cta_link: "/lien-he?subject=dai-truyen-hinh"
  },
  // === DỊCH VỤ ===
  {
    id: "10",
    name: "Dịch vụ cho thuê màn hình LED",
    slug: "giai-phap-cho-thue",
    description: "Cho thuê màn hình LED sự kiện, hội nghị, triển lãm với giá hợp lý.",
    target_audience: "Tổ chức sự kiện, doanh nghiệp, cá nhân",
    features: ["Cho thuê LED P2.5-P4", "Lắp dựng tận nơi", "Kỹ thuật viên hỗ trợ", "Báo giá theo ngày/tuần"],
    benefits: ["Tiết kiệm chi phí", "Không cần đầu tư thiết bị", "Hỗ trợ kỹ thuật 24/7"],
    products: ["1", "3"],
    image: "/images/solutions/cho-thue.jpg",
    cta_text: "Yêu cầu báo giá thuê",
    cta_link: "/lien-he?subject=cho-thue"
  },
  // === THEO KHÔNG GIAN (tiếp) ===
  {
    id: "11",
    name: "Giải pháp LED cho Phòng họp",
    slug: "led-phong-hop",
    description: "Màn hình LED cho phòng họp, phòng điều hành, văn phòng.",
    target_audience: "Doanh nghiệp, cơ quan nhà nước, văn phòng",
    features: ["LED P1.8-P2.5 cho phòng họp", "Tích hợp video call", "Màn hình tương tác", "Wireless presentation"],
    benefits: ["Trình bày chuyên nghiệp", "Hiển thị sắc nét", "Dễ sử dụng"],
    products: ["1", "2"],
    image: "/images/solutions/phong-hop.jpg",
    cta_text: "Tư vấn LED phòng họp",
    cta_link: "/lien-he?subject=phong-hop"
  },
  {
    id: "12",
    name: "Giải pháp LED cho Hội nghị",
    slug: "led-hoi-nghi",
    description: "Giải pháp màn hình LED cho hội nghị quốc tế, trung tâm hội nghị.",
    target_audience: "Trung tâm hội nghị, khách sạn, tổ chức hội nghị",
    features: ["LED P2-P3 hội nghị", "Hệ thống đa màn hình", "Live streaming", "Tích hợp âm thanh"],
    benefits: ["Hiển thị nội dung sắc nét", "Hỗ trợ đa ngôn ngữ", "Chuyên nghiệp, đẳng cấp"],
    products: ["1"],
    image: "/images/solutions/hoi-nghi.jpg",
    cta_text: "Tư vấn LED hội nghị",
    cta_link: "/lien-he?subject=hoi-nghi"
  },
  // === HOME CINEMA ===
  {
    id: "13",
    name: "Giải pháp Home Cinema",
    slug: "giai-phap-home-cinema",
    description: "Thiết kế hệ thống LED màn hình lớn cho phòng chiếu phim tại nhà, home theater cao cấp.",
    target_audience: "Biệt thự, căn hộ cao cấp, phòng chiếu phim gia đình",
    features: ["Màn hình LED P1.2-P2 cho home cinema", "Âm thanh vòm Dolby Atmos", "Ghế ngồi tích hợp", "Chiếu sáng cảnh quan phòng", "Điều khiển thông minh"],
    benefits: ["Trải nghiệm rạp chiếu phim tại nhà", "Hình ảnh 4K sắc nét", "Không gian sang trọng, riêng tư"],
    products: ["1"],
    image: "/images/solutions/home-cinema.jpg",
    cta_text: "Tư vấn Home Cinema",
    cta_link: "/lien-he?subject=home-cinema"
  },
  // === RETAIL ===
  {
    id: "14",
    name: "Giải pháp Màn hình LED ngành bán lẻ (Retail)",
    slug: "giai-phap-retail",
    description: "Giải pháp màn hình LED cho cửa hàng, showroom, trung tâm thương mại, shop thời trang.",
    target_audience: "Shop thời trang, trung tâm thương mại, showroom, cửa hàng tiện lợi",
    features: ["Màn hình LED trong suốt cửa hàng", "LED Poster", "LED trang trí showroom", "Màn hình sáng tạo trưng bày"],
    benefits: ["Thu hút khách hàng", "Nâng cao thương hiệu", "Tăng doanh số bán lẻ"],
    products: ["1", "4"],
    image: "/images/solutions/retail.jpg",
    cta_text: "Tư vấn LED Retail",
    cta_link: "/lien-he?subject=retail"
  },
  // === BẢO TRÌ ===
  {
    id: "15",
    name: "Bảo trì màn hình LED cố định",
    slug: "bao-tri-led-co-dinh",
    description: "Dịch vụ bảo trì, bảo dưỡng định kỳ cho màn hình LED cố định trong nhà.",
    target_audience: "Khách hàng có màn hình LED cố định trong nhà",
    features: ["Kiểm tra định kỳ 6 tháng/lần", "Vệ sinh, thay thế module hỏng", "Cập nhật phần mềm", "Hỗ trợ 24/7"],
    benefits: ["Kéo dài tuổi thọ màn hình", "Phát hiện lỗi sớm", "Tiết kiệm chi phí sửa chữa lớn"],
    products: [],
    image: "/images/solutions/bao-tri.jpg",
    cta_text: "Đăng ký bảo trì",
    cta_link: "/lien-he?subject=bao-tri-co-dinh"
  },
  {
    id: "16",
    name: "Bảo trì màn hình LED ngoài trời",
    slug: "bao-tri-led-ngoai-troi",
    description: "Dịch vụ bảo trì chuyên nghiệp cho màn hình LED ngoài trời, chịu tác động thời tiết.",
    target_audience: "Khách hàng có màn hình LED ngoài trời",
    features: ["Kiểm tra chống nước IP65", "Vệ sinh bề mặt", "Thay thế linh kiện chịu UV", "Bảo dưỡng mùa mưa"],
    benefits: ["Đảm bảo hoạt động 24/7 ngoài trời", "Chống thấm nước hiệu quả", "Tuổi thọ tối đa"],
    products: [],
    image: "/images/solutions/bao-tri-outdoor.jpg",
    cta_text: "Đăng ký bảo trì",
    cta_link: "/lien-he?subject=bao-tri-ngoai-troi"
  },
  {
    id: "17",
    name: "Bảo trì màn hình LED cho thuê (rental)",
    slug: "bao-tri-led-cho-thue",
    description: "Dịch vụ bảo trì, bảo dưỡng cho hệ thống LED cho thuê sự kiện.",
    target_audience: "Công ty cho thuê LED, event planner",
    features: ["Kiểm tra trước/sau sự kiện", "Vệ sinh, đóng gói chuyên nghiệp", "Thay thế linh kiện nhanh", "Hỗ trợ kỹ thuật tại sự kiện"],
    benefits: ["Đảm bảo thiết bị luôn sẵn sàng", "Giảm thời gian chết", "Chuyên nghiệp hóa quy trình"],
    products: [],
    image: "/images/solutions/bao-tri-rental.jpg",
    cta_text: "Đăng ký bảo trì",
    cta_link: "/lien-he?subject=bao-tri-cho-thue"
  },
];

export async function getSolutions() {
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockSolutions;
}

export async function getSolutionBySlug(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockSolutions.find(s => s.slug === slug) || null;
}
