"use client";

import { motion } from "framer-motion";
import { IoCodeSlash, IoGlobe, IoPhonePortrait, IoShareSocial, IoCart, IoLayers } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import Image from "next/image";

const BentoGrid = () => {
  const t = useTranslations();

  const services = [
    {
      title: t('bento_webTitle'),
      description: t('bento_webDesc'),
      icon: <IoPhonePortrait className="text-3xl text-primary" />,
      size: "col-span-1 md:col-span-2 row-span-2",
      tag: "Tech",
      color: "bg-primary/5",
      image: "/images/mobile_app.png"
    },
    {
      title: t('bento_socialTitle'),
      description: t('bento_socialDesc'),
      icon: <IoShareSocial className="text-3xl text-primary" />,
      size: "col-span-1 md:col-span-1 row-span-1",
      tag: "Ad",
      color: "bg-background",
      image: "/images/advertising.png"
    },
    {
      title: t('bento_ecommerceTitle'),
      description: t('bento_ecommerceDesc'),
      icon: <IoLayers className="text-3xl text-primary" />,
      size: "col-span-1 md:col-span-1 row-span-1",
      tag: "Product",
      color: "bg-background",
      image: "/images/ecommerce.png"
    },
    {
      title: t('bento_softwareTitle'),
      description: t('bento_softwareDesc'),
      icon: <IoCodeSlash className="text-3xl text-primary" />,
      size: "col-span-1 md:col-span-2 row-span-1",
      tag: "Outsource",
      color: "bg-background",
      image: "/images/saas_product.png"
    },
    {
      title: t('bento_designTitle'),
      description: t('bento_designDesc'),
      icon: <IoGlobe className="text-3xl text-primary" />,
      size: "col-span-1 md:col-span-1 row-span-1",
      tag: "Creative",
      color: "bg-background",
      image: "/images/design_ux.png"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            {t('bento_heading1')} <span className="text-primary">{t('bento_heading2')}</span> {t('bento_heading3')}
          </h2>
          <p className="text-foreground/60 max-w-2xl font-medium">
            {t('bento_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.size} group relative rounded-3xl border border-border overflow-hidden flex flex-col justify-between p-8 md:p-10 pb-16 md:pb-20 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 ${service.color}`}
            >
              {/* Background Image for Cards */}
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="mb-6">{service.icon}</div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/60 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute -bottom-1/2 -right-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
