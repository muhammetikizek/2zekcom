"use client";

import Link from "next/link";
import { IoMenu, IoClose, IoLogoTwitter, IoLogoGithub, IoMoon, IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl">
            2
          </div>
          <span className="text-xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
            zek
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Services", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-border mx-2" />
          
          <div className="flex items-center gap-4">
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
              Get Started
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
          {["Features", "Services", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-foreground/60 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 text-lg font-medium text-foreground/60"
          >
            {theme === "dark" ? <IoSunny size={20} /> : <IoMoon size={20} />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
