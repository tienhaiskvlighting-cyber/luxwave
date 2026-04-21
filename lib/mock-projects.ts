export const PROJECTS = [
  {
    id: 1,
    title: 'Màn hình LED Hội trường Công ty ABC',
    slug: 'man-hinh-led-hoi-truong-cong-ty-abc',
    client: 'Công ty ABC',
    location: 'Hà Nội',
    completionDate: '2025-12',
    scale: '50m²',
    challenge: 'Yêu cầu màn hình LED chất lượng cao cho hội trường 500 chỗ ngồi với độ phân giải 4K và khả năng hiển thị sáng rõ trong mọi điều kiện ánh sáng.',
    solution: 'Lắp đặt màn hình LED COB P1.25mm với độ sáng 1200 nits, hệ thống điều khiển NovaStar và giải pháp âm thanh chuyên nghiệp.',
    results: 'Màn hình hoạt động ổn định, hình ảnh sắc nét, âm thanh sống động. Khách hàng rất hài lòng với chất lượng và dịch vụ.',
    images: ['/images/projects/project-1.jpg'],
    products: [1, 2],
    status: 'active',
  },
  {
    id: 2,
    title: 'Đèn chiếu logo GOBO Resort Flamingo',
    slug: 'den-chieu-logo-gobo-resort-flamingo',
    client: 'Flamingo Resort',
    location: 'Quảng Ninh',
    completionDate: '2025-11',
    scale: '10 bộ đèn GOBO',
    challenge: 'Thiết kế hệ thống chiếu logo cho khu nghỉ dưỡng cao cấp với yêu cầu thẩm mỹ và độ bền cao.',
    solution: 'Lắp đặt 10 bộ đèn GOBO công suất 500W với logo được thiết kế riêng, hệ thống lắp đặt chuyên nghiệp.',
    results: 'Hiệu ứng chiếu logo ban đêm tạo ấn tượng mạnh cho khách hàng. Đèn hoạt động ổn định trong mọi thời tiết.',
    images: ['/images/projects/project-2.jpg'],
    products: [8],
    status: 'active',
  },
  {
    id: 3,
    title: 'Màn hình LED quảng cáo ngoài trời',
    slug: 'man-hinh-led-quang-cao-ngoai-troi',
    client: 'Công ty Quảng cáo XYZ',
    location: 'TP. Hồ Chí Minh',
    completionDate: '2025-10',
    scale: '80m²',
    challenge: 'Màn hình LED outdoor cho vị trí đắc địa với yêu cầu chống nước IP65 và độ sáng cao để hiển thị rõ ràng dưới ánh nắng mặt trời.',
    solution: 'Lắp đặt màn hình LED outdoor P6.66 với độ sáng 6500 nits, tiêu thụ thấp và tuổi thọ cao.',
    results: 'Màn hình hoạt động 24/7 với chất lượng hình ảnh ổn định, tiết kiệm điện 30% so với công nghệ cũ.',
    images: ['/images/projects/project-3.jpg'],
    products: [15],
    status: 'active',
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3) {
  return PROJECTS.slice(0, limit);
}
