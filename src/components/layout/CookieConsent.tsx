"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const t = useTranslations("cookies_consent");

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="bg-background/95 backdrop-blur-xl p-8 rounded-[32px] border border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Cookie Policy
                </span>
              </div>
              <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-8">
                {t("message")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {t("accept")}
                </button>
                <div className="flex gap-2 flex-1">
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-foreground/[0.03] border border-border text-foreground/60 px-4 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-wider hover:bg-foreground/[0.08] transition-all"
                  >
                    {t("decline")}
                  </button>
                  <Link
                    href="/cookies"
                    className="flex items-center justify-center bg-foreground/[0.03] border border-border text-foreground/60 w-12 h-12 rounded-2xl hover:bg-foreground/[0.08] transition-all"
                    title={t("more")}
                  >
                    <span className="text-lg">ℹ</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
