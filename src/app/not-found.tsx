import Link from 'next/link';
export default function NotFound() { return <section className="not-found"><p className="eyebrow">404 / KHÔNG TÌM THẤY TRANG</p><h1>Trang này chưa<br />có trong kịch bản.</h1><p>Đường dẫn có thể đã thay đổi hoặc không còn tồn tại.</p><Link className="button button-red" href="/">Về trang chủ</Link></section>; }
