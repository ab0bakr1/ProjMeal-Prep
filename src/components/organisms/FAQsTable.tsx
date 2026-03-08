import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Rectangle from "../molecules/Rectangle";
import { FAQs } from "@/utils/data";
import { useTranslations } from "next-intl";

export default function FAQsTable() {
      const t = useTranslations();
    
  return (
    <div className="ds-bg ds-rounded-md">
        <Title variant="primary" size="lg" className="p-0">
            {t("FAQs.title")}
        </Title>
        <Text variant="primary" size="md">
            {t("FAQs.text")}
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {FAQs.map((item) => (
                <Rectangle key={item.id} text={item.key} />
            ))}
        </div>
    </div>
    );
}
