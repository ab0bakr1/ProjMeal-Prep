import React from "react";
import { useTranslations } from "next-intl";
import NavLogo from "../atoms/navbar/NavLogo";
import { Routes } from "@/utils/routes";
import NavLink from "../atoms/navbar/NavLink";
import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

export default function Footer() {
  const t = useTranslations();
  const footerRoutes = Routes.filter((r) => r.id <= 5);

  return (
    <footer className="ds-bg-primary-900 ds-text-white ds-py-8">
      <div className="ds-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ds-my-6">
          
          {/* العمود الأول: الهوية والوصف */}
          <div className="space-y-6">
            <NavLogo size="lg" color="secondary"/>
            <Text variant="secondary" className="ds-text-primary-300 ds-text-sm leading-relaxed max-w-xs">
              {/* نص وصفي قصير عن المشروع */}
              {t("HomePage.Footer.text")}
            </Text>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 ds-bg-primary-600 rounded-full flex items-center justify-center ds-hover hover:ds-bg-cta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 ds-bg-primary-600 rounded-full flex items-center justify-center ds-hover hover:ds-bg-cta transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 ds-bg-primary-600 rounded-full flex items-center justify-center ds-hover hover:ds-bg-cta transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <Title variant="disabled" className="border-b ds-border-primary-600 pb-2 inline-block">
              {t("HomePage.Footer.Links")}
            </Title>
            <ul className="space-y-3">
              {footerRoutes.map((route) => (
                <li key={route.id}>
                  <NavLink 
                    to={route.path} 
                    className="ds-text-primary-200 hover:ds-text-cta p-0 ds-text-sm"
                  >
                    {t(route.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا */}
          <div>
            <Title variant="disabled" className="border-b ds-border-primary-600 pb-2 inline-block">
              {t("HomePage.Footer.Contact")}
            </Title>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 ds-text-sm">
                <Mail size={18} className="ds-text-secondary"/>
                <Text variant="secondary" className="ds-text-secondary m-0">hello@mishmeal.com</Text>
              </li>
              <li className="flex items-center gap-3 ds-text-sm">
                <Phone size={18} className="ds-text-secondary"/>
                <Text variant="secondary" className="ds-text-secondary m-0">+966 50 123 4567</Text>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية */}
          <div>
            <Title variant="disabled" className="ds-font-heading ds-font-bold ds-text-lg ds-mb-6 border-b ds-border-primary-600 pb-2 inline-block">
              {t("HomePage.Footer.Newsletter")}
            </Title>
            <Text variant="secondary" className="ds-text-xs ds-mb-4">
              {t("HomePage.Footer.NewsletterText")}
            </Text>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="ds-bg-primary-600 border-none ds-rounded-lg py-2 px-4 ds-text-sm focus:ring-1 ds-focus-ring outline-none"
              />
              <button className="ds-bg-cta ds-text-white ds-py-2 ds-rounded-lg ds-font-bold ds-text-sm ds-hover:opacity-90 transition-all">
                {t("HomePage.Footer.NewsletterButton")}
              </button>
            </form>
          </div>

        </div>

        {/* حقوق النشر السفلى */}
        <div className="ds-border-primary-600 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="ds-text-primary-300 ds-text-xs text-center md:text-right">
            {t("HomePage.Footer.Copyright")}
          </p>
          <div className="flex gap-6 ds-text-primary-400 ds-text-xs">
            <a href="#" className="hover:ds-text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:ds-text-white">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}