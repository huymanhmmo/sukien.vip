export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  answerCapsule: string;
  heroImage: { src: string; alt: string };
  gallery: { src: string; alt: string; caption: string }[];
  items: string[];
  deliverables: { step: string; title: string; desc: string }[];
  packageTable: { headers: string[]; rows: string[][] };
  faqs: { question: string; answer: string }[];
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    slug: 'to-chuc-su-kien-the-thao',
    number: '01',
    title: 'Tổ chức sự kiện thể thao trọn gói',
    shortTitle: 'Sự kiện thể thao',
    description: 'Giải chạy marathon, giải bơi lội, giải pickleball và ngày hội thể thao đa môn cho doanh nghiệp và khu đô thị.',
    intro: 'Dịch vụ tổ chức sự kiện thể thao trọn gói của Your Dreams bao quát từ khảo sát cung đường, xin cấp phép chính quyền địa phương, thiết lập trạm tiếp nước, đội ngũ y tế cứu hộ thường trực, hệ thống tính giờ chíp điện tử đến truyền thông và lễ trao giải vinh danh.',
    answerCapsule: 'Dịch vụ tổ chức sự kiện thể thao trọn gói là giải pháp vận hành toàn diện các giải chạy marathon, bơi lội, bóng đá, pickleball cho doanh nghiệp và cộng đồng. Your Dreams đảm nhận từ pháp lý cấp phép, khảo sát an toàn đường đua, trang thiết bị thi đấu, trọng tài chuyên nghiệp đến hệ thống y tế sơ cứu hiện trường theo chuẩn Zero Incident.',
    heroImage: {
      src: '/images/happy-run.webp',
      alt: 'Giải chạy phong trào ROX Living Happy Run 2024 quy mô hơn 1.000 vận động viên do Your Dreams tổ chức',
    },
    gallery: [
      {
        src: '/images/ocean-city.webp',
        alt: 'Giải bơi Kình ngư Quận biển Ocean City do Your Dreams tổ chức tại Vinhomes Ocean Park',
        caption: 'Giải bơi cư dân Ocean City quy tụ hàng trăm kình ngư thi đấu an toàn tuyệt đối dưới nước.',
      },
      {
        src: '/images/sports-day.webp',
        alt: 'Ngày hội thể thao cộng đồng đa môn tại Diễn Châu kết nối các gia đình và cán bộ nhân viên',
        caption: 'Ngày hội thể thao đa môn: bóng đá, pickleball, tennis và các trò chơi vận động đồng đội.',
      },
    ],
    items: [
      'Giải chạy marathon đường bằng và chạy tiếp sức phong trào (3km, 5km, 10km, 21km)',
      'Giải bơi lội hồ bơi và open water an toàn cho cư dân, học sinh, doanh nghiệp',
      'Giải đấu Pickleball, tennis, cầu lông và bóng đá mini phong trào',
      'Ngày hội thể thao (Sports Day / Family Day) đa môn gắn kết văn hóa nội bộ',
    ],
    deliverables: [
      { step: '01', title: 'Khảo sát & Cấp phép', desc: 'Đo đạc cung đường, lập phương án phân luồng giao thông và hoàn thiện hồ sơ xin phép Sở Văn hóa & Thể thao.' },
      { step: '02', title: 'Kỹ thuật & Trọng tài', desc: 'Thiết lập vạch xuất phát/đích, cổng hơi, thảm chip timing, điều phối tổ trọng tài cấp liên đoàn.' },
      { step: '03', title: 'Y tế & Cứu hộ đường đua', desc: 'Bố trí trạm y tế lưu động, xe cấp cứu, nhân sự cứu hộ CPR túc trực từng km theo tiêu chuẩn an toàn.' },
      { step: '04', title: 'Vật phẩm & Trao giải', desc: 'Thiết kế sản xuất Race kit: áo chạy thoáng khí, số BIB định danh, huy chương đúc nổi, cúp và bục podium.' },
      { step: '05', title: 'Truyền thông & Báo cáo', desc: 'Chụp ảnh khoảnh khắc VĐV, sản xuất video recap highlight và tổng kết số liệu gửi ban tổ chức.' },
    ],
    packageTable: {
      headers: ['Hạng mục quy mô', 'Quy mô VĐV', 'Khoảng ngân sách dự kiến', 'Hạng mục bàn giao chính'],
      rows: [
        ['Giải thể thao nội bộ', '50 – 150 người', '35.000.000đ – 75.000.000đ', 'Trọng tài, âm thanh khai mạc, cúp/huy chương, áo đồng phục, nước uống, sơ cấp cứu'],
        ['Ngày hội thể thao đa môn', '150 – 400 người', '70.000.000đ – 150.000.000đ', 'Sân bãi đa môn, nhà bạt che nắng, âm thanh sân khấu, MC hoạt náo, trò chơi teambuilding'],
        ['Giải chạy / Bơi cộng đồng', '300 – 1.000+ người', '120.000.000đ – 350.000.000đ+', 'Cấp phép, race kit, chip timing, xe cứu thương, cổng chào, flycam, truyền thông PR'],
      ],
    },
    faqs: [
      {
        question: 'Cần bao lâu để chuẩn bị một giải chạy hoặc giải thể thao?',
        answer: 'Thời gian tối ưu là từ 4 đến 8 tuần đối với giải chạy 500+ người để kịp xin giấy phép Sở Văn hóa Thể thao, sản xuất Race kit và kiểm tra mặt đường. Với giải thể thao nội bộ quy mô dưới 200 người, Your Dreams có thể triển khai thần tốc trong 10 đến 15 ngày.',
      },
      {
        question: 'Phương án y tế và an toàn đường chạy được kiểm soát như thế nào?',
        answer: 'Your Dreams áp dụng quy tắc Zero Incident: khảo sát rủi ro trước ngày chạy, bố trí trạm tiếp nước cách nhau 1.5 - 2km, xe cứu thương túc trực vạch đích và đội cứu hộ di động bằng xe máy tuần tra liên tục suốt cung đường thi đấu.',
      },
      {
        question: 'Doanh nghiệp có thể tài trợ hoặc đặt logo thương hiệu trên vật phẩm giải đấu không?',
        answer: 'Có. Toàn bộ áo chạy, số BIB, huy chương hoàn thành (Finisher Medal), cổng chào xuất phát và backdrop trao giải đều được thiết kế nhận diện đồng bộ theo hướng dẫn thương hiệu (brand guidelines) của doanh nghiệp.',
      },
      {
        question: 'Chi phí tổ chức sự kiện thể thao trọn gói tính theo đầu người hay theo gói?',
        answer: 'Báo giá được bóc tách theo hai phần: chi phí cố định (cấp phép, sân khấu, âm thanh, cổng chào, trọng tài, MC) và chi phí biến đổi theo số lượng VĐV (áo race kit, huy chương, nước uống, ăn nhẹ). Điều này giúp tối ưu ngân sách theo đúng số lượng thực tế.',
      },
    ],
    question: 'Cần cung cấp gì để nhận phương án tổ chức giải đấu?',
    answer: 'Hãy chia sẻ bộ môn, số lượng và độ tuổi người tham gia, địa điểm dự kiến, thời gian cùng ngân sách. Đội ngũ sẽ làm rõ phạm vi để đề xuất thể thức và các hạng mục cần thiết trong 24 giờ.',
  },
  {
    slug: 'to-chuc-su-kien-doanh-nghiep',
    number: '02',
    title: 'Tổ chức sự kiện doanh nghiệp',
    shortTitle: 'Sự kiện doanh nghiệp',
    description: 'Team building, gala dinner, lễ kỷ niệm thành lập, hội nghị khách hàng, lễ khai trương và khánh thành.',
    intro: 'Mỗi sự kiện doanh nghiệp là một điểm chạm quan trọng để khẳng định vị thế thương hiệu và gắn kết nội bộ. Your Dreams cung cấp giải pháp trọn gói từ xây dựng concept độc quyền, viết kịch bản chi tiết, thi công không gian đến điều phối hiện trường mượt mà.',
    answerCapsule: 'Dịch vụ tổ chức sự kiện doanh nghiệp trọn gói của Your Dreams biến mục tiêu kinh doanh thành những trải nghiệm đáng nhớ. Chúng tôi phụ trách toàn bộ chuỗi mắt xích: lên concept ý tưởng, thiết kế key visual, thi công sân khấu âm thanh ánh sáng LED, kịch bản nghi thức chuẩn chỉnh và điều phối nhân sự hiện trường không lỗi kỹ thuật.',
    heroImage: {
      src: '/images/to-chuc-su-kien-doanh-nghiep.webp',
      alt: 'Không gian tổ chức hội nghị và sự kiện doanh nghiệp sang trọng chuyên nghiệp do Your Dreams setup',
    },
    gallery: [
      {
        src: '/images/to-chuc-su-kien-khai-truong.webp',
        alt: 'Lễ khai trương văn phòng và showroom doanh nghiệp với nghi thức cắt băng chuẩn phong thủy',
        caption: 'Lễ khai trương khánh thành với cổng chào, thảm đỏ, lân sư rồng và đội ngũ PG chuyên nghiệp.',
      },
      {
        src: '/images/sports-day.webp',
        alt: 'Chương trình team building gắn kết văn hóa doanh nghiệp ngoài trời',
        caption: 'Team building vận động gắn kết tinh thần đồng đội với chuỗi game đối kháng kịch tính.',
      },
    ],
    items: [
      'Team building bãi biển, resort, dã ngoại gắn kết văn hóa doanh nghiệp',
      'Tiệc tất niên (Year End Party), Gala Dinner tri ân khách hàng và đối tác',
      'Hội nghị khách hàng, hội thảo chuyên đề, lễ ký kết hợp tác chiến lược',
      'Lễ khai trương, khánh thành, động thổ và ra mắt sản phẩm mới',
    ],
    deliverables: [
      { step: '01', title: 'Ý tưởng & Concept', desc: 'Xây dựng chủ đề xuyên suốt, visual key, slogan chương trình phù hợp với văn hóa và định hướng doanh nghiệp.' },
      { step: '02', title: 'Kịch bản & Timeline', desc: 'Biên soạn kịch bản MC, kịch bản âm thanh ánh sáng, run-sheet hiện trường chuẩn xác đến từng phút.' },
      { step: '03', title: 'Thi công & Lắp đặt', desc: 'Trực tiếp thi công sân khấu, backdrop check-in, màn hình LED, âm thanh biểu diễn, bàn ghế tiệc sang trọng.' },
      { step: '04', title: 'Nhân sự & Nghệ sĩ', desc: 'Cung cấp MC song ngữ, nhóm múa biểu diễn, ca sĩ, ban nhạc, lễ tân đón tiếp và vũ đoàn chuyên nghiệp.' },
      { step: '05', title: 'Tổng duyệt & Vận hành', desc: 'Chạy thử kỹ thuật FOH trước giờ G, điều phối chương trình không gián đoạn và báo cáo nghiệm thu sau sự kiện.' },
    ],
    packageTable: {
      headers: ['Gói sự kiện', 'Quy mô khách mời', 'Ngân sách tham khảo', 'Dịch vụ tiêu biểu'],
      rows: [
        ['Hội thảo / Hội nghị', '50 – 150 người', '25.000.000đ – 60.000.000đ', 'Âm thanh micro cổ ngỗng, màn LED P3, backdrop chụp hình, lễ tân, teabreak cao cấp'],
        ['Team building ngoài trời', '80 – 250 người', '40.000.000đ – 90.000.000đ', 'Dụng cụ game khổng lồ, MC hoạt náo năng lượng, âm thanh di động ngoài trời, banner, áo đội'],
        ['Gala Dinner / Tất niên', '100 – 300 người', '50.000.000đ – 130.000.000đ', 'Sân khấu biểu diễn, đèn beam/par led, visual màn LED, MC chuyên nghiệp, tiết mục nghệ thuật'],
        ['Lễ Khai trương / Khánh thành', '100 – 400 người', '35.000.000đ – 95.000.000đ', 'Nhà bạt không gian, thảm đỏ, đoàn múa lân sư rồng, bộ cắt băng khánh thành, tiệc finger food'],
      ],
    },
    faqs: [
      {
        question: 'Your Dreams có nhận tổ chức sự kiện ngoài Hà Nội không?',
        answer: 'Có. Chúng tôi sở hữu đội xe vận chuyển và kho bãi lưu động, sẵn sàng tổ chức sự kiện tại Hải Phòng, Quảng Ninh, Bắc Ninh, Nghệ An, Đà Nẵng, TP.HCM và các tỉnh thành trên cả nước với chi phí tối ưu nhất.',
      },
      {
        question: 'Nếu sự kiện ngoài trời gặp trời mưa thì phương án dự phòng như thế nào?',
        answer: 'Mọi hợp đồng sự kiện ngoài trời đều đi kèm phương án B (Weather Contingency): chuẩn bị sẵn nhà giàn không gian che phủ toàn bộ khu tiệc, hệ thống bạt che chống nước cho thiết bị điện và đường dây ngắt mạch an toàn chống rò rỉ.',
      },
      {
        question: 'Doanh nghiệp có được duyệt thiết kế 3D trước khi thi công không?',
        answer: 'Chắc chắn có. Your Dreams cung cấp bản vẽ phối cảnh 3D sân khấu, khu vực photobooth và sơ đồ bố trí bàn tiệc để khách hàng hình dung trực quan và chỉnh sửa trước khi bắt đầu sản xuất.',
      },
      {
        question: 'Quy trình thanh toán và nghiệm thu sự kiện diễn ra như thế nào?',
        answer: 'Thanh toán thường chia làm 3 đợt: tạm ứng ký hợp đồng (30-50%), tạm ứng chuẩn bị vật tư trước sự kiện (30-40%) và thanh lý quyết toán còn lại trong vòng 7 ngày làm việc sau khi nghiệm thu kèm hóa đơn VAT.',
      },
    ],
    question: 'Có thể đặt riêng từng hạng mục không?',
    answer: 'Có. Your Dreams có thể tư vấn tổ chức trọn gói hoặc cung cấp các hạng mục cụ thể (chỉ thuê âm thanh ánh sáng, chỉ thuê MC, hoặc chỉ thi công backdrop). Phạm vi và chi phí được thống nhất minh bạch trước khi triển khai.',
  },
  {
    slug: 'giao-duc-the-thao',
    number: '03',
    title: 'Dạy bơi & giáo dục thể thao (Swim For Life)',
    shortTitle: 'Giáo dục thể thao',
    description: 'Swim For Life Việt Nam – Chương trình dạy bơi an toàn phòng chống đuối nước, đào tạo bóng đá, pickleball và kỹ năng sống cho thanh thiếu niên.',
    intro: 'Your Dreams phát triển hệ thống giáo dục thể thao thông qua thương hiệu Swim For Life Việt Nam – đối tác chiến lược đào tạo bơi lội độc quyền tại chuỗi khu đô thị Vinhomes từ năm 2018. Chương trình mang lại sự tự tin dưới nước, kỹ năng sinh tồn và rèn luyện thể chất toàn diện cho mọi lứa tuổi.',
    answerCapsule: 'Dịch vụ giáo dục thể thao và dạy bơi an toàn của Swim For Life (trực thuộc Your Dreams) là chương trình huấn luyện thể chất bài bản từ cơ bản đến nâng cao. Chúng tôi sở hữu đội ngũ huấn luyện viên có bằng cấp quốc gia, phương pháp kèm sát 1:1 hoặc nhóm nhỏ, cam kết biết bơi an toàn và trang bị kỹ năng tự cứu đuối nước cho 100% học viên.',
    heroImage: {
      src: '/images/swim-vinhomes.webp',
      alt: 'Lớp học bơi an toàn cho cư dân do Swim For Life Việt Nam tổ chức tại khu đô thị Vinhomes',
    },
    gallery: [
      {
        src: '/images/swim-times-city.webp',
        alt: 'Lớp học bơi miễn phí cho trẻ em tại bể bơi bốn mùa Vinhomes Times City',
        caption: 'Học viên nhỏ tuổi học kỹ năng nổi ngửa và thở nước tại bể bơi bốn mùa Times City.',
      },
      {
        src: '/images/di-de-lon.webp',
        alt: 'Chương trình trải nghiệm kỹ năng sinh tồn ngoài trời Đi để lớn dành cho học sinh',
        caption: 'Khóa học kỹ năng sinh tồn và an toàn đô thị “Đi để lớn” cho thanh thiếu niên.',
      },
    ],
    items: [
      'Khóa dạy bơi an toàn phòng chống đuối nước cho trẻ em từ 5 tuổi trở lên',
      'Khóa học bơi cấp tốc và chỉnh sửa kỹ thuật chuẩn thi đấu cho người lớn',
      'Đào tạo thể thao học đường: bóng đá phong trào, bóng rổ, cầu lông, pickleball',
      'Trại hè sinh tồn (Survival Camp) & chương trình rèn luyện kỹ năng sống ngoài trời',
    ],
    deliverables: [
      { step: '01', title: 'Đánh giá đầu vào', desc: 'Kiểm tra thể lực, tâm lý sợ nước và phân loại học viên theo nhóm trình độ phù hợp.' },
      { step: '02', title: 'Huấn luyện kỹ năng nước', desc: 'Thực hành các kỹ thuật thở nước, nổi ngửa, lướt nước và đạp chân cơ bản.' },
      { step: '03', title: 'Hoàn thiện kiểu bơi', desc: 'Đào tạo thuần thục bơi ếch, bơi sải, bơi ngửa và kỹ thuật đứng nước thở nhịp nhàng.' },
      { step: '04', title: 'Kỹ năng tự cứu & Cứu đuối', desc: 'Trang bị kỹ năng quẫy đạp khi chuột rút, thoát hiểm vùng nước sâu và cách ném phao cứu hộ an toàn.' },
      { step: '05', title: 'Kiểm tra & Cấp chứng chỉ', desc: 'Kiểm tra cự ly bơi liên tục 50m - 100m và cấp chứng nhận hoàn thành khóa học Swim For Life.' },
    ],
    packageTable: {
      headers: ['Khóa học', 'Hình thức lớp', 'Thời lượng đào tạo', 'Cam kết đầu ra'],
      rows: [
        ['Bơi an toàn trẻ em', '1 HLV kèm 3-4 trò', '10 – 12 buổi (60 phút/buổi)', 'Bơi thuần thục 50m, tự nổi ngửa thả lỏng, kỹ năng tự cứu khi ngã nước'],
        ['Bơi người lớn cấp tốc', '1 HLV kèm 1-2 học viên', '8 – 10 buổi (60 phút/buổi)', 'Biết bơi ếch/sải chuẩn kỹ thuật, đứng nước 2-3 phút, tự tin ở độ sâu 2m'],
        ['Lớp bơi cư dân khu đô thị', 'Nhóm cư dân 6-8 người', 'Theo mùa hè / quanh năm', 'Rèn luyện sức khỏe, giao lưu cộng đồng cư dân, giá ưu đãi hợp tác'],
        ['Khóa kỹ năng sống dã ngoại', 'Đoàn học sinh / trường học', '1 – 2 ngày trải nghiệm', 'Kỹ năng dựng lều, sơ cứu vết thương, định vị phương hướng, sinh tồn outdoor'],
      ],
    },
    faqs: [
      {
        question: 'Swim For Life có cam kết 100% học viên biết bơi sau khóa học không?',
        answer: 'Chúng tôi cam kết bằng văn bản: nếu sau số buổi quy định học viên vẫn chưa bơi được cự ly tiêu chuẩn (tối thiểu 25-50m), trung tâm sẽ dạy kèm bổ trợ miễn phí cho đến khi học viên tự tin bơi lội an toàn.',
      },
      {
        question: 'Trẻ em mấy tuổi có thể bắt đầu tham gia lớp học bơi?',
        answer: 'Độ tuổi lý tưởng để học bơi bài bản là từ 5 tuổi trở lên khi bé có thể tập trung lắng nghe và làm theo hướng dẫn của huấn luyện viên. Với trẻ dưới 5 tuổi, chúng tôi có lớp làm quen nước cùng phụ huynh.',
      },
      {
        question: 'Huấn luyện viên tại Swim For Life có chứng chỉ sư phạm và cứu hộ không?',
        answer: '100% huấn luyện viên của Swim For Life đều tốt nghiệp các trường Đại học Sư phạm Thể dục Thể thao, có chứng chỉ cứu hộ đuối nước của Hiệp hội Thể thao Dưới nước Việt Nam và kinh nghiệm giảng dạy trên 3 năm.',
      },
      {
        question: 'Doanh nghiệp hoặc trường học có thể hợp tác mở lớp riêng được không?',
        answer: 'Có. Your Dreams thường xuyên thiết kế các khóa học thể thao và ngày hội bơi lội độc quyền cho cán bộ nhân viên VinGroup, cư dân Vinhomes Ocean Park, Smart City, Grand Park và các trường quốc tế.',
      },
    ],
    question: 'Doanh nghiệp hoặc khu đô thị có thể tổ chức lớp riêng không?',
    answer: 'Có thể trao đổi để xây dựng lớp theo nhóm. Lịch học, địa điểm, số học viên và nội dung được xác định sau khi khảo sát thực tế hồ bơi; không áp dụng một lộ trình rập khuôn cho mọi người học.',
  },
  {
    slug: 'cho-thue-thiet-bi-su-kien',
    number: '04',
    title: 'Cho thuê thiết bị sự kiện trọn gói',
    shortTitle: 'Thiết bị sự kiện',
    description: 'Cho thuê âm thanh ánh sáng, màn hình LED, nhà giàn không gian ba lăng xích, sân khấu module và thiết bị sự kiện tại Hà Nội.',
    intro: 'Your Dreams trực tiếp sở hữu kho thiết bị sự kiện quy mô lớn tại Hà Nội. Chúng tôi mang đến hệ thống âm thanh biểu diễn Line Array, đèn sân khấu công nghệ cao, màn hình LED P3.91 siêu sáng và nhà giàn không gian ba lăng xích an toàn tuyệt đối với giá xuất kho không qua trung gian.',
    answerCapsule: 'Dịch vụ cho thuê thiết bị sự kiện của Your Dreams cung cấp đầy đủ phần cứng âm thanh ánh sáng, màn hình LED, nhà giàn không gian, sân khấu di động phục vụ từ 50 đến hàng ngàn khách. Chúng tôi cam kết thiết bị chính hãng, kiểm định an toàn kỹ thuật định kỳ, có kỹ sư trực kỹ thuật FOH suốt chương trình.',
    heroImage: {
      src: '/images/cam-nang-thue-thiet-bi-su-kien.webp',
      alt: 'Hệ thống thiết bị âm thanh ánh sáng sân khấu và nhà bạt không gian hiện đại do Your Dreams cung cấp',
    },
    gallery: [
      {
        src: '/images/happy-run.webp',
        alt: 'Hệ thống cổng chào hơi, khung giàn truss và âm thanh công suất lớn tại sự kiện ngoài trời',
        caption: 'Hệ thống nhà bạt, cổng chào và âm thanh biểu diễn phủ sóng toàn bộ quảng trường sự kiện.',
      },
      {
        src: '/images/ocean-city.webp',
        alt: 'Sân khấu lắp ráp module kèm backdrop và âm thanh sự kiện bên hồ bơi',
        caption: 'Sân khấu module chịu lực cao kết hợp hệ thống loa chống ẩm chuyên dụng ngoài trời.',
      },
    ],
    items: [
      'Cho thuê hệ thống âm thanh Line Array, loa monitor, mixer digital 32 kênh, micro UHF',
      'Hệ thống ánh sáng: đèn Moving Head Beam 380, Par LED 54 bóng, đèn Blinder, Follow spot',
      'Màn hình LED P3.91 Outdoor/Indoor hiển thị sắc nét, cabinet nhôm đúc chịu nước IP65',
      'Nhà giàn không gian inox/nhôm khẩu độ 10m - 24m, hệ thống ba lăng xích nâng hạ an toàn',
      'Sân khấu di động lắp ghép mọi cao độ, thảm trải đỏ, bàn ghế banquet, quạt điều hòa công nghiệp',
    ],
    deliverables: [
      { step: '01', title: 'Tư vấn cấu hình chuẩn', desc: 'Tính toán công suất âm thanh theo số lượng khách và diện tích không gian để không thiếu hụt hay thừa thãi lãng phí.' },
      { step: '02', title: 'Khảo sát hạ tầng nguồn', desc: 'Đo điện áp, kiểm tra vị trí tủ điện tổng, lên sơ đồ tải trọng treo loa và lối xe tải vận chuyển vật tư.' },
      { step: '03', title: 'Vận chuyển & Lắp đặt', desc: 'Thi công hoàn thiện tối thiểu 4-6 tiếng trước giờ tổng duyệt để đảm bảo vệ sinh và thẩm mỹ hiện trường.' },
      { step: '04', title: 'Tổng duyệt & Trực FOH', desc: 'Kỹ sư âm thanh ánh sáng trực bàn mixer trong suốt chương trình, xử lý phát sinh tức thì.' },
      { step: '05', title: 'Tháo dỡ & Bàn giao', desc: 'Thu dọn thiết bị nhanh gọn sau sự kiện, vệ sinh trả lại nguyên trạng mặt bằng cho đơn vị quản lý.' },
    ],
    packageTable: {
      headers: ['Cấu hình thiết bị', 'Phù hợp quy mô', 'Khoảng giá tham khảo', 'Chi tiết trang thiết bị'],
      rows: [
        ['Gói Âm thanh Hội thảo', '50 – 100 người', '4.500.000đ – 7.500.000đ', '02-04 loa full active, mixer 12 kênh, 04 micro không dây UHF, nhân sự trực kỹ thuật'],
        ['Gói Âm thanh – Ánh sáng Sân khấu', '150 – 300 người', '12.000.000đ – 22.000.000đ', 'Dàn loa Sub + Full, mixer digital, 12 đèn Par LED, 04 Beam 380, máy khói, kỹ thuật viên FOH'],
        ['Gói Sự kiện Biểu diễn Ngoài trời', '500 – 1.500 người', '25.000.000đ – 55.000.000đ', 'Dàn Line Array 8-12 module, Sub đôi, giàn khung truss treo đèn, 16 Beam, 24 Par, kỹ sư âm thanh'],
        ['Màn hình LED P3 Outdoor/Indoor', 'Tính theo m²', '650.000đ – 850.000đ / m²', 'Cabinet nhôm đúc, bộ xử lý hình ảnh 4K, card phát NovaStar, kỹ thuật viên trực visual'],
        ['Nhà giàn không gian ba lăng xích', 'Tính theo m²', '75.000đ – 110.000đ / m²', 'Khung nhôm/inox khẩu độ 10-18m, bạt trắng 2 lớp cách nhiệt, ba lăng xích điện an toàn'],
      ],
    },
    faqs: [
      {
        question: 'Báo giá thuê thiết bị đã bao gồm chi phí vận chuyển và nhân sự trực chưa?',
        answer: 'Tại Your Dreams, báo giá gửi khách hàng luôn bóc tách rõ ràng: chi phí thiết bị, phí vận chuyển 2 chiều nội thành Hà Nội, và thù lao kỹ thuật viên trực hiện trường suốt chương trình để không có bất kỳ khoản phát sinh ẩn nào.',
      },
      {
        question: 'Tại sao nên chọn nhà giàn không gian có hệ thống ba lăng xích?',
        answer: 'Nhà giàn nâng hạ bằng ba lăng xích điện giúp quá trình lắp ráp khung bạt diễn ra ngay dưới mặt đất rồi mới nâng dần lên cao. Điều này loại bỏ hoàn toàn nguy cơ công nhân phải leo trèo nguy hiểm, đảm bảo độ căng phẳng tuyệt đối của mái bạt và chịu được gió lớn.',
      },
      {
        question: 'Cần đặt thuê thiết bị trước ngày diễn ra sự kiện bao lâu?',
        answer: 'Vào mùa bình thường, quý khách nên chốt cấu hình trước 5-7 ngày. Vào mùa cao điểm cuối năm (tháng 10 đến tháng 1 âm lịch), nên đặt lịch trước tối thiểu 2-3 tuần để giữ thiết bị tốt nhất và nhận mức giá ổn định.',
      },
      {
        question: 'Nếu nguồn điện địa điểm bị mất thì hệ thống có hoạt động tiếp được không?',
        answer: 'Với các sự kiện quan trọng, Your Dreams luôn tư vấn phương án thuê máy phát điện dự phòng có bộ chuyển nguồn tự động ATS, đảm bảo hệ thống âm thanh ánh sáng không bị gián đoạn dù chỉ 1 giây.',
      },
    ],
    question: 'Báo giá thiết bị có bao gồm vận chuyển và lắp đặt?',
    answer: 'Các chi phí được làm rõ trong báo giá dựa trên địa điểm, thời gian thuê, cấu hình và nhân sự. Hãy cung cấp đầy đủ điều kiện tiếp cận địa điểm để nhận dự toán chính xác nhất.',
  },
  {
    slug: 'nhan-su-su-kien',
    number: '05',
    title: 'Cung cấp nhân sự sự kiện chuyên nghiệp',
    shortTitle: 'Nhân sự sự kiện',
    description: 'Cung cấp MC song ngữ, PG/PB lễ tân, điều phối viên hiện trường, kỹ sư âm thanh ánh sáng và trọng tài thể thao.',
    intro: 'Nhân sự là linh hồn định hình nhịp điệu và cảm xúc của sự kiện. Your Dreams tuyển chọn và đào tạo đội ngũ nhân sự tác phong chuyên nghiệp, ngoại hình sáng, chuẩn mực về giờ giấc và khả năng ứng biến linh hoạt trước mọi tình huống hiện trường.',
    answerCapsule: 'Dịch vụ cung cấp nhân sự sự kiện của Your Dreams cung ứng đầy đủ các vị trí then chốt: MC dẫn chương trình song ngữ, PG/PB lễ tân đón tiếp, ban điều phối hiện trường, trọng tài thể thao cấp quốc gia và đội ngũ cứu hộ y tế chuyên môn cao, đảm bảo sự kiện vận hành đồng bộ và chuyên nghiệp.',
    heroImage: {
      src: '/images/nghe-to-chuc-su-kien.webp',
      alt: 'Đội ngũ điều phối viên sự kiện và nhân sự ban tổ chức chuyên nghiệp của Your Dreams',
    },
    gallery: [
      {
        src: '/images/di-de-lon.webp',
        alt: 'Nhân sự điều phối hướng dẫn học sinh và phụ huynh trong chương trình cộng đồng',
        caption: 'Đội ngũ điều phối viên tận tâm, thân thiện hướng dẫn người tham gia từng khu vực.',
      },
      {
        src: '/images/happy-run.webp',
        alt: 'Ban tổ chức và trọng tài điều hành tại vạch đích giải thể thao',
        caption: 'Tổ trọng tài và nhân sự tiếp đón điều phối hàng ngàn vận động viên an toàn trật tự.',
      },
    ],
    items: [
      'MC dẫn chương trình truyền hình, MC sự kiện doanh nghiệp, MC hoạt náo team building và MC song ngữ (Anh - Hàn - Trung)',
      'Đội ngũ PG/PB, lễ tân ngoại hình đồng đều (chiều cao từ 1m65/1m75), tác phong thanh lịch, chuyên nghiệp',
      'Điều phối viên hiện trường (Event Coordinator), Stage Manager chỉ huy sân khấu theo run-sheet',
      'Tổ trọng tài thể thao các môn chạy bộ, bơi lội, bóng đá, pickleball được chứng nhận chuyên môn',
      'Đội ngũ cứu hộ cứu nạn mặt nước, nhân viên sơ cấp cứu y tế có chứng chỉ an toàn',
    ],
    deliverables: [
      { step: '01', title: 'Sàng lọc hồ sơ (Casting)', desc: 'Gửi profile ảnh thực tế, video clip dẫn của MC và thông số PG để khách hàng trực tiếp lựa chọn.' },
      { step: '02', title: 'Đồng phục & Tác phong', desc: 'Chuẩn bị trang phục đồng bộ (áo dài, vest, váy dạ hội hoặc đồng phục thể thao) theo visual nhận diện.' },
      { step: '03', title: 'Briefing & Diễn tập', desc: 'Họp phổ biến kịch bản chi tiết, phân công luồng di chuyển và tập dượt nghi thức cắt băng/trao giải trước giờ G.' },
      { step: '04', title: 'Quản trị hiện trường', desc: 'Có trưởng nhóm quản lý (Leader) trực tiếp chấm công, đôn đốc vị trí và xử lý thay đổi nhân sự khẩn cấp.' },
      { step: '05', title: 'Đánh giá & Tổng kết', desc: 'Ghi nhận phản hồi của khách hàng về tinh thần thái độ của từng nhân sự tham gia.' },
    ],
    packageTable: {
      headers: ['Vị trí nhân sự', 'Tiêu chuẩn & Yêu cầu', 'Thời lượng làm việc', 'Mức thù lao tham khảo'],
      rows: [
        ['MC Doanh nghiệp / Khai trương', 'Giọng chuẩn, ngoại hình thanh lịch, xử lý tình huống nhanh', 'Buổi 2 – 4 tiếng', '2.500.000đ – 6.000.000đ / show'],
        ['MC Song ngữ Anh – Việt', 'IELTS 7.5+, phát âm chuẩn quốc tế, kinh nghiệm hội nghị cấp cao', 'Buổi 3 – 5 tiếng', '6.000.000đ – 15.000.000đ / show'],
        ['PG / PB Lễ tân đón khách', 'Ngoại hình sáng (nữ ≥1m65, nam ≥1m75), đồng phục chỉn chu', 'Ca 3 – 4 tiếng', '500.000đ – 900.000đ / người / ca'],
        ['Điều phối viên hiện trường', 'Thành thạo bộ đàm, nắm chắc run-sheet, chỉ huy các khu vực', 'Trọn ngày sự kiện', '1.200.000đ – 2.500.000đ / người / ngày'],
        ['Trọng tài thể thao', 'Có bằng trọng tài liên đoàn, điều hành công tâm, chính xác', 'Theo giải đấu', '1.000.000đ – 2.000.000đ / người / ngày'],
      ],
    },
    faqs: [
      {
        question: 'Doanh nghiệp có được phỏng vấn hoặc duyệt MC trước sự kiện không?',
        answer: 'Hoàn toàn có thể. Chúng tôi gửi voice demo, showreel và có thể sắp xếp buổi gặp mặt trao đổi trực tiếp hoặc online giữa khách hàng và MC để thống nhất giọng điệu dẫn dắt chương trình.',
      },
      {
        question: 'Nếu đến ngày sự kiện mà nhân sự bị ốm đột xuất thì xử lý thế nào?',
        answer: 'Your Dreams luôn duy trì cơ chế nhân sự dự phòng (Back-up Personnel) 10-15%. Trong trường hợp bất khả kháng, nhân sự thay thế có trình độ tương đương sẽ có mặt trước giờ G tối thiểu 60 phút và đã được nắm rõ kịch bản.',
      },
      {
        question: 'PG có hỗ trợ trao cúp và quà tặng trên sân khấu không?',
        answer: 'Có. Đội ngũ PG của Your Dreams được đào tạo bài bản các nghi thức khánh tiết: bê khay cắt băng, trao hoa đại biểu, bưng khay cúp vinh danh và xếp đội hình chụp ảnh lưu niệm đúng chuẩn ngoại giao.',
      },
      {
        question: 'Chi phí thuê nhân sự đã bao gồm trang phục chưa?',
        answer: 'Tùy theo yêu cầu của khách hàng. Chúng tôi cung cấp trọn gói bao gồm áo dài truyền thống, vest dạ tiệc, váy đầm đồng bộ hoặc trang phục thể thao. Khách hàng cũng có thể cung cấp áo đồng phục công ty nếu muốn.',
      },
    ],
    question: 'Có thể yêu cầu MC song ngữ không?',
    answer: 'Có thể trao đổi nhu cầu MC hoặc phiên dịch tiếng Anh, Hàn, Trung theo tính chất của chương trình. Hồ sơ, showreel và phạm vi công việc được xác nhận minh bạch trước khi ký kết hợp đồng.',
  },
  {
    slug: 'truyen-thong-su-kien',
    number: '06',
    title: 'Truyền thông & quay phim chụp ảnh sự kiện',
    shortTitle: 'Truyền thông sự kiện',
    description: 'Sản xuất video highlight 4K, chụp ảnh phóng sự sự kiện, livestream đa góc máy và lan tỏa thông điệp thương hiệu trên báo chí.',
    intro: 'Sự kiện chỉ diễn ra trong vài giờ, nhưng hình ảnh và video tư liệu có giá trị lan tỏa thương hiệu suốt nhiều năm. Đội ngũ Media chuyên nghiệp của Your Dreams ghi lại trọn vẹn những khoảnh khắc cảm xúc đắt giá nhất với thiết bị máy quay điện ảnh 4K và góc bay Flycam ngoạn mục.',
    answerCapsule: 'Dịch vụ truyền thông và sản xuất media sự kiện của Your Dreams cung cấp giải pháp trọn gói: quay phim phóng sự 4K, chụp ảnh truyền thông khoảnh khắc bắt trọn cảm xúc, livestream trực tiếp đa góc máy lên Facebook/YouTube/TikTok, viết bài PR đăng báo chính thống, giúp gia tăng tối đa độ phủ thương hiệu.',
    heroImage: {
      src: '/images/to-chuc-su-kien-chuyen-nghiep.webp',
      alt: 'Ê-kíp truyền thông quay phim chụp ảnh chuyên nghiệp tác nghiệp tại sự kiện do Your Dreams điều phối',
    },
    gallery: [
      {
        src: '/images/ocean-city.webp',
        alt: 'Hình ảnh truyền thông sắc nét ghi lại khoảnh khắc trao giải vinh danh trang trọng',
        caption: 'Hình ảnh phóng sự chất lượng cao ghi lại niềm hạnh phúc của người chiến thắng.',
      },
      {
        src: '/images/happy-run.webp',
        alt: 'Toàn cảnh flycam ghi hình hàng ngàn người tham gia lan tỏa trên mạng xã hội',
        caption: 'Góc máy Flycam bao quát toàn cảnh hoành tráng phục vụ làm tư liệu PR báo chí.',
      },
    ],
    items: [
      'Chụp ảnh sự kiện phóng sự (Photojournalism), ảnh check-in thảm đỏ, trả ảnh nhanh ngay trong ngày',
      'Quay phim 4K sản xuất Video Highlight 2-3 phút, Video Recap cảm xúc và TVC doanh nghiệp',
      'Dịch vụ Livestream đa máy quay (Multi-cam) chuẩn Full HD / 4K phát trực tiếp lên mạng xã hội',
      'Bay Flycam trên không ghi lại toàn cảnh quy mô giải đấu thể thao và không gian ngoài trời',
      'Soạn thảo thông cáo báo chí, viết bài PR và booking đăng tải trên các đầu báo uy tín',
    ],
    deliverables: [
      { step: '01', title: 'Kịch bản phân cảnh (Shotlist)', desc: 'Xác định các khoảnh khắc đinh cần bắt trọn: lãnh đạo phát biểu, cắt băng, trao giải, cảm xúc khán giả.' },
      { step: '02', title: 'Tác nghiệp hiện trường', desc: 'Cameraman & Photographer di chuyển linh hoạt, không che khuất tầm nhìn khán giả, trang phục lịch sự.' },
      { step: '03', title: 'Trả ảnh nhanh (Quick Delivery)', desc: 'Lọc và chỉnh sửa tone màu 30-50 ảnh nổi bật gửi ngay sau khi kết thúc chương trình để phục vụ đăng tin tức tức thời.' },
      { step: '04', title: 'Hậu kỳ Video chuyên sâu', desc: 'Dựng phim, chỉnh màu điện ảnh, lồng nhạc bản quyền sôi động, chèn logo hiệu ứng 3D đồ họa.' },
      { step: '05', title: 'Bàn giao trọn gói', desc: 'Bàn giao toàn bộ file ảnh gốc chất lượng cao + file video hoàn chỉnh qua link lưu trữ Cloud tốc độ cao.' },
    ],
    packageTable: {
      headers: ['Gói dịch vụ media', 'Quy mô nhân sự', 'Sản phẩm bàn giao', 'Chi phí tham khảo'],
      rows: [
        ['Chụp ảnh phóng sự', '01 Thợ chụp chuyên nghiệp', 'Toàn bộ file gốc + 150-200 ảnh blend màu nghệ thuật', '1.800.000đ – 3.000.000đ / buổi'],
        ['Combo Quay phim & Chụp ảnh', '01 Máy quay 4K + 01 Máy chụp', 'File ảnh chỉnh màu + 01 Video Highlight 3-5 phút 4K', '5.500.000đ – 9.500.000đ / show'],
        ['Gói Media Thể thao / Ngoài trời', '02 Máy chụp + 02 Máy quay + Flycam', 'Toàn bộ ảnh VĐV, Video Recap hoành tráng, video dọc TikTok', '12.000.000đ – 22.000.000đ / giải'],
        ['Livestream đa góc máy', '02-04 Máy quay + Bàn trộn kỹ thuật số', 'Đường truyền ổn định, chèn logo, hạ tầng phát đa nền tảng', '8.000.000đ – 18.000.000đ / buổi'],
      ],
    },
    faqs: [
      {
        question: 'Bao lâu sau sự kiện thì nhận được toàn bộ hình ảnh và video hoàn chỉnh?',
        answer: 'Chúng tôi gửi 30-50 bức ảnh chọn lọc đã chỉnh sửa nhanh trong vòng 2-4 tiếng sau sự kiện để doanh nghiệp kịp đăng bài PR. Toàn bộ kho ảnh gốc và ảnh chỉnh màu bàn giao trong 24-48 giờ. Video Highlight hoàn tất hậu kỳ trong 3-5 ngày làm việc.',
      },
      {
        question: 'Video sự kiện có được bảo hành chỉnh sửa nội dung không?',
        answer: 'Có. Mỗi video bàn giao đều bao gồm tối đa 2 lần chỉnh sửa theo yêu cầu khách hàng về nhạc nền, thứ tự phân cảnh hoặc thêm bớt phụ đề, logo thương hiệu.',
      },
      {
        question: 'Livestream có bị mờ hoặc giật lag khi phát sóng ngoài trời không?',
        answer: 'Your Dreams sử dụng thiết bị phát sóng chuyên dụng có gắn bộ gộp băng thông nhiều sim 4G/5G (LiveU) kết hợp đường truyền cáp quang riêng, đảm bảo tín hiệu livestream luôn đạt chuẩn Full HD 1080p sắc nét và mượt mà.',
      },
      {
        question: 'Doanh nghiệp có được sở hữu toàn bộ bản quyền hình ảnh không?',
        answer: 'Có. Toàn bộ tư liệu hình ảnh và video thuộc quyền sở hữu độc quyền của doanh nghiệp để sử dụng cho mục đích truyền thông, quảng cáo hoặc lưu trữ nội bộ lâu dài.',
      },
    ],
    question: 'Cần chuẩn bị gì khi livestream sự kiện?',
    answer: 'Cần khảo sát kết nối mạng internet tại địa điểm, vị trí cắm nguồn điện, đường line âm thanh từ mixer tổng và danh sách tài khoản kênh phát sóng. Buổi chạy thử kỹ thuật trước giờ G sẽ giúp kiểm tra hoàn hảo toàn bộ hệ thống.',
  },
  {
    slug: 'thiet-ke-in-an',
    number: '07',
    title: 'Thiết kế nhận diện & sản xuất ấn phẩm sự kiện',
    shortTitle: 'Thiết kế & in ấn',
    description: 'Thiết kế Key Visual độc quyền, thi công backdrop, banner, standee, sản xuất cúp vinh danh, kỷ niệm chương và quà tặng.',
    intro: 'Một hệ thống nhận diện thị giác xuất sắc tạo nên tính chuyên nghiệp ngay từ cái nhìn đầu tiên. Đội ngũ thiết kế của Your Dreams kết hợp giữa tư duy thẩm mỹ hiện đại và kinh nghiệm thi công vật liệu thực tế, đảm bảo thành phẩm in ra sắc nét, đúng mã màu thương hiệu và ăn khớp hoàn hảo với không gian.',
    answerCapsule: 'Dịch vụ thiết kế và in ấn sự kiện của Your Dreams cung cấp trọn gói từ khâu sáng tạo Key Visual chủ đạo đến in ấn sản xuất: backdrop chụp ảnh hiflex/decal formex, banner, standee cuốn, thẻ đại biểu, kỷ niệm chương pha lê, cúp kim loại và bộ quà tặng doanh nghiệp tinh tế.',
    heroImage: {
      src: '/images/y-tuong-to-chuc-su-kien.webp',
      alt: 'Quy trình sáng tạo ý tưởng thiết kế nhận diện thị giác và thi công ấn phẩm sự kiện',
    },
    gallery: [
      {
        src: '/images/happy-run.webp',
        alt: 'Huy chương kim loại đúc nổi 3D và áo chạy thiết kế riêng cho sự kiện Happy Run',
        caption: 'Huy chương đúc nổi tinh xảo kèm dây đeo in nhiệt sắc nét chuẩn lưu niệm.',
      },
      {
        src: '/images/ocean-city.webp',
        alt: 'Backdrop sân khấu và bục vinh danh được thi công phẳng phiu, chuẩn nhận diện',
        caption: 'Backdrop bạt hiflex xám cản sáng kết hợp đèn hắt tạo điểm nhấn chụp hình đại biểu.',
      },
    ],
    items: [
      'Thiết kế Key Visual (KV) ý tưởng chủ đạo, logo sự kiện, guideline ứng dụng nhận diện',
      'Thi công Backdrop chụp hình (Photobooth), backdrop sân khấu bạt đế xám chống xuyên sáng hoặc formex nổi 3D',
      'In ấn Banner treo, Standee cuốn nhôm, Poster, Thư mời VIP in ép kim sang trọng',
      'Sản xuất Thẻ ban tổ chức, Dây đeo thẻ in lụa/in chuyển nhiệt, Vòng tay check-in bằng giấy Tyvek',
      'Chế tác Cúp vinh danh pha lê, Huy chương kim loại đúc nổi 3D, Kỷ niệm chương gỗ đồng cao cấp',
    ],
    deliverables: [
      { step: '01', title: 'Ý tưởng Moodboard', desc: 'Đề xuất 2-3 phong cách thị giác (Layout, màu sắc, font chữ) để khách hàng chọn lựa hướng đi phù hợp.' },
      { step: '02', title: 'Thiết kế Master KV', desc: 'Hoàn thiện bản vẽ Key Visual chính và ứng dụng demo trên các phối cảnh không gian 3D.' },
      { step: '03', title: 'Triển khai Adapt Size', desc: 'Xuất file in chuẩn hệ màu CMYK độ phân giải cao cho từng kích thước backdrop, standee, thư mời.' },
      { step: '04', title: 'In mẫu & Sản xuất', desc: 'Test màu thực tế trước khi in hàng loạt, gia công cán màng mờ chống lóa khi chụp ảnh có đèn flash.' },
      { step: '05', title: 'Lắp đặt & Hoàn thiện', desc: 'Đội ngũ thợ căng khung bạt phẳng phiu, gia cố chân khung chống gió và nghiệm thu bàn giao.' },
    ],
    packageTable: {
      headers: ['Ấn phẩm / Hạng mục', 'Chất liệu & Quy cách', 'Đơn vị tính', 'Đơn giá tham khảo'],
      rows: [
        ['Thi công Backdrop Khung sắt', 'Khung sắt hộp mạ kẽm, bạt Hiflex de-xam chống xuyên sáng', 'm²', '130.000đ – 180.000đ / m²'],
        ['Photobooth Formex 3D', 'Khung sắt ốp formex 5-10mm, dán decal PP mờ, cắt khối nổi', 'm²', '350.000đ – 650.000đ / m²'],
        ['Standee cuốn nhôm cao cấp', 'Chân cuốn nhôm dày, in decal PP cán màng mờ kích thước 0.8x2m', 'Chiếc', '220.000đ – 320.000đ / chiếc'],
        ['Huy chương kim loại đúc 3D', 'Hợp kim kẽm mạ vàng/bạc/đồng, đúc nổi 2 mặt, dây in chuyển nhiệt', 'Chiếc', '45.000đ – 95.000đ / chiếc'],
        ['Cúp pha lê trao giải', 'Pha lê K9 nguyên khối, khắc laser 3D hoặc in lưới sắc nét', 'Chiếc', '250.000đ – 750.000đ / chiếc'],
      ],
    },
    faqs: [
      {
        question: 'Tại sao backdrop chụp ảnh sự kiện nên in bạt de-xam thay vì bạt thường?',
        answer: 'Bạt de-xam (bạt có mặt sau màu xám) có khả năng cản sáng 100%. Khi dựng ngoài trời hoặc trước đèn sân khấu, ánh sáng phía sau sẽ không thể xuyên qua làm lộ bóng thanh sắt khung giàn, giúp bức ảnh chụp check-in luôn mịn đẹp và chuẩn màu.',
      },
      {
        question: 'Thời gian sản xuất huy chương kim loại đúc nổi mất bao lâu?',
        answer: 'Huy chương kim loại đúc khuôn 3D cần thời gian tạo khuôn và đúc từ 10 đến 15 ngày đối với đơn hàng từ 100 chiếc trở lên. Nếu cần gấp trong 3-5 ngày, chúng tôi có sẵn phôi kim loại tiêu chuẩn để in UV hoặc khắc laser trực tiếp.',
      },
      {
        question: 'Doanh nghiệp đã có file thiết kế sẵn thì Your Dreams có nhận in ấn không?',
        answer: 'Có. Chúng tôi nhận file thiết kế (AI, Photoshop, PDF chất lượng cao), kiểm tra hệ màu chuẩn in ấn và tiến hành in, thi công lắp đặt trọn gói tại địa điểm chỉ định.',
      },
      {
        question: 'Standee và backdrop sau sự kiện có được hỗ trợ tháo dỡ không?',
        answer: 'Có. Dịch vụ thi công của Your Dreams luôn bao gồm việc lắp đặt hoàn thiện trước sự kiện và tháo dỡ thu dọn khung sắt trả lại mặt bằng sạch sẽ sau khi chương trình kết thúc.',
      },
    ],
    question: 'Có thể dùng bộ nhận diện sẵn có của doanh nghiệp?',
    answer: 'Có. Hãy gửi logo gốc (vector), mã màu nhận diện thương hiệu và font chữ chuẩn. Các hạng mục ấn phẩm sẽ được thiết kế đồng bộ và trình duyệt kỹ lưỡng trước khi đưa vào sản xuất.',
  },
];

export function serviceHref(serviceSlug: string) {
  const legacySlug = serviceSlug === 'giao-duc-the-thao' ? 'day-boi-vinhomes' : serviceSlug;
  return `/dich-vu/${legacySlug}`;
}
