import Link from "next/link";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 mb-20">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xl">
                2
              </div>
              <span className="text-xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                zek
              </span>
            </Link>
            <p className="text-sm text-foreground/60 max-w-xs font-medium leading-relaxed mb-8">
              Engineering digital excellence for visionary brands. Let's scale your vision to millions.
            </p>
            <div className="flex gap-4">
              {[IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram].map((Icon, i) => (
                <Link key={i} href="#" className="text-foreground/40 hover:text-primary transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Digital Bridge</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">SaaS Ecosystem</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Web Dev</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mobile Dev</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Media Mgmt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-foreground/40 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-foreground/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6">
          <div className="text-[11px] font-bold text-foreground/40">
            © {new Date().getFullYear()} 2zek Digital Product House. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold text-foreground/40 tracking-widest uppercase">System Status: Operational</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
