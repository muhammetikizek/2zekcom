"use client";

import Image from "next/image";

interface LogoIconProps {
  size?: number;
  className?: string;
}

const LogoIcon = ({ size = 32, className = "" }: LogoIconProps) => {
  return (
    <Image 
      src="/logo.svg" 
      alt="2ZEK Logo" 
      width={size} 
      height={size}
      className={className}
      priority
    />
  );
};

export default LogoIcon;
