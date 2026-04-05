"use client";
import PublicLayout from "@/components/layout/PublicLayout";
import Hero from "@/components/organisms/Hero";
import Main from "@/components/organisms/Main";
import Subscriptions from "@/components/organisms/Subscriptions";
import WhyUs from "@/components/organisms/WhyUs";

export default function Page() {
  return (
    <div>
      <PublicLayout>
        <Hero />
        <Main />
        <WhyUs />
        <Subscriptions />
      </PublicLayout> 
    </div>
  );
}
