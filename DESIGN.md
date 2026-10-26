# 💎 BẢN QUY CHUẨN THIẾT KẾ (DESIGN SPECIFICATION)
## DỰ ÁN: CÔNG TY CỔ PHẦN YOUR DREAMS — SUKIEN.VIP
> **Phiên bản:** 2.0 (High-End Event Agency Upgrade)  
> **Nguyên lý nền tảng:** Kết hợp `High-End Visual Design` (Agency chuẩn quốc tế đắt tiền), `Frontend-Design (Anthropic)` (chống AI slop, đậm chất Swiss Editorial), `Vercel Labs Agent Skills` (chuẩn Next.js & React 19) và `UI/UX Pro Max`.  
> **Mục tiêu:** Định vị thương hiệu đơn vị tổ chức sự kiện hàng đầu, tạo sự tin cậy tuyệt đối cho khách hàng doanh nghiệp B2B (tập đoàn, ngân hàng, ban quản lý khu đô thị lớn) khi đặt yêu cầu brief sự kiện.

---

## 1. BRAND DNA & VISUAL ATMOSPHERE

* **Định vị:** *Premier Event Production & Sports Event Specialist* — Đối tác tổ chức sự kiện chuyên nghiệp đứng sau các giải thể thao quy mô lớn (Happy Run, Giải bơi Ocean City) và các sự kiện tầm cỡ doanh nghiệp.
* **Ngôn ngữ thị giác (Aesthetic):**
  * **Swiss Modern Editorial:** Bố cục chặt chẽ, lưới căn chỉnh chuẩn xác, nhịp thở (whitespace) thoáng đãng, đường kẻ hairline tinh tế (`1px solid #e4e6e4`).
  * **Luxury & Energetic Accent:** Tương phản ấn tượng giữa Mực đen sâu (`#111315`), Nền trắng/xám giấy thanh lịch (`#f8f9f8`), và Đỏ cờ thương hiệu tràn đầy năng lượng (`#dc2437`).
  * **Visual Depth:** Loại bỏ giao diện phẳng lì nhàm chán bằng hệ thống phân lớp tinh tế: kính mờ (blur 16px), đổ bóng đa tầng (multi-layer soft shadows), và tương phản bề mặt (surface hierarchy).

---

## 2. HỆ THỐNG DESIGN TOKENS & MÀU SẮC (COLOR PALETTE)

### 2.1 Bảng màu cốt lõi
| Token | Mã màu (HEX) | Vai trò & Ứng dụng |
| :--- | :--- | :--- |
| `--red` | `#dc2437` | **Vivid Crimson** — Màu nhận diện chính, điểm nhấn năng động, nút CTA chính |
| `--red-dark` | `#b61628` | Trạng thái hover của nút bấm, viền nhấn chìm |
| `--red-light` | `#fff0f2` | Nền tag danh mục, highlight nhẹ |
| `--ink` | `#111315` | **Onyx Ink** — Màu đen tuyền sang trọng cho chữ tiêu đề H1/H2 và các khối tối |
| `--muted` | `#5a5f62` | Màu xám trung tính cho văn bản mô tả, độ tương phản chuẩn WCAG AA (>= 4.5:1) |
| `--paper` | `#f6f7f6` | Nền khối dịch vụ, thẻ bento, footer |
| `--line` | `#e2e4e2` | Đường kẻ hairline phân chia module thanh mảnh |
| `--white` | `#ffffff` | Nền trang và bề mặt thẻ nổi |

### 2.2 Hệ thống đổ bóng mềm (Soft Elevation Shadows)
Tránh đổ bóng đen gắt của AI thông thường, sử dụng công thức đổ bóng tán xạ tự nhiên:
```css
--shadow-sm: 0 1px 3px rgba(17, 19, 21, 0.04), 0 1px 2px rgba(17, 19, 21, 0.02);
--shadow-card: 0 4px 20px -2px rgba(17, 19, 21, 0.06), 0 2px 6px -1px rgba(17, 19, 21, 0.03);
--shadow-hover: 0 20px 35px -8px rgba(17, 19, 21, 0.12), 0 8px 16px -4px rgba(17, 19, 21, 0.04);
--shadow-glow-red: 0 8px 24px -4px rgba(220, 36, 55, 0.35);
```

---

## 3. TYPOGRAPHY SPECIFICATION

* **Font chữ hệ thống:** Chuẩn hóa `--font-brand` kết hợp các font có sẵn trên hệ điều hành và font Sans-serif hiện đại:
  ```css
  font-family: var(--font-brand), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  ```
