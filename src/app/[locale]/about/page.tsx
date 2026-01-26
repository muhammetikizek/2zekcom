import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { IoGlobeOutline, IoCodeSlashOutline, IoPhonePortraitOutline, IoCloudDoneOutline, IoTrendingUpOutline } from "react-icons/io5";

export default function AboutPage() {
  const t = useTranslations();

  const services = [
    { title: t('service_web_title'), desc: t('service_web_desc'), icon: IoCodeSlashOutline },
    { title: t('service_mobile_title'), desc: t('service_mobile_desc'), icon: IoPhonePortraitOutline },
    { title: t('service_devops_title'), desc: t('service_devops_desc'), icon: IoCloudDoneOutline },
    { title: t('service_ad_title'), desc: t('service_ad_desc'), icon: IoTrendingUpOutline },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-primary">2ZEK DIJITAL ÜRÜN EVI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-8">
            {t('about_title')}
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('about_description')}
          </p>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6">{t('about_vision_title')}</h2>
            <p className="text-lg text-foreground/60 leading-relaxed font-medium">
              {t('about_vision_desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div key={i} className="p-6 rounded-3xl bg-background border border-border group hover:border-primary/20 transition-all">
                <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-sm mb-2">{service.title}</h3>
                <p className="text-xs text-foreground/40 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
