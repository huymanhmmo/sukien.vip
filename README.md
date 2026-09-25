# sukien.vip

Website giới thiệu năng lực tổ chức sự kiện của Công ty Cổ phần Your Dreams. Dự án dùng Next.js, tạo các trang tĩnh, không có CMS và không lưu dữ liệu biểu mẫu.

## Nội dung và cấu trúc

Các trang chính gồm trang chủ, giới thiệu, dịch vụ và trang chi tiết, dự án và trang chi tiết, góc chia sẻ, bài viết, liên hệ và chính sách bảo mật.

- `src/app`: route, metadata, sitemap, robots và trang 404.
- `src/components/layout`: header và footer.
- `src/components/sections`: các khối nội dung cho trang chủ.
- `src/components/ui`: component hiển thị dùng chung.
- `src/components/widgets`: bộ lọc và form tạo brief email trên thiết bị người dùng.
- `src/content`: dữ liệu blog, dự án và dịch vụ. Đây là nơi cần sửa khi muốn thêm nội dung.
- `src/lib`: thông tin doanh nghiệp và các helper SEO.
- `public/images`: logo và ảnh hoạt động đã nén WebP.
- `docs/KE-HOACH-PHAT-TRIEN.md`: nghiên cứu nguồn, kiến trúc thông tin và kế hoạch SEO.

## Chạy tại máy

```bash
npm ci
npm run dev
```

Mở `http://localhost:3000`.

Kiểm tra trước khi đưa lên môi trường thật:

```bash
npm run lint
npm run build
```

## Thêm bài blog

Thêm một đối tượng mới vào mảng `posts` trong `src/content/posts.ts`. Mỗi bài cần có `slug` không dấu, tiêu đề, mô tả, ngày đăng/cập nhật, ảnh có sẵn trong `public/images` và các phần nội dung. Hệ thống sẽ tự tạo trang bài viết, metadata, JSON-LD Article và URL trong sitemap.

Tương tự, thêm dự án tại `src/content/projects.ts`, hoặc thêm dịch vụ tại `src/content/services.ts`. Không tạo một trang thủ công nếu trang đó dùng mẫu dữ liệu đã có.

## SEO đã có sẵn

- Title, description và canonical riêng cho từng URL.
- HTML tĩnh cho toàn bộ trang dịch vụ, dự án và blog.
- `robots.txt` và `sitemap.xml` tự sinh từ nội dung.
- `public/llms.txt` tóm tắt thông tin và liên kết chính để các dịch vụ AI có thể chọn sử dụng; đây không phải tín hiệu xếp hạng của Google.
- JSON-LD cho Organization/LocalBusiness, WebSite, Service, BreadcrumbList và BlogPosting.
- Ảnh WebP có alt text mô tả và kích thước rõ ràng để giảm layout shift.
- Giữ nguyên slug gốc cho 87 URL bài viết WordPress trong `src/content/legacy-content-routes.ts`; nhóm nội dung gần trùng dùng canonical để thống nhất URL đại diện. Sitemap index `/sitemap.xml` trỏ đến sitemap bài viết và trang; các sitemap WordPress cũ được ánh xạ sang sitemap mới.
- Hình minh họa vector riêng có nguồn trong `src/illustrations` và ảnh WebP đã tối ưu trong `public/images`; ảnh dự án thật chỉ dùng ở chủ đề phù hợp.

Sau khi gắn domain trên Vercel, gửi `https://sukien.vip/sitemap.xml` vào Google Search Console và kiểm tra Rich Results, PageSpeed trên domain thật.

## Triển khai Vercel

1. Tạo project Vercel mới và import repository `huymanhmmo/sukien.vip`.
2. Giữ framework preset là Next.js. Lệnh build mặc định `npm run build` và output mặc định đều đúng.
3. Deploy nhánh `main`.
4. Gắn `sukien.vip` và `www.sukien.vip`, sau đó đặt một domain làm canonical, thường là `https://sukien.vip`.
5. Xác minh sitemap, robots và các URL chính sau khi domain hoạt động.

Không đặt khóa API, thông tin đăng nhập hoặc tệp gốc dung lượng lớn vào repository.
