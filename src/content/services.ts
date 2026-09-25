export type Service = {
  slug: string; title: string; shortTitle: string; number: string; description: string;
  intro: string; items: string[]; deliverables: string[]; question: string; answer: string;
};

export const services: Service[] = [
  {
    slug: 'to-chuc-su-kien-the-thao', number: '01', title: 'Tổ chức sự kiện thể thao', shortTitle: 'Sự kiện thể thao',
    description: 'Giải chạy, giải bơi và ngày hội thể thao. Kết nối cộng đồng bằng những trải nghiệm vận động đáng nhớ.',
    intro: 'Một giải đấu tốt bắt đầu từ thể lệ rõ ràng và kết thúc bằng trải nghiệm trọn vẹn của người tham gia. Your Dreams đồng hành cùng doanh nghiệp, trường học và khu đô thị để thiết kế chương trình phù hợp với từng cộng đồng.',
    items: ['Giải chạy bộ và hoạt động chạy cộng đồng', 'Giải bơi cho cư dân, học sinh và doanh nghiệp', 'Giải bóng đá, tennis, cầu lông, pickleball', 'Ngày hội thể thao đa môn'],
    deliverables: ['Kế hoạch tổ chức, thể lệ và lịch thi đấu theo nhóm người tham gia.', 'Phương án địa điểm, thiết bị, trọng tài và phân công điều phối.', 'Phương án y tế, cứu hộ và xử lý tình huống phù hợp bộ môn.', 'Vật phẩm sự kiện, khu vực trao giải, ảnh và báo cáo tổng kết theo thỏa thuận.'],
    question: 'Cần cung cấp gì để nhận phương án tổ chức giải đấu?', answer: 'Hãy chia sẻ bộ môn, số lượng và độ tuổi người tham gia, địa điểm dự kiến, thời gian cùng ngân sách. Đội ngũ sẽ làm rõ phạm vi để đề xuất thể thức và các hạng mục cần thiết.'
  },
  {
    slug: 'to-chuc-su-kien-doanh-nghiep', number: '02', title: 'Tổ chức sự kiện doanh nghiệp', shortTitle: 'Sự kiện doanh nghiệp',
    description: 'Team building, gala dinner, hội nghị và ra mắt sản phẩm. Mỗi sự kiện mang một câu chuyện thương hiệu riêng.',
    intro: 'Từ một buổi gặp gỡ khách hàng đến chương trình gắn kết đội ngũ, chúng tôi bắt đầu với mục tiêu của doanh nghiệp. Ý tưởng, kịch bản, không gian và vận hành được xây dựng thành một kế hoạch thống nhất.',
    items: ['Team building và ngày hội nội bộ', 'Gala dinner, tiệc tất niên', 'Hội nghị khách hàng, hội thảo', 'Ra mắt sản phẩm, khai trương và khánh thành'],
    deliverables: ['Concept và thông điệp phù hợp với thương hiệu, khách mời.', 'Kịch bản chương trình và bảng phân công theo từng mốc thời gian.', 'Thiết kế sân khấu, âm thanh, ánh sáng và nhân sự theo quy mô.', 'Điều phối ngày diễn ra, phối hợp các bộ phận và tổng kết chương trình.'],
    question: 'Có thể đặt riêng từng hạng mục không?', answer: 'Có. Your Dreams có thể tư vấn tổ chức trọn gói hoặc cung cấp các hạng mục cụ thể. Phạm vi, trách nhiệm phối hợp và chi phí được thống nhất trước khi triển khai.'
  },
  {
    slug: 'giao-duc-the-thao', number: '03', title: 'Dạy bơi & giáo dục thể thao', shortTitle: 'Giáo dục thể thao',
    description: 'Swim For Life, lớp thể thao và chương trình kỹ năng sống. Nuôi dưỡng sự tự tin qua mỗi trải nghiệm.',
    intro: 'Your Dreams phát triển các chương trình giáo dục thể thao thông qua Swim For Life Việt Nam và hoạt động trải nghiệm tại khu đô thị. Nội dung được lựa chọn theo độ tuổi, khả năng và điều kiện thực tế của người học.',
    items: ['Dạy bơi cho trẻ em và người lớn', 'Bóng đá, bóng rổ, cầu lông và tennis', 'Pickleball và cờ vua', 'Trải nghiệm kỹ năng sống, hoạt động ngoài trời'],
    deliverables: ['Khảo sát nhu cầu, điều kiện cơ sở vật chất và nhóm học viên.', 'Sắp xếp huấn luyện viên, lịch học và nội dung theo trình độ.', 'Phối hợp với đơn vị quản lý để tổ chức lớp và trao đổi với phụ huynh.', 'Theo dõi quá trình học và thông tin tiến độ theo chương trình.'],
    question: 'Doanh nghiệp hoặc khu đô thị có thể tổ chức lớp riêng không?', answer: 'Có thể trao đổi để xây dựng lớp theo nhóm. Lịch học, địa điểm, số học viên và nội dung được xác định sau khi khảo sát; không áp dụng một lộ trình giống nhau cho mọi người học.'
  },
  {
    slug: 'cho-thue-thiet-bi-su-kien', number: '04', title: 'Cho thuê thiết bị sự kiện', shortTitle: 'Thiết bị sự kiện',
    description: 'Sân khấu, nhà bạt, âm thanh, ánh sáng và màn hình. Đồng bộ từng hạng mục cho ngày diễn ra.',
    intro: 'Thiết bị cần phù hợp với không gian và kịch bản, không chỉ với số lượng khách. Your Dreams tư vấn cấu hình, phương án lắp đặt và nhân sự kỹ thuật theo điều kiện địa điểm.',
    items: ['Sân khấu, backdrop, nhà bạt và nhà giàn', 'Hệ thống âm thanh và ánh sáng', 'Màn hình LED, máy chiếu và thiết bị trình chiếu', 'Bàn ghế, thảm, bục phát biểu và trang trí'],
    deliverables: ['Danh mục thiết bị và thông số phù hợp với nhu cầu.', 'Khảo sát nguồn điện, vị trí lắp đặt và đường vận chuyển.', 'Lịch lắp đặt, chạy thử, trực kỹ thuật và tháo dỡ.', 'Báo giá theo hạng mục và điều kiện triển khai thực tế.'],
    question: 'Báo giá thiết bị có bao gồm vận chuyển và lắp đặt?', answer: 'Các chi phí được làm rõ trong báo giá dựa trên địa điểm, thời gian thuê, cấu hình và nhân sự. Hãy cung cấp đầy đủ điều kiện tiếp cận địa điểm để tránh bỏ sót hạng mục.'
  },
  {
    slug: 'nhan-su-su-kien', number: '05', title: 'Cung cấp nhân sự sự kiện', shortTitle: 'Nhân sự sự kiện',
    description: 'MC, lễ tân, điều phối, kỹ thuật và trọng tài. Đúng con người, đúng vai trò, đúng thời điểm.',
    intro: 'Chúng tôi xây dựng phương án nhân sự theo kịch bản và đặc thù chương trình. Mỗi vị trí cần biết rõ nhiệm vụ, người phối hợp và cách xử lý khi lịch trình thay đổi.',
    items: ['MC và nhân sự dẫn chương trình song ngữ', 'Lễ tân, PG/PB và nhân sự hướng dẫn', 'Kỹ thuật viên, quay phim và nhiếp ảnh', 'Điều phối, trọng tài và hỗ trợ chuyên môn'],
    deliverables: ['Danh sách vị trí và số lượng theo quy mô.', 'Trao đổi yêu cầu chuyên môn, ngôn ngữ và thời gian.', 'Brief, diễn tập và hướng dẫn phối hợp trước sự kiện.', 'Phân công người phụ trách và đầu mối điều phối.'],
    question: 'Có thể yêu cầu MC song ngữ không?', answer: 'Có thể trao đổi nhu cầu MC hoặc phiên dịch theo ngôn ngữ của chương trình. Hồ sơ phù hợp, lịch làm việc và phạm vi công việc cần được xác nhận trước khi đặt dịch vụ.'
  },
  {
    slug: 'truyen-thong-su-kien', number: '06', title: 'Truyền thông & quay phim sự kiện', shortTitle: 'Truyền thông sự kiện',
    description: 'Ảnh, video, livestream và nội dung truyền thông. Giữ lại cảm xúc, tiếp nối câu chuyện sau sự kiện.',
    intro: 'Truyền thông sự kiện bắt đầu từ câu chuyện muốn kể. Your Dreams phối hợp kế hoạch nội dung trước, trong và sau chương trình để hình ảnh và thông điệp nhất quán trên các kênh.',
    items: ['Chụp ảnh, quay phim và video highlight', 'Livestream và chương trình trực tuyến', 'Nội dung PR, social media và quảng cáo', 'Kế hoạch truyền thông trước và sau sự kiện'],
    deliverables: ['Mục tiêu truyền thông, thông điệp và danh sách nội dung.', 'Kịch bản ghi hình, vị trí máy và các khoảnh khắc cần ghi lại.', 'Phương án đường truyền, âm thanh và chạy thử khi livestream.', 'Định dạng, số lượng và lịch bàn giao được thống nhất trong brief.'],
    question: 'Cần chuẩn bị gì khi livestream sự kiện?', answer: 'Cần khảo sát kết nối mạng, nguồn điện, âm thanh, vị trí máy quay và nền tảng phát. Buổi chạy thử giúp kiểm tra phối hợp giữa đội sân khấu, kỹ thuật và nội dung.'
  },
  {
    slug: 'thiet-ke-in-an', number: '07', title: 'Thiết kế & in ấn sự kiện', shortTitle: 'Thiết kế & in ấn',
    description: 'Bộ nhận diện, backdrop, ấn phẩm và vật phẩm. Một ngôn ngữ hình ảnh xuyên suốt mọi điểm chạm.',
    intro: 'Thiết kế sự kiện cần vừa đẹp, vừa dễ nhận biết khi đưa vào không gian thật. Chúng tôi triển khai từ định hướng hình ảnh đến các ấn phẩm phục vụ đón khách, sân khấu và trao giải.',
    items: ['Nhận diện và hình ảnh chủ đạo của sự kiện', 'Backdrop, banner, standee và thư mời', 'Catalogue, profile, thẻ và vé sự kiện', 'Huy chương, cúp và giấy chứng nhận'],
    deliverables: ['Định hướng hình ảnh dựa trên bộ nhận diện có sẵn.', 'Thiết kế theo đúng kích thước và vị trí sử dụng.', 'Duyệt nội dung, chính tả và mẫu trước sản xuất.', 'Phối hợp in ấn, bàn giao và lắp đặt theo phạm vi đã thống nhất.'],
    question: 'Có thể dùng bộ nhận diện sẵn có của doanh nghiệp?', answer: 'Có. Hãy gửi logo gốc, màu sắc, phông chữ và hướng dẫn thương hiệu. Các hạng mục sẽ được thiết kế đồng bộ và trình duyệt trước khi sản xuất.'
  },
];

export function serviceHref(serviceSlug: string) {
  const legacySlug = serviceSlug === 'giao-duc-the-thao' ? 'day-boi-vinhomes' : serviceSlug;
  return `/dich-vu/${legacySlug}`;
}
