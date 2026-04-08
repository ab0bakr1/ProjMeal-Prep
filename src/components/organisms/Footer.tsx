import React from "react";
import { useTranslations } from "next-intl";
import NavLogo from "../atoms/navbar/NavLogo";
import { Routes } from "@/utils/routes";
import NavLink from "../atoms/navbar/NavLink";
import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";
import Title from "../atoms/Title";

export default function Footer() {
  const t = useTranslations();
  const footerRoutes = Routes.filter((r) => r.id <= 5);

  return (
    <footer className="ds-bg-primary-900 ds-text-white ds-py-8">
      <div className="ds-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ds-mb-12">
          
          {/* العمود الأول: الهوية والوصف */}
          <div className="space-y-6">
            <NavLogo size="lg" />
            <p className="ds-text-primary-300 ds-text-sm leading-relaxed max-w-xs">
              {/* نص وصفي قصير عن المشروع */}
              نقدم لك وجبات صحية متكاملة مصممة لتناسب نمط حياتك، بجودة عالية ومكونات طازجة يومياً.
            </p>
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
              روابط سريعة
            </Title>
            <ul className="space-y-3">
              {footerRoutes.map((route) => (
                <li key={route.id}>
                  <NavLink 
                    to={route.path} 
                    className="ds-text-primary-200 hover:ds-text-cta p-0 ds-text-sm"
                  >
                    {route.key}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا */}
          <div>
            <Title variant="disabled" className="border-b ds-border-primary-600 pb-2 inline-block">
              تواصل معنا
            </Title>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 ds-text-primary-200 ds-text-sm">
                <Mail size={18} className="ds-text-cta" />
                <span>hello@mishmeal.com</span>
              </li>
              <li className="flex items-center gap-3 ds-text-primary-200 ds-text-sm">
                <Phone size={18} className="ds-text-cta" />
                <span>+966 50 123 4567</span>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية */}
          <div>
            <h4 className="ds-font-heading ds-font-bold ds-text-lg ds-mb-6 border-b ds-border-primary-600 pb-2 inline-block">
              النشرة البريدية
            </h4>
            <p className="ds-text-primary-300 ds-text-xs ds-mb-4">
              اشترك للحصول على نصائح صحية وعروض حصرية.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="ds-bg-primary-600 border-none ds-rounded-lg py-2 px-4 ds-text-sm focus:ring-1 ds-focus-ring outline-none"
              />
              <button className="ds-bg-cta ds-text-white ds-py-2 ds-rounded-lg ds-font-bold ds-text-sm ds-hover:opacity-90 transition-all">
                اشترك الآن
              </button>
            </form>
          </div>

        </div>

        {/* حقوق النشر السفلى */}
        <div className="ds-border-primary-600 border-t ds-pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="ds-text-primary-300 ds-text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} <span className="ds-font-bold">MishMeal</span>. جميع الحقوق محفوظة.
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