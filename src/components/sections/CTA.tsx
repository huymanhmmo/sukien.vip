import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { site } from '@/lib/site';
export default function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow">MỘT SỰ KIỆN ĐÁNG NHỚ BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN</p><h2>Bạn có ý tưởng.<br />Chúng tôi có <span>cách làm.</span></h2></div><div className="cta-actions"><Link href="/lien-he" className="button button-white">Cùng tạo dấu ấn <Icon name="up-right" /></Link><a href={site.phoneLink}>Hoặc gọi {site.phone}</a></div></div></section>;
}
