import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";
import { ListMinus } from "../../../public/assets/icons/icons";

interface BoxProps {
  title: string;
  text: string;
}

export default function Box({ title, text }: BoxProps) {
  const t = useTranslations();
  return (
    <div className="ds-bg p-7 ds-shadow-md ds-rounded-md w-75">
      <div className="ds-mb-4">
        <Title variant="black" center={true}>
          {t(title)}
        </Title>
      </div>
      <Text variant="disabled" size="md" center={true}>
        {t(text)}
      </Text>
    </div>
  );
}
