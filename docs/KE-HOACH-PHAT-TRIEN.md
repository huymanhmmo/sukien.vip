# Kế hoạch phát triển sukien.vip

## Mục tiêu và phạm vi

Website giới thiệu năng lực tổ chức sự kiện của Công ty Cổ phần Your Dreams, giúp doanh nghiệp, ban quản lý khu đô thị và đơn vị giáo dục tìm dịch vụ, xem hoạt động thực tế và liên hệ. Có blog; không xây CMS, tài khoản, cơ sở dữ liệu hay hệ thống nhận thanh toán.

Giữ Next.js App Router và lịch sử Git của repository hiện có. Xuất HTML sẵn cho các trang nội dung; triển khai trên Vercel. Bài blog lưu trong mã nguồn, bổ sung bằng tệp nội dung rồi commit. Header, footer, section, card, SEO và widget dùng component riêng.

## Nghiên cứu nguồn

- Hồ sơ `CÔNG TY CỔ PHẦN YOUR DREAMS.md` do chủ website cung cấp là nguồn chính về doanh nghiệp và dịch vụ.
- Ảnh và logo: `F:/01_Nhan_Dien_Thuong_Hieu`, đặc biệt thư mục `Hình ảnh chọn lọc`.
- Website [sukien.vip](https://sukien.vip/) tham khảo nhóm điều hướng: Giới thiệu, Dịch vụ, Dự án, Blog. Không sao chép bố cục, màu hoặc nội dung mẫu.
- Website cũ có điện thoại 0912 345 678; bản mới thống nhất 0979 121 097 theo hồ sơ. Địa chỉ dùng bản đầy đủ ở phần I: Thôn Công Đình 3, Xã Phù Đổng, Thành phố Hà Nội.
- Hồ sơ có các tuyên bố cần đối chiếu trước khi quảng bá: 26 triệu người, 99% hài lòng, “độc quyền”, “nhất Việt Nam”, mốc 2018 trước ngày thành lập 2019 và tiêu đề 2024 đi kèm kỷ niệm 2025. Không dùng các tuyên bố này trong nội dung công khai mới. Không tự tạo lời chứng thực, khách hàng, đánh giá hoặc giải thưởng.
- Các dự án sử dụng ảnh xác định được: ROX Living Happy Run 2024, Kình ngư Quận biển Ocean City 2023, lớp bơi Vinhomes, ngày hội thể thao Diễn Châu, Đi để lớn 2025.

## Hướng thiết kế

Phong cách biên tập hiện đại: nền trắng, chữ đen, điểm nhấn đỏ lấy cảm hứng từ nhận diện Your Dreams. Tiêu đề lớn, bố cục bất đối xứng, ảnh thật chiếm diện tích đáng kể, nhịp khoảng trắng rõ. Khối dự án là trọng tâm chứng minh năng lực; hạn chế hiệu ứng và không dùng ảnh AI thay sự kiện thật. Mobile có menu riêng, nút chạm lớn, không để widget che nội dung.

## Cấu trúc website và mục tiêu tìm kiếm

| Nhóm | URL | Mục tiêu |
| --- | --- | --- |
| Trang chủ | `/` | Tổ chức sự kiện Hà Nội; giới thiệu năng lực tổng thể |
| Giới thiệu | `/gioi-thieu` | Your Dreams, thông tin doanh nghiệp và cách làm việc |
| Dịch vụ | `/dich-vu` | Tổng quan giải pháp và liên kết đến dịch vụ cụ thể |
| Chi tiết dịch vụ | `/dich-vu/[slug]` | Thể thao, doanh nghiệp, giáo dục, thiết bị, nhân sự, truyền thông, thiết kế |
| Dự án | `/du-an` | Thư viện các hoạt động có ảnh thật |
| Chi tiết dự án | `/du-an/[slug]` | Bối cảnh, phạm vi công việc, hình ảnh và dịch vụ liên quan |
| Blog | `/blog` | Kiến thức, kế hoạch và kinh nghiệm tổ chức sự kiện |
| Bài viết | `/blog/[slug]` | Trả lời một nhu cầu cụ thể; mục lục, tác giả, ngày đăng, bài liên quan |
| Liên hệ | `/lien-he` | Gọi, Zalo, email; chuẩn bị brief để mở email hoặc sao chép |
| Chính sách | `/chinh-sach-bao-mat` | Giải thích luồng dữ liệu đúng với chức năng thực tế |

## Thành phần mã nguồn

- `src/app`: route, layout, metadata, sitemap, robots, trang 404.
- `src/components/layout`: header, footer.
- `src/components/sections`: hero, dịch vụ, dự án, quy trình, blog, CTA.
- `src/components/ui`: icon, ảnh, breadcrumb, heading, card dùng chung.
- `src/components/widgets`: liên hệ nhanh, biểu mẫu soạn email.
- `src/content`: dữ liệu dịch vụ, dự án và blog.
- `src/lib`: cấu hình doanh nghiệp, helper SEO và nội dung.
- `public/images`: ảnh WebP có tên mô tả; logo thật.
- `docs`: kế hoạch, hướng dẫn nội dung, nguồn ảnh và kiểm tra bàn giao.

## Triển khai SEO

1. Mỗi trang có title, description, canonical riêng, một H1 và heading có thứ bậc.
2. HTML nội dung có sẵn khi crawler tải trang, URL tiếng Việt không dấu, liên kết nội bộ rõ ràng.
3. JSON-LD Organization/LocalBusiness, WebSite, BreadcrumbList, Service và BlogPosting bám nội dung hiển thị; không tạo rating hay Event cho các dự án lịch sử thiếu dữ liệu.
4. Sitemap tự sinh từ nguồn nội dung; robots trỏ sitemap. Trang 404 và preview Vercel không index.
5. Ảnh thật WebP, alt mô tả, kích thước cố định, lazy-load ngoài màn hình đầu; font hỗ trợ tiếng Việt.
6. Kiểm kê URL cũ và chuyển hướng trực tiếp đến trang tương ứng; không chuyển mọi URL lỗi về trang chủ.
7. Blog ban đầu gồm checklist lập kế hoạch, tổ chức ngày hội thể thao và chuẩn bị brief. Nội dung hữu ích, không nhồi từ khóa và không công bố giá chưa xác nhận.
8. Sau khi gắn domain: gửi sitemap vào Google Search Console, kiểm tra Rich Results, PageSpeed và Core Web Vitals bằng dữ liệu thực tế. Không hứa thứ hạng hoặc điểm hiệu năng chưa đo.

Tham chiếu kỹ thuật: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article).

