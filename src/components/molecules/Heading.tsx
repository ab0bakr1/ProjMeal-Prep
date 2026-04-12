import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";

interface props {
  title: string;
  span: string;
  text: string;
  colorTitle: string;
  colorText: string;
}

export default function Heading({ title, span, text, colorTitle , colorText }: props) {
  const t = useTranslations();
  return (
    <div className="px-4"> {/* أضفت padding بسيط للجوانب في الجوال */}

      <div className="flex items-center justify-center gap-1 flex-wrap"> {/* flex-wrap يساعد لو كان النص طويلاً جداً */}
        <Title
          variant={colorTitle}
          // هنا التغيير: الحجم الافتراضي sm وللشاشات المتوسطة وما فوق xl
          size="lg"
          className="ds-font-bold" 
          center={true}>
          {t(title)}
        </Title> 
        
        <Title 
          variant="span" 
          size="lg" 
          className="ds-font-bold"
        >
          {t(span)}
        </Title>
      </div>

      <Text 
        variant={colorText} 
        size="md" // حجم صغير للجوال
        className="" // حجم أكبر للشاشات الكبيرة
        center={true}
      >
        {t(text)}
      </Text>
    </div>
  );
}