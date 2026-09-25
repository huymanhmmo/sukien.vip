export type Post = {
  slug: string; title: string; excerpt: string; category: string; date: string; updated: string;
  image: string; alt: string; readingTime: string; lead: string; sections: { heading: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'checklist-lap-ke-hoach-su-kien', category: 'Kế hoạch sự kiện', date: '2026-09-20', updated: '2026-09-20', readingTime: '6 phút đọc', image: 'happy-run', alt: 'Tập thể vận động viên tại giải chạy ROX Living Happy Run 2024',
    title: 'Checklist lập kế hoạch sự kiện: bắt đầu từ đâu để không bỏ sót?',
    excerpt: 'Một bản kế hoạch tốt giúp đội ngũ đi cùng một hướng, nhìn thấy các việc quan trọng và chuẩn bị cho những thay đổi.',
    lead: 'Kế hoạch sự kiện không phải là một bảng việc dài. Đó là cách đội ngũ trả lời cùng một câu hỏi: ta muốn người tham gia nhớ điều gì, và cần chuẩn bị những gì để khoảnh khắc ấy diễn ra trọn vẹn?',
    sections: [
      { heading: '1. Xác định mục tiêu trước khi chọn hình thức', paragraphs: ['Hãy bắt đầu bằng mục tiêu có thể quan sát được: kết nối đội ngũ, giới thiệu sản phẩm, tạo sân chơi cho cộng đồng hay tri ân khách hàng. Mục tiêu sẽ quyết định đối tượng mời, nội dung chương trình, không gian và cách đánh giá kết quả.', 'Khi có nhiều mục tiêu, hãy chọn một mục tiêu chính. Điều này giúp tránh tình trạng chương trình có quá nhiều hoạt động nhưng không tạo được điểm nhấn.'] },
      { heading: '2. Lập brief gọn nhưng đủ thông tin', paragraphs: ['Một brief hiệu quả không cần dài. Nó cần giúp đơn vị tổ chức hiểu bối cảnh và đưa ra câu hỏi đúng.'], list: ['Mục tiêu và thông điệp bạn muốn truyền tải.', 'Thời gian, địa điểm, số lượng khách dự kiến.', 'Nhóm người tham gia và những lưu ý đặc biệt.', 'Mức ngân sách hoặc phạm vi ngân sách dự kiến.', 'Những điều bắt buộc phải có và những ý tưởng bạn muốn thử.'] },
      { heading: '3. Tạo một tiến độ có người chịu trách nhiệm', paragraphs: ['Chia tiến độ theo các mốc: chốt ý tưởng, khảo sát địa điểm, sản xuất, truyền thông, tổng duyệt, ngày diễn ra và bàn giao sau sự kiện. Mỗi việc cần một đầu mối rõ ràng và thời hạn cụ thể.', 'Đừng chỉ ghi “chuẩn bị sân khấu” hay “truyền thông”. Hãy tách thành các đầu việc có thể kiểm tra: duyệt thiết kế, xác nhận thiết bị, chạy thử kỹ thuật, phát hành nội dung, xác nhận khách mời.'] },
      { heading: '4. Dành chỗ cho phương án dự phòng', paragraphs: ['Mưa, thay đổi số khách, tắc đường, mất điện hay một tiết mục diễn ra chậm hơn đều có thể xuất hiện. Phương án dự phòng không làm sự kiện bớt sáng tạo; nó giúp đội ngũ có thời gian tập trung vào trải nghiệm của khách thay vì chạy theo sự cố.', 'Các tình huống cần rà soát sớm gồm thời tiết, nguồn điện, đường truyền, an toàn, y tế, lối đi và cách liên lạc nội bộ.'] },
      { heading: '5. Tổng kết để lần sau tốt hơn', paragraphs: ['Sau sự kiện, hãy lưu lại ảnh, video, tài liệu vận hành và những điều đội ngũ học được. Một buổi nhìn lại ngắn với các câu hỏi “điều gì hiệu quả?”, “điều gì nên điều chỉnh?” sẽ biến kinh nghiệm thành tài sản cho chương trình sau.'] },
    ]
  },
  {
    slug: 'to-chuc-ngay-hoi-the-thao-cong-dong', category: 'Sự kiện thể thao', date: '2026-09-12', updated: '2026-09-12', readingTime: '5 phút đọc', image: 'sports-day', alt: 'Các đội tham gia ngày hội thể thao tại Diễn Châu, Nghệ An',
    title: 'Tổ chức ngày hội thể thao cộng đồng: tạo sân chơi cho mọi độ tuổi',
    excerpt: 'Ngày hội thành công khi người mới tham gia cũng cảm thấy mình được chào đón, không chỉ dành cho những người giỏi thể thao.',
    lead: 'Một ngày hội thể thao không chỉ là những trận đấu. Đây là cơ hội để cư dân, gia đình và đồng nghiệp gặp nhau trong một không khí cởi mở, cùng cổ vũ và cùng thuộc về một cộng đồng.',
    sections: [
      { heading: '1. Chọn môn theo cộng đồng, không theo xu hướng', paragraphs: ['Hãy nhìn vào nhóm người tham gia thực tế: độ tuổi, thể lực, quỹ thời gian và điều kiện sân bãi. Các môn có nhiều cấp độ tham gia thường tạo cơ hội cho nhiều người cùng góp mặt.', 'Có thể kết hợp nội dung thi đấu với trò chơi nhẹ, khu trải nghiệm cho trẻ em và không gian cổ vũ để cả những người không trực tiếp thi đấu vẫn có vai trò trong ngày hội.'] },
      { heading: '2. Thiết kế lộ trình trải nghiệm dễ hiểu', paragraphs: ['Người tham gia cần biết mình phải đến đâu, check-in thế nào, lịch hoạt động ở đâu và tìm hỗ trợ khi cần. Bảng thông tin, biển chỉ dẫn, người hướng dẫn và lịch chương trình rõ ràng sẽ giảm đáng kể áp lực vào ngày diễn ra.'] },
      { heading: '3. Đặt an toàn vào kịch bản vận hành', paragraphs: ['An toàn nên xuất hiện ngay khi lập kế hoạch: đánh giá không gian, phân luồng người tham gia, chuẩn bị nhân sự y tế và cứu hộ phù hợp với bộ môn. Khi có nhiều hoạt động diễn ra song song, cần có đầu mối điều phối từng khu vực.'], list: ['Kiểm tra điều kiện sân bãi và thời tiết.', 'Xác định khu vực y tế, nước uống, nghỉ ngơi.', 'Công bố thể lệ và hướng dẫn tham gia trước giờ bắt đầu.', 'Thiết lập kênh liên lạc nhanh cho ban tổ chức.'] },
      { heading: '4. Lưu lại câu chuyện của cộng đồng', paragraphs: ['Ảnh và video không chỉ phục vụ báo cáo. Hãy xác định trước những khoảnh khắc cần ghi lại: nụ cười lúc về đích, gia đình cổ vũ, khoảnh khắc trao giải, một đội mới làm quen. Đó là chất liệu để cộng đồng nhớ về ngày hội và mong chờ lần tiếp theo.'] },
    ]
  },
  {
    slug: 'brief-su-kien-can-chuan-bi-gi', category: 'Kinh nghiệm tổ chức', date: '2026-09-05', updated: '2026-09-05', readingTime: '4 phút đọc', image: 'di-de-lon', alt: 'Trẻ em và ban tổ chức trong chương trình Đi để lớn ROX Living 2025',
    title: 'Một brief sự kiện tốt cần chuẩn bị những gì?',
    excerpt: 'Brief là điểm xuất phát cho mọi cuộc trao đổi với đơn vị tổ chức. Càng rõ bối cảnh, đề xuất càng sát với điều bạn cần.',
    lead: 'Bạn không cần có sẵn kịch bản hoàn chỉnh để bắt đầu trao đổi. Một brief tốt chỉ cần làm rõ bối cảnh, mục tiêu và những giới hạn quan trọng để đội ngũ tổ chức cùng bạn phát triển ý tưởng.',
    sections: [
      { heading: '1. Điều gì khiến sự kiện này cần diễn ra?', paragraphs: ['Câu trả lời có thể là ra mắt một sản phẩm, tạo kết nối nội bộ, khởi động một mùa hoạt động hay mang đến trải nghiệm cho cư dân. Lý do tổ chức sẽ dẫn hướng cho nội dung và giọng điệu của toàn bộ chương trình.'] },
      { heading: '2. Ai sẽ có mặt?', paragraphs: ['Hãy mô tả khách mời theo cách thực tế: số lượng dự kiến, độ tuổi, vai trò, điều họ quan tâm và những lưu ý về tiếp cận. Một sự kiện cho gia đình cần cách tiếp đón khác với hội nghị dành cho đối tác.'] },
      { heading: '3. Những ràng buộc cần nói sớm', paragraphs: ['Thời gian, địa điểm, ngân sách, quy định địa điểm, nhận diện thương hiệu, người phê duyệt và mốc ra quyết định là các thông tin giúp đề xuất khả thi ngay từ đầu. Nếu có điều chưa chắc chắn, hãy ghi rõ để đội ngũ cùng tính phương án.'] },
      { heading: '4. Chia sẻ ví dụ để cùng hình dung', paragraphs: ['Bạn có thể gửi ảnh, video, bài viết hoặc một vài từ mô tả bầu không khí mong muốn. Ví dụ không phải khuôn mẫu để sao chép; chúng giúp hai bên hiểu nhau nhanh hơn và xác định phần nào cần tạo khác biệt.'] },
    ]
  },
];
export type PostItem = typeof posts[number];
