# Kế hoạch chuyển đổi nội dung và URL từ WordPress

Ngày kiểm kê: 25/09/2026. Domain chuẩn: `https://sukien.vip`.

## Mục tiêu

Giữ lại giá trị tìm kiếm của URL cũ khi thay WordPress bằng website Next.js: mỗi URL cũ phải được phân loại và có một đích đến rõ ràng, nội dung hữu ích được biên tập lại từ bài gốc, và các trang thực tế được minh họa bằng ảnh thật của Your Dreams khi có ảnh phù hợp.

## Phạm vi sitemap đã đọc

Sitemap tổng `https://sukien.vip/wp-sitemap.xml` dẫn tới bốn sitemap con. Hai sitemap người dùng cung cấp có **87 bài viết** và **16 trang (đã bao gồm trang chủ)**. Sitemap tổng còn có **1 archive danh mục** và **1 archive tác giả**. Tổng cộng có **105 URL** cần xử lý. Sitemap con dùng cùng domain, nhưng các URL bài viết và trang có thể trùng cùng một số slug; so sánh theo URL đầy đủ.

| Loại | Sitemap | Số URL |
| --- | --- | ---: |
| Bài viết | `/wp-sitemap-posts-post-1.xml` | 87 |
| Trang | `/wp-sitemap-posts-page-1.xml` | 16 |
| Danh mục | `/wp-sitemap-taxonomies-category-1.xml` | 1 |
| Tác giả | `/wp-sitemap-users-1.xml` | 1 |

## Nguyên tắc biên tập

1. Dùng bài WordPress cũ làm bản nguồn để tiết kiệm thời gian; giữ thông tin, hướng dẫn và trải nghiệm có giá trị, nhưng biên tập lại cho chính xác, dễ đọc và đúng phạm vi năng lực hiện nay.
2. Không xuất bản nguyên xi hàng loạt bài gần giống nhau. Giữ nguyên cả 87 URL bài viết cũ ở cấp gốc; nhóm URL có nội dung trùng/na ná nhau sẽ dùng chung nội dung biên tập phù hợp và khai báo canonical về một URL đại diện, thay vì chuyển hướng các URL bài viết sang `/blog`.
3. Không đăng lại số liệu hoặc cam kết trong nội dung WordPress khi chưa xác nhận bằng hồ sơ: 26 triệu người tham gia, 99% hài lòng/biết bơi, 100% an toàn/Zero Incident, 50+ nhân viên/chuyên gia, 100+ sự kiện/năm, 10.000 m² kho, độc quyền với Vinhomes từ 2018, giá/thời gian bàn giao cố định, tên khách hàng và lời chứng thực.
4. Hồ sơ doanh nghiệp trong workspace nêu rõ một số tuyên bố cũ cần đối chiếu với chủ doanh nghiệp. Dùng thông tin xác nhận được trong hồ sơ và nội dung dự án hiện hành; đánh dấu phần còn thiếu để chủ website xác nhận, không tự điền.
5. Ngày/năm trong tiêu đề cũ (đặc biệt 2025) phải bỏ hoặc cập nhật theo tính thời điểm. Không giữ các danh sách “Top 10”, “uy tín nhất” nếu không có phương pháp, nguồn độc lập và dữ liệu còn mới.
6. Thông tin điện thoại cũ `0912 345 678` không thống nhất với thông tin hiện hành trong website mới (`0979 121 097`). Chỉ dùng thông tin liên hệ đã được xác nhận trong cấu hình website mới.
7. Mỗi trang đích có một nhu cầu tìm kiếm chính, title/description riêng, một H1, các H2 theo câu hỏi thực tế, liên kết nội bộ đến dịch vụ hoặc dự án liên quan, CTA phù hợp. Không tạo nội dung chỉ để giữ URL nếu không có giá trị người đọc.

## Đề xuất cấu trúc nội dung đích

Các URL có ghi **[viết mới]** cần tạo trong `src/content/posts.ts`; **[đang có]** là URL hiện tồn tại; **[dịch vụ/dự án]** là route hiện có trong mã nguồn. Đây là phương án chuyển hướng đề xuất, cần đối chiếu Google Search Console (truy vấn, click, impression, backlink) trước khi 301 hàng loạt.

