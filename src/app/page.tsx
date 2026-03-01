import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { ThemeToggle } from "@/components/atoms/ThemeButton";
import { useTranslations } from "next-intl";
import Box from "@/components/molecules/Box";
import { dataBox } from "@/utils/data";
import Images from "@/components/atoms/Images";
import { hero, about } from "@/assets/images/images";
import { Users, Sun } from "@/assets/icons/icons";
import Icon from "@/components/atoms/Icon";
export default function page() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Text variant="primary" size="md">
        this is text
      </Text>

      <Title variant="black" size="sm">
        this is heading
      </Title>
      <Title variant="gray" size="md">
        this is heading
      </Title>
      <Title variant="primary" size="lg">
        this is heading
      </Title>
      <Title
        size="xl"
        className="                                       text-amber-300"
      >
        this is heading
      </Title>
      <ThemeToggle />
      <Text variant="primary" size="md">
        {t("title")}
      </Text>
      <div className="grid grid-col-1 md:grid-cols-2 container lg:grid-cols-3 gap-8">
        {dataBox.map((box) => (
          <Box key={box.id} title={box.title} text={box.text} />
        ))}
      </div>
      <Images src={hero} alt="heroSection" width={400} height={400} />
      <Images src={about} alt="aboutSection" width={200} height={200} />
      <Icon IconComponent={Users} size={40} color="black" />
      <Icon IconComponent={Sun} size={60} color="disabled" />
    </div>
  );
}
