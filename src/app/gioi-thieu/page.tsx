import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/ui/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = pageMetadata(
  'Về Your Dreams – Công ty Cổ phần Tổ chức Sự kiện & Giáo dục Thể thao',
  'Tìm hiểu Công ty Cổ phần Your Dreams (Sự Kiện Vip, Swim For Life Việt Nam): hồ sơ năng lực 5+ năm, đối tác chiến lược Vinhomes & ROX Living, hệ thống trang thiết bị và đội ngũ chuyên gia.',
  '/gioi-thieu',
  {
    url: '/images/happy-run.webp',
    alt: 'Đội ngũ Your Dreams và hàng ngàn vận động viên tại giải chạy phong trào',
  }
);

const coreValues = [
  {
    title: 'Chuyên nghiệp (Professionalism)',
    desc: 'Quy trình chuẩn hóa 5 bước từ brief, khảo sát hiện trường, tổng duyệt kỹ thuật FOH đến run-sheet chi tiết theo từng phút.',
  },
  {
    title: 'Sáng tạo (Creativity)',
    desc: 'Mỗi sự kiện là một câu chuyện thương hiệu độc bản. Không rập khuôn ý tưởng, cá nhân hóa visual key và concept theo mục tiêu của doanh nghiệp.',
  },
  {
    title: 'An toàn tuyệt đối (Zero Incident)',
    desc: 'Cam kết đặt an toàn tính mạng và sức khỏe lên hàng đầu. 100% sự kiện thể thao và ngoài trời có phương án cứu hộ, y tế và bảo hiểm sự kiện.',
  },
  {
    title: 'Tận tâm (Dedication)',
    desc: 'Đồng hành cùng khách hàng từ khâu phôi thai ý tưởng, ứng phó linh hoạt mọi biến động thời tiết đến khi bàn giao nghiệm thu hoàn hảo.',
  },
  {
    title: 'Hiệu quả (Efficiency)',
    desc: 'Tối ưu hóa ngân sách nhờ sở hữu trực tiếp kho nhà giàn ba lăng xích, âm thanh ánh sáng và màn hình LED, không qua trung gian thứ ba.',
  },
];

