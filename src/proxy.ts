import { NextResponse, type NextRequest } from 'next/server';
import { legacyRedirects } from '@/lib/legacy-redirects';

const destinations = new Map<string, string>(
  legacyRedirects.map(({ source, destination }) => [source, destination] as const),
);

export function proxy(request: NextRequest) {
  const originalPathname = request.nextUrl.pathname;
  const pathname = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  const destination = destinations.get(pathname);

  if (destination) {
    const destinationUrl = new URL(destination, request.url);
    destinationUrl.search = request.nextUrl.search;
    return NextResponse.redirect(destinationUrl, 301);
  }

  if (pathname !== originalPathname) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname = pathname;
    return NextResponse.redirect(canonicalUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)$).*)'],
};
