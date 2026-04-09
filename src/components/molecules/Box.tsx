import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

interface BoxProps {
  title: string;
  text: string;
  Icon?: React.ElementType; // إضافة الأيقونة كميزة اختيارية
}

export default function Box({ title, text, Icon }: BoxProps) {
  const t = useTranslations();

  return (
    <div className={cn(
      "ds-bg-card ds-p-8 ds-shadow-md ds-rounded-2xl border ds-border-muted text-center h-full",
      "ds-hover hover:ds-shadow-lg hover:-translate-y-1 transition-all duration-300" // إضافة حركة عند التمرير
    )}>
      {/* منطقة الأيقونة مع لون البراند الأخضر */}
      {Icon && (
        <div className="ds-mb-6 flex justify-center">
          <div className="ds-p-4 ds-bg-primary-300 ds-rounded-full">
            <Icon className="w-8 h-8 ds-text-primary" />
          </div>
        </div>
      )}

      <div className="ds-mb-4">
        {/* استخدام خط الـ Heading من الـ Design System */}
        <Title 
          className="ds-font-heading ds-font-bold ds-text-xl ds-text-primary" 
          center={true}
        >
          {t(title)}
        </Title>
      </div>

      {/* استخدام لون النص الثانوي المريح للعين */}
      <Text 
        variant="muted" 
        className="ds-text-base leading-relaxed" 
        center={true}
      >
        {t(text)}
      </Text>
    </div>
  );
}