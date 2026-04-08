import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";

interface props {
  title: string;
  span: string;
  text: string;
}

export default function Heading({ title, span, text }: props) {
  const t = useTranslations();
  return (
    <div className="">

      <div className="flex items-center justify-center  gap-1">
        <Title
          variant="disabled"
          size="xl"
          className=" ds-font-bold"
          center={true}>
          {t(title)}
        </Title> 
        
        <Title variant="disabled" size="xl" className=" ds-font-bold">
          {t(span)}
        </Title>
      </div>

      <Text variant="secondary" size="md" center={true}>
        {t(text)}
      </Text>
    </div>
  );
}