## Các giai đoạn

1. Nghiên cứu nguồn, chọn ảnh, chốt cấu trúc và hướng thiết kế.
2. Xây trang chủ và hệ thống component; xem thử desktop/mobile.
3. Hoàn thiện các trang dịch vụ, dự án, blog, liên hệ và metadata.
4. Build production, kiểm tra liên kết, nội dung HTML, schema, menu, bộ lọc, luồng liên hệ và responsive.
5. Commit và push vào `main` của repository đã chỉ định; bàn giao hướng dẫn Vercel.

## Sau khi ra mắt

- Tuần đầu: xác minh domain, chuyển hướng www, kiểm tra index và các URL cũ từ Search Console.
- Tháng đầu: bổ sung case study với phạm vi công việc được xác nhận và ảnh được doanh nghiệp cho phép công bố; đo số lượt gọi/Zalo nếu chủ website quyết định tích hợp analytics.
- Duy trì: xuất bản bài theo câu hỏi khách hàng thực tế, liên kết bài đến dịch vụ phù hợp, cập nhật thông tin doanh nghiệp và ảnh.

## Tiêu chí bàn giao

Không còn liên kết mẫu hoặc nút giả; ảnh đúng nguồn; nội dung và liên hệ nhất quán; desktop/mobile hoạt động; production build thành công; nội dung mới dễ thêm; không có thông tin đăng nhập trong Git; có hướng dẫn triển khai và những việc cần xác minh sau khi lên domain.
