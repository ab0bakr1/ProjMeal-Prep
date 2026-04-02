"use client";
import Text from "@/components/atoms/Text";
import PublicLayout from "@/components/layout/PublicLayout";
import Boxes from "@/components/molecules/Boxes";
import Heading from "@/components/molecules/Heading";
import Hero from "@/components/organisms/Hero";
import { dataBoxes } from "@/utils/data";

export default function Page() {
  return (
    <div>
      <PublicLayout>
        <Hero />
      </PublicLayout> 
    </div>
  );
}
