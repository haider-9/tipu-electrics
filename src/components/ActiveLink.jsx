'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ActiveLink({ href, children, style = {}, activeStyle = {} }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  
  const linkStyle = {
    ...style,
    ...(isActive ? activeStyle : {})
  };
  
  return (
    <Link href={href} style={linkStyle}>
      {children}
    </Link>
  );
}