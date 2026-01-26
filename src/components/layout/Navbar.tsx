"use client";

import Link from "next/link";
import { IoMenu, IoClose, IoLogoTwitter, IoLogoGithub, IoMoon, IoSunny, IoGlobeOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'tr' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPathname || `/${nextLocale}`);
  };

  if (!mounted) return null;

  const menuItems = [
    { name: t('features'), href: "#features" },
    { name: t('services'), href: "#services" },
    { name: t('portfolio'), href: "#portfolio" },
    { name: t('contact'), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl">
            2
          </div>
          <span className="text-xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
            zek
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-border mx-2" />
          
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-xs font-bold text-foreground/60 hover:text-primary hover:border-primary/20 transition-all cursor-pointer"
            >
              <IoGlobeOutline size={14} />
              {locale.toUpperCase()}
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground/60 hover:text-primary transition-colors cursor-pointer"
            >
              {theme === "dark" ? <IoSunny size={20} /> : <IoMoon size={20} />}
            </button>
            
            <Link
              href="https://github.com"
              target="_blank"
              className="p-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <IoLogoGithub size={20} />
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all"
            >
              {t('getStarted')}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-foreground/60 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center justify-between border-t border-border pt-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 text-lg font-medium text-foreground/60"
            >
              {theme === "dark" ? <IoSunny size={20} /> : <IoMoon size={20} />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-bold text-foreground"
            >
              <IoGlobeOutline size={18} />
              {locale === 'en' ? 'Türkçe' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
