"use client";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { ThemeToggle } from "@/components/atoms/ThemeButton";
import Box from "@/components/molecules/Box";
import { dataBox } from "@/utils/data";
import Images from "@/components/atoms/Images";
import { hero } from "../../public/assets/images/images";
import { Users, Sun } from "../../public/assets/icons/icons";
import Icon from "@/components/atoms/Icon";
import PublicLayout from "@/components/layout/PublicLayout";
import useReveal from "@/animations/Reveal";
import Floating from "@/animations/floating";
import Heading from "@/components/molecules/Heading";
export default function Page() {
  useReveal(".Reveal-Section");
  return (
    <div >
      <PublicLayout>
        <Text variant="primary" size="md">
          this is text
        </Text>

        <Title variant="black" size="sm">
          this is heading
        </Title>

        <ThemeToggle />
        <Heading/>
      <Box/>
        <Floating>
          <Images src={hero} alt="heroSection" width={400} height={400} />
        </Floating>
        <Icon IconComponent={Users} size={40} color="black" />
        <Icon IconComponent={Sun} size={60} color="disabled" />
      </PublicLayout>
    </div>
  );
}
