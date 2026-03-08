import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { useTranslations } from "next-intl";
interface Prop {
  title?: string;
  text?: string;
}
export default function Boxes({
  title = "Create Your Survey",
  text = "Choose a template or start from scratch using our easy-to-use builder",
}: Prop) {
  const t = useTranslations();
  return (
    <div className="ds-bg ds-rounded-md p-5">
      <Title variant="primary">{t(title)}</Title>
      <Text variant="disabled">{t(text)}</Text>

     
    </div>
  );
}
