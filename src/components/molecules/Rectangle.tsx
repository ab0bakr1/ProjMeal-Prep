import Text from "../atoms/Text";
import { useTranslations } from "next-intl";
import Icon from "../atoms/Icon";
import { ChevronRight } from "../../../public/assets/icons/icons";

interface Props {
  text: string;
}
export default function Rectangle({ text }: Props) {
  const t = useTranslations();
  return (
    <div className="ds-bg-primary-200 ds-rounded-sm ds-p-sm flex items-center gap-4 w-full hover:ds-bg-primary cursor-pointer">
        <Icon IconComponent={ChevronRight } size={20} color="disabled" className="rounded-full ds-bg-primary text-white flex items-center justify-center text-md shadow-xl" />
        <Text size="md" center={true} className="p-0">
            {t(text)}
        </Text>
    </div>
  );
}
