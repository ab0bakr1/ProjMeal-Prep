import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useTranslations } from "next-intl";


export default function Box() {
  const t = useTranslations();
  return (
    <div className="ds-bg p-7 ds-shadow-md ds-rounded-md w-75">
      <Title variant="primary" size="md" center={true}>
        Create Your Survey
      </Title>
      <Text variant="disabled" size="md" center={true}>
        Choose a template or start from scratch using our easy-to-use builder
      </Text>
    </div>
  );
}