const milestones = [
  { year: '2018', title: 'Khởi đầu thương hiệu Swim For Life', desc: 'Hợp tác chiến lược cùng Vinhomes triển khai các khóa học bơi an toàn và phòng chống đuối nước cho cư dân các khu đô thị.' },
  { year: '2019', title: 'Thành lập Công ty Cổ phần Your Dreams', desc: 'Chính thức đăng ký kinh doanh ngày 27/08/2019 (MST: 0108879900), mở rộng lĩnh vực sang tổ chức sự kiện chuyên nghiệp và cho thuê thiết bị trọn gói.' },
  { year: '2021', title: 'Đầu tư hệ thống kho bãi & thiết bị hiện đại', desc: 'Trang bị hệ thống nhà giàn không gian ba lăng xích điện, giàn truss nhôm nhập khẩu và dàn âm thanh line array phục vụ sự kiện 5.000+ người.' },
  { year: '2023', title: 'Chuỗi sự kiện thể thao quy mô lớn', desc: 'Tổ chức giải bơi Kình ngư Quận biển Ocean City 2023, các giải bóng đá và ngày hội thể thao đa môn cho tập đoàn ROX Living và Vinhomes.' },
  { year: '2024 - 2026', title: 'Đột phá quy mô toàn quốc', desc: 'Tổ chức thành công ROX Living Happy Run 2024, giải Pickleball doanh nghiệp và chuỗi sự kiện trải nghiệm kỹ năng sống “Đi để lớn” trên toàn quốc.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Về chúng tôi', href: '/gioi-thieu' }]} />
        <header className="page-intro">
          <p className="eyebrow">HỒ SƠ NĂNG LỰC DOANH NGHIỆP</p>
          <h1>Từ ý tưởng sáng tạo đến<br /><span className="red-text">sự kiện hoàn hảo.</span></h1>
          <p>
            Công ty Cổ phần Your Dreams (thương hiệu <strong>Sự Kiện Vip</strong> & <strong>Swim For Life Việt Nam</strong>) là đơn vị tiên phong kết hợp giữa tổ chức sự kiện đỉnh cao, giáo dục thể thao cộng đồng và cung ứng giải pháp kỹ thuật sân khấu trọn gói tại Hà Nội cũng như trên toàn lãnh thổ Việt Nam.
          </p>
        </header>

        {/* HÌNH ẢNH 1: Hero Banner */}
        <div className="detail-image">
          <Image
            src="/images/happy-run.webp"
            alt="Toàn cảnh vận động viên tham gia giải chạy quy mô hàng ngàn người do Your Dreams tổ chức"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 1320px"
          />
        </div>
        <p className="image-credit">Giải chạy cộng đồng ROX Living Happy Run 2024 do Your Dreams điều phối toàn diện.</p>
      </div>

      {/* STATS BADGES */}
      <section className="section" style={{ paddingBlock: '40px' }}>
        <div className="container">
          <div className="stats-badge-grid">
            <div className="stats-badge">
              <strong>5+ Năm</strong>
              <span>Kinh nghiệm hoạt động chính thức từ 2019</span>
            </div>
            <div className="stats-badge">
              <strong>5,000+</strong>
              <span>Học viên bơi lội & thể thao mỗi năm</span>
            </div>
            <div className="stats-badge">
              <strong>100%</strong>
              <span>An toàn tuyệt đối – Zero Incident</span>
            </div>
            <div className="stats-badge">
              <strong>100+</strong>
              <span>Sự kiện doanh nghiệp & thể thao thành công</span>
            </div>
          </div>
        </div>
      </section>

      {/* CÂU CHUYỆN & TẦM NHÌN */}
      <section className="page-section">
        <div className="container two-column">
          <div className="prose">
            <p className="eyebrow red-text">TẦM NHÌN & SỨ MỆNH</p>
            <h2>Kiến tạo khoảnh khắc gắn kết và giá trị trường tồn</h2>
            <div className="answer-capsule">
              <strong>Tầm nhìn của Your Dreams:</strong> Trở thành đơn vị tổ chức sự kiện thể thao, sự kiện doanh nghiệp và giáo dục trải nghiệm hàng đầu Việt Nam, được các tập đoàn lớn (Vinhomes, ROX Living...) và cộng đồng tin cậy tuyệt đối nhờ tính chuẩn xác, sáng tạo và an toàn cao nhất.
            </div>
            <p>
              Chúng tôi tin rằng một sự kiện thành công không chỉ nằm ở ánh đèn sân khấu lung linh hay dàn âm thanh hoành tráng, mà nằm ở <strong>cảm xúc đọng lại trong tâm trí mỗi người tham dự</strong>. Cho dù đó là nụ cười rạng rỡ của em nhỏ khi vượt qua nỗi sợ nước tại lớp bơi Swim For Life, bước chân kiên định chạm vạch đích giải chạy marathon, hay khoảnh khắc gắn kết của hàng trăm cán bộ nhân viên trong đêm gala tri ân doanh nghiệp.
            </p>
            <p>
              Với sứ mệnh <em>“Từ Ý Tưởng Đến Sự Kiện Hoàn Hảo”</em>, Your Dreams đầu tư đồng bộ vào 3 trụ cột: đội ngũ chuyên gia giàu kinh nghiệm hiện trường, trang thiết bị kỹ thuật hiện đại sở hữu trực tiếp, và quy trình quản trị rủi ro khắt khe chuẩn quốc tế.
            </p>
          </div>

          {/* HÌNH ẢNH 2: Hoạt động giáo dục thể thao */}
          <div>
            <div className="detail-image" style={{ height: '420px' }}>
              <Image
                src="/images/swim-vinhomes.webp"
                alt="Huấn luyện viên Swim For Life Việt Nam trực thuộc Your Dreams hướng dẫn kỹ năng bơi cho cư dân Vinhomes"
                fill
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </div>
            <p className="image-credit">Khóa đào tạo bơi an toàn phòng chống đuối nước tại khu đô thị Vinhomes.</p>
          </div>
        </div>
      </section>

      {/* 5 GIÁ TRỊ CỐT LÕI */}
      <section className="section services-section">
        <div className="container">
          <p className="eyebrow">NGUYÊN TẮC HOẠT ĐỘNG</p>
          <h2 className="related-heading">5 Giá trị cốt lõi định hình thương hiệu.</h2>
          <div className="value-grid">
            {coreValues.map((val, i) => (
              <div key={val.title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LỊCH SỬ PHÁT TRIỂN & HÌNH ẢNH 3 */}
      <section className="page-section">
        <div className="container two-column">
          <div>
            {/* HÌNH ẢNH 3: Hoạt động thể thao cộng đồng */}
            <div className="detail-image" style={{ height: '460px' }}>
              <Image
                src="/images/sports-day.webp"
                alt="Ngày hội thể thao cộng đồng đa môn tại Diễn Châu do Your Dreams thiết kế và vận hành"
                fill
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </div>
            <p className="image-credit">Ngày hội thể thao đa môn (bóng đá, pickleball, kéo co) tại Nghệ An.</p>
          </div>

          <div className="prose">
            <p className="eyebrow red-text">DẤU ẤN PHÁT TRIỂN</p>
            <h2>Hành trình không ngừng bứt phá</h2>
            <div className="timeline-list">
              {milestones.map(m => (
                <div key={m.year} style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--red)', letterSpacing: '0.05em' }}>{m.year}</span>
                  <h3 style={{ fontSize: '18px', margin: '4px 0 6px' }}>{m.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NĂNG LỰC THIẾT BỊ & HÌNH ẢNH 4 */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <p className="eyebrow">HẠ TẦNG KỸ THUẬT</p>
          <h2 className="related-heading">Cơ sở vật chất & kho thiết bị độc quyền</h2>
          <div className="table-responsive">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Nhóm thiết bị</th>
                  <th>Quy cách & Công nghệ</th>
                  <th>Khả năng đáp ứng</th>
                  <th>Ưu thế cạnh tranh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nhà giàn không gian</strong></td>
                  <td>Khung nhôm hợp kim / Inox khẩu độ 10m, 12m, 15m, 18m, 24m. Mái bạt chống cháy, cản nắng 100%.</td>
                  <td>Che phủ 500m² - 5.000m² sân bãi</td>
                  <td>Hệ thống nâng hạ ba lăng xích điện an toàn bậc nhất hiện nay</td>
                </tr>
                <tr>
                  <td><strong>Âm thanh biểu diễn</strong></td>
                  <td>Hệ thống Line Array công suất lớn, micro Shure/Sennheiser UHF, bàn mixer digital 32-64 kênh.</td>
                  <td>Không gian mở ngoài trời 3.000+ khán giả</td>
                  <td>Kỹ sư âm thanh FOH trực tiếp căn chỉnh góc phủ, triệt tiêu hú rít</td>
                </tr>
                <tr>
                  <td><strong>Màn hình LED & Ánh sáng</strong></td>
                  <td>Màn hình LED P3.91 Outdoor chống nước chuẩn IP65; đèn Beam 380, Par LED 54 bóng, đèn Blinder.</td>
                  <td>Sân khấu từ 15m² đến 200m²</td>
                  <td>Độ sáng cao, hiển thị rõ nét ngay dưới ánh nắng gắt</td>
                </tr>
                <tr>
                  <td><strong>Trang thiết bị thể thao</strong></td>
                  <td>Cổng chào hơi, thảm thi đấu, rào chắn an ninh, bè cứu hộ hồ bơi, phao phân làn, cúp & kỷ niệm chương.</td>
                  <td>Giải chạy, giải bơi, pickleball, bóng đá</td>
                  <td>Đạt tiêu chuẩn thi đấu phong trào và liên đoàn thể thao</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* THÔNG TIN DOANH NGHIỆP PHÁP LÝ */}
      <section className="section">
        <div className="container two-column">
          <div className="prose">
            <p className="eyebrow red-text">THÔNG TIN DOANH NGHIỆP</p>
            <h2>Minh bạch pháp lý – Đối tác tin cậy</h2>
            <p>
              Your Dreams hoạt động với đầy đủ tư cách pháp nhân hợp lệ, giấy phép tổ chức biểu diễn nghệ thuật, xúc tiến thương mại và chứng chỉ huấn luyện thể thao chuyên nghiệp. Mọi hợp đồng đều xuất hóa đơn VAT, chứng từ khấu trừ thuế và bảo hiểm trách nhiệm công cộng theo đúng quy định pháp luật.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/lien-he" className="button button-red">
                Liên hệ hợp tác doanh nghiệp <Icon name="up-right" />
              </Link>
            </div>
          </div>

          <aside className="legal-info">
            <h2>{site.company}</h2>
            <dl>
              <dt>Tên quốc tế</dt><dd>YOUR DREAMS JOINT STOCK COMPANY</dd>
              <dt>Tên thương mại</dt><dd>Your Dreams, Sự Kiện Vip, Swim For Life Việt Nam</dd>
              <dt>Mã số thuế</dt><dd>{site.taxId}</dd>
              <dt>Ngày cấp GCN</dt><dd>27/08/2019 (Sở KH&ĐT TP Hà Nội)</dd>
              <dt>Đại diện pháp luật</dt><dd>Nguyễn Huy Mạnh</dd>
              <dt>Địa chỉ trụ sở</dt><dd>{site.address}</dd>
              <dt>Hotline / Zalo</dt><dd><a href={site.phoneLink}>{site.phone}</a></dd>
              <dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              <dt>Website</dt><dd><a href={site.url}>{site.url.replace('https://', '')}</a></dd>
            </dl>
          </aside>
        </div>
      </section>

      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${site.url}/gioi-thieu#webpage`,
        url: `${site.url}/gioi-thieu`,
        name: 'Về Your Dreams – Công ty Cổ phần Your Dreams',
        description: 'Hồ sơ năng lực Công ty Cổ phần Your Dreams: 5+ năm kinh nghiệm tổ chức sự kiện thể thao, sự kiện doanh nghiệp và giáo dục thể chất tại Việt Nam.',
        inLanguage: 'vi-VN',
        mainEntity: {
          '@type': 'Organization',
          '@id': `${site.url}/#organization`,
          name: site.company,
          legalName: 'CÔNG TY CỔ PHẦN YOUR DREAMS',
          foundingDate: '2019-08-27',
          founder: {
            '@type': 'Person',
            name: 'Nguyễn Huy Mạnh',
            jobTitle: 'Tổng Giám Đốc / Người đại diện pháp luật',
          },
          knowsAbout: [
            'Tổ chức giải chạy bộ',
            'Tổ chức giải bơi lội',
            'Tổ chức giải pickleball',
            'Tổ chức team building doanh nghiệp',
            'Cho thuê âm thanh ánh sáng sân khấu',
            'Cho thuê nhà giàn không gian ba lăng xích',
          ],
        },
      }} />
    </>
  );
}
