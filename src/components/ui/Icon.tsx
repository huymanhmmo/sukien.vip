export default function Icon({ name = 'arrow', className = '' }: { name?: 'arrow' | 'up-right' | 'phone' | 'menu' | 'close' | 'check' | 'mail' | 'plus'; className?: string }) {
  const paths = { arrow: 'M4 12h15m-6-6 6 6-6 6', 'up-right': 'M6 18 18 6M6 6h12v12', phone: 'M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C9 21 3 15 3 5a2 2 0 0 1 2-2Z', menu: 'M4 7h16M4 12h16M4 17h16', close: 'm6 6 12 12M6 18 18 6', check: 'm5 12 4 4L19 6', mail: 'M3 5h18v14H3zM3 5l9 8 9-8', plus: 'M12 4v16M4 12h16' };
  return <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