| URL đích | Trạng thái | Nội dung cần có | Hình minh họa |
| --- | --- | --- | --- |
| `/blog/checklist-lap-ke-hoach-su-kien` | Đang có | Bổ sung phần quy trình, tiến độ, dự toán theo nhóm hạng mục, quản trị rủi ro và checklist bàn giao từ các bài hướng dẫn trùng nhau. | Hình minh họa biên tập mới về sơ đồ kế hoạch; không giả làm ảnh sự kiện thật. |
| `/blog/to-chuc-su-kien-chuyen-nghiep` | Viết mới | Khái niệm, loại hình, mục tiêu, các giai đoạn tổ chức, cách phối hợp nhà cung cấp và tiêu chí đánh giá sau sự kiện. | Ảnh minh họa khái niệm mới hoặc sơ đồ; không dùng ảnh AI như bằng chứng năng lực. |
| `/blog/chon-don-vi-to-chuc-su-kien` | Viết mới | Cách đánh giá brief, phạm vi, nhân sự, an toàn, phương án dự phòng, hợp đồng và nghiệm thu; bỏ các bảng xếp hạng tự tuyên bố. | Hình biên tập mới; có thể dùng ảnh họp/chuẩn bị thật nếu có ảnh được duyệt. |
| `/blog/chi-phi-to-chuc-su-kien` | Viết mới | Các yếu tố ảnh hưởng chi phí, cách chuẩn bị brief/dự toán, khoản thường bị bỏ sót; nêu rõ giá cuối phụ thuộc quy mô, địa điểm và phạm vi. Không tự tạo bảng giá. | Hình minh họa bảng hạng mục dự toán; không gắn số tiền giả. |
| `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` | Viết mới | Tiêu chí chọn địa điểm theo sức chứa, giao thông, kỹ thuật, tiếp cận, an toàn, phương án mưa và khảo sát thực địa. Không tái bản danh sách khách sạn “top” lỗi thời. | Hình minh họa địa điểm trung tính; ảnh thật chỉ khi có quyền sử dụng và thông tin địa điểm xác thực. |
| `/blog/cam-nang-thue-thiet-bi-su-kien` | Viết mới | Checklist chọn sân khấu, nhà bạt, âm thanh/ánh sáng, màn hình, bàn ghế, điện, vận chuyển/lắp đặt; phân biệt thuê lẻ và gói theo brief. | Ảnh thiết bị thật nếu chủ sở hữu cung cấp; nếu chưa có thì minh họa kỹ thuật mới. |
| `/blog/to-chuc-su-kien-doanh-nghiep` | Viết mới | Hội thảo, gala, team building, khai trương và ra mắt sản phẩm: mục tiêu, kịch bản, vận hành, truyền thông, đánh giá. | Ảnh thật từ dự án doanh nghiệp nếu có và được phép; chưa có thì minh họa mới. |
| `/blog/to-chuc-su-kien-theo-mua` | Viết mới | Cách lập lịch và thiết kế hoạt động cho Trung Thu, 1/6 và sự kiện theo mùa; an toàn, thời tiết, độ tuổi, địa điểm. | Dùng ảnh thật hoạt động trẻ em/cộng đồng nếu đúng bối cảnh; tránh ảnh AI được hiểu là ảnh dự án. |
| `/blog/to-chuc-su-kien-ngoai-troi` | Viết mới | Khảo sát địa điểm, thời tiết, điện, âm thanh, vệ sinh, y tế, phân luồng và kịch bản dự phòng. | Ảnh thật ngày hội thể thao phù hợp; có sẵn `sports-day.webp`. |
| `/blog/y-tuong-to-chuc-su-kien` | Viết mới | Bộ ý tưởng phân nhóm theo mục tiêu/đối tượng/quy mô; hướng dẫn chọn và điều chỉnh, không chạy theo con số “100+” nếu không có nội dung thực chất. | Minh họa mới, hoặc ảnh thật theo từng ý tưởng đã thực hiện. |
| `/blog/event-la-gi-va-cac-loai-su-kien` | Viết mới | Giải thích thuật ngữ event, phân loại và mục tiêu; dẫn sang trang dịch vụ đúng loại hình. | Đồ họa biên tập đơn giản; không cần ảnh sự kiện giả. |
| `/blog/nghe-to-chuc-su-kien` | Viết mới, cần quyết định | Gộp bài nghề nghiệp/tuyển dụng trùng lặp thành hướng dẫn nghề: vai trò, kỹ năng, công việc thực tế và điều kiện nghề. Giữ chỉ khi muốn phục vụ đối tượng tuyển dụng/đào tạo. | Ảnh hậu trường thật nếu có; tránh ảnh AI mô phỏng nhân viên Your Dreams. |
| `/blog/to-chuc-su-kien-tuyen-dung` | Viết mới | Mục tiêu hội chợ việc làm, trải nghiệm ứng viên, luồng check-in, phối hợp doanh nghiệp/trường và chỉ số đánh giá. | Ảnh thật nếu có sự kiện tuyển dụng; nếu không, hình minh họa mới. |
| `/blog/to-chuc-su-kien-bang-tieng-anh` | Viết mới, ưu tiên thấp | Từ vựng/kịch bản và điểm cần thống nhất trong event song ngữ; xác minh khả năng cung cấp nhân sự song ngữ trước khi giới thiệu dịch vụ. | Hình minh họa mới; không gắn ảnh đối tác không liên quan. |
| `/blog/to-chuc-giai-pickleball` | Viết mới | Thể thức, sân, lịch thi đấu, trọng tài, đăng ký, an toàn và vận hành giải; tránh số lượng/người tham gia không có nguồn. | Ảnh pickleball thật nếu được cung cấp; nếu chưa có, ảnh minh họa mới, ghi đúng tính chất minh họa. |
| `/blog/to-chuc-giai-boi-cho-doanh-nghiep` | Viết mới | Mục tiêu, phân hạng, thể lệ, cứu hộ/y tế, phân luồng, lịch thi đấu và phối hợp địa điểm. | Dùng `ocean-city.webp`/ảnh bơi thật cho case phù hợp; không gán dự án cũ cho khách hàng khác. |
| `/blog/to-chuc-su-kien-khai-truong` | Viết mới | Mục tiêu khai trương, nghi thức, trải nghiệm khách, vận hành mặt bằng, truyền thông và kế hoạch dự phòng. | Ảnh dự án khai trương thật nếu có; nếu không, minh họa mới. |
| `/blog/huong-dan-lap-so-do-su-kien` | Gộp vào bài checklist | Sơ đồ nhân sự và khu vực theo vai trò; tránh lặp thêm một bài tổng quan mỏng. | Sơ đồ tự thiết kế; ảnh không bắt buộc. |
| `/blog/chuan-bi-san-khau-su-kien` | Gộp vào cẩm nang thiết bị | Kích thước, tải trọng, tầm nhìn, nguồn điện, đường vận chuyển, lắp đặt và nghiệm thu; thông số cần do nhà cung cấp xác nhận. | Ảnh thiết bị thật hoặc sơ đồ minh họa mới. |
| `/du-an/kinh-ngu-quan-bien-ocean-city-2023` | Đang có | Dùng case study hiện tại; đối chiếu ngày, hạng mục và vai trò Your Dreams với hồ sơ gốc. | Ảnh thật có sẵn `ocean-city.webp`; có thể bổ sung ảnh lớp bơi phù hợp sau khi xác nhận ngữ cảnh. |
| `/du-an/di-de-lon-rox-living-2025` | Đang có | Giữ nội dung dự án “Đi để lớn” theo phạm vi sự kiện đã xác nhận. | Ảnh thật có sẵn `di-de-lon.webp`. |
| `/du-an` | Đang có | Thư viện case study chỉ chứa dự án có bằng chứng/ảnh được duyệt. | Ảnh thật có sẵn cho ROX Living Happy Run, Ocean City, lớp bơi Vinhomes, Diễn Châu và Đi để lớn. |

