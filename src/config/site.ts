import siteData from "@/data/site.json";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

export type SocialPlatform = "Twitter" | "GitHub" | "LinkedIn" | "Instagram";

export interface SocialConfig {
  platform: SocialPlatform;
  url: string;
  icon: string;
}

export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface MenuConfig {
  title: string;
  items: MenuItem[];
}

export interface SiteConfig {
  socials: SocialConfig[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  branding: {
    name: string;
    legalName: string;
    foundingYear: number;
  };
  footer: {
    menus: MenuConfig[];
  };
}

export const siteConfig: SiteConfig = siteData as unknown as SiteConfig;

export const socialIconMap: Record<string, any> = {
  twitter: IoLogoTwitter,
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  instagram: IoLogoInstagram,
};
