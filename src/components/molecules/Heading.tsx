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
    <div className="">

      <div className="flex items-center justify-center  gap-1">
        <Title
          variant={colorTitle}
          size="xl"
          className=" ds-font-bold"
          center={true}>
          {t(title)}
        </Title> 
        
        <Title variant="span" size="xl" className=" ds-font-bold">
          {t(span)}
        </Title>
      </div>

      <Text variant={colorText} size="md" center={true}>
        {t(text)}
      </Text>
    </div>
  );
}