## Bản đồ đầy đủ 87 URL bài viết

Mọi target dưới đây là route mới không dấu, không có dấu `/` cuối. Các target `[viết mới]` phải được tạo trước khi kích hoạt redirect; `[đang có]` và `[dịch vụ/dự án]` đã tồn tại trong mã nguồn website mới.

| URL WordPress cũ | Chủ đề/tựa bài đã đọc từ WordPress | Đích đề xuất |
| --- | --- | --- |
| `/to-chuc-su-kien-chuyen-nghiep/` | Cẩm nang tổ chức sự kiện chuyên nghiệp 2025 | `/blog/to-chuc-su-kien-chuyen-nghiep` [viết mới] |
| `/dich-vu-to-chuc-giai-boi/` | Dịch vụ tổ chức giải bơi | `/dich-vu/to-chuc-su-kien-the-thao` [dịch vụ] |
| `/dich-vu-to-chuc-giai-chay-tron-goi/` | Dịch vụ tổ chức giải chạy | `/dich-vu/to-chuc-su-kien-the-thao` [dịch vụ] |
| `/dich-vu-to-chuc-giai-bong-da/` | Dịch vụ tổ chức giải bóng đá | `/dich-vu/to-chuc-su-kien-the-thao` [dịch vụ] |
| `/dich-vu-to-chuc-giai-pickleball/` | Dịch vụ tổ chức giải pickleball | `/blog/to-chuc-giai-pickleball` [viết mới] |
| `/to-chuc-kinh-ngu-quan-bien/` | Case giải Kình ngư Quận Biển, Ocean City 2023 | `/du-an/kinh-ngu-quan-bien-ocean-city-2023` [dự án] |
| `/lop-boi-khu-do-thi/` | Lớp dạy bơi khu đô thị | `/dich-vu/giao-duc-the-thao` [dịch vụ] |
| `/to-chuc-lop-boi-doanh-nghiep/` | Lớp bơi doanh nghiệp | `/blog/to-chuc-giai-boi-cho-doanh-nghiep` [viết mới] |
| `/huong-dan-to-chuc-lop-pickleball/` | Hướng dẫn tổ chức lớp pickleball | `/blog/to-chuc-giai-pickleball` [viết mới] |
| `/huong-dan-to-chuc-su-kien/` | Hướng dẫn tổ chức sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/huong-dan-to-chuc-su-kien-khanh-thanh/` | Hướng dẫn sự kiện khánh thành | `/blog/to-chuc-su-kien-khai-truong` [viết mới; mở rộng phần khánh thành] |
| `/top-cong-ty-to-chuc-su-kien/` | Danh sách công ty tổ chức sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/to-chuc-su-kien-hoi-thao/` | Hướng dẫn tổ chức hội thảo | `/blog/to-chuc-su-kien-doanh-nghiep` [viết mới] |
| `/bao-gia-to-chuc-su-kien-tron-goi/` | Báo giá sự kiện trọn gói | `/blog/chi-phi-to-chuc-su-kien` [viết mới] |
| `/top-trung-tam-to-chuc-su-kien/` | Danh sách trung tâm sự kiện | `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` [viết mới] |
| `/to-chuc-su-kien-teambuilding/` | Tổ chức teambuilding | `/dich-vu/to-chuc-su-kien-doanh-nghiep` [dịch vụ] |
| `/dich-vu-to-chuc-su-kien/` | Dịch vụ tổ chức sự kiện | `/dich-vu` [đang có] |
| `/top-cong-ty-su-kien-uy-tin/` | Danh sách công ty sự kiện uy tín | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/cong-ty-su-kien-chuyen-nghiep/` | Cách chọn công ty sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/chuoi-su-kien-di-de-lon/` | Chuỗi sự kiện Đi Để Lớn | `/du-an/di-de-lon-rox-living-2025` [dự án] |
| `/huong-dan-thue-ban-ghe-su-kien/` | Thuê bàn ghế sự kiện | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/quy-trinh-to-chuc-su-kien/` | Quy trình tổ chức sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/to-chuc-su-kien-khai-truong/` | Tổ chức sự kiện khai trương | `/blog/to-chuc-su-kien-khai-truong` [viết mới] |
| `/cam-nang-nha-bat-su-kien/` | Cẩm nang nhà bạt | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/to-chuc-khai-truong-cua-hang/` | Khai trương cửa hàng | `/blog/to-chuc-su-kien-khai-truong` [viết mới] |
| `/ke-hoach-to-chuc-su-kien/` | Kế hoạch tổ chức sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/cam-nang-nhan-vien-su-kien/` | Cẩm nang nhân viên sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/tuyen-dung-to-chuc-su-kien/` | Việc làm/tuyển dụng ngành sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/to-chuc-su-kien-1-6/` | Tổ chức sự kiện Quốc tế Thiếu nhi | `/blog/to-chuc-su-kien-theo-mua` [viết mới] |
| `/huong-dan-quan-ly-su-kien/` | Quản lý sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/chay-su-kien-thanh-cong/` | Cách vận hành sự kiện thành công | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/top-trung-tam-su-kien-ha-noi/` | Trung tâm sự kiện tại Hà Nội | `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` [viết mới] |
| `/cho-thue-nha-bat-su-kien/` | Cho thuê nhà bạt | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/to-chuc-su-kien-tuyen-dung-hieu-qua/` | Tổ chức sự kiện tuyển dụng | `/blog/to-chuc-su-kien-tuyen-dung` [viết mới] |
| `/cong-ty-su-kien-kien-vang/` | Bài về Công ty Sự kiện Kiến Vàng | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới; loại thông tin bên thứ ba chưa kiểm chứng] |
| `/cong-ty-to-chuc-su-kien-ha-noi/` | Công ty tổ chức sự kiện Hà Nội | `/` [trang chủ] |
| `/to-chuc-su-kien-ha-noi/` | Dịch vụ tổ chức sự kiện Hà Nội | `/` [trang chủ] |
| `/cong-ty-event-chuyen-nghiep/` | Chọn công ty event | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/dia-diem-to-chuc-su-kien-ha-noi/` | Địa điểm sự kiện Hà Nội | `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` [viết mới] |
| `/tuyen-dung-nhan-vien-su-kien/` | Tuyển nhân viên sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/huong-dan-chuyen-vien-to-chuc-su-kien/` | Nghề chuyên viên tổ chức sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/cam-nang-to-chuc-su-kien-ngoai-troi/` | Cẩm nang sự kiện ngoài trời | `/blog/to-chuc-su-kien-ngoai-troi` [viết mới] |
| `/viec-lam-to-chuc-su-kien/` | Việc làm tổ chức sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/cong-ty-to-chuc-su-kien-chuyen-nghiep/` | Công ty tổ chức sự kiện chuyên nghiệp | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/nha-to-chuc-su-kien-chuyen-nghiep/` | Nhà tổ chức sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/cam-nang-su-kien-ngoai-troi/` | Các loại sự kiện ngoài trời | `/blog/to-chuc-su-kien-ngoai-troi` [viết mới] |
| `/bao-gia-cho-thue-thiet-bi-su-kien/` | Báo giá thiết bị | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới; không khẳng định giá chưa xác nhận] |
| `/top-don-vi-to-chuc-su-kien/` | Danh sách đơn vị tổ chức sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/huong-dan-san-khau-su-kien/` | Hướng dẫn sân khấu | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/to-chuc-su-kien-khai-truong-2/` | Tổ chức khai trương | `/blog/to-chuc-su-kien-khai-truong` [viết mới] |
| `/huong-dan-to-chuc-event/` | Hướng dẫn tổ chức event | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/dich-vu-to-chuc-su-kien-chuyen-nghiep/` | Dịch vụ tổ chức sự kiện | `/dich-vu` [đang có] |
| `/cong-ty-to-chuc-su-kien/` | Các công ty tổ chức sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/lap-ke-hoach-su-kien/` | Lập kế hoạch sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/ky-nang-to-chuc-su-kien/` | Kỹ năng tổ chức sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/dich-vu-to-chuc-su-kien-ha-noi/` | Dịch vụ tổ chức sự kiện Hà Nội | `/` [trang chủ] |
| `/to-chuc-su-kien-tieng-anh/` | Tổ chức sự kiện bằng tiếng Anh | `/blog/to-chuc-su-kien-bang-tieng-anh` [viết mới; ưu tiên thấp] |
| `/to-chuc-su-kien-trung-thu/` | Tổ chức sự kiện Trung Thu | `/blog/to-chuc-su-kien-theo-mua` [viết mới] |
| `/agency-to-chuc-su-kien-a-z/` | Agency tổ chức sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/cam-nang-thiet-bi-su-kien/` | Cẩm nang thiết bị sự kiện | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/huong-dan-thue-bat-su-kien/` | Hướng dẫn thuê bạt sự kiện | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/nhan-vien-su-kien-khong-kinh-nghiem/` | Nghề sự kiện cho người chưa kinh nghiệm | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/trung-tam-su-kien-ha-noi/` | Trung tâm tổ chức sự kiện Hà Nội | `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` [viết mới] |
| `/huong-dan-so-do-to-chuc-su-kien/` | Sơ đồ tổ chức sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/to-chuc-su-kien-chuyen-nghiep-2/` | Cẩm nang tổ chức sự kiện 2025 | `/blog/to-chuc-su-kien-chuyen-nghiep` [viết mới] |
| `/truyen-thong-to-chuc-su-kien/` | Truyền thông sự kiện | `/dich-vu/truyen-thong-su-kien` [dịch vụ] |
| `/y-tuong-to-chuc-su-kien-doc-dao/` | Ý tưởng tổ chức sự kiện | `/blog/y-tuong-to-chuc-su-kien` [viết mới] |
| `/huong-dan-chay-su-kien-part-time/` | Việc làm chạy sự kiện part-time | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/nhan-vien-chay-su-kien/` | Vai trò nhân viên chạy sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/thue-thiet-bi-su-kien-chuyen-nghiep/` | Cho thuê thiết bị sự kiện | `/dich-vu/cho-thue-thiet-bi-su-kien` [dịch vụ] |
| `/huong-dan-ke-hoach-su-kien/` | Kế hoạch sự kiện 2025 | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/to-chuc-su-kien-sinh-nhat/` | Tổ chức sự kiện sinh nhật | `/blog/to-chuc-su-kien-sinh-nhat` [viết mới] |
| `/thue-do-su-kien-tron-goi/` | Thuê đồ sự kiện | `/blog/cam-nang-thue-thiet-bi-su-kien` [viết mới] |
| `/cam-nang-agency-su-kien/` | Agency sự kiện | `/blog/chon-don-vi-to-chuc-su-kien` [viết mới] |
| `/cam-nang-event-su-kien/` | Khái niệm và loại hình event | `/blog/event-la-gi-va-cac-loai-su-kien` [viết mới] |
| `/huong-dan-lam-su-kien/` | Hướng dẫn tổ chức sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/tong-quan-su-kien-event/` | Event là gì, các loại hình | `/blog/event-la-gi-va-cac-loai-su-kien` [viết mới] |
| `/cong-ty-su-kien-tuyen-dung/` | Công ty sự kiện tuyển dụng | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/khach-san-to-chuc-su-kien-ha-noi/` | Khách sạn tổ chức sự kiện Hà Nội | `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` [viết mới] |
| `/tuyen-dung-thuc-tap-sinh-to-chuc-su-kien/` | Thực tập sinh sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/vi-tri-to-chuc-su-kien/` | Các vị trí trong ngành sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/cong-ty-to-chuc-su-kien-ha-noi-2/` | Công ty tổ chức sự kiện Hà Nội | `/` [trang chủ] |
| `/tuyen-dung-nhan-vien-su-kien-2/` | Tuyển nhân viên sự kiện | `/blog/nghe-to-chuc-su-kien` [viết mới; cần quyết định] |
| `/chon-khong-gian-to-chuc-su-kien/` | Chọn không gian tổ chức sự kiện | `/blog/chon-dia-diem-to-chuc-su-kien-ha-noi` [viết mới] |
| `/huong-dan-quan-ly-to-chuc-su-kien/` | Quản lý việc tổ chức sự kiện | `/blog/checklist-lap-ke-hoach-su-kien` [đang có] |
| `/to-chuc-giai-boi-cho-doanh-nghiep/` | Tổ chức giải bơi doanh nghiệp | `/blog/to-chuc-giai-boi-cho-doanh-nghiep` [viết mới] |
| `/nang-tam-phong-trao-pickleball-huong-dan-toan-dien-de-to-chuc-lop-hoc-chuyen-nghiep/` | Tổ chức lớp pickleball | `/blog/to-chuc-giai-pickleball` [viết mới] |

## Bản đồ 16 URL trang

| URL WordPress cũ | Nội dung/đích mới | Hình ảnh |
| --- | --- | --- |
| `/` | `/` — trang chủ. Giữ định vị tổ chức sự kiện tại Hà Nội và nhóm dịch vụ đã xác nhận. | Ảnh hoạt động thật phù hợp; ưu tiên `happy-run.webp`. |
| `/gioi-thieu/` | `/gioi-thieu` — giới thiệu pháp nhân, lĩnh vực, cách làm việc; bỏ tuyên bố “hàng đầu” chưa chứng minh. | Logo và ảnh sự kiện thật. |
| `/dich-vu/` | `/dich-vu` — trang tổng hợp 7 dịch vụ hiện có. | Ảnh/illustration hiện dùng theo từng dịch vụ. |
| `/dich-vu/to-chuc-su-kien-the-thao/` | `/dich-vu/to-chuc-su-kien-the-thao` — giữ và mở rộng theo các nội dung chạy/bơi/bóng đá/pickleball sau xác minh. | `happy-run.webp`, `ocean-city.webp`, `sports-day.webp`. |
| `/dich-vu/to-chuc-su-kien-doanh-nghiep/` | `/dich-vu/to-chuc-su-kien-doanh-nghiep` — giữ; hội nghị, gala, team building theo phạm vi thực tế. | Ảnh thật dự án doanh nghiệp nếu được duyệt; nếu thiếu, dùng minh họa. |
| `/dich-vu/cho-thue-thiet-bi-su-kien/` | `/dich-vu/cho-thue-thiet-bi-su-kien` — giữ danh mục và điều kiện báo giá; bỏ giá cũ chưa xác nhận. | Cần ảnh kho/thiết bị thật do chủ sở hữu chọn. |
| `/dich-vu/day-boi-vinhomes/` | `/dich-vu/giao-duc-the-thao` — bảo toàn thông tin lớp bơi và giáo dục thể thao nhưng kiểm chứng tuyên bố Vinhomes, số học viên, kết quả. | `swim-vinhomes.webp`, `swim-times-city.webp`, `swim-grand-park.webp`. |
| `/dich-vu/truyen-thong-su-kien/` | `/dich-vu/truyen-thong-su-kien` — giữ media, quay/chụp, livestream; không hứa thiết bị/thời hạn nếu chưa xác nhận. | Hình thật chỉ nếu có bản quyền; cần bộ ảnh media mới nếu không có. |
| `/dich-vu/thiet-ke-in-an/` | `/dich-vu/thiet-ke-in-an` — giữ dịch vụ thiết kế/in ấn. | Ảnh vật phẩm thật nếu có; có thể dùng mockup minh họa mới. |
| `/dich-vu/marketing-su-kien/` | `/dich-vu/marketing-su-kien` — giữ slug cũ, nội dung hiện dùng chung trang Truyền thông sự kiện và canonical về URL dịch vụ hiện hành. | Chưa có ảnh marketing thật trong repo. |
| `/du-an/` | `/du-an` — danh sách case study có thể xác minh. | Ảnh thật dự án trong `public/images`. |
| `/su-kien/` | `/du-an` — archive sự kiện cũ; không giữ số liệu “hàng trăm”, “26 triệu” nếu thiếu chứng cứ. | Ảnh thật từng case. |
| `/blog/` | `/blog` — archive bài viết mới. | Ảnh theo từng bài đích. |
| `/tin-tuc/` | `/blog` — archive tin tức trùng mục blog. | Không cần ảnh riêng. |
| `/lien-he/` | `/lien-he` — dùng điện thoại, email, địa chỉ đang xác thực ở website mới. | Không cần ảnh riêng. |
| `/thu-vien/` | `/du-an` — đích gần nhất là thư viện dự án; kiểm tra nếu trang cũ thực chất chứa ảnh có thể giữ lại. | Dùng ảnh thật tương ứng từng dự án. |

## Các URL sitemap bổ sung

| URL cũ | Đích đề xuất | Ghi chú |
| --- | --- | --- |
| `/c/kinh-nghiem-to-chuc/` | `/blog` | Chuyển hướng archive danh mục về blog; không cần trang danh mục mỏng. |
| `/author/admin/` | `/gioi-thieu` | Chuyển hướng về đơn vị xuất bản; nếu xác nhận được tác giả thật, hiển thị byline/bio trên từng bài trước khi quyết định đích cuối. |

## Hình ảnh

### Ảnh thật đã có trong repo

- `happy-run.webp`: ROX Living Happy Run 2024.
- `ocean-city.webp`: Kình ngư Quận biển / Ocean City.
- `sports-day.webp`: ngày hội thể thao cộng đồng.
- `di-de-lon.webp`: chuỗi hoạt động Đi để lớn.
- `swim-vinhomes.webp`, `swim-times-city.webp`, `swim-grand-park.webp`: lớp bơi tại các khu Vinhomes.
- Logo/nhận diện: `your-dreams-logo.webp`, `your-dreams-mark.webp`.

Ảnh thật chỉ gắn với dự án/hoạt động tương ứng; không đặt ảnh minh họa chung rồi ghi như bằng chứng một sự kiện đã diễn ra. Xin thêm ảnh kho thiết bị, sân khấu, hội thảo, gala, khai trương, nhân sự/media nếu muốn các trang đó có ảnh thực.

### Ảnh mới đề xuất

Không cần tạo 87 ảnh: phần lớn 87 URL sẽ được gom và 301. Đã tạo 17 hình minh họa vector riêng cho các bài đích mới, giữ file nguồn SVG trong `src/illustrations` và bản WebP tối ưu trong `public/images`. Hình dùng biểu tượng theo chủ đề, không chứa logo hoặc tên khách hàng và có alt mô tả rõ đây là minh họa. Ảnh chụp thật chỉ dùng trong chủ đề phù hợp.

## Chuyển hướng và triển khai

1. Trước khi viết, xuất báo cáo Google Search Console cho 16 tháng: URL, click, impression, query, backlink. Ưu tiên giữ đường dẫn có traffic/backlink và tách route đích nếu một URL cũ có intent độc lập.
2. Hoàn thiện các bài đích **[viết mới]** và rà soát nội dung **[đang có]**; gắn ảnh đã được duyệt, title/description/canonical/Article JSON-LD, internal links và breadcrumbs.
3. Giữ URL cũ của mỗi bài trả về nội dung `200`; chuẩn hóa dấu `/` cuối bằng một chuyển hướng `301`. Chuyển hướng chỉ dùng cho sitemap WordPress và archive cũ đã được gộp vào trang tương đương, tránh chuỗi redirect.
4. Sau khi deploy: kiểm tra từng URL đại diện/nhóm redirect, canonical, sitemap mới, robots, ảnh và liên kết nội bộ; gửi sitemap mới trong Google Search Console, theo dõi lỗi 404, Page indexing, impression/click trong 4–8 tuần.
5. Cập nhật sitemap mới chỉ chứa URL canonical đang trả 200. Không đưa URL redirect, archive không giữ lại, trang noindex hoặc URL cũ vào sitemap mới.

## Phần đã triển khai trong repository

- Đã bổ sung 17 bài viết mới theo các nhóm chủ đề trong kế hoạch vào `src/content/posts.ts`; các bài hướng dẫn kế hoạch và nội dung liên quan được gom vào những bài hiện có theo bản đồ URL.
- Đã lập `src/content/legacy-content-routes.ts` cho đủ 87 slug bài viết cũ. Mỗi URL gốc trả nội dung tương ứng; các bản trùng chủ đề có canonical trỏ đến URL đại diện vẫn nằm trong cấu trúc gốc.
- Hai URL dự án cũ cũng được phục vụ tại slug gốc. Những bài mới chưa có URL WordPress cũ vẫn nằm dưới `/blog/`; các dịch vụ tiếp tục nằm dưới `/dich-vu/`, với URL cũ `/dich-vu/day-boi-vinhomes` được giữ.
- `src/proxy.ts` trả HTTP 301 cho dấu `/` cuối và giữ query string. Sitemap index `/sitemap.xml` trỏ riêng đến `/sitemap-posts.xml` và `/sitemap-pages.xml`; sitemap WordPress được ánh xạ sang sitemap mới. Archive `/su-kien`, `/tin-tuc`, `/c/kinh-nghiem-to-chuc` và `/author/admin` được chuyển một bước đến trang tương đương.
- Trang bài viết có liên kết nội bộ đến dịch vụ, dự án liên quan và liên hệ. Đã tạo 17 hình minh họa vector WebP cho bài mới, giữ nguồn SVG trong `src/illustrations`; ảnh chụp thật chỉ gắn với nội dung phù hợp. Alt text ghi rõ hình nào là minh họa.
- Chưa gửi sitemap lên Google Search Console, chưa đối chiếu dữ liệu truy vấn/click/backlink của 16 tháng và chưa xác minh các URL trên domain production. Sau khi deploy cần kiểm tra canonical, status code, sitemap và các URL cũ đại diện.

## Việc đang chờ xác nhận

- Có muốn tiếp tục phục vụ nội dung nghề nghiệp/tuyển dụng? Nếu không, các URL nghề nghiệp cần đánh giá GSC/backlink rồi chọn đích liên quan hoặc 410 thay vì chuyển sang trang dịch vụ.
- Những con số, khách hàng, dự án và tuyên bố về Vinhomes trong WordPress có hồ sơ/hình ảnh/bằng chứng nào được phép công bố?
- Có thêm ảnh gốc cho gala, hội thảo, khai trương, thiết bị, sân khấu và truyền thông không?
- Xác nhận dịch vụ Marketing sự kiện có còn độc lập với Truyền thông sự kiện không?
- Đã tạo hình minh họa bằng SVG biên tập trong repository và chuyển sang WebP; không dùng ảnh AI hoặc giả ảnh sự kiện thật.