* **Phân cấp tỉ lệ (Type Hierarchy):**
  * `Hero Display H1`: `clamp(46px, 5.5vw, 76px)`, line-height `1.15`, letter-spacing `-0.05em`, font-weight `700`.
  * `Section H2`: `clamp(32px, 3.5vw, 48px)`, line-height `1.2`, letter-spacing `-0.04em`, font-weight `600`.
  * `Card Title H3`: `22px - 26px`, line-height `1.3`, letter-spacing `-0.03em`.
  * `Eyebrow (Nhãn danh mục)`: `11px - 12px`, letter-spacing `0.14em`, text-transform `uppercase`, font-weight `600`.
  * `Body Text`: `15px - 16px`, line-height `1.75 - 1.85`.

---

## 4. QUY CHUẨN THIẾT KẾ CÁC THÀNH PHẦN (COMPONENTS)

### 4.1 Header & Điều Hướng
* **Glassmorphism mượt mà:** `backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.94); border-bottom: 1px solid var(--line);`
* Chiều cao header: 84px - 90px tạo khoảng thở sang trọng.
* Phân định rõ thương hiệu: `SUKIEN.VIP` in đậm kết hợp nhãn phụ `BY YOUR DREAMS CORP`.
* Nút Hotline & Nút CTA "Gửi Brief Sự Kiện" nổi bật với hiệu ứng hover nâng nhẹ.

### 4.2 Hero Section (Bản sắc Agency Tầm Cỡ)
* Bố cục 2 cột bất đối xứng (Asymmetric Grid):
  * Cột trái: Tiêu đề Display khẳng định vị thế đơn vị đồng hành cùng các sự kiện triệu đô. Nhãn vị trí: *Hà Nội • TP. Hồ Chí Minh*.
  * Cột phải: Đoạn giới thiệu súc tích + Nút "Gửi Brief Nhanh" + Số liệu nổi bật.
* Khung ảnh sự kiện tiêu biểu (Hero Visual):
  * Tỉ lệ điện ảnh, bo cong 6px, lớp phủ gradient đen mờ chuyển tiếp.
  * Tag dự án ghim nổi: `DỰ ÁN TIÊU BIỂU: ROX LIVING HAPPY RUN`.
  * Mũi tên tròn tương tác xoay nhẹ khi rê chuột.

### 4.3 Khối Đối Tác (Partners Section)
* Bố cục hàng ngang thoáng đãng với các thương hiệu lớn: **Vinhomes**, **ROX Living**, **EVN**, **Rạng Đông**, **Ocean City**.
* Logo được căn bằng chiều cao, hiển thị tone xám trang nhã (`filter: grayscale(1); opacity: 0.75`), khi hover chuyển màu nguyên bản và sáng rõ.

### 4.4 Khối Bản Đồ Dịch Vụ (Service Atlas)
* Thiết kế dạng **Bento Grid**:
  * Các thẻ dịch vụ chủ lực (Sự kiện thể thao, Sự kiện doanh nghiệp) chiếm ô lớn `grid-column: span 6`.
  * Các thẻ dịch vụ chuyên sâu (Pickleball, Khai trương, Team building) chiếm ô `grid-column: span 4`.
  * Vector Art minh họa riêng biệt với nền màu pastel nhẹ nhàng, icon mũi tên nhảy góc 45 độ khi hover.

### 4.5 Showcase Dự Án Tiêu Biểu (Portfolio & Proof)
* Bố cục so le độc đáo mang đậm phong cách tạp chí kiến trúc/thiết kế.
* Ảnh zoom mượt mà `scale(1.035)` bên trong khung cắt `overflow: hidden`.
* Thẻ số liệu chứng minh (Proof): Hiển thị số liệu ấn tượng (**100+** Sự kiện đã thực hiện, **5000+** Vận động viên tham gia, **100%** An toàn & Đúng tiến độ).

### 4.6 Floating Contact Widget (Mobile & Desktop)
* Nút Zalo & Hotline ghim cố định góc phải màn hình:
  * Hiệu ứng viền phát sáng nhẹ (subtle pulse) tạo cảm giác luôn sẵn sàng hỗ trợ 24/7.
  * Đảm bảo không che khuất nội dung bài viết và form gửi brief.

---

## 5. TIÊU CHÍ KIỂM ĐỊNH KỸ THUẬT & CHẤT LƯỢNG
1. **Next.js 16 SSG Build:** 100% các trang (117+ URLs) build tĩnh hoàn hảo qua Turbopack.
2. **Hiệu năng Core Web Vitals:** Chỉ số LCP < 1.5s, CLS = 0, INP đáp ứng tức thì.
3. **Trợ năng (A11y):** Tương phản màu chữ đạt chuẩn WCAG 2.2 AA (tối thiểu 4.5:1).
