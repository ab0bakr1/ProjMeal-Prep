"use client";
import Text from "@/components/atoms/Text";
import PublicLayout from "@/components/layout/PublicLayout";
import Boxes from "@/components/molecules/Boxes";
import Heading from "@/components/molecules/Heading";
import { dataBoxes } from "@/utils/data";

export default function Page() {
  return (
    <div>
      <PublicLayout>
        <Heading />
        <div className="ds-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {dataBoxes.map((box) => (
            <Boxes key={box.id} title={box.title} text={box.text} />
          ))}
        </div>
      </PublicLayout>
    </div>
  );
}
