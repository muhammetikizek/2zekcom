"use client";

import { Link, usePathname } from '@/i18n/routing';
import LogoIcon from './LogoIcon';

interface BrandProps {
  size?: number;
  className?: string;
  showText?: boolean;
  rotateOnHover?: boolean;
}

const Brand = ({ 
  size = 36, 
  className = "", 
  showText = true,
  rotateOnHover = false 
}: BrandProps) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link 
      href="/" 
      onClick={handleClick}
      className={`flex items-center gap-2 group ${className}`}
    >
      <LogoIcon 
        size={size} 
        className={rotateOnHover ? "transition-transform duration-500 ease-in-out group-hover:rotate-90" : ""}
      />
      {showText && (
        <span 
          className="tracking-wider transition-colors"
          style={{ fontSize: `${size * 0.55}px` }}
        >
          <span className="font-black" style={{ fontSize: '1.15em' }}>2</span>
          <span className="font-bold">ZEK</span>
        </span>
      )}
    </Link>
  );
};

export default Brand;
