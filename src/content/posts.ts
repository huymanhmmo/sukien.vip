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
  {
    slug: 'to-chuc-su-kien-chuyen-nghiep', category: 'Kinh nghiệm tổ chức', date: '2026-09-25', updated: '2026-09-25', readingTime: '8 phút đọc', image: 'to-chuc-su-kien-chuyen-nghiep', alt: 'Minh họa vector các bước phối hợp tổ chức một sự kiện, không phải ảnh tư liệu thực tế.',
    title: 'Tổ chức sự kiện chuyên nghiệp: quy trình từ ý tưởng đến tổng kết',
    excerpt: 'Hướng dẫn lập kế hoạch sự kiện theo mục tiêu, ngân sách, địa điểm, kịch bản, vận hành và đánh giá sau chương trình.',
    lead: 'Tổ chức sự kiện chuyên nghiệp là quá trình biến mục tiêu của đơn vị tổ chức thành một chương trình có thể triển khai, đo lường và điều chỉnh. Kế hoạch cần kết nối nội dung, con người, địa điểm, kỹ thuật và an toàn ngay từ đầu.',
    sections: [
      { heading: 'Bắt đầu bằng mục tiêu và người tham dự', paragraphs: ['Làm rõ vì sao chương trình cần diễn ra: kết nối nội bộ, chia sẻ kiến thức, giới thiệu sản phẩm hay tạo hoạt động cho cộng đồng. Chọn một mục tiêu chính để định hướng nội dung và tiêu chí đánh giá.', 'Mô tả nhóm tham dự theo độ tuổi, vai trò, số lượng dự kiến, nhu cầu tiếp cận và điều họ cần biết trước khi đến. Thông tin này ảnh hưởng đến cách mời, check-in, bố trí chỗ ngồi và thời lượng chương trình.'] },
      { heading: 'Lập brief, phạm vi và ngân sách', paragraphs: ['Brief nên có mục tiêu, thời gian, địa điểm dự kiến, nhóm khách, ngân sách hoặc khoảng ngân sách, nhận diện thương hiệu, đầu mối phê duyệt và các hạng mục bắt buộc. Nếu thông tin chưa chốt, ghi rõ giả định để các bên không hiểu khác nhau.', 'Tách ngân sách thành các nhóm như địa điểm, sản xuất, thiết bị, nhân sự, nội dung, truyền thông, vận chuyển và khoản dự phòng. Mức chi thực tế phụ thuộc điều kiện địa điểm và phạm vi công việc, nên cần báo giá theo brief thay vì áp một con số chung.'] },
      { heading: 'Xây dựng kịch bản và kế hoạch vận hành', paragraphs: ['Kịch bản nội dung mô tả thứ tự hoạt động, thông điệp, người phụ trách, thời lượng và yêu cầu kỹ thuật. Bên cạnh đó, cần có run sheet cho đội hiện trường: giờ vào địa điểm, lắp đặt, tổng duyệt, đón khách, chuyển cảnh và tháo dỡ.', 'Với chương trình nhiều khu vực, lập sơ đồ mặt bằng và phân luồng khách. Mỗi hạng mục cần một đầu mối liên hệ và phương án nếu thay đổi lịch trình, thiết bị hoặc số lượng người tham gia.'] },
      { heading: 'Đưa an toàn vào kế hoạch từ đầu', paragraphs: ['Đánh giá rủi ro theo địa điểm và loại hình: thời tiết, điện, lối thoát, mật độ người, hoạt động thể thao, y tế và khả năng tiếp cận. Trách nhiệm cụ thể cần được thống nhất với địa điểm và các nhà cung cấp.', 'Thông báo cho người tham dự cách nhận hỗ trợ, khu vực tập trung và kênh liên lạc. Phương án dự phòng chỉ có tác dụng khi người thực hiện biết vai trò và được phổ biến trước chương trình.'] },
      { heading: 'Đánh giá và lưu lại kinh nghiệm', paragraphs: ['Sau sự kiện, đối chiếu mục tiêu với các chỉ số đã thống nhất, tổng hợp phản hồi và các vấn đề vận hành. Chỉ dùng dữ liệu có nguồn rõ ràng; không suy diễn kết quả từ số lượng ảnh hoặc lượt tương tác.', 'Lưu kịch bản, sơ đồ, báo giá, tài liệu được duyệt và bài học thực tế để lần tổ chức sau bắt đầu nhanh hơn. Nếu cần đơn vị hỗ trợ, hãy gửi brief tại trang liên hệ để trao đổi phạm vi.'] },
    ],
  },
  {
    slug: 'chon-don-vi-to-chuc-su-kien', category: 'Kinh nghiệm tổ chức', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'chon-don-vi-to-chuc-su-kien', alt: 'Minh họa vector checklist đánh giá đơn vị tổ chức sự kiện.',
    title: 'Cách chọn đơn vị tổ chức sự kiện phù hợp với doanh nghiệp',
    excerpt: 'Các tiêu chí để so sánh đơn vị tổ chức sự kiện: phạm vi công việc, nhân sự, vận hành, an toàn, ngân sách và cách nghiệm thu.',
    lead: 'Đơn vị tổ chức sự kiện phù hợp là đơn vị hiểu mục tiêu, trình bày rõ ai làm việc gì và đưa ra phương án có thể kiểm tra. Danh sách “top công ty” không thay thế được việc đánh giá hồ sơ, phạm vi và điều kiện thực tế của chương trình.',
    sections: [
      { heading: 'Viết brief để các đề xuất có thể so sánh', paragraphs: ['Gửi cùng một bộ thông tin cho các bên: mục tiêu, đối tượng, số lượng dự kiến, thời gian, địa điểm, ngân sách, yêu cầu thương hiệu và điều kiện phê duyệt. Nêu rõ phần nào đã chốt, phần nào cần tư vấn.', 'Khi các bên hiểu cùng một bài toán, bạn có thể so sánh phạm vi và giả định trong đề xuất thay vì chỉ nhìn tổng giá.'] },
      { heading: 'Kiểm tra năng lực theo loại hình sự kiện', paragraphs: ['Hỏi về quy trình, vai trò đội ngũ, các hạng mục do đơn vị trực tiếp phụ trách và phần phối hợp với nhà cung cấp khác. Yêu cầu ví dụ phù hợp với loại hình của bạn; kiểm tra ngày, địa điểm, vai trò và nguồn ảnh trước khi xem đó là bằng chứng.', 'Với giải thể thao, cần làm rõ thể lệ, lịch thi đấu, trọng tài, cứu hộ/y tế phù hợp và luồng người tham gia. Với hội nghị hoặc gala, xem xét sân khấu, nội dung, kỹ thuật, đón tiếp và điều phối chương trình.'] },
      { heading: 'Làm rõ ngân sách và điều khoản', paragraphs: ['Đề xuất nên phân tách hạng mục, số lượng, đơn giá hoặc cách tính, thuế, vận chuyển, lắp đặt, trực kỹ thuật, tháo dỡ và điều kiện phát sinh. Giá phụ thuộc brief và địa điểm; hãy yêu cầu xác nhận bằng văn bản trước khi đặt dịch vụ.', 'Thống nhất đầu mối phê duyệt, mốc thanh toán, thay đổi phạm vi, hủy/hoãn, quyền sử dụng hình ảnh và tiêu chí nghiệm thu. Điều khoản rõ giúp xử lý thay đổi công bằng cho cả hai bên.'] },
      { heading: 'Đánh giá cách phối hợp và quản trị rủi ro', paragraphs: ['Trong buổi làm việc, để ý cách đơn vị đặt câu hỏi, ghi nhận giả định và chỉ ra phần chưa đủ dữ liệu. Một đề xuất tốt không khẳng định mọi thứ chắc chắn khi địa điểm, số người hoặc lịch chưa được xác nhận.', 'Hỏi ai có mặt tại hiện trường, cách liên hệ khi có thay đổi và quy trình xử lý các tình huống chính. Yêu cầu phương án phù hợp rủi ro thực tế thay vì cam kết tuyệt đối.'] },
      { heading: 'Danh sách kiểm tra trước khi quyết định', paragraphs: [], list: ['Mục tiêu và phạm vi đã được hiểu thống nhất.', 'Người phụ trách và đối tác cung ứng được nêu rõ.', 'Ngân sách, điều kiện phát sinh và nghiệm thu minh bạch.', 'Có kế hoạch tiến độ, tổng duyệt và liên lạc hiện trường.', 'Hình ảnh, số liệu và lời chứng thực trong hồ sơ có nguồn và quyền công bố.', 'Hợp đồng ghi rõ thay đổi, hủy/hoãn và quyền sử dụng nội dung.'] },
    ],
  },
  {
    slug: 'chi-phi-to-chuc-su-kien', category: 'Kế hoạch sự kiện', date: '2026-09-25', updated: '2026-09-25', readingTime: '6 phút đọc', image: 'chi-phi-to-chuc-su-kien', alt: 'Minh họa vector các nhóm hạng mục trong dự toán sự kiện, không thể hiện giá thực tế.',
    title: 'Chi phí tổ chức sự kiện gồm những hạng mục nào?',
    excerpt: 'Cách lập dự toán sự kiện theo nhóm chi phí và chuẩn bị thông tin để nhận báo giá sát với phạm vi thực tế.',
    lead: 'Không có một mức giá chung cho mọi sự kiện. Chi phí phụ thuộc loại hình, số người, thời gian, địa điểm, thiết bị, nhân sự và mức độ sản xuất. Một dự toán hữu ích cho biết mỗi khoản phục vụ việc gì và điều kiện nào có thể làm chi phí thay đổi.',
    sections: [
      { heading: 'Các nhóm chi phí thường gặp', paragraphs: ['Tùy chương trình, dự toán có thể gồm địa điểm; sân khấu và trang trí; âm thanh, ánh sáng, màn hình; nhân sự; nội dung và tiết mục; vật phẩm; truyền thông; vận chuyển; ăn uống; an ninh, y tế và giấy phép liên quan.', 'Không phải sự kiện nào cũng cần tất cả các nhóm. Hãy gắn từng khoản với mục tiêu, trải nghiệm người tham dự hoặc yêu cầu vận hành để ưu tiên đúng phần.'] },
      { heading: 'Những yếu tố làm ngân sách thay đổi', paragraphs: ['Số lượng khách, thời lượng, địa điểm, điều kiện tiếp cận, thời gian lắp đặt, yêu cầu ngoài giờ, nguồn điện và khoảng cách vận chuyển đều có thể ảnh hưởng đến phương án. Nội dung sản xuất riêng, nhiều ngôn ngữ hoặc nhiều khu vực cũng cần được tính vào tiến độ và nguồn lực.', 'Các hạng mục bên thứ ba, thuế, phí địa điểm và thay đổi gần ngày tổ chức cần được hỏi rõ. Không nên so sánh báo giá nếu mỗi đơn vị đang giả định một phạm vi khác nhau.'] },
      { heading: 'Cách lập dự toán dễ kiểm soát', paragraphs: ['Lập bảng gồm hạng mục, mô tả, số lượng, đơn vị tính, chi phí dự kiến, người phụ trách và trạng thái xác nhận. Phân biệt khoản bắt buộc, khoản tùy chọn và khoản dự phòng.', 'Ghi ngày hiệu lực báo giá, điều kiện đặt cọc, hủy/hoãn và cách xử lý thay đổi. Khi cắt giảm, xem tác động đến an toàn và trải nghiệm trước khi bỏ hạng mục.'] },
      { heading: 'Thông tin nên gửi khi yêu cầu báo giá', paragraphs: ['Chuẩn bị mục tiêu, loại sự kiện, thời gian, địa điểm, số người, thời lượng, ngân sách dự kiến, hạng mục đã có và nội dung cần đơn vị đề xuất. Ảnh mặt bằng, sơ đồ hoặc quy định địa điểm giúp báo giá sát thực tế hơn.', 'Your Dreams không công bố bảng giá cố định trên website; phạm vi và chi phí cần trao đổi theo từng brief. Có thể gửi thông tin tại trang liên hệ để xác định các bước tiếp theo.'] },
    ],
  },
  {
    slug: 'chon-dia-diem-to-chuc-su-kien-ha-noi', category: 'Kinh nghiệm tổ chức', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'chon-dia-diem-to-chuc-su-kien-ha-noi', alt: 'Minh họa vector một địa điểm sự kiện và vị trí khảo sát.',
    title: 'Cách chọn địa điểm tổ chức sự kiện tại Hà Nội',
    excerpt: 'Checklist khảo sát địa điểm theo sức chứa, giao thông, kỹ thuật, tiếp cận, an toàn và phương án dự phòng.',
    lead: 'Địa điểm phù hợp cần đáp ứng mục tiêu chương trình và điều kiện vận hành, không chỉ có hình ảnh đẹp. Hãy lập tiêu chí trước khi khảo sát để so sánh không gian theo cùng một nhu cầu.',
    sections: [
      { heading: 'Xác định loại không gian cần tìm', paragraphs: ['Hội nghị có thể cần phòng kín, sân khấu và thiết bị trình chiếu; giải thể thao cần sân bãi, khu vực khởi động và không gian cho khán giả; hoạt động cộng đồng có thể cần khu ngoài trời và phương án thời tiết.', 'Ước tính số người tham dự theo các khu vực khác nhau: check-in, chỗ ngồi, thi đấu, hậu cần, y tế và lối thoát. Không chỉ dựa vào sức chứa quảng cáo của địa điểm.'] },
      { heading: 'Kiểm tra vị trí và khả năng tiếp cận', paragraphs: ['Xem thời gian di chuyển, phương tiện công cộng, điểm đón trả, bãi đỗ xe, biển chỉ dẫn và khả năng tiếp cận cho người có nhu cầu hỗ trợ. Hỏi về giờ vào/ra và giới hạn tiếng ồn hoặc tải hàng.', 'Khảo sát vào khung giờ tương tự ngày diễn ra nếu giao thông, ánh sáng hoặc tiếng ồn khu vực có thể ảnh hưởng đến trải nghiệm.'] },
      { heading: 'Khảo sát kỹ thuật và vận hành', paragraphs: ['Kiểm tra nguồn điện, tải, vị trí lắp đặt, đường truyền, âm học, ánh sáng, điểm treo, lối vận chuyển thiết bị, kho tạm và khu vực hậu trường. Yêu cầu địa điểm mô tả điều kiện sử dụng bằng văn bản.', 'Làm rõ giờ thi công, tổng duyệt, tháo dỡ, nhân sự kỹ thuật bắt buộc, phí phát sinh và nhà cung cấp được phép sử dụng.'] },
      { heading: 'An toàn, thời tiết và hợp đồng', paragraphs: ['Xác định lối thoát, điểm tập kết, quy trình khẩn cấp, khu vực y tế và giới hạn sức chứa. Với chương trình ngoài trời, cần phương án mưa, nắng nóng, gió và bảo vệ thiết bị.', 'Đọc kỹ điều khoản đặt cọc, hủy/hoãn, hoàn trả, thời gian bàn giao, trách nhiệm hư hỏng và quyền sử dụng hình ảnh. Ghi lại hiện trạng khảo sát để các bên cùng đối chiếu.'] },
    ],
  },
  {
    slug: 'cam-nang-thue-thiet-bi-su-kien', category: 'Thiết bị sự kiện', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'cam-nang-thue-thiet-bi-su-kien', alt: 'Minh họa vector sân khấu và thiết bị sự kiện.',
    title: 'Cẩm nang chọn và thuê thiết bị sự kiện',
    excerpt: 'Từ âm thanh, ánh sáng đến sân khấu, màn hình, nhà bạt và bàn ghế: cách xác định cấu hình theo địa điểm và kịch bản.',
    lead: 'Thiết bị sự kiện nên được chọn theo kịch bản, không gian và điều kiện kỹ thuật. Danh mục đúng giúp người tham dự nhìn, nghe và di chuyển thuận tiện; cấu hình thừa hoặc thiếu đều có thể gây lãng phí hoặc phát sinh rủi ro.',
    sections: [
      { heading: 'Xác định nhu cầu trước khi chọn thiết bị', paragraphs: ['Ghi rõ loại chương trình, số người, kích thước không gian, hoạt động chính, khu vực sân khấu, nhu cầu trình chiếu và yêu cầu thu/phát âm thanh. Gửi sơ đồ hoặc ảnh địa điểm để nhà cung cấp hiểu hiện trạng.', 'Phân biệt thiết bị phục vụ nội dung với thiết bị dự phòng. Với livestream hoặc chương trình nhiều khu vực, xác định đường truyền, nguồn điện và cách phối hợp giữa đội kỹ thuật.'] },
      { heading: 'Các nhóm thiết bị cần xem xét', paragraphs: ['Âm thanh gồm loa, micro và bàn trộn; ánh sáng phụ thuộc bối cảnh và hoạt động; màn hình hoặc máy chiếu cần phù hợp khoảng cách nhìn và nội dung; sân khấu, backdrop, nhà bạt và nội thất cần tính kích thước, tải trọng và cách lắp đặt.', 'Một danh mục cụ thể cần nêu model hoặc thông số, số lượng, phụ kiện, dây dẫn, nhân sự trực và phần việc đã bao gồm. Không dựa vào tên gọi chung như “gói chuyên nghiệp” để hiểu cấu hình.'] },
      { heading: 'Câu hỏi cần hỏi nhà cung cấp', paragraphs: ['Hỏi thiết bị được vận chuyển, lắp đặt, chạy thử, trực kỹ thuật và tháo dỡ ra sao; thời gian tiếp cận địa điểm; ai cung cấp điện, điểm treo và bảo vệ; có phí chờ hoặc phí ngoài giờ không.', 'Thống nhất cách nghiệm thu, phương án khi thiết bị lỗi, đầu mối xử lý và trách nhiệm nếu lịch trình thay đổi. Báo giá cần ghi rõ điều kiện vận chuyển và các khoản chưa bao gồm.'] },
      { heading: 'Checklist trước ngày diễn ra', paragraphs: [], list: ['Đối chiếu sơ đồ lắp đặt với mặt bằng thực tế.', 'Xác nhận nguồn điện, dây dẫn, tải và vị trí thiết bị.', 'Chạy thử nội dung, micro, hình ảnh và đường truyền.', 'Giữ lối đi và lối thoát thông thoáng.', 'Ghi rõ người nghiệm thu, người trực kỹ thuật và số liên lạc.', 'Thống nhất lịch tháo dỡ và bàn giao địa điểm.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-doanh-nghiep', category: 'Sự kiện doanh nghiệp', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'to-chuc-su-kien-doanh-nghiep', alt: 'Minh họa vector cuộc họp và màn hình trình bày trong sự kiện doanh nghiệp.',
    title: 'Tổ chức sự kiện doanh nghiệp: chọn hình thức theo mục tiêu',
    excerpt: 'So sánh cách chuẩn bị hội thảo, gala, team building và ngày hội nội bộ theo mục tiêu, người tham dự và yêu cầu vận hành.',
    lead: 'Sự kiện doanh nghiệp hiệu quả bắt đầu từ kết quả muốn tạo ra cho nhân viên, khách hàng hoặc đối tác. Hình thức, thông điệp và ngân sách chỉ nên chốt sau khi đã xác định người tham dự và hành động mong đợi.',
    sections: [
      { heading: 'Chọn hình thức theo mục tiêu', paragraphs: ['Hội thảo phù hợp khi cần chia sẻ kiến thức hoặc trao đổi chuyên đề; gala dinner thường tạo dịp gặp gỡ và ghi nhận; team building tập trung vào hoạt động chung; lễ ra mắt cần làm rõ sản phẩm và trải nghiệm của khách.', 'Một sự kiện có thể kết hợp nhiều mục tiêu, nhưng nên xác định mục tiêu chính để tránh chương trình quá dài hoặc thiếu trọng tâm.'] },
      { heading: 'Thiết kế hành trình người tham dự', paragraphs: ['Từ thư mời, xác nhận tham dự, hướng dẫn di chuyển, check-in, nội dung chính đến phần kết thúc, mỗi bước cần thông tin rõ ràng. Xem xét khách mời ngoài công ty, nhu cầu ăn uống, tiếp cận và lịch trình di chuyển.', 'Dùng run sheet để các nhóm nội dung, sân khấu, kỹ thuật, đón tiếp và hậu cần phối hợp theo cùng mốc thời gian. Chuẩn bị nội dung thay thế cho các khoảng trễ.'] },
      { heading: 'Phân công trách nhiệm và nhà cung cấp', paragraphs: ['Chỉ định người phê duyệt cuối cùng và đầu mối vận hành. Làm rõ ai cung cấp danh sách khách, nội dung trình chiếu, vật phẩm, thiết bị và dịch vụ địa điểm.', 'Nếu thuê nhiều đơn vị, xác định ranh giới công việc, lịch bàn giao và người điều phối tích hợp. Điều này hạn chế khoảng trống trách nhiệm vào ngày diễn ra.'] },
      { heading: 'Đo lường sau sự kiện', paragraphs: ['Chọn chỉ số phù hợp với mục tiêu như tỷ lệ tham dự, mức độ hoàn thành nội dung, phản hồi hoặc số cuộc trao đổi sau chương trình. Xác định cách thu thập dữ liệu trước khi tổ chức.', 'Tổng kết điều hiệu quả, phát sinh và việc cần thay đổi. Không suy ra mức độ hài lòng hoặc hiệu quả kinh doanh khi chưa có dữ liệu đáng tin cậy.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-theo-mua', category: 'Sự kiện cộng đồng', date: '2026-09-25', updated: '2026-09-25', readingTime: '6 phút đọc', image: 'to-chuc-su-kien-theo-mua', alt: 'Minh họa vector hoạt động theo mùa với đèn trang trí và họa tiết.',
    title: 'Lập kế hoạch sự kiện theo mùa cho gia đình và cộng đồng',
    excerpt: 'Cách chọn chủ đề, hoạt động và phương án vận hành cho chương trình Trung Thu, Quốc tế Thiếu nhi và các dịp cộng đồng.',
    lead: 'Sự kiện theo mùa cần phù hợp với người tham dự và bối cảnh địa điểm, không chỉ dựa trên trang trí theo chủ đề. Hãy thiết kế lịch trình sao cho khách hiểu mình có thể tham gia điều gì và ban tổ chức vận hành được an toàn.',
    sections: [
      { heading: 'Chọn chủ đề phù hợp với đối tượng', paragraphs: ['Với chương trình cho trẻ em, hoạt động nên ngắn, có hướng dẫn trực quan và lựa chọn phù hợp nhiều độ tuổi. Với cộng đồng gia đình, bố trí khu vực tham gia chung và chỗ nghỉ giúp nhiều người cùng hiện diện.', 'Chọn một thông điệp chính rồi phát triển trang trí, trò chơi và quà tặng xoay quanh thông điệp đó. Tránh đưa quá nhiều hoạt động khiến người tham dự không biết nên bắt đầu từ đâu.'] },
      { heading: 'Lập lịch và phân luồng hoạt động', paragraphs: ['Dự kiến thời lượng mỗi hoạt động, thời gian chuyển khu vực và điểm tập trung. Dùng biển chỉ dẫn, người hướng dẫn và thông báo dễ đọc; bố trí lối đi cho xe đẩy hoặc người cần hỗ trợ.', 'Nếu các trạm hoạt động song song, giới hạn sức chứa và quy định cách xếp hàng. Chương trình cần có khoảng đệm cho khách đến muộn hoặc hoạt động kéo dài.'] },
      { heading: 'Chuẩn bị an toàn và hậu cần', paragraphs: ['Kiểm tra mặt bằng, điện, thiết bị, vật liệu trang trí, thực phẩm, vệ sinh và khu vực y tế. Với hoạt động vận động hoặc thủ công, hướng dẫn rõ độ tuổi phù hợp và cách sử dụng vật dụng.', 'Ngoài trời cần tính thời tiết, nắng nóng, mưa, nền trơn và phương án chuyển địa điểm. Thống nhất cách liên lạc giữa các khu vực và đầu mối chịu trách nhiệm xử lý tình huống.'] },
      { heading: 'Ghi lại trải nghiệm và tổng kết', paragraphs: ['Thông báo trước cách chụp và sử dụng hình ảnh, đặc biệt khi có trẻ em. Chỉ sử dụng ảnh khi được phép và có thể xác định quyền sử dụng.', 'Sau chương trình, tổng hợp phản hồi và ghi lại hoạt động thu hút, điểm gây ùn tắc cùng hạng mục cần điều chỉnh cho mùa sau.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-ngoai-troi', category: 'Kinh nghiệm tổ chức', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'to-chuc-su-kien-ngoai-troi', alt: 'Minh họa vector bố trí không gian hoạt động ngoài trời.',
    title: 'Checklist tổ chức sự kiện ngoài trời an toàn và dễ vận hành',
    excerpt: 'Những điểm cần khảo sát về thời tiết, mặt bằng, điện, âm thanh, lối đi, y tế và phương án chuyển đổi địa điểm.',
    lead: 'Sự kiện ngoài trời cần có phương án cho điều kiện thay đổi. Trước khi đầu tư vào sân khấu hoặc trang trí, hãy khảo sát mặt bằng, luồng người, nguồn điện, thời tiết và khả năng chuyển sang phương án dự phòng.',
    sections: [
      { heading: 'Khảo sát mặt bằng và sức chứa', paragraphs: ['Đo khu vực hoạt động, kiểm tra nền đất, thoát nước, lối vận chuyển và vị trí tập trung. Chia mặt bằng thành khu vực check-in, sân khấu/thi đấu, khán giả, hậu cần, y tế và lối thoát.', 'Đánh giá ảnh hưởng của nắng, cây cối, giao thông, tiếng ồn và công trình xung quanh. Xác nhận quyền sử dụng mặt bằng và khung giờ được phép hoạt động.'] },
      { heading: 'Lập phương án thời tiết', paragraphs: ['Xác định ngưỡng hoặc điều kiện kích hoạt hoãn, rút ngắn, chuyển địa điểm hay dừng hoạt động. Thống nhất ai ra quyết định và thông báo bằng kênh nào.', 'Nhà bạt hoặc khu che không thay thế việc đánh giá gió, thoát nước và an toàn kết cấu. Thiết bị ngoài trời cần được bảo vệ khỏi mưa, bụi và nắng theo hướng dẫn của nhà cung cấp.'] },
      { heading: 'Kiểm tra kỹ thuật và lối đi', paragraphs: ['Lập sơ đồ nguồn điện, tủ điện, dây cáp và vị trí đặt thiết bị. Che chắn dây qua lối đi và giữ khoảng cách an toàn giữa thiết bị, khán giả và hoạt động vận động.', 'Kiểm tra âm thanh ở nhiều vị trí, độ ổn định đường truyền và điều kiện ánh sáng khi trời tối. Bố trí biển chỉ dẫn, nước uống, vệ sinh và khu nghỉ phù hợp quy mô.'] },
      { heading: 'Đặt an toàn vào run sheet', paragraphs: ['Ghi rõ người phụ trách y tế, cứu hộ khi có hoạt động nước/thể thao, điều phối lối đi và liên lạc khẩn cấp. Phổ biến kế hoạch cho nhân sự và nhà cung cấp trước ngày diễn ra.', 'Kiểm tra dự báo thời tiết trước sự kiện và rà soát lại mặt bằng ngay trước khi mở cửa. Dừng hoạt động khi điều kiện không đáp ứng phương án đã thống nhất.'] },
    ],
  },
  {
    slug: 'y-tuong-to-chuc-su-kien', category: 'Ý tưởng sự kiện', date: '2026-09-25', updated: '2026-09-25', readingTime: '6 phút đọc', image: 'y-tuong-to-chuc-su-kien', alt: 'Minh họa vector bóng đèn ý tưởng và các chi tiết sáng tạo.',
    title: 'Cách tìm ý tưởng tổ chức sự kiện phù hợp với người tham dự',
    excerpt: 'Khung chọn ý tưởng theo mục tiêu, đối tượng, không gian và nguồn lực để tránh sao chép xu hướng thiếu phù hợp.',
    lead: 'Ý tưởng sự kiện tốt giải quyết một nhu cầu cụ thể của người tham dự. Thay vì bắt đầu bằng danh sách hoạt động thật dài, hãy xác định mục tiêu, trải nghiệm mong muốn và điều kiện có thể triển khai.',
    sections: [
      { heading: 'Bắt đầu từ một câu hỏi về trải nghiệm', paragraphs: ['Hỏi người tham dự cần cảm thấy, hiểu hoặc làm được điều gì sau chương trình. Một hoạt động gắn kết nội bộ, một buổi chia sẻ chuyên môn và một ngày hội cộng đồng cần ý tưởng khác nhau.', 'Thu thập giới hạn về tuổi, số lượng, thời gian, địa điểm, ngân sách và mức độ vận động. Các giới hạn này giúp chọn ý tưởng phù hợp thay vì loại bỏ chúng vào phút cuối.'] },
      { heading: 'Chọn ý tưởng theo nhóm mục tiêu', paragraphs: ['Với cộng đồng, cân nhắc hoạt động mở, dễ tham gia và có khu vực cho nhiều lứa tuổi. Với doanh nghiệp, chọn trải nghiệm gắn với thông điệp hoặc mục tiêu gặp gỡ. Với giáo dục, kết hợp nội dung học với thao tác thực hành có hướng dẫn.', 'Có thể tạo điểm nhấn từ cách sắp xếp hành trình, câu chuyện, vai trò người tham dự hoặc sự kết hợp giữa hoạt động sân khấu và trải nghiệm. Ý tưởng không nhất thiết cần công nghệ phức tạp.'] },
      { heading: 'Kiểm tra tính khả thi trước khi chốt', paragraphs: ['Với mỗi ý tưởng, liệt kê địa điểm, nhân sự, vật tư, thời gian chuẩn bị, yêu cầu kỹ thuật và rủi ro. Nếu thiếu nguồn lực, tìm cách đơn giản hóa mà vẫn giữ mục tiêu chính.', 'Thử nghiệm một phần hoạt động hoặc dựng sơ đồ hành trình để phát hiện điểm ùn tắc. Kiểm tra quyền sử dụng âm nhạc, hình ảnh, thương hiệu và nội dung của bên thứ ba.'] },
      { heading: 'Biến ý tưởng thành brief triển khai', paragraphs: ['Mô tả concept trong vài câu, kèm đối tượng, mục tiêu, hoạt động chính, thời lượng và cách đánh giá. Sau đó, phát triển kịch bản, ngân sách, phân công và phương án dự phòng.', 'Lưu lại các giả định cần xác nhận. Một ý tưởng sáng tạo chỉ có thể thành công khi người thực hiện hiểu rõ yêu cầu và các điều kiện vận hành.'] },
    ],
  },
  {
    slug: 'event-la-gi-va-cac-loai-su-kien', category: 'Kiến thức sự kiện', date: '2026-09-25', updated: '2026-09-25', readingTime: '5 phút đọc', image: 'event-la-gi-va-cac-loai-su-kien', alt: 'Minh họa vector các nhóm loại hình sự kiện.',
    title: 'Event là gì? Các loại hình sự kiện phổ biến',
    excerpt: 'Giải thích khái niệm event và cách phân loại theo mục tiêu, đối tượng, hình thức và bối cảnh tổ chức.',
    lead: 'Event là một hoạt động được thiết kế để diễn ra trong thời gian và không gian xác định, với mục tiêu và nhóm người tham dự cụ thể. Quy mô có thể từ buổi gặp gỡ nhỏ đến chương trình cộng đồng, hội nghị hoặc giải thể thao.',
    sections: [
      { heading: 'Có thể phân loại event theo mục tiêu', paragraphs: ['Sự kiện doanh nghiệp thường phục vụ truyền thông, ra mắt sản phẩm, hội nghị khách hàng hoặc gắn kết nội bộ. Sự kiện cộng đồng tạo cơ hội gặp gỡ và tham gia hoạt động chung; sự kiện thể thao xoay quanh thi đấu, vận động hoặc cổ vũ.', 'Một chương trình có thể phục vụ nhiều mục tiêu, nhưng cần chọn mục tiêu chính để quyết định nội dung, ngân sách và cách đánh giá.'] },
      { heading: 'Phân loại theo cách tổ chức', paragraphs: ['Sự kiện trực tiếp diễn ra tại địa điểm cụ thể; sự kiện trực tuyến kết nối người tham gia qua nền tảng số; sự kiện kết hợp có cả trải nghiệm tại chỗ và từ xa. Mỗi hình thức kéo theo yêu cầu khác nhau về kỹ thuật, điều phối và khả năng tiếp cận.', 'Có thể phân loại thêm theo quy mô, thời lượng, tính định kỳ, đối tượng hoặc địa điểm trong nhà/ngoài trời. Những nhóm này giúp lập kế hoạch, không phải tiêu chuẩn cứng áp dụng cho mọi sự kiện.'] },
      { heading: 'Một event thường gồm những thành phần nào?', paragraphs: ['Thông thường cần mục tiêu, người tham dự, nội dung, địa điểm/nền tảng, lịch trình, nhân sự, thiết bị, ngân sách, truyền thông và phương án an toàn. Mức độ chi tiết phụ thuộc tính chất chương trình.', 'Người tổ chức cần kết nối các thành phần này thành một trải nghiệm liền mạch, từ lúc khách nhận thông tin đến khi chương trình kết thúc.'] },
      { heading: 'Bắt đầu tổ chức event như thế nào?', paragraphs: ['Viết brief ngắn gồm mục tiêu, đối tượng, thời gian, địa điểm, số lượng dự kiến và ngân sách. Tiếp theo, xác định phạm vi, tiến độ và các thông tin cần khảo sát.', 'Khi nội dung, địa điểm hoặc kỹ thuật còn chưa rõ, ghi nhận giả định và người chịu trách nhiệm xác nhận. Điều đó giúp giảm thay đổi bất ngờ trong quá trình chuẩn bị.'] },
    ],
  },
  {
    slug: 'nghe-to-chuc-su-kien', category: 'Nghề nghiệp sự kiện', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'nghe-to-chuc-su-kien', alt: 'Minh họa vector nhân sự sự kiện đang xem checklist công việc.',
    title: 'Nghề tổ chức sự kiện: vai trò, kỹ năng và công việc thực tế',
    excerpt: 'Tổng quan công việc của nhân viên sự kiện, điều phối, sản xuất, kỹ thuật và những kỹ năng cần rèn luyện.',
    lead: 'Ngành tổ chức sự kiện gồm nhiều vai trò phối hợp, từ lập kế hoạch và nội dung đến kỹ thuật, hậu cần và điều phối tại hiện trường. Công việc thường thay đổi theo từng chương trình; giờ làm và yêu cầu cụ thể cần được trao đổi với đơn vị tuyển dụng.',
    sections: [
      { heading: 'Các vai trò thường gặp', paragraphs: ['Điều phối viên theo dõi tiến độ và kết nối các nhóm; nhân sự sản xuất chuẩn bị vật tư và mặt bằng; nhóm nội dung phát triển kịch bản; kỹ thuật phụ trách âm thanh, ánh sáng, hình ảnh; lễ tân hướng dẫn người tham dự.', 'Ở chương trình nhỏ, một người có thể đảm nhận nhiều phần việc. Với sự kiện nhiều khu vực, trách nhiệm được chia rõ hơn để không bỏ sót các điểm bàn giao.'] },
      { heading: 'Công việc tại hiện trường gồm những gì?', paragraphs: ['Trước khi mở cửa, đội ngũ có thể kiểm tra thiết bị, biển chỉ dẫn, danh sách khách và khu vực hoạt động. Trong chương trình, nhân sự thực hiện run sheet, cập nhật thay đổi và giữ liên lạc với đầu mối.', 'Sau khi kết thúc, cần bàn giao vật tư, kiểm kê, tháo dỡ theo quy định địa điểm và ghi lại các vấn đề để tổng kết. Công việc có thể đòi hỏi đứng lâu, di chuyển nhiều hoặc làm theo ca; ứng viên nên xác nhận điều kiện cụ thể trước khi nhận việc.'] },
      { heading: 'Kỹ năng nên rèn luyện', paragraphs: ['Giao tiếp rõ ràng, đúng giờ, ghi chép, làm việc nhóm và xử lý ưu tiên là nền tảng. Tùy vị trí, có thể cần kỹ năng sơ đồ, bảng tính, viết kịch bản, thiết bị kỹ thuật, ngoại ngữ hoặc kiến thức an toàn.', 'Người mới có thể bắt đầu bằng việc tham gia chương trình nhỏ, làm tình nguyện có tổ chức hoặc học quy trình cơ bản. Hãy xin phản hồi sau mỗi lần tham gia và ghi lại kinh nghiệm theo đầu việc cụ thể.'] },
      { heading: 'Cách tìm cơ hội phù hợp', paragraphs: ['Đọc kỹ mô tả công việc, thời gian, địa điểm, nhiệm vụ, yêu cầu thể lực và cách tính thù lao. Xác minh đơn vị tuyển dụng và thỏa thuận trách nhiệm, ca làm, chi phí đi lại cùng đầu mối liên hệ trước khi nhận việc.', 'Bài viết cung cấp thông tin nghề nghiệp chung, không phải thông báo tuyển dụng của Your Dreams. Cơ hội cụ thể chỉ được công bố trên kênh chính thức khi doanh nghiệp xác nhận vị trí đang tuyển.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-tuyen-dung', category: 'Sự kiện doanh nghiệp', date: '2026-09-25', updated: '2026-09-25', readingTime: '6 phút đọc', image: 'to-chuc-su-kien-tuyen-dung', alt: 'Minh họa vector gian tư vấn tại sự kiện tuyển dụng.',
    title: 'Cách tổ chức sự kiện tuyển dụng và ngày hội việc làm',
    excerpt: 'Lập kế hoạch ngày hội tuyển dụng từ mục tiêu, doanh nghiệp tham gia đến luồng ứng viên và cách đánh giá kết quả.',
    lead: 'Sự kiện tuyển dụng cần giúp ứng viên tìm thông tin và trao đổi với nhà tuyển dụng thuận tiện. Hãy thiết kế luồng tham dự rõ ràng và thống nhất trước cách thu thập, sử dụng dữ liệu ứng viên.',
    sections: [
      { heading: 'Xác định mục tiêu và nhóm ứng viên', paragraphs: ['Làm rõ chương trình cần tăng nhận biết tuyển dụng, gặp ứng viên cho một số vị trí hay kết nối trường học với doanh nghiệp. Mục tiêu quyết định quy mô, nội dung sân khấu và cách đo kết quả.', 'Xác định ngành nghề, cấp độ, yêu cầu tiếp cận và thông tin ứng viên cần biết trước khi tham gia. Tránh quảng bá vị trí chưa được nhà tuyển dụng xác nhận.'] },
      { heading: 'Thiết kế luồng sự kiện', paragraphs: ['Lập sơ đồ check-in, khu vực doanh nghiệp, tư vấn, phỏng vấn nhanh, sân khấu và nghỉ ngơi. Biển hướng dẫn cần nêu rõ vị trí, lịch và cách nhận hỗ trợ.', 'Thống nhất với từng đơn vị tham gia về gian hàng, nhân sự, thiết bị, mô tả vị trí và khung giờ. Chuẩn bị phương án khi khách đến đông hoặc lịch phỏng vấn thay đổi.'] },
      { heading: 'Bảo vệ thông tin người tham dự', paragraphs: ['Thông báo mục đích thu thập dữ liệu, đơn vị tiếp nhận, cách sử dụng và kênh liên hệ. Chỉ chia sẻ hồ sơ cho tổ chức phù hợp với thông báo và sự đồng ý của ứng viên.', 'Kiểm tra biểu mẫu, quyền truy cập, thời gian lưu giữ và cách xử lý bản giấy. Hướng dẫn nhân sự tại chỗ không chụp hoặc phát tán dữ liệu ngoài quy trình.'] },
      { heading: 'Đánh giá kết quả', paragraphs: ['Chọn chỉ số theo mục tiêu như số người tham dự, lượt trao đổi hoặc số buổi phỏng vấn được xác nhận. Dữ liệu tuyển dụng cần được các đơn vị tham gia tổng hợp theo cùng định nghĩa.', 'Thu thập phản hồi và ghi nhận điểm nghẽn trong luồng di chuyển. Không sử dụng tỷ lệ chuyển đổi nếu chưa có dữ liệu theo dõi đáng tin cậy.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-bang-tieng-anh', category: 'Kinh nghiệm tổ chức', date: '2026-09-25', updated: '2026-09-25', readingTime: '6 phút đọc', image: 'to-chuc-su-kien-bang-tieng-anh', alt: 'Minh họa vector hai luồng hội thoại trong sự kiện song ngữ.',
    title: 'Tổ chức sự kiện song ngữ: chuẩn bị nội dung và vận hành',
    excerpt: 'Các bước thống nhất ngôn ngữ, kịch bản, tài liệu, phiên dịch và thông tin dành cho khách quốc tế.',
    lead: 'Sự kiện song ngữ cần thống nhất từ lời mời đến kịch bản sân khấu và thông tin tại địa điểm. Dịch đúng thuật ngữ quan trọng, nhưng trải nghiệm chỉ liền mạch khi thời lượng, thiết bị và người phụ trách cũng được chuẩn bị.',
    sections: [
      { heading: 'Chọn ngôn ngữ theo nhóm người tham dự', paragraphs: ['Xác định nhóm khách cần hỗ trợ ngôn ngữ nào và họ sẽ tham gia phần nào. Có thể dùng tài liệu song ngữ, phiên dịch nối tiếp hoặc thiết bị phiên dịch tùy quy mô và hình thức chương trình.', 'Thống nhất cách viết tên riêng, chức danh, tên sản phẩm và thuật ngữ chuyên ngành. Gửi nội dung cập nhật cho người dịch trước khi tổng duyệt.'] },
      { heading: 'Biên soạn kịch bản và tài liệu', paragraphs: ['Kịch bản nên ghi rõ ngôn ngữ của từng phần, người phát biểu, tên đọc, thời lượng dự kiến và tín hiệu chuyển phần. Tránh đưa câu quá dài hoặc thành ngữ khó dịch trực tiếp.', 'Chuẩn bị slide, biển chỉ dẫn, thư mời và hướng dẫn tham dự theo ngôn ngữ cần thiết. Kiểm tra bản dịch trên thiết bị thật và ở khoảng cách người tham dự sẽ đọc.'] },
      { heading: 'Kiểm tra kỹ thuật và diễn tập', paragraphs: ['Nếu dùng phiên dịch đồng thời, kiểm tra tai nghe, kênh âm thanh, micro, vùng phủ sóng và thiết bị dự phòng. Với livestream, xác định cách chọn ngôn ngữ và phụ đề trên nền tảng.', 'Tổ chức diễn tập có MC, phiên dịch, kỹ thuật và diễn giả. Dành khoảng đệm cho phần dịch và chuẩn bị cách xử lý khi diễn giả thay đổi nội dung.'] },
      { heading: 'Làm rõ năng lực cung ứng', paragraphs: ['Nhu cầu MC, phiên dịch và nhân sự song ngữ cần được xác nhận theo ngôn ngữ, lĩnh vực, lịch làm việc và yêu cầu chuyên môn. Không nên khẳng định nhân sự cụ thể trước khi xác nhận hồ sơ và khả năng tham gia.', 'Gửi brief gồm thời gian, địa điểm, ngôn ngữ, quy mô, nội dung và hình thức để đơn vị tổ chức đề xuất phương án phù hợp.'] },
    ],
  },
  {
    slug: 'to-chuc-giai-pickleball', category: 'Sự kiện thể thao', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'to-chuc-giai-pickleball', alt: 'Minh họa vector sân pickleball, vợt và bóng.',
    title: 'Cách tổ chức giải hoặc lớp pickleball cho cộng đồng',
    excerpt: 'Chuẩn bị thể thức, sân bãi, lịch, đăng ký, trọng tài, thiết bị, an toàn và điều phối cho hoạt động pickleball.',
    lead: 'Giải pickleball cần thể thức dễ hiểu, lịch thi đấu khả thi và sân phù hợp số người tham gia. Trước khi mở đăng ký, hãy xác nhận quy định địa điểm, năng lực điều phối và cách xử lý lịch khi trận đấu kéo dài.',
    sections: [
      { heading: 'Chọn mục tiêu và thể thức', paragraphs: ['Xác định chương trình là buổi trải nghiệm, lớp học hay giải thi đấu. Chọn nhóm trình độ, nội dung đơn/đôi, cách chia bảng và phương pháp tính kết quả phù hợp với mục tiêu.', 'Thể lệ cần nêu điều kiện tham gia, thời lượng, trang phục/thiết bị cần thiết, cách xử lý hòa và lịch dự kiến. Nếu có nhóm mới bắt đầu, tách hướng dẫn cơ bản khỏi phần thi đấu.'] },
      { heading: 'Khảo sát sân và lập lịch', paragraphs: ['Kiểm tra số sân, kích thước và tình trạng mặt sân, ánh sáng, khu nghỉ, nhà vệ sinh, nước uống và lối đi. Hỏi quy định đặt sân, thời gian chuyển trận và cách xử lý khi thời tiết không thuận lợi.', 'Ước lượng thời gian trận dựa trên thể thức và số đội, cộng khoảng đệm cho check-in, khởi động và trao giải. Công bố lịch cùng đầu mối cập nhật thay đổi.'] },
      { heading: 'Đăng ký, nhân sự và thiết bị', paragraphs: ['Biểu mẫu đăng ký cần thu thập thông tin cần thiết, công bố cách sử dụng dữ liệu và hạn chót thay đổi đội. Xác nhận danh sách trước ngày diễn ra để tránh trùng hoặc bỏ sót lượt.', 'Phân công điều phối, trọng tài, bàn điểm, y tế và người hướng dẫn. Kiểm tra vợt, bóng, lưới, bảng điểm, âm thanh thông báo và vật phẩm theo phạm vi chương trình.'] },
      { heading: 'An toàn và trải nghiệm người chơi', paragraphs: ['Phổ biến quy tắc sân, khu vực chờ, cách gọi hỗ trợ và hướng dẫn khởi động. Giữ lối đi thông thoáng, kiểm tra mặt sân trước mỗi lượt và bố trí nước uống, nghỉ ngơi phù hợp.', 'Sau giải, tổng hợp kết quả từ bảng điểm đã được xác nhận, thu phản hồi và ghi lại các điều cần thay đổi. Không công bố số liệu hoặc thành tích nếu chưa đối chiếu với hồ sơ cuộc thi.'] },
    ],
  },
  {
    slug: 'to-chuc-giai-boi-cho-doanh-nghiep', category: 'Sự kiện thể thao', date: '2026-09-25', updated: '2026-09-25', readingTime: '7 phút đọc', image: 'to-chuc-giai-boi-cho-doanh-nghiep', alt: 'Minh họa vector vận động viên bơi trong đường bơi, không phải ảnh giải đấu thực tế.',
    title: 'Tổ chức giải bơi cho doanh nghiệp: kế hoạch và an toàn',
    excerpt: 'Hướng dẫn lên thể lệ, phân nhóm, lịch thi đấu, cứu hộ, y tế và luồng vận động viên cho ngày hội bơi.',
    lead: 'Giải bơi doanh nghiệp cần đặt an toàn dưới nước lên trước trải nghiệm thi đấu. Quy mô, nội dung và nhân sự cứu hộ phải được quyết định sau khi khảo sát hồ bơi và làm việc với đơn vị quản lý địa điểm.',
    sections: [
      { heading: 'Xác định nhóm người tham gia và nội dung', paragraphs: ['Làm rõ độ tuổi, khả năng bơi, kinh nghiệm thi đấu và mục tiêu chương trình. Chọn cự ly, kiểu bơi, nội dung tiếp sức hoặc phần trải nghiệm theo năng lực người tham gia.', 'Thể lệ cần ghi điều kiện đăng ký, cách phân nhóm, giờ có mặt, trang phục, quy tắc xuất phát và xử lý khi vận động viên không đáp ứng điều kiện an toàn.'] },
      { heading: 'Làm việc với hồ bơi và bộ phận an toàn', paragraphs: ['Khảo sát số làn, độ sâu, khu vực lên xuống, phòng thay đồ, khán giả và lối vận chuyển. Xác định rõ quy định vận hành của hồ bơi và người có thẩm quyền dừng hoạt động.', 'Lập phương án cứu hộ và y tế cùng đơn vị địa điểm, phân công người trực, thiết bị sẵn có, tín hiệu khẩn cấp và cách giữ khu vực quanh hồ không bị ùn tắc. Nhu cầu nhân sự phải theo đánh giá rủi ro thực tế.'] },
      { heading: 'Thiết kế lịch thi đấu và luồng di chuyển', paragraphs: ['Tạo lịch theo nội dung và nhóm tuổi, dự kiến thời gian nghỉ, khởi động và trao giải. Không xếp lịch quá dày khiến vận động viên phải di chuyển vội giữa khu vực chờ và làn bơi.', 'Dùng bảng thông tin và nhân sự hướng dẫn để người tham dự biết vị trí tập trung, thứ tự thi đấu, điểm nhận kết quả và khu vực dành cho khán giả.'] },
      { heading: 'Tổng duyệt và tổng kết', paragraphs: ['Trước khi mở cửa, kiểm tra danh sách, bảng điểm, âm thanh, tín hiệu xuất phát, lối đi và quy trình liên lạc giữa trọng tài, cứu hộ và điều phối.', 'Sau chương trình, đối chiếu kết quả trước khi công bố, ghi nhận sự cố hoặc điểm nghẽn và tổng hợp phản hồi. Website có case Kình ngư Quận biển Ocean City 2023 với ảnh tư liệu; thông tin từng mùa cần xác nhận riêng.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-khai-truong', category: 'Sự kiện doanh nghiệp', date: '2026-09-25', updated: '2026-09-25', readingTime: '6 phút đọc', image: 'to-chuc-su-kien-khai-truong', alt: 'Minh họa vector mặt tiền cửa hàng và trang trí cho lễ khai trương.',
    title: 'Hướng dẫn tổ chức sự kiện khai trương cửa hàng hoặc văn phòng',
    excerpt: 'Lập kế hoạch lễ khai trương từ mục tiêu, nghi thức, luồng khách, vận hành mặt bằng đến truyền thông.',
    lead: 'Lễ khai trương cần tạo điều kiện để khách hiểu đơn vị mới, tiếp cận không gian và tham gia hoạt động theo cách thuận tiện. Nghi thức, trang trí và truyền thông nên phục vụ mục tiêu kinh doanh, không làm cản trở hoạt động của địa điểm.',
    sections: [
      { heading: 'Chốt mục tiêu và khách mời', paragraphs: ['Xác định chương trình hướng đến khách hàng, đối tác, truyền thông hay cộng đồng quanh địa điểm. Lập danh sách khách theo nhóm và xác định thông tin mỗi nhóm cần nhận.', 'Chọn thời lượng, thời điểm mở cửa, thông điệp chính và các hoạt động như phát biểu, cắt băng, tham quan hoặc trải nghiệm sản phẩm.'] },
      { heading: 'Khảo sát mặt bằng và luồng khách', paragraphs: ['Kiểm tra sức chứa, lối vào/ra, điểm đón khách, khu vực nghi thức, chỗ đặt thiết bị và khu vực hoạt động thường ngày. Làm rõ quy định tòa nhà, biển hiệu, âm thanh, điện và thời gian thi công.', 'Thiết kế luồng khách để check-in, xem nghi thức, trải nghiệm và rời địa điểm không giao cắt nguy hiểm. Với không gian nhỏ, có thể chia khung giờ hoặc giới hạn khách mời.'] },
      { heading: 'Chuẩn bị kịch bản và phương án dự phòng', paragraphs: ['Kịch bản ghi rõ người phát biểu, thời lượng, tín hiệu âm thanh, thứ tự nghi thức, người phụ trách và cách chuyển sang hoạt động tiếp theo. Kiểm tra tên, chức danh và phát âm trước khi in tài liệu.', 'Lập phương án cho mưa, thiết bị lỗi, khách đến đông hoặc lịch thay đổi. Thống nhất ai có quyền điều chỉnh chương trình và cách thông báo cho khách.'] },
      { heading: 'Truyền thông và đánh giá', paragraphs: ['Lời mời cần có thời gian, địa chỉ, cách đăng ký và hướng dẫn di chuyển. Sau sự kiện, chia sẻ nội dung đã được duyệt và chỉ sử dụng hình ảnh theo quyền đã thống nhất.', 'Đánh giá số khách tham dự, hoạt động được quan tâm và phản hồi theo mục tiêu đã đặt. Không khẳng định hiệu quả bán hàng nếu chưa có dữ liệu theo dõi.'] },
    ],
  },
  {
    slug: 'to-chuc-su-kien-sinh-nhat', category: 'Sự kiện cộng đồng', date: '2026-09-25', updated: '2026-09-25', readingTime: '5 phút đọc', image: 'to-chuc-su-kien-sinh-nhat', alt: 'Minh họa vector bánh sinh nhật, nến và bóng bay.',
    title: 'Cách lên kế hoạch tổ chức tiệc sinh nhật phù hợp',
    excerpt: 'Chọn quy mô, chủ đề, địa điểm, lời mời và hoạt động theo người được tổ chức sinh nhật và nhóm khách tham dự.',
    lead: 'Một buổi sinh nhật phù hợp không cần nhiều hạng mục; cần đúng với người được chúc mừng và khách tham dự. Xác định ngân sách, thời lượng và địa điểm trước khi chọn chủ đề giúp kế hoạch dễ kiểm soát hơn.',
    sections: [
      { heading: 'Chọn quy mô và ngân sách', paragraphs: ['Ước lượng số khách, độ tuổi, thời gian có thể tham dự và hình thức mong muốn. Tách các khoản như địa điểm, đồ ăn, trang trí, hoạt động, quà tặng và chụp ảnh.', 'Ưu tiên một vài điểm người tổ chức thực sự quan tâm. Nếu ngân sách giới hạn, giảm số hạng mục hoặc quy mô trước khi bỏ phần an toàn và sự thuận tiện.'] },
      { heading: 'Chọn chủ đề và địa điểm', paragraphs: ['Chủ đề có thể bắt nguồn từ sở thích, màu sắc hoặc hoạt động chính. Địa điểm cần đủ chỗ cho khách, thuận tiện đi lại và có điều kiện phù hợp với chương trình.', 'Với sinh nhật trẻ em, kiểm tra khu vực hoạt động, vật liệu trang trí, thực phẩm và cách giám sát. Hạn chế vật nhỏ hoặc trò chơi không phù hợp lứa tuổi.'] },
      { heading: 'Lập lịch chương trình', paragraphs: ['Một lịch ngắn có thể gồm đón khách, hoạt động làm quen, phần chúc mừng, ăn uống, trò chơi và kết thúc. Chừa thời gian linh hoạt để người tham dự không phải vội giữa các phần.', 'Gửi lời mời với thời gian, địa chỉ, cách xác nhận và thông tin cần lưu ý. Nếu khách cần chuẩn bị trang phục hoặc tham gia hoạt động, báo trước rõ ràng.'] },
      { heading: 'Chuẩn bị ngày diễn ra', paragraphs: ['Kiểm tra đặt chỗ, đồ dùng, âm thanh, bánh và người phụ trách từng phần. Có phương án nếu trời mưa, khách đến trễ hoặc hoạt động không phù hợp với nhóm khách.', 'Sau buổi tiệc, gửi lời cảm ơn và chia sẻ ảnh theo sự đồng ý của người xuất hiện trong ảnh.'] },
    ],
  },
];
export type PostItem = typeof posts[number];

export function postImagePath(post: Pick<PostItem, 'image'>) {
  return `/images/${post.image}.webp`;
}
