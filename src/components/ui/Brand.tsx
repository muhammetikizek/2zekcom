"use client";

import { Link } from '@/i18n/routing';
import LogoIcon from './LogoIcon';

interface BrandProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

const Brand = ({ size = 36, className = "", showText = true }: BrandProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <LogoIcon size={size} />
      {showText && (
        <span 
          className="tracking-wider text-foreground group-hover:text-primary transition-colors"
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
