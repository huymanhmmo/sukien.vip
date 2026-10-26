export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updated: string;
  image: string;
  alt: string;
  readingTime: string;
  lead: string;
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
    table?: { headers: string[]; rows: string[][] };
    answerCapsule?: string;
    image?: { src: string; alt: string; caption?: string };
  }[];
};

export const posts: Post[] = [
  // 1. CHECKLIST LẬP KẾ HOẠCH SỰ KIỆN
  {
    slug: 'checklist-lap-ke-hoach-su-kien',
    category: 'Kế hoạch sự kiện',
    date: '2026-09-20',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'happy-run',
    alt: 'Toàn cảnh vận động viên hào hứng tại vạch xuất phát giải chạy do Your Dreams điều phối',
    title: 'Checklist lập kế hoạch sự kiện: Bắt đầu từ đâu để không bỏ sót?',
    excerpt: 'Checklist 5 giai đoạn lập kế hoạch sự kiện toàn diện từ xác định mục tiêu, dự toán ngân sách, khảo sát mặt bằng, tổng duyệt run-sheet đến quản trị rủi ro.',
    lead: 'Kế hoạch sự kiện không đơn thuần là một danh sách việc cần làm (to-do list). Đó là bản đồ chiến lược định hướng toàn bộ nhân sự cùng nhìn về một mục tiêu, phân bổ nguồn lực chính xác và dự phòng trước mọi biến động hiện trường.',
    sections: [
      {
        heading: 'Checklist lập kế hoạch sự kiện là gì?',
        answerCapsule: 'Checklist lập kế hoạch sự kiện là bảng kiểm soát tiến độ chuẩn hóa gồm 5 giai đoạn: Xác định mục tiêu & Brief (Giai đoạn 1), Thiết kế concept & Dự toán ngân sách (Giai đoạn 2), Khảo sát địa điểm & Ký kết hợp đồng (Giai đoạn 3), Sản xuất thi công & Tổng duyệt (Giai đoạn 4), và Vận hành ngày diễn ra & Nghiệm thu (Giai đoạn 5). Áp dụng checklist giúp loại bỏ 95% sai sót hiện trường.',
        paragraphs: [
          'Trong ngành tổ chức sự kiện chuyên nghiệp, một sai sót nhỏ ở khâu chuẩn bị có thể dẫn đến sự cố nghiêm trọng vào ngày diễn ra: từ mất điện sân khấu, thiếu thiết bị micro, ách tắc luồng khách mời cho đến phát sinh chi phí ngoài tầm kiểm soát.',
          'Bằng kinh nghiệm hơn 5 năm triển khai hàng trăm sự kiện quy mô từ 50 đến hàng ngàn người, Your Dreams tổng hợp bảng checklist tiêu chuẩn giúp ban tổ chức kiểm soát chặt chẽ từng điểm chạm.',
        ],
      },
      {
        heading: 'Khung checklist 5 giai đoạn tổ chức sự kiện chuyên nghiệp',
        paragraphs: [
          'Dưới đây là bảng phân rã các đầu mục công việc tương ứng với mốc thời gian trước ngày diễn ra sự kiện:',
        ],
        table: {
          headers: ['Giai đoạn', 'Thời gian trước sự kiện', 'Đầu mục công việc cốt lõi', 'Đầu ra nghiệm thu (Deliverables)'],
          rows: [
            ['Giai đoạn 1: Khởi động', 'Trước 6 – 8 tuần', 'Xác định mục tiêu, thông điệp chính, quy mô khách và ngân sách trần', 'Bản Brief sự kiện hoàn chỉnh được phê duyệt'],
            ['Giai đoạn 2: Lập kế hoạch', 'Trước 4 – 6 tuần', 'Khảo sát địa điểm, xây dựng concept visual, dự toán chi phí bóc tách', 'Kế hoạch tổng thể (Master Plan) & Báo giá chi tiết'],
            ['Giai đoạn 3: Chuẩn bị & Sản xuất', 'Trước 2 – 4 tuần', 'Ký hợp đồng, xin giấy phép tổ chức, đặt cọc thiết bị, sản xuất ấn phẩm', 'Giấy phép hợp lệ, maket thiết kế 3D được duyệt'],
            ['Giai đoạn 4: Tổng duyệt (Rehearsal)', 'Trước 24 – 48 giờ', 'Lắp đặt nhà giàn, căn chỉnh âm thanh FOH, diễn tập kịch bản cùng MC', 'Bản Run-sheet từng phút & Biên bản test kỹ thuật'],
            ['Giai đoạn 5: Vận hành & Báo cáo', 'Ngày D-Day và sau đó', 'Điều phối đón khách, kiểm soát timeline, tháo dỡ hoàn trả mặt bằng', 'Báo cáo tổng kết, kho ảnh tư liệu và nghiệm thu thanh lý'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-chuyen-nghiep.webp',
          alt: 'Sơ đồ minh họa quy trình phối hợp nhịp nhàng giữa các bộ phận trong ban tổ chức sự kiện',
          caption: 'Quy trình phối hợp khép kín giữa Ban chỉ đạo, Quản lý hiện trường và Đội ngũ kỹ thuật FOH.',
        },
      },
      {
        heading: '10 Điểm kiểm tra an toàn bắt buộc trước giờ G',
        paragraphs: [
          'An toàn là ưu tiên số một trong mọi chương trình. Trước khi mở cửa đón khách, Stage Manager bắt buộc phải rà soát 10 điểm an toàn sau:',
        ],
        list: [
          'Độ chắc chắn của khung giàn không gian, chân đế sân khấu và các điểm neo giằng chống gió lật.',
          'Hệ thống điện: tủ điện tổng có aptomat chống giật, dây cáp đi qua lối đi được bọc nẹp cao su bảo vệ.',
          'Âm thanh ánh sáng: micro dự phòng đã lắp pin mới, đèn follow và màn hình LED chạy thử không chớp nháy.',
          'Lối thoát hiểm và phòng cháy: bình chữa cháy khí CO2 đặt sẵn tại khu vực kỹ thuật FOH và cánh gà.',
          'Đội ngũ y tế sơ cứu: hộp sơ cứu cơ bản, nhân viên y tế có mặt tại vị trí thường trực.',
          'Kênh liên lạc nội bộ: bộ đàm của tất cả các trưởng bộ phận đã set cùng kênh và test sóng rõ nét.',
          'Đón tiếp & Check-in: danh sách khách mời, mã QR quét thẻ, quà tặng đón tiếp đã sẵn sàng.',
          'Kịch bản MC & Âm nhạc: file nhạc nghi thức, video clip chiếu màn LED đã copy vào 2 laptop độc lập.',
          'Phương án thời tiết dự phòng: bạt che, áo mưa tiện lợi, phương án di dời vào nhà khi mưa to.',
          'Vệ sinh môi trường: thùng rác phân loại bố trí đều các góc, lối đi sạch sẽ không rác thải thi công.',
        ],
        image: {
          src: '/images/sports-day.webp',
          alt: 'Kiểm tra sân bãi và phân luồng an toàn tại sự kiện thể thao ngoài trời',
          caption: 'Khảo sát hiện trường và phân luồng an toàn cho vận động viên trước giờ thi đấu.',
        },
      },
      {
        heading: 'Kinh nghiệm tổng kết để sự kiện lần sau hoàn thiện hơn',
        paragraphs: [
          'Ngay sau khi chương trình khép lại, đừng vội giải tán ban tổ chức. Hãy dành 30 phút họp rút kinh nghiệm nhanh (Quick Debriefing) tại hiện trường với 3 câu hỏi cốt lõi: Điều gì đã làm rất tốt? Khâu nào bị chậm timeline và nguyên nhân từ đâu? Phát sinh nào cần đưa vào cẩm nang cảnh báo cho sự kiện tiếp theo?',
          'Toàn bộ tài liệu gồm run-sheet thực tế, bản vẽ kỹ thuật, danh sách liên hệ nhà cung cấp và kho ảnh tư liệu cần được lưu trữ có hệ thống trên Cloud để làm tài sản tri thức cho những mùa tổ chức sau.',
        ],
      },
    ],
  },

  // 2. SƠ ĐỒ TỔ CHỨC SỰ KIỆN
  {
    slug: 'so-do-to-chuc-su-kien',
    category: 'Kế hoạch sự kiện',
    date: '2026-10-24',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'to-chuc-su-kien-chuyen-nghiep',
    alt: 'Minh họa sơ đồ tổ chức sự kiện và sơ đồ nhân sự ban tổ chức hiện trường',
    title: 'Sơ đồ tổ chức sự kiện & sơ đồ nhân sự: Mẫu chuẩn và cách phân công',
    excerpt: 'Hướng dẫn xây dựng sơ đồ tổ chức sự kiện, sơ đồ nhân sự ban tổ chức 4 cấp, ma trận trách nhiệm RACI và layout phân khu mặt bằng giúp kiểm soát rủi ro và vận hành trơn tru.',
    lead: 'Một sơ đồ tổ chức sự kiện chuẩn xác là bộ khung định hình chuỗi chỉ huy, phân định rõ ràng trách nhiệm từng vị trí và thiết lập luồng vận hành không xung đột từ khâu chuẩn bị đến khi sự kiện khép lại.',
    sections: [
      {
        heading: 'Sơ đồ tổ chức sự kiện là gì và vì sao cần thiết?',
        answerCapsule: 'Sơ đồ tổ chức sự kiện là bản vẽ trực quan mô tả cơ cấu phân cấp nhân sự, chuỗi chỉ huy và luồng thông tin giữa các bộ phận trong ban tổ chức (từ Ban chỉ đạo, Quản lý điều phối, Kỹ thuật FOH, Lễ tân đến Hậu cần). Sơ đồ nhân sự sự kiện giúp loại bỏ sự chồng chéo quyền hạn, tối ưu hóa thời gian xử lý sự cố hiện trường và đảm bảo tiến độ run-sheet được thực thi chính xác.',
        paragraphs: [
          'Trong bất kỳ sự kiện nào từ 50 đến hàng ngàn người, nếu thiếu sơ đồ tổ chức mạch lạc, ban tổ chức rất dễ gặp tình trạng nhiều người cùng chỉ đạo một việc trong khi việc quan trọng khác lại bị bỏ quên.',
          'Một hệ thống sơ đồ toàn diện gồm hai phần song hành: Sơ đồ cơ cấu tổ chức nhân sự (Event Hierarchy) và Sơ đồ phân khu mặt bằng không gian (Event Site Layout).',
        ],
      },
      {
        heading: 'Cơ cấu 4 cấp trong sơ đồ nhân sự sự kiện chuẩn',
        paragraphs: [
          'Tùy theo quy mô chương trình, mô hình phân cấp nhân sự chuẩn trong ngành sự kiện được chia thành 4 tầng rõ rệt:',
        ],
        table: {
          headers: ['Tầng cơ cấu', 'Vị trí đảm nhiệm', 'Nhiệm vụ cốt lõi', 'Quyền hạn quyết định'],
          rows: [
            ['Cấp 1: Ban Chỉ Đạo', 'Event Director / Trưởng BTC', 'Xác định mục tiêu, phê duyệt ngân sách, thông qua kịch bản khung và đưa ra quyết định tối cao khi có rủi ro lớn.', 'Quyết định cao nhất về ngân sách và nội dung'],
            ['Cấp 2: Quản Lý Hiện Trường', 'Event Manager / Stage Manager', 'Điều phối toàn bộ timeline theo run-sheet, chỉ huy các trưởng bộ phận, kiểm soát tiến độ tổng duyệt và xử lý phát sinh tức thời.', 'Toàn quyền điều hành hoạt động tại hiện trường'],
            ['Cấp 3: Trưởng Nhóm Chuyên Môn', 'Trưởng Kỹ thuật, Trưởng Lễ tân, Trưởng Hậu cần, Trưởng Media', 'Quản lý trực tiếp chuyên môn: âm thanh ánh sáng LED, đón tiếp khách mời, đạo cụ sân khấu, quay phim chụp hình.', 'Phân công nhiệm vụ cụ thể cho thành viên nhóm'],
            ['Cấp 4: Nhân Sự Thực Thi', 'Kỹ thuật viên, Lễ tân/PG, Tình nguyện viên, Y tế, An ninh', 'Triển khai công việc trực tiếp: đón khách, hỗ trợ trao giải, trực bàn điều khiển, hướng dẫn luồng di chuyển, sơ cứu y tế.', 'Thực hiện theo chỉ đạo của Trưởng nhóm'],
          ],
        },
        image: {
          src: '/images/nghe-to-chuc-su-kien.webp',
          alt: 'Đội ngũ điều phối viên sự kiện và nhân viên hiện trường phối hợp qua bộ đàm',
          caption: 'Ban điều phối hiện trường giữ vai trò kết nối trực tiếp giữa Ban chỉ đạo và các đội kỹ thuật.',
        },
      },
      {
        heading: 'Ma trận phân công trách nhiệm (RACI Matrix) trong sự kiện',
        paragraphs: [
          'Để không chồng chéo trách nhiệm, ban tổ chức nên áp dụng ma trận RACI (R - Responsible: người thực hiện; A - Accountable: người chịu trách nhiệm cuối cùng; C - Consulted: người đóng góp ý kiến; I - Informed: người được thông báo kết quả):',
        ],
        table: {
          headers: ['Hạng mục công việc', 'Trưởng BTC (A)', 'Quản lý hiện trường (R)', 'Kỹ thuật FOH', 'Lễ tân / PG', 'Đội Hậu cần'],
          rows: [
            ['Phê duyệt kịch bản & tiến độ', 'Accountable (Duyệt)', 'Responsible (Soạn thảo)', 'Consulted (Tư vấn kỹ thuật)', 'Informed (Nắm bắt)', 'Informed (Nắm bắt)'],
            ['Lắp đặt sân khấu & Âm thanh LED', 'Informed', 'Accountable', 'Responsible (Trực tiếp)', 'Informed', 'Responsible (Hỗ trợ bàn giao)'],
            ['Đón tiếp khách mời & Check-in', 'Consulted', 'Accountable', 'Informed', 'Responsible (Trực tiếp)', 'Responsible (Hậu cần teabreak)'],
            ['Nghi thức cắt băng / Khai mạc', 'Responsible (Chủ trì)', 'Accountable', 'Responsible (Hiệu ứng/Nhạc)', 'Responsible (Bưng khay/Kéo băng)', 'Responsible (Đạo cụ cắt băng)'],
            ['Ứng phó sự cố khẩn cấp & Y tế', 'Accountable (Phê duyệt PA)', 'Responsible (Xử lý ngay)', 'Responsible (Ngắt điện/Bảo vệ)', 'Informed', 'Responsible (Sơ cứu/Dẫn đường)'],
          ],
        },
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Điều phối nhân sự trọng tài và cứu hộ tại giải bơi Kình ngư Quận biển Ocean City',
          caption: 'Phân định luồng chỉ huy rõ ràng tại giải bơi cư dân Vinhomes Ocean Park giúp sự kiện diễn ra an toàn.',
        },
      },
      {
        heading: 'Sơ đồ phân khu mặt bằng sự kiện (Event Site Layout)',
        paragraphs: [
          'Bên cạnh con người, sơ đồ mặt bằng giúp phân định không gian chức năng hợp lý, đảm bảo an toàn PCCC và nâng cao trải nghiệm tham dự của khách mời:',
        ],
        list: [
          'Khu vực đón tiếp & Check-in: Bố trí tại lối vào chính, gồm bàn tiếp đón, khu chụp ảnh photobooth, khu vực gửi đồ và lối xếp hàng thông thoáng.',
          'Khu vực khán giả: Phân định rõ hàng ghế VIP (trung tâm, góc nhìn sân khấu tốt nhất) và khu vực khán giả thông thường.',
          'Khu vực Sân khấu chính: Gồm bục sân khấu, màn hình LED, cánh gà chuẩn bị cho MC/diễn giả và lối lên xuống hai bên thuận tiện.',
          'Bàn điều khiển kỹ thuật FOH (Front of House): Đặt thẳng tim sân khấu, cách sân khấu từ 15-25m để kỹ sư âm thanh ánh sáng bao quát toàn bộ hiệu ứng.',
          'Khu vực hậu cần, kho đạo cụ & phòng VIP: Đặt ở góc kín đáo, có lối tiếp cận riêng để chuyển đồ mà không đi qua đám đông khán giả.',
          'Hành lang an toàn & Lối thoát hiểm: Luôn giữ lối đi rộng tối thiểu 2-3m, thông thoáng, không để vật cản và có chỉ dẫn PCCC rõ ràng.',
        ],
      },
    ],
  },

  // 3. TỔ CHỨC NGÀY HỘI THỂ THAO CỘNG ĐỒNG
  {
    slug: 'to-chuc-ngay-hoi-the-thao-cong-dong',
    category: 'Sự kiện thể thao',
    date: '2026-09-12',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'sports-day',
    alt: 'Các đội tham gia ngày hội thể thao tại Diễn Châu, Nghệ An',
    title: 'Tổ chức ngày hội thể thao cộng đồng: Tạo sân chơi cho mọi độ tuổi',
    excerpt: 'Cẩm nang tổ chức ngày hội thể thao cộng đồng và Sports Day doanh nghiệp: lựa chọn môn thi đấu, thiết kế sơ đồ sân bãi, phân luồng vận động viên và đảm bảo an toàn.',
    lead: 'Một ngày hội thể thao cộng đồng thành công khi người mới bắt đầu cũng cảm thấy mình được chào đón. Đây là cơ hội để cư dân, đồng nghiệp và các gia đình cùng gặp gỡ, rèn luyện thể chất và nuôi dưỡng tinh thần gắn kết bền chặt.',
    sections: [
      {
        heading: 'Ngày hội thể thao cộng đồng là gì?',
        answerCapsule: 'Ngày hội thể thao cộng đồng (Sports Day / Family Day) là chuỗi sự kiện vận động ngoài trời kết hợp giữa các môn thi đấu phong trào (bóng đá, pickleball, kéo co, chạy tiếp sức) và khu trò chơi trải nghiệm cho trẻ em. Điểm mấu chốt là thiết kế thể thức thi đấu linh hoạt để mọi độ tuổi đều có thể tham gia và cổ vũ an toàn.',
        paragraphs: [
          'Khác với các giải đấu thể thao chuyên nghiệp nặng tính thắng thua, ngày hội thể thao cộng đồng hướng tới mục tiêu lan tỏa lối sống năng động và tạo điểm hẹn kết nối cư dân khu đô thị hoặc cán bộ nhân viên công ty.',
          'Tại Your Dreams, chúng tôi xây dựng mô hình ngày hội đa môn: từ các trận cầu nảy lửa trên sân cỏ nhân tạo, giải đấu pickleball thời thượng đến góc trò chơi dân gian cho các em nhỏ.',
        ],
      },
      {
        heading: 'Lựa chọn môn thể thao phù hợp với từng nhóm người tham gia',
        paragraphs: [
          'Để ngày hội không bị thiên lệch về một nhóm đối tượng, ban tổ chức nên phân bổ các bộ môn theo cơ cấu thể lực:',
        ],
        table: {
          headers: ['Nhóm môn thi đấu', 'Bộ môn tiêu biểu', 'Đối tượng phù hợp', 'Yêu cầu sân bãi & Thiết bị'],
          rows: [
            ['Thể thao đối kháng đồng đội', 'Bóng đá 7 người, Kéo co, Bóng chuyền hơi', 'Thanh niên, cán bộ nhân viên nam nữ', 'Sân cỏ nhân tạo hoặc sân đất nện, còi, dây kéo co chuẩn'],
            ['Thể thao thời thượng hiện đại', 'Pickleball đôi nam nữ, Cầu lông, Tennis', 'Người trung niên, người mới chơi thể thao', 'Sân cứng có lưới tiêu chuẩn, bóng và vợt thi đấu'],
            ['Hoạt động vận động trẻ em', 'Nhảy bao bố, Vượt chướng ngại vật hơi, Kéo co nhí', 'Trẻ em từ 5 đến 12 tuổi', 'Thảm cỏ mềm, cọc tiêu, đồ chơi bơm hơi an toàn'],
            ['Khu thư giãn & Trải nghiệm', 'Cờ vua khổng lồ, Yoga khởi động, Ném vòng', 'Người cao tuổi, phụ nữ có con nhỏ', 'Khu vực có mái che nhà bạt, thảm tập, bàn cờ gỗ'],
          ],
        },
        image: {
          src: '/images/happy-run.webp',
          alt: 'Không khí chạy bộ giao lưu hào hứng trong khuôn khổ ngày hội thể thao',
          caption: 'Chạy bộ phong trào là môn thi mở màn lý tưởng để khuấy động tinh thần toàn thể ngày hội.',
        },
      },
      {
        heading: 'Quy trình 4 bước kiểm soát an toàn mặt bằng sân bãi',
        paragraphs: [
          'Khi có hàng trăm người cùng vận động ở cường độ cao, khâu kiểm soát an toàn hiện trường phải được siết chặt:',
        ],
        list: [
          'Rà soát bề mặt sân: kiểm tra độ ma sát, san phẳng các hố lồi lõm trên sân cỏ, quét sạch cát sỏi trên sân pickleball/tennis để tránh trượt ngã.',
          'Trạm tiếp nước & Điện giải: bố trí bình nước uống và nước điện giải mát lạnh tại từng cụm sân thi đấu, có mái che che nắng.',
          'Đội ngũ sơ cứu chấn thương: nhân viên y tế trang bị sẵn bình xịt lạnh giảm đau, băng gạc cố định khớp, cáng cứu thương túc trực 100% thời gian.',
          'Phân luồng khán giả: sử dụng rào chắn mềm inox phân định khoảng cách an toàn tối thiểu 2m giữa đường biên thi đấu và khu vực khán đài cổ vũ.',
        ],
        image: {
          src: '/images/di-de-lon.webp',
          alt: 'Khu vực trò chơi vận động có người hướng dẫn an toàn cho trẻ em',
          caption: 'Khu vui chơi trẻ em luôn có nhân sự điều phối giám sát liên tục để phòng tránh va chạm.',
        },
      },
      {
        heading: 'Ghi lại câu chuyện cảm xúc và vinh danh cộng đồng',
        paragraphs: [
          'Một ngày hội thể thao không kết thúc ở tiếng còi mãn cuộc. Hãy tổ chức buổi lễ trao giải ấm cúng với bục vinh danh, cúp lưu niệm và kỷ niệm chương cho mọi đội tham gia. Đội ngũ Media của Your Dreams sẽ tổng hợp clip recap bắt trọn từng khoảnh khắc vỡ òa chiến thắng và nụ cười rạng rỡ của các gia đình để chia sẻ lên các kênh truyền thông nội bộ.',
        ],
      },
    ],
  },

  // 4. BRIEF SỰ KIỆN CẦN CHUẨN BỊ GÌ
  {
    slug: 'brief-su-kien-can-chuan-bi-gi',
    category: 'Kinh nghiệm tổ chức',
    date: '2026-09-05',
    updated: '2026-10-25',
    readingTime: '6 phút đọc',
    image: 'di-de-lon',
    alt: 'Trẻ em và ban tổ chức trong chương trình Đi để lớn ROX Living 2025',
    title: 'Một brief sự kiện tốt cần chuẩn bị những gì?',
    excerpt: 'Hướng dẫn viết brief sự kiện chuẩn mực: 7 yếu tố cốt lõi giúp agency hiểu đúng nhu cầu, đề xuất concept sát sườn và tối ưu ngân sách ngay từ lần trao đổi đầu tiên.',
    lead: 'Bạn không cần phải có sẵn kịch bản chi tiết để bắt đầu làm việc với agency. Một bản brief sự kiện tốt chỉ cần làm rõ bối cảnh, mục tiêu và các giới hạn thực tế để hai bên tìm ra giải pháp tối ưu nhất.',
    sections: [
      {
        heading: 'Brief sự kiện là gì và vai trò quyết định dự án?',
        answerCapsule: 'Brief sự kiện là văn bản định hướng yêu cầu do doanh nghiệp (Client) cung cấp cho công ty tổ chức sự kiện (Agency), bao gồm 7 thông tin then chốt: Lý do tổ chức, Đối tượng khách mời, Mục tiêu truyền thông, Thời gian & Địa điểm dự kiến, Ngân sách mục tiêu, Nhận diện thương hiệu và Các điều kiện bắt buộc (Must-haves). Brief rõ ràng giúp tiết kiệm 50% thời gian trao đổi và nhận báo giá chính xác.',
        paragraphs: [
          'Rất nhiều doanh nghiệp khi tìm đơn vị tổ chức sự kiện thường chỉ nhắn một câu ngắn gọn: "Báo giá cho tôi một chương trình gala 200 người". Điều này khiến agency không thể đưa ra phương án sát thực tế vì thiếu toàn bộ thông tin nền tảng.',
          'Một bản brief chuẩn mực là chiếc cầu nối thông tin, giúp agency hiểu sâu sắc điều khách hàng thực sự mong muốn đạt được sau sự kiện.',
        ],
      },
      {
        heading: '7 Thành phần cốt lõi trong một bản brief sự kiện chuyên nghiệp',
        paragraphs: [
          'Dưới đây là cấu trúc mẫu bạn có thể áp dụng ngay cho chương trình sắp tới:',
        ],
        table: {
          headers: ['Hạng mục trong Brief', 'Câu hỏi cần trả lời', 'Ví dụ minh họa cụ thể'],
          rows: [
            ['1. Bối cảnh & Lý do', 'Tại sao sự kiện này cần diễn ra ở thời điểm này?', 'Kỷ niệm 10 năm thành lập công ty, tri ân đối tác và công bố chiến lược mới.'],
            ['2. Chân dung khách mời', 'Ai sẽ có mặt? Độ tuổi, chức vụ, sở thích của họ là gì?', '150 đại lý phân phối toàn quốc (độ tuổi 35-50) và 50 khách mời VIP quốc tế.'],
            ['3. Thông điệp chủ đạo', 'Khách mời cần nhớ hoặc cảm nhận điều gì khi ra về?', 'Thông điệp "Vươn tầm bứt phá" – khẳng định vị thế dẫn đầu công nghệ.'],
            ['4. Thời gian & Địa điểm', 'Sự kiện diễn ra khi nào? Dự kiến tổ chức ở đâu?', 'Tối thứ Bảy 15/12/2026 tại khách sạn 5 sao khu vực Tây Hồ, Hà Nội.'],
            ['5. Khung ngân sách', 'Khoảng ngân sách dự kiến là bao nhiêu?', 'Dao động 150.000.000đ – 200.000.000đ (chưa bao gồm tiền tiệc F&B).'],
            ['6. Hạng mục bắt buộc', 'Những phần nào nhất định phải có trong chương trình?', 'Lễ vinh danh top 10 đại lý xuất sắc, màn hình LED P3, MC song ngữ Anh-Việt.'],
            ['7. Mốc ra quyết định', 'Hạn chót gửi đề xuất và người phê duyệt cuối là ai?', 'Nhận đề xuất trước 17h ngày 10/11; Tổng Giám đốc duyệt ngày 15/11.'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
          alt: 'Không gian sự kiện doanh nghiệp được hiện thực hóa từ bản brief chuẩn',
          caption: 'Từ bản brief cụ thể, không gian hội nghị được thiết kế ăn khớp với đẳng cấp thương hiệu.',
        },
      },
      {
        heading: 'Những sai lầm thường gặp khi viết brief sự kiện',
        paragraphs: [
          'Để bản brief không trở thành rào cản, hãy lưu ý tránh 4 sai lầm phổ biến sau:',
        ],
        list: [
          'Mục tiêu mơ hồ: Ghi "tổ chức sự kiện hoành tráng" thay vì nêu rõ chỉ số định lượng (số người tham gia, độ phủ truyền thông).',
          'Giấu ngân sách dự kiến: Nhiều khách hàng ngại chia sẻ ngân sách vì sợ agency đẩy giá cao. Tuy nhiên, biết khoảng ngân sách giúp agency đề xuất cấu hình thiết bị phù hợp nhất thay vì đưa ra phương án vượt khả năng chi trả.',
          'Thay đổi người duyệt phút chót: Người cung cấp thông tin brief ban đầu không phải là người có quyền quyết định cuối cùng, dẫn đến việc phải làm lại từ đầu khi lãnh đạo cấp cao xem xét.',
          'Không nêu rõ các ràng buộc địa điểm: Không thông báo việc khách sạn cấm bắn pháo kim tuyến hay tòa nhà chỉ cho phép thi công sau 22h đêm.',
        ],
        image: {
          src: '/images/y-tuong-to-chuc-su-kien.webp',
          alt: 'Sáng tạo ý tưởng dựa trên thông tin brief rõ ràng và chi tiết',
          caption: 'Thông tin brief càng chi tiết, ý tưởng sáng tạo càng bám sát thực tế và dễ thi công.',
        },
      },
      {
        heading: 'Gửi brief cho Your Dreams để nhận phản hồi trong 24 giờ',
        paragraphs: [
          'Bạn có thể tải mẫu brief sự kiện hoặc điền nhanh thông tin tại trang liên hệ của Your Dreams. Đội ngũ tư vấn sẽ liên hệ lại ngay để khảo sát hiện trường và gửi đề xuất sơ bộ hoàn toàn miễn phí.',
        ],
      },
    ],
  },

  // 5. TỔ CHỨC SỰ KIỆN CHUYÊN NGHIỆP
  {
    slug: 'to-chuc-su-kien-chuyen-nghiep',
    category: 'Kinh nghiệm tổ chức',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '9 phút đọc',
    image: 'to-chuc-su-kien-chuyen-nghiep',
    alt: 'Minh họa vector các bước phối hợp tổ chức một sự kiện chuyên nghiệp từ ý tưởng đến vận hành',
    title: 'Tổ chức sự kiện chuyên nghiệp: Quy trình chuẩn từ ý tưởng đến tổng kết',
    excerpt: 'Cẩm nang toàn diện về quy trình tổ chức sự kiện chuyên nghiệp chuẩn quốc tế: kết nối nội dung, con người, công nghệ âm thanh ánh sáng, an toàn hiện trường và đo lường ROI.',
    lead: 'Tổ chức sự kiện chuyên nghiệp là nghệ thuật biến mục tiêu vô hình của doanh nghiệp thành một chương trình cụ thể có thể nhìn thấy, chạm vào và đo lường được kết quả. Kế hoạch bài bản cần kết nối chặt chẽ giữa nội dung, con người, kỹ thuật và an toàn ngay từ ngày đầu tiên.',
    sections: [
      {
        heading: 'Thế nào là tổ chức sự kiện chuyên nghiệp?',
        answerCapsule: 'Tổ chức sự kiện chuyên nghiệp là quá trình quản trị dự án khép kín gồm 6 bước: Nghiên cứu mục tiêu & Khách mời, Xây dựng Concept & Kịch bản, Lập dự toán ngân sách chi tiết, Sản xuất & Thi công hiện trường, Điều phối vận hành theo run-sheet từng phút, và Đo lường hiệu quả sau sự kiện. Tính chuyên nghiệp thể hiện ở việc kiểm soát rủi ro không sự cố và mang lại trải nghiệm cảm xúc trọn vẹn.',
        paragraphs: [
          'Một sự kiện có thể có sân khấu rực rỡ nhưng vẫn bị đánh giá là thiếu chuyên nghiệp nếu MC đọc sai tên đại biểu, âm thanh hú rít gián đoạn bài phát biểu, hoặc khu vực check-in bị ùn tắc gây bức xúc cho khách mời.',
          'Tại Your Dreams, chúng tôi coi tính chuyên nghiệp là sự kết hợp nhuần nhuyễn giữa sự thăng hoa của nghệ thuật thị giác và kỷ luật thép trong quản trị vận hành hiện trường.',
        ],
      },
      {
        heading: 'Quy trình 6 bước tổ chức sự kiện chuẩn mực tại Your Dreams',
        paragraphs: [
          'Quy trình vận hành được đúc kết qua hàng trăm sự kiện lớn nhỏ giúp loại trừ mọi rủi ro tiềm ẩn:',
        ],
        table: {
          headers: ['Bước triển khai', 'Mục tiêu giai đoạn', 'Hành động cụ thể của Agency', 'Tiêu chuẩn chất lượng'],
          rows: [
            ['Bước 1: Khám phá', 'Hiểu sâu mục tiêu doanh nghiệp', 'Họp nhận brief, phân tích văn hóa doanh nghiệp, khảo sát địa điểm sơ bộ', 'Brief được hai bên thống nhất bằng văn bản'],
            ['Bước 2: Sáng tạo Concept', 'Định hình câu chuyện sự kiện', 'Thiết kế Visual Key, lên moodboard, xây dựng timeline kịch bản khung', 'Bản vẽ phối cảnh 3D trực quan, đúng nhận diện'],
            ['Bước 3: Dự toán & Bóc tách', 'Kiểm soát chi phí minh bạch', 'Lập bảng ngân sách 7 nhóm chi phí, tối ưu các hạng mục phát sinh', 'Báo giá cố định, cam kết không phụ phí ẩn'],
            ['Bước 4: Sản xuất & Thi công', 'Chuẩn bị phần cứng hoàn hảo', 'Thi công nhà bạt, dựng khung truss sân khấu, lập trình ánh sáng, test LED', 'Hoàn tất lắp đặt 4-6 tiếng trước giờ tổng duyệt'],
            ['Bước 5: Tổng duyệt & Vận hành', 'Vận hành không độ trễ', 'Chạy thử run-sheet cùng MC, khớp nhạc FOH, điều phối đón tiếp khách', 'Zero Incident – kiểm soát an toàn tuyệt đối'],
            ['Bước 6: Đo lường & Báo cáo', 'Đánh giá giá trị đem lại', 'Khảo sát mức độ hài lòng khách mời, tổng hợp tư liệu media, quyết toán', 'Bàn giao trọn bộ ảnh/video trong 48h'],
          ],
        },
        image: {
          src: '/images/happy-run.webp',
          alt: 'Giải chạy marathon quy mô lớn được tổ chức chuyên nghiệp và bài bản',
          caption: 'Một giải chạy hơn 1.000 người đòi hỏi sự điều phối chuẩn xác giữa công an giao thông, y tế và trọng tài.',
        },
      },
      {
        heading: 'Vai trò then chốt của bàn điều khiển kỹ thuật FOH (Front of House)',
        paragraphs: [
          'Trong sự kiện, nếu sân khấu là nơi tỏa sáng của các nghệ sĩ thì bàn kỹ thuật FOH chính là bộ não chỉ huy toàn bộ hiệu ứng thị giác và thính giác:',
        ],
        list: [
          'Vị trí đặt FOH: Luôn đặt thẳng tim sân khấu, cách mép sân khấu từ 15m đến 25m để kỹ sư nghe được âm thanh chân thực nhất như khán giả.',
          'Kỹ sư âm thanh: Kiểm soát mixer digital, cân chỉnh dải tần số EQ của từng micro, triệt tiêu phản hồi âm gây tiếng hú rít chói tai.',
          'Kỹ thuật viên ánh sáng: Chạy các cue đèn theo kịch bản âm nhạc: đèn wash ấm áp khi phát biểu, đèn beam cuồng nhiệt khi ca sĩ biểu diễn.',
          'Kỹ thuật viên visual LED: Khớp visual hiệu ứng theo đúng lời MC dẫn và tín hiệu nhạc nền.',
          'Stage Manager: Đứng tại cánh gà, dùng bộ đàm ra lệnh cho FOH bấm nhạc và điều phối diễn giả bước lên bục.',
        ],
        image: {
          src: '/images/cam-nang-thue-thiet-bi-su-kien.webp',
          alt: 'Bàn điều khiển kỹ thuật âm thanh ánh sáng FOH chuyên nghiệp',
          caption: 'Hệ thống điều khiển FOH hiện đại đảm bảo âm thanh ánh sáng ăn khớp từng giây theo kịch bản.',
        },
      },
      {
        heading: 'Cam kết chất lượng từ Công ty Cổ phần Your Dreams',
        paragraphs: [
          'Với tư cách là pháp nhân độc lập hoạt động từ năm 2019, sở hữu trực tiếp kho bãi thiết bị và đội ngũ nhân sự dày dạn kinh nghiệm, Your Dreams cam kết mang lại sự an tâm tuyệt đối cho mọi khách hàng doanh nghiệp.',
        ],
      },
    ],
  },

  // 6. CÁCH CHỌN ĐƠN VỊ TỔ CHỨC SỰ KIỆN
  {
    slug: 'chon-don-vi-to-chuc-su-kien',
    category: 'Kinh nghiệm tổ chức',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'chon-don-vi-to-chuc-su-kien',
    alt: 'Minh họa vector checklist đánh giá năng lực công ty tổ chức sự kiện uy tín',
    title: 'Cách chọn đơn vị tổ chức sự kiện phù hợp với doanh nghiệp',
    excerpt: '6 Tiêu chí cốt lõi để đánh giá và lựa chọn agency sự kiện chuyên nghiệp: năng lực pháp lý, kho thiết bị trực tiếp, kinh nghiệm thực chiến, tính minh bạch ngân sách và phương án an toàn.',
    lead: 'Chọn đúng công ty tổ chức sự kiện quyết định đến 80% thành bại của chương trình. Một danh sách “top công ty” trên mạng không thể thay thế việc thẩm định hồ sơ năng lực thực tế, tư cách pháp nhân và khả năng ứng biến hiện trường của đơn vị đó.',
    sections: [
      {
        heading: 'Tại sao việc lựa chọn đơn vị tổ chức sự kiện lại quan trọng?',
        answerCapsule: 'Đơn vị tổ chức sự kiện (Event Agency) phù hợp là đơn vị hiểu rõ bài toán thương hiệu của bạn, trực tiếp sở hữu hoặc làm chủ nguồn lực thiết bị, có hợp đồng pháp lý minh bạch và đưa ra phương án khả thi có thể kiểm chứng bằng các dự án tương đồng đã triển khai thành công.',
        paragraphs: [
          'Thị trường sự kiện hiện nay có rất nhiều công ty "ảo" – chỉ đóng vai trò môi giới trung gian, nhận hợp đồng rồi cắt phế bán lại cho các đơn vị thứ cấp. Điều này đẩy chi phí lên cao từ 20-30% trong khi chất lượng vận hành bị thả nổi.',
          'Để chọn được đối tác tin cậy, doanh nghiệp cần có một bộ tiêu chí sàng lọc đa chiều thay vì chỉ nhìn vào mức giá chào ban đầu.',
        ],
      },
      {
        heading: 'Bảng 6 tiêu chí đánh giá năng lực Agency sự kiện',
        paragraphs: [
          'Bạn có thể dùng thang điểm sau để so sánh giữa 3-4 đơn vị tham gia đấu thầu:',
        ],
        table: {
          headers: ['Tiêu chí đánh giá', 'Dấu hiệu nhận biết Agency uy tín', 'Dấu hiệu cảnh báo rủi ro (Red Flags)'],
          rows: [
            ['1. Tư cách pháp nhân & Thâm niên', 'Có mã số thuế rõ ràng, hoạt động liên tục 3-5+ năm, xuất hóa đơn VAT đầy đủ', 'Công ty mới thành lập vài tháng, không có địa chỉ văn phòng cố định'],
            ['2. Sở hữu kho thiết bị trực tiếp', 'Trực tiếp sở hữu kho nhà bạt, âm thanh, ánh sáng, màn LED; giá xuất kho cạnh tranh', 'Không có kho bãi, phải đi thuê lại toàn bộ thiết bị từ đơn vị khác'],
            ['3. Dự án thực tế kiểm chứng được', 'Có ảnh chụp hiện trường, video clip rõ logo đối tác lớn (Vinhomes, tập đoàn...)', 'Chỉ dùng ảnh 3D đồ họa hoặc copy ảnh tải trên mạng không nguồn gốc'],
            ['4. Báo giá chi tiết & Minh bạch', 'Bóc tách rõ đơn giá từng hạng mục, quy cách kỹ thuật, cam kết không phát sinh', 'Báo giá trọn gói một cục mập mờ, ghi chung chung "gói âm thanh chuyên nghiệp"'],
            ['5. Năng lực nhân sự hiện trường', 'Có đội ngũ kỹ thuật viên FOH, điều phối viên, MC song ngữ cơ hữu', 'Thuê cộng tác viên thời vụ không qua đào tạo, tác nghiệp lúng túng'],
            ['6. Phương án an toàn & Dự phòng', 'Có phương án chống mưa bão, máy phát điện dự phòng, bảo hiểm sự kiện', 'Không có phương án rủi ro, khẳng định "thời tiết chắc chắn đẹp"'],
          ],
        },
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Dự án thực tế Kình ngư Quận biển do Your Dreams tổ chức cho đối tác Vinhomes',
          caption: 'Hồ sơ năng lực kiểm chứng bằng các dự án lớn thực tế là bằng chứng thuyết phục nhất của agency.',
        },
      },
      {
        heading: '4 Câu hỏi “vàng” bạn nên hỏi trực tiếp Agency khi phỏng vấn',
        paragraphs: [
          'Trong buổi họp trao đổi đề xuất (Pitching), hãy đặt thẳng 4 câu hỏi này để kiểm tra độ sâu chuyên môn của đội ngũ:',
        ],
        list: [
          '“Ai sẽ là Quản lý hiện trường (Stage Manager) trực tiếp có mặt từ sáng sớm đến khi kết thúc sự kiện của chúng tôi?” – Yêu cầu gặp mặt trực tiếp người này.',
          '“Nếu ngày diễn ra sự kiện trời mưa to gió lớn hoặc mất điện lưới thì kế hoạch kích hoạt phương án B diễn ra trong bao lâu?”',
          '“Thiết bị âm thanh ánh sáng trong bảng báo giá là hàng của công ty hay thuê lại của bên thứ ba? Có thể qua xem kho bãi trực tiếp được không?”',
          '“Có thể cung cấp số điện thoại hoặc thư giới thiệu của 2 khách hàng gần nhất đã từng tổ chức sự kiện tương tự để chúng tôi tham khảo không?”',
        ],
        image: {
          src: '/images/di-de-lon.webp',
          alt: 'Sự chuyên nghiệp thể hiện ở khả năng điều phối và tinh thần trách nhiệm của đội ngũ nhân sự',
          caption: 'Một đơn vị tận tâm luôn đồng hành sát cánh cùng khách hàng trong từng chi tiết nhỏ nhất.',
        },
      },
      {
        heading: 'Tại sao Your Dreams là lựa chọn an tâm của các tập đoàn lớn?',
        paragraphs: [
          'Với hơn 5 năm hợp tác bền vững cùng Vinhomes và ROX Living, sở hữu kho nhà giàn ba lăng xích hiện đại hàng đầu Hà Nội và triết lý Zero Incident, Your Dreams sẵn sàng ký cam kết trách nhiệm bằng văn bản cho mọi hợp đồng sự kiện.',
        ],
      },
    ],
  },

  // 7. CHI PHÍ TỔ CHỨC SỰ KIỆN
  {
    slug: 'chi-phi-to-chuc-su-kien',
    category: 'Kế hoạch sự kiện',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'chi-phi-to-chuc-su-kien',
    alt: 'Minh họa dự toán báo giá chi phí tổ chức sự kiện trọn gói',
    title: 'Báo giá chi phí tổ chức sự kiện trọn gói: Bảng dự toán và khoảng giá tham khảo',
    excerpt: 'Bảng khoảng ngân sách tham khảo theo loại hình sự kiện, tỷ trọng phân bổ chi phí chi tiết và checklist chuẩn bị brief để nhận báo giá chính xác trong 24h.',
    lead: 'Chi phí tổ chức sự kiện không có một con số cố định mà phụ thuộc vào quy mô khách mời, địa điểm, thiết bị và mức độ đầu tư sản xuất. Một bảng dự toán chi tiết giúp bạn kiểm soát ngân sách, tối ưu chi phí từng hạng mục và chủ động phương án vận hành.',
    sections: [
      {
        heading: 'Báo giá tổ chức sự kiện trọn gói gồm những gì?',
        answerCapsule: 'Chi phí tổ chức sự kiện trọn gói thường dao động từ 25 triệu đến hơn 300 triệu đồng tùy theo quy mô (50 đến 1.000+ khách), địa điểm và cấu hình kỹ thuật. Dự toán trọn gói tiêu chuẩn bao gồm: Thuê địa điểm & F&B (35%), Thiết bị âm thanh - ánh sáng - màn LED (25%), Nhân sự điều phối & MC (15%), Sản xuất thiết kế backdrop & vật phẩm (15%), và Chi phí dự phòng rủi ro (10%).',
        paragraphs: [
          'Một gói tổ chức sự kiện toàn diện giúp doanh nghiệp không phải tự liên hệ từng nhà cung cấp riêng lẻ, hạn chế rủi ro thiếu sót kỹ thuật và tối ưu được đơn giá tổng thể nhờ năng lực đối tác của agency.',
          'Khi xem xét báo giá, hãy phân biệt rõ các hạng mục cố định bắt buộc phải có và các hạng mục linh hoạt có thể tùy biến theo ngân sách thực tế của chương trình.',
        ],
      },
      {
        heading: 'Bảng khoảng ngân sách dự toán tham khảo theo loại hình sự kiện',
        paragraphs: [
          'Dưới đây là khung chi phí ước tính dựa trên các chương trình thực tế do Your Dreams triển khai tại Hà Nội và các tỉnh lân cận:',
        ],
        table: {
          headers: ['Loại hình sự kiện', 'Quy mô người tham dự', 'Khoảng giá tham khảo', 'Hạng mục bàn giao chính'],
          rows: [
            ['Hội thảo, Hội nghị khách hàng', '50 - 150 người', '25.000.000đ - 60.000.000đ', 'Âm thanh hội thảo, micro, màn LED/máy chiếu, backdrop, lễ tân, teabreak'],
            ['Lễ Khai trương, Khánh thành', '100 - 300 người', '35.000.000đ - 85.000.000đ', 'Sân khấu, nhà bạt, cổng chào, múa lân khai trương, bộ cắt băng, MC, PG'],
            ['Team building & Gala Dinner', '80 - 250 người', '45.000.000đ - 120.000.000đ', 'Dụng cụ game, MC hoạt náo, âm thanh di động ngoài trời, sân khấu gala'],
            ['Giải chạy bộ, Ngày hội thể thao', '200 - 1.000+ người', '80.000.000đ - 350.000.000đ+', 'Khảo sát cung đường, bib chạy, huy chương, cổng xuất phát/đích, y tế, trọng tài'],
            ['Cho thuê thiết bị âm thanh - ánh sáng', 'Gói cơ bản đến VIP', '12.000.000đ - 45.000.000đ', 'Hệ thống loa line array, đèn beam/par led, mixer kỹ thuật số, nhân sự trực kỹ thuật'],
          ],
        },
        image: {
          src: '/images/happy-run.webp',
          alt: 'Chi phí tổ chức giải chạy marathon bao gồm race kit, cổng chào và nhân sự điều phối',
          caption: 'Chi phí sự kiện thể thao phụ thuộc lớn vào số lượng Race kit và trang thiết bị an toàn đường đua.',
        },
      },
      {
        heading: 'Tỷ trọng phân bổ ngân sách sự kiện tiêu chuẩn',
        paragraphs: [
          'Để dự toán không bị thâm hụt, các chuyên gia quản lý sự kiện khuyến nghị phân bổ ngân sách theo tỷ trọng 5 nhóm chính sau:',
        ],
        table: {
          headers: ['Nhóm hạng mục chi phí', 'Tỷ trọng ngân sách (%)', 'Chi tiết các đầu việc chính'],
          rows: [
            ['Địa điểm & Tiệc nhẹ (F&B)', '30% - 40%', 'Thuê hội trường, sân bãi, teabreak đón tiếp, tiệc mặn, phí phục vụ ngoài giờ'],
            ['Sân khấu, Âm thanh, Ánh sáng, LED', '25% - 30%', 'Màn hình LED P3 indoor/outdoor, hệ thống âm thanh, ánh sáng biểu diễn, giàn khung truss'],
            ['Nhân sự vận hành & Biểu diễn', '15% - 20%', 'MC dẫn chương trình, vũ đoàn, ca sĩ, PG lễ tân, điều phối viên hiện trường'],
            ['Thiết kế, In ấn & Vật phẩm', '10% - 15%', 'Key visual, backdrop chụp hình, standee, thẻ đeo, giấy mời, quà tặng, cúp vinh danh'],
            ['Chi phí dự phòng rủi ro & Pháp lý', '5% - 10%', 'Xin giấy phép sự kiện, bản quyền âm nhạc, xử lý phát sinh thời tiết, điện dự phòng'],
          ],
        },
        image: {
          src: '/images/cam-nang-thue-thiet-bi-su-kien.webp',
          alt: 'Tối ưu chi phí thiết bị sự kiện nhờ làm việc trực tiếp với kho xưởng',
          caption: 'Lựa chọn agency sở hữu trực tiếp kho thiết bị giúp doanh nghiệp tiết kiệm 20-30% chi phí trung gian.',
        },
      },
      {
        heading: 'Quy trình 4 bước nhận bảng báo giá chi tiết trong 24 giờ',
        paragraphs: [
          'Tại Your Dreams, chúng tôi xây dựng báo giá bám sát yêu cầu thực tế qua quy trình rõ ràng:',
        ],
        list: [
          'Bước 1: Tiếp nhận thông tin brief (Mục tiêu, quy mô khách, địa điểm dự kiến, ngân sách mục tiêu).',
          'Bước 2: Khảo sát thực tế hiện trường và tư vấn cấu hình thiết bị tối ưu chi phí.',
          'Bước 3: Gửi bảng dự toán bóc tách chi tiết từng hạng mục (kèm 2-3 phương án ngân sách linh hoạt).',
          'Bước 4: Thống nhất hợp đồng minh bạch, cam kết không phát sinh chi phí ngoài phạm vi thỏa thuận.',
        ],
      },
    ],
  },

  // 8. CHỌN ĐỊA ĐIỂM TỔ CHỨC SỰ KIỆN TẠI HÀ NỘI
  {
    slug: 'chon-dia-diem-to-chuc-su-kien-ha-noi',
    category: 'Kinh nghiệm tổ chức',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'chon-dia-diem-to-chuc-su-kien-ha-noi',
    alt: 'Minh họa vector khảo sát địa điểm tổ chức sự kiện tại Hà Nội',
    title: 'Cách chọn địa điểm tổ chức sự kiện tại Hà Nội: Tiêu chí và danh sách gợi ý',
    excerpt: 'Checklist khảo sát địa điểm tổ chức sự kiện tại Hà Nội theo sức chứa, giao thông, hạ tầng kỹ thuật điện âm thanh, phí dịch vụ ngoài giờ và phương án thời tiết dự phòng.',
    lead: 'Một địa điểm phù hợp cần thỏa mãn mục tiêu chương trình và điều kiện vận hành kỹ thuật, chứ không chỉ dừng lại ở vẻ đẹp hình thức. Việc khảo sát thực địa kỹ lưỡng trước khi đặt cọc là điều kiện tiên quyết để tránh các rủi ro phát sinh.',
    sections: [
      {
        heading: 'Tiêu chí chọn địa điểm sự kiện tại Hà Nội',
        answerCapsule: 'Khi chọn địa điểm sự kiện tại Hà Nội, ban tổ chức cần đánh giá 5 tiêu chí: Sức chứa thực tế theo layout bàn tiệc/ghế rạp (không tính theo diện tích sàn thô), Vị trí giao thông & bãi đỗ xe ô tô, Tải trọng trần & chiều cao thông thủy cho giàn đèn/màn LED, Công suất cấp điện 3 pha và Chi phí phụ thu ngoài giờ (Overtime) của ban quản lý tòa nhà.',
        paragraphs: [
          'Hà Nội có hàng trăm trung tâm hội nghị, khách sạn 5 sao và không gian ngoài trời, nhưng mỗi địa điểm lại có những quy định ngặt nghèo về giờ giấc thi công, phí mang đồ ăn thức uống từ ngoài vào hoặc phí điện kỹ thuật.',
          'Nắm vững các tiêu chuẩn kỹ thuật sẽ giúp bạn chọn được không gian vừa tôn vinh hình ảnh sự kiện, vừa thuận tiện cho ê-kíp thi công lắp đặt.',
        ],
      },
      {
        heading: 'Bảng so sánh 3 nhóm địa điểm tổ chức sự kiện phổ biến tại Hà Nội',
        paragraphs: [
          'Tùy theo tính chất chương trình, bạn có thể cân nhắc các nhóm địa điểm sau:',
        ],
        table: {
          headers: ['Nhóm địa điểm', 'Địa điểm tiêu biểu tại Hà Nội', 'Ưu điểm nổi bật', 'Lưu ý khi vận hành'],
          rows: [
            ['Khách sạn 5 sao cao cấp', 'JW Marriott, Lotte Hotel, InterContinental Landmark72, Pan Pacific', 'Dịch vụ chuẩn quốc tế, sảnh đón sang trọng, tiệc đẳng cấp', 'Chi phí thuê cao, phí thi công đêm đắt, chiều cao trần một số sảnh hạn chế'],
            ['Trung tâm sự kiện chuyên nghiệp', 'NCC Trung tâm Hội nghị Quốc gia, Almaz Ocean Park, Trống Đồng Palace', 'Không gian rộng (500-2.000 khách), bãi đỗ xe lớn, sảnh thoáng', 'Cần đặt cọc rất sớm vào mùa cao điểm cuối năm'],
            ['Không gian mở & Ngoài trời', 'Công viên Yên Sở, Quảng trường Ocean City, Ecopark, Flamingo Đại Lải', 'Không gian khoáng đạt, phù hợp giải chạy, team building, cắm trại', 'Phải có phương án nhà bạt dự phòng thời tiết mưa nắng, chi phí máy phát điện'],
          ],
        },
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Không gian tổ chức sự kiện ngoài trời bên bờ biển nhân tạo Ocean City Hà Nội',
          caption: 'Khu đô thị sinh thái như Ocean Park mang lại không gian tổ chức sự kiện thể thao và dã ngoại lý tưởng.',
        },
      },
      {
        heading: 'Checklist 6 bước khảo sát kỹ thuật hiện trường trước khi ký hợp đồng',
        paragraphs: [
          'Khi đi tiền trạm (Site Inspection), hãy mang theo thước đo laser và trao đổi trực tiếp với kỹ sư tòa nhà các nội dung:',
        ],
        list: [
          'Đo chiều cao trần (Clear Height): đảm bảo khoảng cách tối thiểu từ đỉnh màn hình LED đến trần nhà là 1.5m để lắp đặt giàn khung truss an toàn.',
          'Nguồn điện 3 pha: kiểm tra vị trí tủ điện đấu nối, khoảng cách từ tủ điện đến khu vực FOH (chuẩn bị đủ chiều dài dây cáp), công suất chịu tải (A).',
          'Lối thang hàng (Cargo Lift): kích thước cửa thang máy vận chuyển, tải trọng thang tối đa và khung giờ tòa nhà cho phép xe tải chở đồ vào hầm.',
          'Bãi đỗ xe: kiểm tra sức chứa xe máy và ô tô khách mời, biểu phí trông giữ và biển chỉ dẫn lối vào từ đường lớn.',
          'Hệ thống âm học: kiểm tra độ vang vọng của sảnh kính, khả năng cách âm nếu tổ chức ca nhạc đêm muộn.',
          'Các khoản phí phụ thu: hỏi rõ phí điện sự kiện, phí thi công ngoài giờ (tính theo tiếng), phí dọn vệ sinh và tiền đặt cọc trách nhiệm hư hại cơ sở vật chất.',
        ],
        image: {
          src: '/images/cam-nang-thue-thiet-bi-su-kien.webp',
          alt: 'Khảo sát hạ tầng thiết bị và lối vận chuyển hàng tại địa điểm tổ chức',
          caption: 'Khảo sát kỹ thuật nguồn điện và lối thang hàng giúp tránh xung đột giờ giấc thi công.',
        },
      },
      {
        heading: 'Your Dreams hỗ trợ khảo sát mặt bằng miễn phí tại Hà Nội',
        paragraphs: [
          'Nếu doanh nghiệp đang phân vân giữa nhiều địa điểm tổ chức tại Hà Nội, chuyên gia hiện trường của Your Dreams sẽ đi cùng bạn khảo sát thực địa, đo đạc kích thước và tư vấn phương án mặt bằng hoàn toàn miễn phí.',
        ],
      },
    ],
  },

  // 9. CẨM NANG THUÊ THIẾT BỊ SỰ KIỆN
  {
    slug: 'cam-nang-thue-thiet-bi-su-kien',
    category: 'Thiết bị sự kiện',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'cam-nang-thue-thiet-bi-su-kien',
    alt: 'Minh họa vector sân khấu và thiết bị âm thanh ánh sáng sự kiện',
    title: 'Cẩm nang chọn và thuê thiết bị sự kiện: Âm thanh, ánh sáng, LED và nhà bạt',
    excerpt: 'Hướng dẫn lựa chọn cấu hình thiết bị sự kiện chuẩn xác theo diện tích không gian và kịch bản chương trình: loa Line Array, đèn Beam, màn LED P3.91 và nhà giàn ba lăng xích an toàn.',
    lead: 'Thiết bị sự kiện cần được lựa chọn dựa trên kịch bản, quy mô khán giả và đặc thù không gian. Chọn đúng cấu hình giúp người tham dự nhìn rõ, nghe êm và thăng hoa cảm xúc; ngược lại, cấu hình thừa gây lãng phí, còn thiếu hụt sẽ biến sự kiện thành thảm họa kỹ thuật.',
    sections: [
      {
        heading: 'Nguyên tắc vàng khi lựa chọn thiết bị sự kiện',
        answerCapsule: 'Nguyên tắc cốt lõi khi thuê thiết bị sự kiện là “Vừa đủ công suất – Đúng chủng loại – Đồng bộ kỹ thuật”. Âm thanh tính theo số lượng khán giả và độ phủ không gian; Ánh sáng tính theo chiều sâu sân khấu và phong cách biểu diễn; Màn hình LED tính theo khoảng cách của hàng ghế khán giả gần nhất (Pitch P2.5 – P3.91); và Nhà giàn phải có hệ thống nâng hạ ba lăng xích an toàn.',
        paragraphs: [
          'Nhiều khách hàng thường có tâm lý chọn "gói to nhất" hoặc "giá rẻ nhất" mà không để ý đến tính tương thích của thiết bị với mặt bằng.',
          'Ví dụ: mang dàn loa Line Array công suất khủng ngoài trời vào một khán phòng kín toàn kính sẽ tạo ra tiếng dội âm chói tai; hoặc dùng màn hình LED P4 cho phòng họp nhỏ sẽ khiến người xem bị mỏi mắt vì lộ hạt bóng LED.',
        ],
      },
      {
        heading: 'Bảng thông số kỹ thuật tiêu chuẩn của các nhóm thiết bị sự kiện',
        paragraphs: [
          'Dưới đây là bảng tra cứu thông số kỹ thuật chuẩn giúp bạn tự tin làm việc với các nhà cung cấp thiết bị:',
        ],
        table: {
          headers: ['Thiết bị', 'Chủng loại khuyên dùng', 'Quy cách kỹ thuật', 'Ứng dụng tối ưu'],
          rows: [
            ['Âm thanh Sân khấu', 'Hệ thống Line Array + Subwoofer', 'Góc phủ 110° x 15°, áp suất âm thanh 130dB SPL, micro UHF chống hú', 'Sự kiện ngoài trời, gala ca nhạc 300 – 2.000 khách'],
            ['Ánh sáng Biểu diễn', 'Moving Head Beam 380 + Par LED 54', 'Bóng Osram 380W quét luồng sắc nét, Par LED RGBW tạo nền màu', 'Tạo hiệu ứng sôi động cho sân khấu gala, countdown, lễ trao giải'],
            ['Màn hình LED', 'LED P3.91 Outdoor / P2.5 Indoor', 'Khoảng cách điểm ảnh 3.91mm/2.5mm, cabinet nhôm đúc chống nước IP65', 'Hiển thị video clip sắc nét, khoảng cách nhìn từ 3m trở lên'],
            ['Nhà giàn không gian', 'Khung hợp kim nhôm / Inox', 'Khẩu độ 10m - 24m, bạt trắng 2 lớp cách nhiệt, ba lăng xích nâng hạ', 'Che mưa nắng toàn diện cho sự kiện ngoài trời, giải chạy, hội chợ'],
            ['Sân khấu di động', 'Module lắp ghép thông minh', 'Kích thước ván 1.22m x 2.44m, chân tăng chỉnh độ cao 0.4m – 1.5m', 'Lắp ghép linh hoạt trên mọi địa hình mấp mô, thảm nỉ chống trượt'],
          ],
        },
        image: {
          src: '/images/happy-run.webp',
          alt: 'Cấu hình nhà bạt không gian và âm thanh ngoài trời tại giải chạy cộng đồng',
          caption: 'Hệ thống nhà bạt không gian kiên cố che phủ khu vực đón tiếp vận động viên.',
        },
      },
      {
        heading: 'Ưu thế vượt trội của hệ thống nhà giàn ba lăng xích điện',
        paragraphs: [
          'Your Dreams là một trong số ít đơn vị tại Hà Nội đầu tư đồng bộ hệ thống nhà giàn không gian nâng hạ bằng ba lăng xích điện công nghệ mới nhất:',
        ],
        list: [
          'An toàn lao động 100%: Toàn bộ kết cấu mái, giàn truss treo loa đèn và bạt che được công nhân lắp ráp hoàn chỉnh ngay dưới mặt đất, sau đó bấm nút ba lăng xích điện tự động kéo đều lên cao. Không cần thợ phải trèo thang nguy hiểm.',
          'Độ căng phẳng tuyệt đối: Hệ thống khóa xích cơ học giữ mái bạt luôn căng mịn, thoát nước mưa cực nhanh, không bao giờ bị đọng túi nước gây sập khung.',
          'Chịu được gió bão giật cấp 6-7: Chân cột nhà giàn được gia cố bằng tạ bê tông 200kg/chân kết hợp dây cáp chằng néo 4 góc kiên cố.',
        ],
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Lắp đặt sân khấu và màn hình LED chất lượng cao bên hồ bơi',
          caption: 'Sân khấu lắp ráp module kết hợp hệ thống điện chống giật an toàn sát mặt nước.',
        },
      },
      {
        heading: 'Checklist kiểm tra thiết bị trước khi bàn giao',
        paragraphs: [
          'Trước khi ký biên bản nghiệm thu kỹ thuật, hãy yêu cầu đơn vị cho thuê bật thử toàn bộ đèn ở công suất 100%, chạy thử bài nhạc bass mạnh để kiểm tra loa sub, và cắm thử tất cả các micro không dây để đảm bảo không bị trùng tần số.',
        ],
      },
    ],
  },

  // 10. TỔ CHỨC SỰ KIỆN DOANH NGHIỆP
  {
    slug: 'to-chuc-su-kien-doanh-nghiep',
    category: 'Sự kiện doanh nghiệp',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'to-chuc-su-kien-doanh-nghiep',
    alt: 'Minh họa vector cuộc họp và màn hình trình bày trong sự kiện doanh nghiệp',
    title: 'Tổ chức sự kiện doanh nghiệp: Chọn hình thức theo mục tiêu kinh doanh',
    excerpt: 'So sánh cách chuẩn bị hội thảo, gala dinner, team building và ngày hội nội bộ: thiết kế hành trình người tham dự, run-sheet hiện trường và phương pháp đo lường ROI sự kiện.',
    lead: 'Sự kiện doanh nghiệp hiệu quả bắt đầu từ kết quả muốn tạo ra cho nhân viên, khách hàng hoặc đối tác. Hình thức, thông điệp và ngân sách chỉ nên chốt sau khi đã xác định rõ người tham dự và hành động mong đợi của họ sau khi rời khán phòng.',
    sections: [
      {
        heading: 'Sự kiện doanh nghiệp là gì và phân loại theo mục tiêu',
        answerCapsule: 'Sự kiện doanh nghiệp (Corporate Events) là các hoạt động được tổ chức nhằm phục vụ mục tiêu kinh doanh và văn hóa của tổ chức. Được chia làm 4 nhóm chính: Sự kiện Đối ngoại (Hội nghị khách hàng, Ra mắt sản phẩm, Lễ ký kết), Sự kiện Nội bộ (Team building, Ngày hội gia đình, Tiệc tất niên Gala Dinner), Sự kiện Dự án (Lễ khởi công, Khánh thành, Khai trương) và Sự kiện Đào tạo (Hội thảo, Workshop chuyên đề).',
        paragraphs: [
          'Nhiều doanh nghiệp mắc sai lầm khi muốn "gộp tất cả trong một": vừa muốn tiệc tất niên trang trọng tri ân đối tác, vừa muốn nhân viên quẩy hết mình, lại vừa muốn lồng ghép nội dung họp chiến lược khô khan. Điều này khiến chương trình kéo dài lê thê và mất đi điểm nhấn.',
          'Việc xác định mục tiêu ưu tiên số một sẽ định hình từ phong cách MC, thực đơn tiệc đến thiết kế sân khấu.',
        ],
      },
      {
        heading: 'Bảng so sánh 4 hình thức sự kiện doanh nghiệp phổ biến nhất',
        paragraphs: [
          'Dưới đây là đặc điểm và yêu cầu vận hành của từng loại hình sự kiện:',
        ],
        table: {
          headers: ['Loại hình sự kiện', 'Mục tiêu cốt lõi', 'Không gian & Địa điểm tối ưu', 'Yếu tố quyết định thành công'],
          rows: [
            ['Hội thảo / Hội nghị khách hàng', 'Chia sẻ kiến thức, quảng bá năng lực, thu thập data khách hàng tiềm năng', 'Khách sạn 4-5 sao, phòng họp kín, cách âm tốt', 'Hệ thống âm thanh micro rõ tiếng, màn hình LED sắc nét, tài liệu chỉn chu'],
            ['Team building gắn kết', 'Phá vỡ khoảng cách phòng ban, khơi dậy tinh thần đồng đội', 'Bãi biển, resort, khu du lịch sinh thái ngoài trời', 'Kịch bản game mới lạ, MC hoạt náo năng lượng cao, an toàn vận động'],
            ['Gala Dinner / Tiệc Tất niên', 'Ghi nhận đóng góp nhân viên, vinh danh xuất sắc, tiệc liên hoan cuối năm', 'Trung tâm sự kiện cao cấp, sảnh tiệc lộng lẫy', 'Tiết mục văn nghệ bất ngờ, clip recap xúc động, thực đơn tiệc ngon miệng'],
            ['Lễ Khai trương / Khánh thành', 'Đánh dấu cột mốc hoạt động, tạo uy tín thương hiệu với chính quyền và đối tác', 'Mặt tiền trụ sở, nhà xưởng, showroom mới', 'Nghi thức cắt băng chuẩn phong thủy, đoàn múa lân sư rồng khai tài đón lộc'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-khai-truong.webp',
          alt: 'Lễ khai trương văn phòng doanh nghiệp trang trọng với nghi thức cắt băng',
          caption: 'Lễ khai trương và khánh thành là điểm chạm quan trọng khẳng định tầm vóc doanh nghiệp.',
        },
      },
      {
        heading: 'Thiết kế hành trình trải nghiệm người tham dự (Attendee Journey)',
        paragraphs: [
          'Một sự kiện thành công được cảm nhận qua 5 điểm chạm xuyên suốt hành trình của khách:',
        ],
        list: [
          'Điểm chạm 1: Thư mời & Xác nhận tham dự (Ấn tượng thị giác đầu tiên từ thiệp mời chỉn chu hoặc landing page check-in).',
          'Điểm chạm 2: Đón tiếp & Check-in (Lễ tân chào đón niềm nở, hướng dẫn gửi xe, trao thẻ đeo và quà chào mừng trong vòng dưới 60 giây).',
          'Điểm chạm 3: Không gian sảnh chờ & Photobooth (Khu vực chụp ảnh ấn tượng, ánh sáng mịn đẹp giúp khách hào hứng check-in mạng xã hội).',
          'Điểm chạm 4: Nội dung chương trình chính (Kịch bản mạch lạc, các phần phát biểu ngắn gọn dưới 7 phút, đan xen tiết mục nghệ thuật mãn nhãn).',
          'Điểm chạm 5: Lời cảm ơn & Chăm sóc sau sự kiện (Gửi album ảnh đẹp cho khách trong 24h và quà tặng tri ân mang dấu ấn thương hiệu).',
        ],
        image: {
          src: '/images/sports-day.webp',
          alt: 'Hoạt động gắn kết đội ngũ tại ngày hội doanh nghiệp ngoài trời',
          caption: 'Hành trình trải nghiệm mạch lạc giúp người tham dự cảm thấy được trân trọng trong từng khoảnh khắc.',
        },
      },
      {
        heading: 'Đo lường ROI sự kiện doanh nghiệp',
        paragraphs: [
          'Hãy đo lường hiệu quả chương trình bằng các chỉ số thực tế: tỷ lệ khách mời tham dự thực tế / thư mời (Show-up rate), điểm khảo sát mức độ hài lòng (CSAT), số lượng bài đăng chia sẻ trên mạng xã hội và tỷ lệ chuyển đổi khách hàng sau sự kiện.',
        ],
      },
    ],
  },

  // 11. SỰ KIỆN THEO MÙA (TRUNG THU, 1/6, LỄ HỘI)
  {
    slug: 'to-chuc-su-kien-theo-mua',
    category: 'Sự kiện cộng đồng',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'to-chuc-su-kien-theo-mua',
    alt: 'Minh họa vector hoạt động theo mùa với lồng đèn trung thu và trang trí lễ hội',
    title: 'Lập kế hoạch sự kiện theo mùa cho gia đình và cộng đồng cư dân',
    excerpt: 'Cách chọn chủ đề, hoạt động trải nghiệm và phương án vận hành an toàn cho chương trình Trung Thu, Quốc tế Thiếu nhi 1/6, Halloween và Giáng sinh tại các khu đô thị.',
    lead: 'Sự kiện theo mùa cần sự gắn kết gia đình và cộng đồng, không chỉ dừng lại ở trang trí tiểu cảnh. Hãy thiết kế lịch trình sao cho các em nhỏ được tự tay trải nghiệm, phụ huynh có không gian nghỉ ngơi thư giãn và ban tổ chức kiểm soát tốt an toàn.',
    sections: [
      {
        heading: 'Đặc thù của các sự kiện theo mùa dành cho gia đình',
        answerCapsule: 'Sự kiện theo mùa (Seasonal Events) như Tết Trung Thu, Quốc tế Thiếu nhi 1/6, Halloween, Giáng sinh hay Chợ Tết cổ truyền là chuỗi hoạt động có lưu lượng người tham gia biến động lớn và tập trung vào trẻ nhỏ. Yêu cầu then chốt là kịch bản ngắn gọn, trạm workshop trải nghiệm tự làm (DIY), đồ ăn nhẹ an toàn vệ sinh và phương án chống lạc trẻ em.',
        paragraphs: [
          'Trong các khu đô thị lớn như Vinhomes hay ROX Living, sự kiện theo mùa là nét văn hóa đặc trưng giúp gia tăng chỉ số gắn kết cộng đồng cư dân.',
          'Vì đối tượng tham gia chủ yếu là các gia đình có con nhỏ, mọi khâu từ âm lượng loa, chiều cao bàn ghế đến vật liệu đồ chơi đều phải tính toán đến yếu tố an toàn cho trẻ.',
        ],
      },
      {
        heading: 'Gợi ý ý tưởng tổ chức theo 4 mùa lễ hội tiêu biểu',
        paragraphs: [
          'Bảng tổng hợp concept và hoạt động trải nghiệm độc đáo cho các dịp lễ hội trong năm:',
        ],
        table: {
          headers: ['Dịp lễ hội', 'Ý tưởng chủ đề (Concept)', 'Hoạt động trải nghiệm chính', 'Vật phẩm & Quà tặng'],
          rows: [
            ['Quốc tế Thiếu nhi (1/6)', 'Vương quốc Cổ tích / Nhà thám hiểm nhí', 'Khu nhà phao khổng lồ, ảo thuật tương tác, hề vặn bóng nghệ thuật', 'Bong bóng tạo hình, sách truyện tranh, đồ chơi trí tuệ'],
            ['Tết Trung Thu (Rằm tháng 8)', 'Đêm hội Trăng rằm / Chú Cuội Chị Hằng', 'Làm lồng đèn ông sao, nặn tò he truyền thống, múa lân rước đèn, phá cỗ', 'Đèn lồng phát sáng, bánh nướng bánh dẻo truyền thống'],
            ['Lễ hội Halloween (31/10)', 'Hội hóa trang Bí ngô / Lâu đài phép thuật', 'Trạm hóa trang vẽ mặt (Face painting), trò chơi Trick or Treat, thử thách mê cung', 'Kẹo socola hình bí ngô, mũ phù thủy, áo choàng'],
            ['Giáng sinh & Năm mới (24/12)', 'Ngôi làng Bắc Cực / Giáng sinh diệu kỳ', 'Check-in cây thông khổng lồ, gặp gỡ Ông già Noel, workshop làm bánh gừng', 'Hộp quà bí mật, tất đỏ giáng sinh, kẹo gậy'],
          ],
        },
        image: {
          src: '/images/di-de-lon.webp',
          alt: 'Trẻ em tham gia workshop trải nghiệm sáng tạo trong ngày hội thiếu nhi',
          caption: 'Các trạm hoạt động thủ công tự làm (DIY) luôn thu hút đông đảo các em nhỏ và phụ huynh.',
        },
      },
      {
        heading: 'Quy trình phòng chống lạc trẻ em và an toàn mặt bằng',
        paragraphs: [
          'Tại những sự kiện có hàng ngàn cư dân tham dự, việc trẻ nhỏ mải chơi đi lạc là nỗi lo lớn nhất của phụ huynh:',
        ],
        list: [
          'Vòng tay định danh: Phát vòng tay chống nước ghi số điện thoại phụ huynh tại bàn check-in cho mọi trẻ em dưới 10 tuổi.',
          'Trạm tìm trẻ lạc (Lost & Found): Thiết lập khu vực dễ nhận biết có biển báo cao, có nhân sự túc trực đồ chơi và nước uống để dỗ dành các bé khi đi lạc.',
          'Phân luồng xe cộ: Cấm hoàn toàn xe máy, xe điện di chuyển vào khuôn viên tổ chức trong suốt thời gian diễn ra lễ hội.',
          'Vật liệu an toàn: Tuyệt đối không dùng các vật sắc nhọn, bóng bay khí hydro dễ cháy nổ (chỉ dùng khí heli hoặc bơm khí thường).',
        ],
        image: {
          src: '/images/swim-times-city.webp',
          alt: 'Không gian sinh hoạt cộng đồng vui tươi an toàn cho các gia đình cư dân',
          caption: 'Không gian lễ hội an toàn, thân thiện mang lại kỷ niệm ấu thơ ngọt ngào cho thế hệ tương lai.',
        },
      },
      {
        heading: 'Đồng hành cùng ban quản trị khu đô thị',
        paragraphs: [
          'Your Dreams cung cấp các gói tổ chức lễ hội theo mùa trọn gói từ A-Z với mức chi phí tối ưu nhất cho quỹ cư dân và ban quản trị tòa nhà.',
        ],
      },
    ],
  },

  // 12. SỰ KIỆN NGOÀI TRỜI
  {
    slug: 'to-chuc-su-kien-ngoai-troi',
    category: 'Kinh nghiệm tổ chức',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'to-chuc-su-kien-ngoai-troi',
    alt: 'Minh họa vector bố trí không gian hoạt động ngoài trời',
    title: 'Checklist tổ chức sự kiện ngoài trời: An toàn, thời tiết và vận hành',
    excerpt: 'Checklist toàn diện khi tổ chức sự kiện ngoài trời: khảo sát nền đất, phương án ứng phó mưa bão, hệ thống điện chống rò giật, âm học không gian mở và an toàn đám đông.',
    lead: 'Sự kiện ngoài trời luôn mang lại bầu không khí phóng khoáng và cảm xúc thăng hoa, nhưng cũng tiềm ẩn nhiều rủi ro thời tiết khó lường nhất. Một kế hoạch chuyên nghiệp phải luôn có phương án B (Weather Contingency) sẵn sàng kích hoạt bất cứ lúc nào.',
    sections: [
      {
        heading: 'Những thách thức đặc thù của sự kiện ngoài trời',
        answerCapsule: 'Sự kiện ngoài trời (Outdoor Events) chịu ảnh hưởng trực tiếp bởi 4 yếu tố rủi ro: Thời tiết cực đoan (mưa bão, nắng nóng, gió lốc), Độ ổn định nguồn điện lưới, Tiêu âm không gian mở đòi hỏi công suất loa lớn hơn gấp đôi trong nhà, và Khó khăn trong việc kiểm soát luồng người ra vào tự do. Kế hoạch bắt buộc phải có nhà giàn che chắn và phương án ngắt điện khẩn cấp.',
        paragraphs: [
          'Đã có rất nhiều chương trình ngoài trời bị hủy hoại chỉ vì một cơn mưa rào bất chợt làm chập cháy hệ thống âm thanh hoặc gió lốc làm xiêu vẹo khung rạp.',
          'Với kinh nghiệm vận hành hàng chục giải chạy marathon và ngày hội thể thao ngoài trời, Your Dreams luôn đặt yếu tố kỹ thuật an toàn lên trên hết.',
        ],
      },
      {
        heading: 'Checklist kiểm tra kỹ thuật mặt bằng ngoài trời',
        paragraphs: [
          'Các hạng mục bắt buộc phải khảo sát và có giải pháp trước khi dựng rạp ngoài trời:',
        ],
        table: {
          headers: ['Hạng mục rà soát', 'Rủi ro tiềm ẩn', 'Giải pháp xử lý tiêu chuẩn của Your Dreams'],
          rows: [
            ['Nền đất & Độ dốc', 'Nền đất mềm bị lún khi trời mưa, nước chảy dồn về chân sân khấu', 'Lót sàn gỗ pallet chịu lực hoặc ván ép công nghiệp, tạo rãnh thoát nước'],
            ['Sức gió & Neo giằng', 'Gió lốc cuốn bay rạp che, lật đổ khung backdrop', 'Sử dụng khung nhà giàn ba lăng xích kiên cố, neo cọc sắt sâu 1m hoặc tạ bê tông 200kg'],
            ['An toàn hệ thống điện', 'Mưa ẩm làm rò rỉ điện ra khung sắt gây nguy hiểm tính mạng', 'Dùng dây cáp điện bọc cao su 2 lớp, gắn aptomat chống giật ELCB, kê cao tủ điện 30cm'],
            ['Góc phủ âm thanh', 'Âm thanh bị gió thổi bay, loãng tiếng, không nghe rõ', 'Bố trí dàn loa Line Array treo cao 4-6m, hướng góc đánh thẳng vào khu vực khán giả'],
            ['Nắng nóng gay gắt', 'Khách mời và vận động viên bị say nắng, kiệt sức', 'Lắp đặt quạt phun sương công nghiệp, nhà bạt cách nhiệt, trạm nước mát liên tục'],
          ],
        },
        image: {
          src: '/images/happy-run.webp',
          alt: 'Khung cảnh sự kiện ngoài trời được che chắn an toàn bằng hệ thống nhà bạt',
          caption: 'Hệ thống nhà bạt kiên cố đảm bảo giải chạy diễn ra thuận lợi dưới mọi điều kiện thời tiết.',
        },
      },
      {
        heading: 'Quy trình kích hoạt phương án dự phòng thời tiết (Plan B)',
        paragraphs: [
          'Ban tổ chức cần thống nhất các mốc quyết định (Decision Points) rõ ràng trong hợp đồng:',
        ],
        list: [
          'Mốc T-24 giờ: Theo dõi dự báo thời tiết radar vệ tinh. Nếu xác suất mưa trên 70%, bắt đầu điều phối thêm bạt che phụ và chuẩn bị sẵn áo mưa tiện lợi.',
          'Mốc T-4 giờ: Nếu trời đổ mưa vừa, tiến hành bọc màng co nilon chống nước toàn bộ loa monitor, bàn điều khiển FOH và tủ điện.',
          'Ngưỡng dừng khẩn cấp: Nếu xuất hiện giông lốc giật trên cấp 7 hoặc sấm sét nguy hiểm, Trưởng BTC có quyền ra lệnh tạm dừng chương trình và di tản người tham gia vào sảnh tòa nhà kiên cố.',
        ],
        image: {
          src: '/images/sports-day.webp',
          alt: 'Ngày hội thể thao ngoài trời được bảo đảm an toàn bằng các trạm y tế lưu động',
          caption: 'Trạm y tế và nhân sự cứu hộ thường trực suốt thời gian diễn ra hoạt động ngoài trời.',
        },
      },
      {
        heading: 'Tận hưởng sự kiện ngoài trời hoàn hảo cùng Your Dreams',
        paragraphs: [
          'Sự chuẩn bị kỹ lưỡng về trang thiết bị nhà giàn và kinh nghiệm ứng phó thời tiết dày dạn sẽ giúp sự kiện ngoài trời của bạn diễn ra suôn sẻ, an toàn và tràn ngập năng lượng.',
        ],
      },
    ],
  },

  // 13. Ý TƯỞNG TỔ CHỨC SỰ KIỆN
  {
    slug: 'y-tuong-to-chuc-su-kien',
    category: 'Ý tưởng sự kiện',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'y-tuong-to-chuc-su-kien',
    alt: 'Minh họa vector bóng đèn ý tưởng và các chi tiết sáng tạo sự kiện',
    title: 'Cách tìm ý tưởng tổ chức sự kiện độc đáo và phù hợp với người tham dự',
    excerpt: 'Phương pháp tìm kiếm ý tưởng sự kiện đột phá (Brainstorming Concept): kết nối câu chuyện thương hiệu, xu hướng thịnh hành và tính khả thi trong thi công thực tế.',
    lead: 'Ý tưởng sự kiện tốt không nhất thiết phải dùng công nghệ triệu đô phức tạp. Ý tưởng xuất sắc là ý tưởng giải quyết đúng một nhu cầu cảm xúc của người tham gia và truyền tải trọn vẹn thông điệp mà doanh nghiệp muốn gửi gắm.',
    sections: [
      {
        heading: 'Bắt đầu từ câu hỏi về trải nghiệm cảm xúc',
        answerCapsule: 'Ý tưởng sự kiện độc đáo (Event Concept) được hình thành từ điểm giao thoa giữa 3 yếu tố: Câu chuyện cốt lõi của doanh nghiệp (Brand Story), Nhu cầu tâm lý của đối tượng tham dự (Target Audience Insight), và Bối cảnh không gian thời gian tổ chức. Thay vì sao chép xu hướng bề nổi, một concept tốt tạo ra mạch cảm xúc xuyên suốt từ thư mời đến giây phút bế mạc.',
        paragraphs: [
          'Rất nhiều chương trình rơi vào bẫy "thấy trend là làm" – đưa robot biểu diễn, ánh sáng laser 3D hoành tráng nhưng người tham dự lại cảm thấy lạc lõng vì không thấy sự kết nối với bản thân.',
          'Tại Your Dreams, chúng tôi xây dựng ý tưởng bắt đầu từ việc lắng nghe: bạn muốn người tham gia cảm thấy gì, nhớ gì và hành động gì sau khi bước chân ra khỏi khán phòng?',
        ],
      },
      {
        heading: 'Khung 4 phong cách Concept sự kiện thịnh hành nhất hiện nay',
        paragraphs: [
          'Dưới đây là 4 hướng phát triển ý tưởng được các doanh nghiệp ưa chuộng nhất:',
        ],
        table: {
          headers: ['Phong cách Concept', 'Ý nghĩa biểu tượng', 'Yếu tố thị giác & Âm thanh', 'Loại hình sự kiện phù hợp'],
          rows: [
            ['Công nghệ & Tương lai (Futuristic)', 'Bứt phá giới hạn, dẫn đầu xu thế, chuyển đổi số', 'Tone màu xanh neon/ánh bạc, màn LED cong, nhạc điện tử hiện đại', 'Lễ ra mắt sản phẩm công nghệ, Hội nghị chuyển đổi số'],
            ['Cội nguồn & Di sản (Heritage / Retro)', 'Tri ân quá khứ, giá trị bền vững, văn hóa cội nguồn', 'Chất liệu gỗ, tre mộc mạc, tone màu ấm áp, nhạc cụ truyền thống', 'Lễ kỷ niệm 10-20 năm thành lập, tiệc tri ân cuối năm'],
            ['Chinh phục & Tốc độ (Sporty / Challenge)', 'Tinh thần đồng đội, vượt qua thử thách, chạm đỉnh vinh quang', 'Màu đỏ/cam rực lửa, đường pitch chạy, hiệu ứng khói lửa sôi động', 'Team building, Giải chạy phong trào, Kick-off kinh doanh'],
            ['Sinh thái & Tái sinh (Eco-friendly / Green)', 'Phát triển bền vững, trách nhiệm xã hội, hòa hợp thiên nhiên', 'Cây xanh thật, vật liệu tái chế, quà tặng hạt giống, âm nhạc acoustic', 'Ngày hội gia đình, Sự kiện thương hiệu ESG, Lễ hội xanh'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
          alt: 'Ý tưởng sân khấu kết hợp giữa công nghệ hiện đại và nhận diện thương hiệu',
          caption: 'Ý tưởng concept được chuyển hóa thành thiết kế visual key 3D sống động và khả thi.',
        },
      },
      {
        heading: 'Bộ lọc 4 bước kiểm tra tính khả thi của ý tưởng trước khi duyệt',
        paragraphs: [
          'Trước khi chốt ý tưởng, hãy đưa nó qua bộ lọc kiểm tra nghiêm ngặt:',
        ],
        list: [
          'Khả thi về ngân sách: Ý tưởng có vượt quá ngân sách dự kiến không? Có thể dùng vật liệu thay thế thông minh để giảm chi phí mà vẫn giữ được hiệu ứng không?',
          'Khả thi về mặt bằng: Địa điểm có đủ trần cao, tải trọng điện và không gian để lắp đặt phối cảnh đó không?',
          'Khả thi về thời gian thi công: Ý tưởng có đòi hỏi sản xuất quá phức tạp trong khi thời gian chuẩn bị chỉ có vài ngày không?',
          'An toàn & Pháp lý: Ý tưởng có sử dụng các chất dễ cháy nổ, bay flycam trong vùng cấm bay, hoặc vi phạm bản quyền âm nhạc hình ảnh không?',
        ],
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Hiện thực hóa ý tưởng giải thể thao dưới nước quy mô cộng đồng',
          caption: 'Ý tưởng sáng tạo kết hợp vận hành thực tế tạo nên sự kiện thành công vang dội.',
        },
      },
      {
        heading: 'Để Your Dreams cùng bạn sáng tạo concept độc bản',
        paragraphs: [
          'Đội ngũ Creative của Your Dreams luôn sẵn sàng lắng nghe câu chuyện của bạn để biến những ý tưởng sơ khai thành những trải nghiệm thị giác và cảm xúc bùng nổ nhất.',
        ],
      },
    ],
  },

  // 14. EVENT LÀ GÌ VÀ CÁC LOẠI SỰ KIỆN
  {
    slug: 'event-la-gi-va-cac-loai-su-kien',
    category: 'Kiến thức sự kiện',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'event-la-gi-va-cac-loai-su-kien',
    alt: 'Minh họa vector các nhóm loại hình sự kiện phổ biến',
    title: 'Event là gì? Tổng quan các loại hình sự kiện và cấu trúc tổ chức',
    excerpt: 'Giải thích định nghĩa event là gì, phân loại chi tiết các loại sự kiện theo mục đích, hình thức tổ chức (Offline, Online, Hybrid) và cấu trúc các bộ phận tạo nên sự kiện hoàn chỉnh.',
    lead: 'Event (sự kiện) là một hoạt động có chủ đích diễn ra trong thời gian và không gian xác định nhằm truyền tải một thông điệp cụ thể tới nhóm người tham dự mục tiêu. Hiểu rõ bản chất từng loại hình sự kiện là bước đầu tiên để xây dựng chiến lược truyền thông hiệu quả.',
    sections: [
      {
        heading: 'Định nghĩa Event là gì?',
        answerCapsule: 'Event (Sự kiện) là một hoạt động thực tế được thiết kế và vận hành bài bản trong một khoảng thời gian giới hạn, nhằm mục đích kết nối con người, quảng bá thương hiệu, xúc tiến thương mại hoặc tôn vinh các giá trị văn hóa - thể thao. Một event hoàn chỉnh gồm 4 trụ cột: Mục tiêu (Objective), Khách mời (Audience), Không gian (Venue) và Kịch bản trải nghiệm (Experience).',
        paragraphs: [
          'Trong thời đại kinh tế số, event không chỉ là một buổi tụ họp đơn thuần mà trở thành một công cụ marketing trải nghiệm (Experiential Marketing) mạnh mẽ nhất giúp khách hàng thấu hiểu sản phẩm bằng tất cả các giác quan.',
          'Tùy thuộc vào quy mô và mục tiêu, các sự kiện có thể diễn ra từ vài chục người đến hàng chục ngàn người tham dự.',
        ],
      },
      {
        heading: 'Hệ thống phân loại các loại hình sự kiện phổ biến',
        paragraphs: [
          'Dưới đây là bảng phân loại các nhóm sự kiện chính trong ngành:',
        ],
        table: {
          headers: ['Nhóm sự kiện', 'Các sự kiện tiêu biểu', 'Mục tiêu chính', 'Đơn vị tổ chức phổ biến'],
          rows: [
            ['Sự kiện Doanh nghiệp (Corporate)', 'Hội nghị, Tri ân khách hàng, Gala Dinner, Ra mắt sản phẩm', 'Thúc đẩy doanh số, tri ân đối tác, khẳng định uy tín thương hiệu', 'Các tập đoàn, công ty, ngân hàng, nhãn hàng'],
            ['Sự kiện Thể thao (Sports)', 'Giải chạy marathon, Giải bơi lội, Giải pickleball, Sports Day', 'Khuyến khích rèn luyện sức khỏe, lan tỏa lối sống năng động', 'Liên đoàn thể thao, khu đô thị, doanh nghiệp'],
            ['Sự kiện Giáo dục & Kỹ năng', 'Trại hè sinh tồn, Ngày hội việc làm (Job Fair), Khóa dạy bơi an toàn', 'Đào tạo kỹ năng sống, nâng cao thể chất, hướng nghiệp', 'Trường học, trung tâm thể thao, tổ chức thanh thiếu niên'],
            ['Sự kiện Văn hóa & Giải trí', 'Lễ hội âm nhạc (Festival), Đêm nhạc Concert, Lễ hội ẩm thực', 'Mang lại niềm vui, giải trí, kết nối cảm xúc cộng đồng', 'Sở Văn hóa, các đơn vị giải trí truyền thông'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-chuyen-nghiep.webp',
          alt: 'Sự kiện chuyên nghiệp kết hợp giữa công nghệ âm thanh ánh sáng và kịch bản nghệ thuật',
          caption: 'Mỗi loại hình sự kiện đòi hỏi cách tiếp cận kịch bản và cấu hình kỹ thuật hoàn toàn khác nhau.',
        },
      },
      {
        heading: '3 Hình thức tổ chức sự kiện trong kỷ nguyên mới',
        paragraphs: [
          'Công nghệ đã thay đổi hoàn toàn cách chúng ta tiếp cận một sự kiện:',
        ],
        list: [
          'Sự kiện Trực tiếp (In-person / Offline Events): Hình thức truyền thống nơi mọi người cùng hiện diện tại một không gian thực tế, tạo ra tương tác trực tiếp sâu sắc nhất.',
          'Sự kiện Trực tuyến (Virtual / Online Events): Tổ chức hoàn toàn trên không gian số thông qua các nền tảng Zoom, MS Teams, livestream mạng xã hội, xóa bỏ rào cản địa lý và tiết kiệm chi phí di chuyển.',
          'Sự kiện Kết hợp (Hybrid Events): Xu hướng thịnh hành nhất hiện nay, kết hợp một sự kiện offline tinh gọn tại trường quay cùng hệ thống livestream tương tác hai chiều cho hàng vạn khán giả online toàn cầu.',
        ],
        image: {
          src: '/images/happy-run.webp',
          alt: 'Sự kiện thể thao thực tế mang lại cảm xúc kết nối trực tiếp mạnh mẽ',
          caption: 'Trải nghiệm trực tiếp tại sự kiện tạo ra những cảm xúc gắn kết không gì có thể thay thế.',
        },
      },
      {
        heading: 'Bắt đầu tổ chức sự kiện chuyên nghiệp cùng Your Dreams',
        paragraphs: [
          'Dù bạn đang lên kế hoạch cho một hội thảo 50 người hay một đại hội thể thao 2.000 người, đội ngũ Your Dreams luôn sẵn sàng tư vấn giải pháp tối ưu và đồng hành cùng bạn từ A-Z.',
        ],
      },
    ],
  },

  // 15. NGHỀ TỔ CHỨC SỰ KIỆN
  {
    slug: 'nghe-to-chuc-su-kien',
    category: 'Nghề nghiệp sự kiện',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'nghe-to-chuc-su-kien',
    alt: 'Minh họa vector nhân sự sự kiện đang xem checklist công việc',
    title: 'Nghề tổ chức sự kiện: Vai trò, kỹ năng và bức tranh công việc thực tế',
    excerpt: 'Khám phá bức tranh nghề tổ chức sự kiện (Event Planner / Event Coordinator): các vị trí công việc, mức thu nhập, kỹ năng sinh tồn hiện trường và lộ trình thăng tiến.',
    lead: 'Nghề tổ chức sự kiện không chỉ hào nhoáng dưới ánh đèn sân khấu như nhiều người vẫn tưởng. Đằng sau những tràng pháo tay rực rỡ là hàng chục giờ tăng ca xuyên đêm, đôi chân mỏi nhừ tại hiện trường và bản lĩnh thép để xử lý khủng hoảng trước giờ G.',
    sections: [
      {
        heading: 'Nghề tổ chức sự kiện là gì?',
        answerCapsule: 'Nghề tổ chức sự kiện (Event Management) là công việc lập kế hoạch, điều phối nhân sự, quản trị ngân sách và vận hành kỹ thuật để biến một ý tưởng thành chương trình thực tế. Người làm nghề sự kiện đòi hỏi tư duy logic của một người quản lý dự án kết hợp với sự nhạy bén thẩm mỹ của một nghệ sĩ sáng tạo.',
        paragraphs: [
          'Đây là ngành nghề thuộc top đầu về áp lực nhưng cũng nằm trong top những nghề mang lại cảm giác tự hào và thăng hoa tột bậc khi chứng kiến thành quả lao động của mình bùng nổ trước hàng ngàn khán giả.',
          'Một người làm sự kiện giỏi phải có khả năng giao tiếp đa tầng: từ việc thảo luận chiến lược với Tổng Giám đốc tập đoàn đến việc phối hợp ăn ý với anh em công nhân dựng giàn rạp giữa trưa nắng.',
        ],
      },
      {
        heading: 'Các vị trí cốt lõi trong một ê-kíp sự kiện chuyên nghiệp',
        paragraphs: [
          'Cơ cấu nhân sự trong một công ty tổ chức sự kiện chuyên nghiệp thường bao gồm:',
        ],
        table: {
          headers: ['Vị trí công việc', 'Mô tả nhiệm vụ chính', 'Kỹ năng then chốt cần có', 'Mức thu nhập tham khảo'],
          rows: [
            ['Event Planner / Account', 'Tìm kiếm khách hàng, nhận brief, lập kế hoạch tổng thể, bảo vệ đề xuất (Pitching)', 'Giao tiếp thuyết phục, quản trị ngân sách, viết proposal chuyên nghiệp', '12 – 25 triệu VNĐ + Hoa hồng dự án'],
            ['Event Creative / Copywriter', 'Sáng tạo concept, đặt tên chương trình, viết kịch bản MC, xây dựng visual key', 'Tư duy hình ảnh, viết lách linh hoạt, am hiểu xu hướng nghệ thuật', '10 – 20 triệu VNĐ'],
            ['Stage Manager (Quản lý sân khấu)', 'Chỉ huy kịch bản tại hiện trường, điều phối MC, ca sĩ, FOH âm thanh ánh sáng', 'Bản lĩnh chịu áp lực, nắm chắc run-sheet, phản xạ cực nhanh', '15 – 30 triệu VNĐ'],
            ['Production / Kỹ thuật hiện trường', 'Khảo sát mặt bằng, chỉ đạo thi công nhà giàn, sân khấu, kiểm tra tải điện', 'Hiểu biết kỹ thuật cơ khí, âm thanh ánh sáng, an toàn lao động', '10 – 18 triệu VNĐ'],
            ['Event Coordinator / Điều phối viên', 'Hỗ trợ đón khách, quản lý quà tặng, chấm công PG, hậu cần đạo cụ', 'Chăm chỉ, nhanh nhẹn, tỉ mỉ, khả năng làm việc nhóm tốt', '8 – 14 triệu VNĐ (hoặc 500k-1tr/ngày)'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-chuyen-nghiep.webp',
          alt: 'Ê-kíp sự kiện họp bàn rà soát kịch bản chi tiết trước giờ diễn ra',
          caption: 'Họp rà soát kịch bản và phân công ma trận RACI là bước bắt buộc của ê-kíp trước ngày diễn ra.',
        },
      },
      {
        heading: '5 Kỹ năng sinh tồn của người làm nghề sự kiện',
        paragraphs: [
          'Để tồn tại và phát triển bền vững trong ngành này, bạn cần tôi luyện 5 kỹ năng vàng:',
        ],
        list: [
          'Khả năng quản trị thời gian đa nhiệm (Multitasking): Cùng lúc xử lý 10 đầu việc khác nhau mà không bị nhầm lẫn hay bỏ sót hạn chót.',
          'Bình tĩnh tuyệt đối trước khủng hoảng: Khi ca sĩ đến muộn, micro bị hỏng hay trời đổ mưa, người làm sự kiện không được hoảng loạn mà phải lập tức đưa ra phương án thay thế.',
          'Sức khỏe dẻo dai và thể lực bền bỉ: Thường xuyên phải đứng liên tục 12-14 tiếng, di chuyển nhiều km tại hiện trường và làm việc không cố định giờ giấc.',
          'Kỹ năng đàm phán và kết nối con người: Biết cách thương lượng giá tốt với nhà cung cấp và tạo động lực cho đội ngũ tình nguyện viên.',
          'Sự tỉ mỉ và cầu toàn: Chăm chút từng góc gấp của khăn trải bàn, từng lỗi chính tả trên thẻ đeo đến góc nghiêng của chiếc micro.',
        ],
        image: {
          src: '/images/di-de-lon.webp',
          alt: 'Điều phối viên hiện trường tận tụy hướng dẫn người tham dự',
          caption: 'Tinh thần phục vụ tận tâm là giá trị cốt lõi làm nên uy tín của người làm nghề sự kiện.',
        },
      },
      {
        heading: 'Cơ hội phát triển nghề nghiệp tại Your Dreams',
        paragraphs: [
          'Tại Your Dreams, chúng tôi liên tục tìm kiếm và chào đón những tài năng trẻ đam mê nghề sự kiện, sẵn sàng đào tạo bài bản từ thực tế hiện trường các giải đấu thể thao và hội nghị cấp cao.',
        ],
      },
    ],
  },

  // 16. TỔ CHỨC SỰ KIỆN TUYỂN DỤNG (JOB FAIR)
  {
    slug: 'to-chuc-su-kien-tuyen-dung',
    category: 'Sự kiện doanh nghiệp',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'to-chuc-su-kien-tuyen-dung',
    alt: 'Minh họa vector gian tư vấn tại ngày hội tuyển dụng việc làm',
    title: 'Cách tổ chức sự kiện tuyển dụng và ngày hội việc làm hiệu quả',
    excerpt: 'Quy trình tổ chức ngày hội tuyển dụng (Job Fair / Career Day): thiết kế luồng ứng viên một chiều, bố trí gian hàng doanh nghiệp, phỏng vấn nhanh và bảo mật thông tin.',
    lead: 'Sự kiện tuyển dụng không chỉ nhằm thu hút hồ sơ ứng viên mà còn là chiến dịch quảng bá thương hiệu nhà tuyển dụng (Employer Branding) trực quan nhất. Thiết kế luồng tham quan khoa học sẽ giúp ứng viên tiếp cận thông tin dễ dàng và nâng cao tỷ lệ tuyển dụng thành công.',
    sections: [
      {
        heading: 'Ngày hội tuyển dụng là gì và ý nghĩa chiến lược',
        answerCapsule: 'Sự kiện tuyển dụng (Job Fair / Career Day) là ngày hội kết nối trực tiếp giữa nhà tuyển dụng và các ứng viên tiềm năng (sinh viên mới tốt nghiệp, lao động có tay nghề). Mục tiêu chính là sàng lọc CV nhanh, phỏng vấn sơ loại tại chỗ, quảng bá văn hóa doanh nghiệp và xây dựng cơ sở dữ liệu nhân tài dài hạn cho tổ chức.',
        paragraphs: [
          'Một sự kiện tuyển dụng được tổ chức lộn xộn, chen chúc sẽ để lại ấn tượng rất xấu trong mắt các tài năng trẻ về sự thiếu chuyên nghiệp của công ty.',
          'Ngược lại, một ngày hội có không gian trải nghiệm công nghệ, khu phỏng vấn riêng tư và quà tặng chu đáo sẽ khiến ứng viên khao khát được cống hiến cho doanh nghiệp.',
        ],
      },
      {
        heading: 'Quy hoạch mặt bằng luồng ứng viên 5 khu vực tiêu chuẩn',
        paragraphs: [
          'Để không bị ùn tắc khi đón hàng ngàn sinh viên cùng lúc, sơ đồ mặt bằng cần phân thành 5 khu vực riêng biệt:',
        ],
        table: {
          headers: ['Phân khu chức năng', 'Vị trí bố trí', 'Trang thiết bị cần có', 'Mục tiêu vận hành'],
          rows: [
            ['1. Cổng đón tiếp & Check-in QR', 'Cửa vào chính của sảnh', 'Bàn lễ tân, máy quét mã QR, tờ rơi sơ đồ, túi quà chào mừng', 'Xếp hàng phân làn zíc-zắc, thu thập data ứng viên ban đầu'],
            ['2. Gian hàng giới thiệu (Booth)', 'Khu vực trung tâm rộng nhất', 'Backdrop nhận diện, quầy thông tin, TV chiếu clip văn hóa công ty', 'Tư vấn vị trí tuyển dụng, giải đáp thắc mắc chế độ đãi ngộ'],
            ['3. Khu phỏng vấn nhanh (Speed Interview)', 'Khu vực yên tĩnh có vách ngăn', 'Bàn ghế đơn, nước uống, đồng hồ đếm ngược 10 phút/lượt', 'Phỏng vấn sơ loại 1:1 trực tiếp giữa ứng viên và HR'],
            ['4. Sân khấu hội thảo (Talkshow)', 'Góc khán phòng có màn LED', 'Sân khấu, âm thanh micro, màn chiếu, 100-200 ghế ngồi', 'Lãnh đạo chia sẻ định hướng nghề nghiệp, giao lưu truyền cảm hứng'],
            ['5. Khu thư giãn & Minigame', 'Gần lối ra', 'Bàn teabreak, vòng quay may mắn, photobooth chụp ảnh nhận việc', 'Tạo tâm lý hào hứng, check-in mạng xã hội lan tỏa sự kiện'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
          alt: 'Bố trí gian hàng thông tin tuyển dụng chuyên nghiệp và ngăn nắp',
          caption: 'Gian hàng doanh nghiệp thiết kế hiện đại thu hút sự chú ý của đông đảo ứng viên tiềm năng.',
        },
      },
      {
        heading: 'Bảo mật dữ liệu ứng viên theo đúng quy định pháp luật',
        paragraphs: [
          'Trong kỷ nguyên bảo vệ dữ liệu cá nhân, ban tổ chức cần tuân thủ nghiêm ngặt:',
        ],
        list: [
          'Thông báo rõ ràng mục đích thu thập CV và chỉ sử dụng cho quy trình tuyển dụng nội bộ.',
          'Số hóa hồ sơ: Khuyến khích ứng viên nộp CV qua mã QR hoặc iPad tại quầy thay vì nộp hồ sơ giấy để tránh thất lạc.',
          'Tiêu hủy hồ sơ giấy an toàn: Mọi bản in CV không trúng tuyển phải được đưa vào máy hủy giấy sau khi kết thúc chiến dịch tuyển dụng.',
        ],
        image: {
          src: '/images/di-de-lon.webp',
          alt: 'Đội ngũ hỗ trợ hướng dẫn ứng viên đăng ký thông tin trật tự',
          caption: 'Nhân sự hướng dẫn nhiệt tình giúp duy trì luồng di chuyển thông suốt trong suốt ngày hội.',
        },
      },
      {
        heading: 'Giải pháp tổ chức Job Fair chuyên nghiệp từ Your Dreams',
        paragraphs: [
          'Chúng tôi cung cấp giải pháp trọn gói từ thi công gian hàng tiêu chuẩn, cho thuê thiết bị trình chiếu đến cung cấp PG lễ tân và hệ thống check-in điện tử thông minh.',
        ],
      },
    ],
  },

  // 17. TỔ CHỨC SỰ KIỆN BẰNG TIẾNG ANH (SONG NGỮ)
  {
    slug: 'to-chuc-su-kien-bang-tieng-anh',
    category: 'Kinh nghiệm tổ chức',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'to-chuc-su-kien-bang-tieng-anh',
    alt: 'Minh họa vector hai luồng hội thoại trong sự kiện song ngữ quốc tế',
    title: 'Tổ chức sự kiện song ngữ: Chuẩn bị nội dung, phiên dịch và vận hành',
    excerpt: 'Cẩm nang tổ chức sự kiện quốc tế và hội nghị song ngữ Anh - Việt: tiêu chuẩn lựa chọn MC song ngữ, hệ thống cabin dịch cabin đồng thời, và cách chuẩn hóa thuật ngữ ngoại giao.',
    lead: 'Sự kiện song ngữ đòi hỏi sự chuẩn xác tuyệt đối từ lời mời, tài liệu trình chiếu đến kịch bản sân khấu. Dịch đúng thuật ngữ chuyên ngành là cần thiết, nhưng trải nghiệm chỉ thật sự liền mạch khi thời lượng nói, thiết bị tai nghe phiên dịch và tác phong ngoại giao được đồng bộ hoàn hảo.',
    sections: [
      {
        heading: 'Đặc thù của sự kiện song ngữ quốc tế',
        answerCapsule: 'Sự kiện song ngữ (Bilingual Events) là chương trình sử dụng đồng thời hai hoặc nhiều ngôn ngữ (phổ biến nhất là Anh - Việt, Hàn - Việt, Trung - Việt). Điểm khác biệt mấu chốt so với sự kiện thông thường là thời lượng kịch bản phải dự trù dài hơn 30-50% cho phần dịch thuật, cần có cabin phiên dịch đồng thời (Simultaneous Interpretation) và MC song ngữ có chứng chỉ ngoại ngữ chuẩn quốc tế.',
        paragraphs: [
          'Một lỗi dịch sai thuật ngữ hoặc phát âm sai tên riêng của đối tác ngoại giao có thể gây hiểu lầm nghiêm trọng và ảnh hưởng đến uy tín của thương hiệu trên trường quốc tế.',
          'Tại Your Dreams, các sự kiện song ngữ đều được biên tập và tổng duyệt bởi đội ngũ chuyên gia thông thạo giao tiếp đa văn hóa.',
        ],
      },
      {
        heading: 'So sánh 2 hình thức phiên dịch trong sự kiện',
        paragraphs: [
          'Tùy theo tính chất chương trình và ngân sách, bạn có thể lựa chọn một trong hai phương án:',
        ],
        table: {
          headers: ['Tiêu chí so sánh', 'Dịch Cabin (Đồng thời - Simultaneous)', 'Dịch Đuổi (Nối tiếp - Consecutive)'],
          rows: [
            ['Cách thức vận hành', 'Diễn giả nói đến đâu, phiên dịch viên ngồi trong cabin dịch qua micro đến đó; khách đeo tai nghe không dây nghe tức thời', 'Diễn giả nói một đoạn ngắn (1-2 phút) rồi dừng lại để phiên dịch viên đứng bên cạnh dịch lại'],
            ['Thời lượng chương trình', 'Tiết kiệm thời gian, chương trình diễn ra liên tục đúng timeline', 'Kéo dài gấp đôi thời gian vì mỗi nội dung phải nói 2 lần'],
            ['Thiết bị yêu cầu', 'Cabin cách âm, hệ thống phát sóng hồng ngoại, tai nghe cho từng đại biểu', 'Chỉ cần micro cầm tay thông thường cho phiên dịch viên'],
            ['Chi phí đầu tư', 'Cao hơn (bao gồm thuê cabin, tai nghe và 2 phiên dịch viên thay ca)', 'Tiết kiệm hơn (chỉ tính thù lao của 1 phiên dịch viên)'],
            ['Phù hợp sự kiện nào', 'Hội nghị cấp cao, hội thảo chuyên đề quốc tế, lễ ký kết VIP', 'Buổi họp báo ngắn, tọa đàm nhóm nhỏ, chuyến thăm quan nhà máy'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
          alt: 'Hội nghị quốc tế song ngữ với trang thiết bị dịch cabin chuyên nghiệp',
          caption: 'Hệ thống cabin phiên dịch hiện đại đảm bảo luồng thông tin truyền tải không gián đoạn.',
        },
      },
      {
        heading: 'Checklist kiểm tra kỹ thuật cabin và MC song ngữ trước giờ G',
        paragraphs: [
          'Để không xảy ra trục trặc đường truyền âm thanh phiên dịch, cần rà soát:',
        ],
        list: [
          'Vị trí đặt cabin dịch: Phải nhìn thấy trực tiếp sân khấu và màn hình LED của diễn giả để người dịch nắm bắt ngôn ngữ cơ thể.',
          'Test tai nghe đại biểu: Kiểm tra độ trong trẻo của âm thanh trên tất cả các kênh tần số, chuẩn bị pin sạc dự phòng cho từng thiết bị.',
          'Bảng thuật ngữ chuyên ngành (Glossary): Gửi trước slide thuyết trình và bảng từ viết tắt cho phiên dịch viên tối thiểu 3 ngày trước sự kiện.',
          'MC Song ngữ: Phải có bằng IELTS từ 7.5 trở lên hoặc cử nhân ngôn ngữ, có khả năng dịch ứng biến linh hoạt khi diễn giả phát biểu ngoài kịch bản.',
        ],
        image: {
          src: '/images/nghe-to-chuc-su-kien.webp',
          alt: 'MC và ê-kíp điều phối kiểm tra kịch bản song ngữ tại hiện trường',
          caption: 'MC song ngữ chuyên nghiệp tạo cầu nối văn hóa thanh lịch giữa các bên tham dự.',
        },
      },
      {
        heading: 'Năng lực tổ chức sự kiện quốc tế của Your Dreams',
        paragraphs: [
          'Chúng tôi tự hào cung cấp đội ngũ MC song ngữ Anh - Hàn - Trung chuyên nghiệp cùng hệ thống thiết bị cabin phiên dịch đạt chuẩn quốc tế cho các hội nghị đa quốc gia tại Việt Nam.',
        ],
      },
    ],
  },

  // 18. TỔ CHỨC GIẢI PICKLEBALL
  {
    slug: 'to-chuc-giai-pickleball',
    category: 'Sự kiện thể thao',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'to-chuc-giai-pickleball',
    alt: 'Minh họa vector sân pickleball, vợt và bóng thi đấu phong trào',
    title: 'Cách tổ chức giải hoặc lớp pickleball cho doanh nghiệp và cộng đồng',
    excerpt: 'Hướng dẫn toàn diện quy trình tổ chức giải đấu Pickleball phong trào: tiêu chuẩn kích thước sân bãi, lựa chọn thể thức thi đấu, luật giao bóng, trọng tài và dự toán ngân sách.',
    lead: 'Pickleball đang là bộ môn thể thao bùng nổ mạnh mẽ nhất tại Việt Nam nhờ tính chất dễ chơi, ít chấn thương và tính kết nối cộng đồng cực cao. Tổ chức một giải đấu Pickleball bài bản là cơ hội tuyệt vời để nâng cao tinh thần thể thao và quảng bá hình ảnh doanh nghiệp hiện đại.',
    sections: [
      {
        heading: 'Cơn sốt Pickleball và sức hút đối với doanh nghiệp',
        answerCapsule: 'Pickleball là môn thể thao dùng vợt kết hợp giữa quần vợt (tennis), cầu lông và bóng bàn, thi đấu trên sân có kích thước 6.1m x 13.4m. Tổ chức giải Pickleball cho doanh nghiệp bao gồm: Lập điều lệ thi đấu (đơn nam, đôi nam, đôi nam nữ), Khảo sát cụm sân đạt chuẩn độ nhám và ánh sáng, Điều phối tổ trọng tài chứng nhận, và Trang bị bóng thi đấu đạt chuẩn USAPA.',
        paragraphs: [
          'Khác với tennis đòi hỏi thể lực và kỹ thuật tập luyện nhiều năm, Pickleball rất dễ tiếp cận: người mới chỉ cần học 30 phút là có thể vào sân đánh những đường bóng qua lại.',
          'Chính vì vậy, đây là bộ môn hoàn hảo để tổ chức giải đấu nội bộ cho công ty, nơi cả ban lãnh đạo lẫn nhân viên trẻ tuổi đều có thể cùng đứng chung một sân thi đấu.',
        ],
      },
      {
        heading: 'Lựa chọn thể thức thi đấu Pickleball khoa học',
        paragraphs: [
          'Tùy theo số lượng vận động viên và số lượng sân sẵn có, bạn nên chọn một trong các thể thức sau:',
        ],
        table: {
          headers: ['Thể thức thi đấu', 'Quy tắc tính điểm', 'Ưu điểm nổi bật', 'Quy mô phù hợp'],
          rows: [
            ['Chia bảng vòng tròn (Round Robin)', 'Đánh 1 set 11 điểm hoặc 15 điểm (cách 2 điểm), thắng được cộng điểm bảng', 'Mỗi người chơi được đánh nhiều trận, tối đa hóa thời gian giao lưu', '16 – 32 vận động viên, có 4-6 sân cùng lúc'],
            ['Loại trực tiếp (Knockout)', 'Đánh 3 set thắng 2 (set 11 điểm), thua bị loại ngay', 'Tiết kiệm thời gian, tính cạnh tranh cao, trận đấu kịch tính', 'Giải đấu đông người (40+ VĐV), thời gian giới hạn trong 1 ngày'],
            ['Nhánh thắng nhánh thua (Double Elimination)', 'Người thua trận 1 vẫn còn cơ hội thi đấu nhánh dưới để tranh giải ba', 'Công bằng, giảm thiểu rủi ro bốc thăm phải đối thủ mạnh từ đầu', 'Giải đấu phong trào quy mô vừa, tổ chức trong 2 ngày'],
          ],
        },
        image: {
          src: '/images/sports-day.webp',
          alt: 'Giải đấu thể thao phong trào Pickleball do Your Dreams điều phối tổ chức',
          caption: 'Các trận đấu Pickleball luôn mang lại không khí sôi động và tiếng cười gắn kết đồng đội.',
        },
      },
      {
        heading: 'Tiêu chuẩn sân bãi và trang thiết bị giải Pickleball',
        paragraphs: [
          'Để giải đấu diễn ra an toàn và chuyên nghiệp, cần đảm bảo các thông số kỹ thuật:',
        ],
        list: [
          'Kích thước sân: Chiều rộng 6.1m, chiều dài 13.4m (bằng kích thước sân cầu lông đôi). Vạch bếp (Kitchen - Non-Volley Zone) cách lưới 2.13m mỗi bên.',
          'Chiều cao lưới: Cao 91.4cm ở hai bên cột và 86.4cm ở chính giữa tim lưới.',
          'Bóng thi đấu: Dùng bóng Pickleball ngoài trời có 40 lỗ tròn đúc bằng nhựa cao cấp (đạt chuẩn USAPA Approved) để đường bóng bay ổn định.',
          'Mặt sân: Sơn phủ Acrylic nhiều lớp có độ nhám chống trơn trượt, đèn chiếu sáng đạt tối thiểu 300 - 500 Lux.',
        ],
        image: {
          src: '/images/happy-run.webp',
          alt: 'Lễ bế mạc và trao cúp vinh danh cho các nhà vô địch giải thể thao',
          caption: 'Bộ cúp pha lê và huy chương thiết kế riêng tôn vinh thành tích của các tay vợt xuất sắc.',
        },
      },
      {
        heading: 'Dịch vụ tổ chức giải Pickleball trọn gói của Your Dreams',
        paragraphs: [
          'Your Dreams cung cấp trọn gói từ booking cụm sân Pickleball chất lượng cao tại Hà Nội, cung cấp trọng tài, bảng lật điểm, backdrop chụp hình, cúp huy chương đến teabreak nước uống thể thao suốt giải đấu.',
        ],
      },
    ],
  },

  // 19. TỔ CHỨC GIẢI BƠI CHO DOANH NGHIỆP
  {
    slug: 'to-chuc-giai-boi-cho-doanh-nghiep',
    category: 'Sự kiện thể thao',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '8 phút đọc',
    image: 'to-chuc-giai-boi-cho-doanh-nghiep',
    alt: 'Minh họa vector vận động viên bơi trong đường bơi hồ bơi tiêu chuẩn',
    title: 'Tổ chức giải bơi cho doanh nghiệp: Kế hoạch chuyên môn và an toàn mặt nước',
    excerpt: 'Hướng dẫn lên thể lệ, phân nhóm cự ly thi đấu, sắp xếp làn bơi, bố trí đội ngũ cứu hộ CPR thường trực và điều phối an toàn cho ngày hội bơi lội doanh nghiệp.',
    lead: 'Giải bơi doanh nghiệp cần đặt tiêu chuẩn an toàn dưới nước lên trên trải nghiệm thi đấu. Quy mô, nội dung cự ly và nhân sự cứu hộ phải được quyết định sau khi khảo sát thực tế hồ bơi và phối hợp chặt chẽ với ban quản lý địa điểm.',
    sections: [
      {
        heading: 'Ý nghĩa của giải bơi lội doanh nghiệp và cư dân',
        answerCapsule: 'Giải bơi lội doanh nghiệp là sự kiện thể thao dưới nước giúp rèn luyện thể lực toàn diện, giải tỏa áp lực và xây dựng tinh thần đồng đội qua các nội dung bơi tiếp sức. Yêu cầu bắt buộc là hồ bơi đạt chuẩn vệ sinh và kích thước (25m hoặc 50m), có phao phân làn chống sóng, bảng bấm giờ điện tử và đội ngũ cứu hộ chuyên môn túc trực thường trực.',
        paragraphs: [
          'Bơi lội là môn thể thao không có va chạm trực tiếp giữa các vận động viên nên rất an toàn cho hệ xương khớp, phù hợp cho mọi lứa tuổi từ trẻ nhỏ đến cán bộ nhân viên lớn tuổi.',
          'Dưới sự bảo trợ chuyên môn của Swim For Life Việt Nam, Your Dreams đã tổ chức thành công nhiều giải bơi cư dân quy mô lớn như Kình ngư Quận biển Ocean City.',
        ],
      },
      {
        heading: 'Các nội dung thi đấu chuẩn trong giải bơi phong trào',
        paragraphs: [
          'Để khuyến khích đông đảo nhân viên tham gia, chương trình nên chia thành các cự ly ngắn dễ thi đấu:',
        ],
        table: {
          headers: ['Nội dung thi đấu', 'Cự ly bơi', 'Nhóm đối tượng', 'Tính chất tranh tài'],
          rows: [
            ['Bơi ếch phong trào', '25m hoặc 50m', 'Nam / Nữ mọi lứa tuổi', 'Nội dung đông người đăng ký nhất, kỹ thuật dễ bơi'],
            ['Bơi tự do (Bơi sải)', '50m', 'Vận động viên có thể lực tốt', 'Đua tốc độ cao, gay cấn và hấp dẫn'],
            ['Bơi tiếp sức hỗn hợp (Team Relay)', '4 x 25m hoặc 4 x 50m', 'Đội 4 người (bắt buộc có cả nam và nữ)', 'Đỉnh cao gắn kết tinh thần đồng đội của các phòng ban'],
            ['Nội dung vui nhộn gia đình', 'Bơi phao tiếp sức, Bơi bắt vịt', 'Bố mẹ kết hợp cùng con nhỏ', 'Tạo tiếng cười sảng khoái cho khán giả cổ vũ'],
          ],
        },
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Giải bơi Kình ngư Quận biển Ocean City do Your Dreams điều phối chuyên môn',
          caption: 'Hệ thống phao phân làn và bục xuất phát đạt chuẩn thi đấu tại bể bơi Vinhomes Ocean Park.',
        },
      },
      {
        heading: 'Quy trình kiểm soát an toàn mặt nước chuẩn Zero Incident',
        paragraphs: [
          'An toàn dưới nước là yếu tố sống còn, Your Dreams áp dụng quy trình kiểm soát 4 lớp khắt khe:',
        ],
        list: [
          'Kiểm tra sức khỏe trước khi xuống nước: Bắt buộc VĐV ký cam kết sức khỏe, không có tiền sử bệnh tim mạch, huyết áp cao hay động kinh.',
          'Mật độ nhân sự cứu hộ (Lifeguards): Bố trí tối thiểu 1 cứu hộ viên trên mỗi 2 làn bơi, cầm sẵn phao cứu sinh và sào cứu hộ túc trực dọc mép bể.',
          'Tín hiệu dừng khẩn cấp: Trang bị còi hơi công suất lớn để trọng tài thổi dừng toàn bộ trận đấu khi phát hiện vận động viên có dấu hiệu đuối nước hoặc chuột rút.',
          'Trạm y tế bờ bể: Bác sĩ túc trực cùng máy sốc tim ngoài tự động (AED), bình oxy và xe cấp cứu đậu sẵn ngoài cổng.',
        ],
        image: {
          src: '/images/swim-vinhomes.webp',
          alt: 'Huấn luyện viên Swim For Life Việt Nam trực tiếp giám sát an toàn mặt nước',
          caption: '100% nhân sự cứu hộ đều có chứng chỉ cứu nạn cứu hộ thể thao dưới nước quốc gia.',
        },
      },
      {
        heading: 'Kinh nghiệm từ Your Dreams và Swim For Life Việt Nam',
        paragraphs: [
          'Với uy tín hơn 5 năm đào tạo bơi cho tập đoàn VinGroup, chúng tôi tự tin cung cấp giải pháp trọn gói tổ chức giải bơi doanh nghiệp chuyên nghiệp và an toàn tuyệt đối.',
        ],
      },
    ],
  },

  // 20. TỔ CHỨC SỰ KIỆN KHAI TRƯƠNG
  {
    slug: 'to-chuc-su-kien-khai-truong',
    category: 'Sự kiện doanh nghiệp',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'to-chuc-su-kien-khai-truong',
    alt: 'Minh họa vector mặt tiền cửa hàng và trang trí lễ khai trương rực rỡ',
    title: 'Hướng dẫn tổ chức sự kiện khai trương cửa hàng, showroom và văn phòng',
    excerpt: 'Lập kế hoạch lễ khai trương (Grand Opening) chuẩn phong thủy: nghi thức cắt băng khánh thành, múa lân sư rồng xông đất khai tài, kịch bản đón khách và chiến dịch truyền thông bùng nổ doanh số.',
    lead: 'Lễ khai trương (Grand Opening) là bước khởi đầu mang ý nghĩa phong thủy và thương mại thiêng liêng đối với mỗi doanh nghiệp. Một buổi lễ được chuẩn bị chu đáo sẽ mang lại may mắn, kích hoạt tài lộc và thu hút sự chú ý của toàn bộ cộng đồng dân cư quanh khu vực.',
    sections: [
      {
        heading: 'Ý nghĩa của lễ khai trương đối với hoạt động kinh doanh',
        answerCapsule: 'Lễ khai trương (Grand Opening) là sự kiện đánh dấu thời điểm một cửa hàng, showroom, nhà hàng hoặc văn phòng chính thức mở cửa đón khách. Mục tiêu kép của sự kiện là: Cầu may mắn hanh thông về mặt tâm linh phong thủy, và Tạo tiếng vang truyền thông thu hút lượng khách hàng trải nghiệm ngay trong ngày đầu mở bán.',
        paragraphs: [
          'Dân gian có câu "Đầu xuôi đuôi lọt". Một lễ khai trương được tổ chức tưng bừng với tiếng trống lân rộn rã, thảm đỏ rực rỡ và đông đảo khách quý tham dự sẽ tạo tâm lý an tâm, hào hứng cho cả chủ doanh nghiệp lẫn đội ngũ nhân viên.',
          'Đây cũng là cơ hội để thu thập những tư liệu hình ảnh và video đẹp mắt phục vụ cho các chiến dịch quảng cáo online sau này.',
        ],
      },
      {
        heading: 'Kịch bản khung 8 bước cho lễ khai trương chuẩn mực',
        paragraphs: [
          'Dưới đây là tiến trình thời gian chuẩn của một buổi lễ khai trương kéo dài 90-120 phút:',
        ],
        table: {
          headers: ['Thời gian', 'Nội dung chương trình', 'Hoạt động cụ thể', 'Ghi chú kỹ thuật FOH'],
          rows: [
            ['08:00 – 08:30', 'Đón tiếp khách mời & Check-in', 'Lễ tân cài hoa đại biểu, hướng dẫn chụp ảnh photobooth, mời dùng teabreak', 'Nhạc acoustic nhẹ nhàng, trình chiếu clip giới thiệu'],
            ['08:30 – 08:45', 'Múa Lân Sư Rồng mở màn', 'Tiết mục múa lân "Trống hội khai tài" và "Song lân báo hỷ" tưng bừng', 'Âm thanh trống lân vang dội thu hút người đi đường'],
            ['08:45 – 08:55', 'Tuyên bố lý do & Giới thiệu', 'MC chào mừng, giới thiệu đại biểu VIP, lãnh đạo và đối tác tham dự', 'Nhạc hiệu trang trọng, đèn follow bắt theo MC'],
            ['08:55 – 09:10', 'Phát biểu của Lãnh đạo', 'Đại diện công ty chia sẻ tầm nhìn và lời cảm ơn đến khách hàng', 'Micro cổ ngỗng rõ tiếng, slide chiếu thông điệp'],
            ['09:10 – 09:20', 'Nghi thức Cắt băng khai trương', 'Đại biểu lên sân khấu, PG bê khay kéo vàng, cắt băng đỏ khánh thành', 'Bắn pháo kim tuyến, nhạc chúc mừng hoành tráng'],
            ['09:20 – 09:30', 'Khui sâm banh & Nâng ly', 'Lãnh đạo cùng khách quý nâng ly chúc mừng thắng lợi', 'PG phục vụ rượu vang, nhạc rộn ràng'],
            ['09:30 – 10:15', 'Tham quan & Mua sắm', 'Mời khách vào trải nghiệm sản phẩm, áp dụng chương trình khuyến mãi', 'Nhân viên tư vấn sẵn sàng tại các quầy'],
            ['10:15 – 10:30', 'Trao quà tri ân & Bế mạc', 'Tặng quà lưu niệm mang logo công ty và tiễn khách ra về', 'Chụp ảnh lưu niệm tập thể'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-khai-truong.webp',
          alt: 'Nghi thức cắt băng khánh thành khai trương rực rỡ sắc đỏ may mắn',
          caption: 'Bộ cắt băng khánh thành gồm khay đồng, dải lụa đỏ và kéo mạ vàng mang ý nghĩa khai tài đắc lộc.',
        },
      },
      {
        heading: 'Bộ thiết bị và nhân sự không thể thiếu trong lễ khai trương',
        paragraphs: [
          'Để lễ khai trương tạo được hiệu ứng thị giác mạnh mẽ từ xa, bạn cần chuẩn bị:',
        ],
        list: [
          'Cổng chào hơi hoặc cổng bóng nghệ thuật: Đặt ngay mặt tiền lối vào, màu sắc đồng bộ nhận diện thương hiệu.',
          'Thảm đỏ trải sàn: Trải từ vỉa hè vào thẳng khu vực sân khấu tạo cảm giác trang trọng cho từng bước chân đại biểu.',
          'Đoàn Lân Sư Rồng chuyên nghiệp: Gồm 2 lân, 1 địa, dàn trống hội và câu liễn chúc mừng "Khai trương hồng phát".',
          'Bộ cắt băng khánh thành: Khay inox, khăn phủ đỏ, dải lụa đỏ hoa cầu và kéo mạ vàng sắc bén.',
          'Hệ thống âm thanh sân khấu ngoài trời: Đảm bảo tiếng phát biểu ấm rõ và nhạc nền khuấy động không khí.',
        ],
        image: {
          src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
          alt: 'Trang trí không gian tiệc teabreak sang trọng tiếp đón khách quý',
          caption: 'Bàn tiệc teabreak với bánh ngọt, trái cây tươi và nước ép tiếp đãi khách mời chu đáo.',
        },
      },
      {
        heading: 'Gói dịch vụ khai trương trọn gói từ Your Dreams',
        paragraphs: [
          'Your Dreams cung cấp trọn gói dịch vụ khai trương từ khâu thiết kế backdrop, múa lân sư rồng, tiệc teabreak đến xin giấy phép sử dụng vỉa hè tạm thời, giúp doanh nghiệp an tâm đón ngày vui trọn vẹn.',
        ],
      },
    ],
  },

  // 21. TỔ CHỨC SỰ KIỆN SINH NHẬT CÔNG TY
  {
    slug: 'to-chuc-su-kien-sinh-nhat',
    category: 'Sự kiện doanh nghiệp',
    date: '2026-09-25',
    updated: '2026-10-25',
    readingTime: '7 phút đọc',
    image: 'to-chuc-su-kien-sinh-nhat',
    alt: 'Minh họa vector tiệc sinh nhật công ty và kỷ niệm ngày thành lập',
    title: 'Cách tổ chức tiệc sinh nhật công ty và lễ kỷ niệm ngày thành lập',
    excerpt: 'Hướng dẫn lập kế hoạch lễ kỷ niệm ngày thành lập doanh nghiệp (Company Anniversary): chọn concept ý nghĩa, nghi thức thắp nến cắt bánh sinh nhật và vinh danh nhân sự cống hiến.',
    lead: 'Sinh nhật công ty là cột mốc đặc biệt để toàn thể cán bộ nhân viên cùng nhìn lại chặng đường gian nan đã vượt qua, tri ân những cống hiến bền bỉ và tiếp thêm lửa nhiệt huyết cho những mục tiêu bứt phá trong giai đoạn phát triển mới.',
    sections: [
      {
        heading: 'Ý nghĩa của lễ kỷ niệm ngày thành lập công ty',
        answerCapsule: 'Lễ kỷ niệm ngày thành lập (Company Anniversary) là sự kiện nội bộ kết hợp tri ân đối tác nhằm tôn vinh văn hóa doanh nghiệp và ghi nhận hành trình phát triển qua các mốc 1 năm, 5 năm, 10 năm hay 20 năm. Điểm nhấn là video clip nhìn lại chặng đường lịch sử (Recap Film), nghi thức cắt bánh sinh nhật tập thể và lễ vinh danh trao cúp tri ân nhân viên thâm niên.',
        paragraphs: [
          'Khác với tiệc tất niên Year End Party mang tính tổng kết công việc cuối năm, lễ sinh nhật công ty mang đậm màu sắc hoài niệm, lòng biết ơn và sự tự hào về thương hiệu.',
          'Một buổi lễ thành công sẽ khơi dậy niềm kiêu hãnh của mỗi cá nhân khi được là một phần trong đại gia đình doanh nghiệp.',
        ],
      },
      {
        heading: 'Gợi ý chủ đề Concept theo từng cột mốc năm thành lập',
        paragraphs: [
          'Mỗi cột mốc tuổi của doanh nghiệp mang một tầm vóc và thông điệp khác nhau:',
        ],
        table: {
          headers: ['Cột mốc sinh nhật', 'Thông điệp ý nghĩa', 'Ý tưởng chủ đề gợi ý', 'Điểm nhấn chương trình'],
          rows: [
            ['Kỷ niệm 1 – 3 năm', 'Khởi nghiệp, nhiệt huyết tuổi trẻ, thích ứng linh hoạt', '"Bắt đầu từ ước mơ" / "Cháy cùng đam mê"', 'Tiệc ấm cúng, chia sẻ tâm tình những ngày đầu gian khó'],
            ['Kỷ niệm 5 năm', 'Khẳng định vị thế, đặt nền móng vững chắc', '"Dấu ấn 5 năm – Vững bước vươn xa"', 'Ra mắt nhận diện thương hiệu mới, vinh danh nhóm sáng lập'],
            ['Kỷ niệm 10 năm', 'Một thập kỷ bền bỉ, bứt phá dẫn đầu ngành', '"Một thập kỷ chuyển mình – Khát vọng tương lai"', 'Gala hoành tráng, tri ân các đối tác chiến lược và nhân sự 10 năm'],
            ['Kỷ niệm 15 – 20 năm', 'Trường tồn cùng thời gian, di sản tự hào', '"Vững vàng di sản – Vươn tầm quốc tế"', 'Triển lãm bảo tàng lịch sử doanh nghiệp, đêm nhạc giao hưởng'],
          ],
        },
        image: {
          src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
          alt: 'Không gian tiệc kỷ niệm ngày thành lập công ty trang trọng và ấm cúng',
          caption: 'Sân khấu gala kỷ niệm ngày thành lập với hiệu ứng ánh sáng ấm áp và xúc động.',
        },
      },
      {
        heading: 'Checklist các nghi thức không thể thiếu trong tiệc sinh nhật',
        paragraphs: [
          'Để đêm tiệc sinh nhật chạm đến trái tim của người tham dự, hãy chú trọng 4 khoảnh khắc:',
        ],
        list: [
          'Bức tường ký ức (Memory Wall / Photowall): Trưng bày những bức ảnh kỷ niệm từ những ngày đầu khởi nghiệp với vài nhân sự đến quy mô hiện tại.',
          'Video clip lịch sử phát triển: Phóng sự tài liệu dài 3-5 phút với những lời tâm sự chân thành của các nhân viên kỳ cựu và thông điệp từ Ban lãnh đạo.',
          'Nghi thức thắp nến và cắt bánh sinh nhật: Chiếc bánh gato khổng lồ nhiều tầng, toàn thể khán phòng cùng hát vang bài ca chúc mừng sinh nhật.',
          'Lễ vinh danh nhân sự cống hiến: Trao kỷ niệm chương vàng, chuyến du lịch hoặc phần thưởng giá trị cho các cá nhân đồng hành lâu năm.',
        ],
        image: {
          src: '/images/ocean-city.webp',
          alt: 'Khoảnh khắc trao cúp vinh danh và kỷ niệm chương cho nhân sự xuất sắc',
          caption: 'Lễ vinh danh cống hiến là khoảnh khắc tự hào thiêng liêng nhất của mỗi cán bộ nhân viên.',
        },
      },
      {
        heading: 'Tổ chức tiệc sinh nhật công ty trọn vẹn cùng Your Dreams',
        paragraphs: [
          'Your Dreams cung cấp trọn gói từ lên concept ý tưởng, sản xuất video phóng sự, trang trí photobooth đến điều phối âm thanh ánh sáng, mang đến cho doanh nghiệp một đêm sinh nhật đong đầy cảm xúc và niềm tự hào.',
        ],
      },
    ],
  },
];

export function postImagePath(post: Post) {
  return `/images/${post.image}.webp`;
}
export type PostItem = Post;
