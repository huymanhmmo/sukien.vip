export const site = {
  name: 'Sự Kiện Vip',
  company: 'Công ty Cổ phần Your Dreams',
  url: 'https://sukien.vip',
  phone: '0979 121 097',
  phoneLink: 'tel:+84979121097',
  email: 'info@sukien.vip',
  zalo: 'https://zalo.me/0979121097',
  address: 'Thôn Công Đình 3, Xã Phù Đổng, Thành phố Hà Nội, Việt Nam',
  taxId: '0108879900',
};

export const navigation = [
  { href: '/gioi-thieu', label: 'Về chúng tôi' },
  { href: '/dich-vu', label: 'Dịch vụ' },
  { href: '/du-an', label: 'Dự án' },
  { href: '/blog', label: 'Góc chia sẻ' },
];

export const isPreview = process.env.VERCEL_ENV === 'preview';
