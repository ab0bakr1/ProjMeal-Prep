"use client";
import { dataBoxes } from "@/utils/data";
import PublicLayout from "@/components/layout/PublicLayout";
import Boxes from "@/components/molecules/Boxes";
export default function Page() {
  return (
    <div>
      <PublicLayout>page</PublicLayout>
      <div className="ds-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dataBoxes.map((box) => (
          <Boxes key={box.id} title={box.title} text={box.text} />
        ))}
      </div>
    
    </div>
  );
}
