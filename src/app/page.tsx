"use client";
import PublicLayout from "@/components/layout/PublicLayout";
import Contact from "@/components/organisms/Contact";
import Hero from "@/components/organisms/Hero";
import Main from "@/components/organisms/Main";
import Reviews from "@/components/organisms/Reviews";
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
        <Reviews />
        <Contact />
      </PublicLayout> 
    </div>
  );
}
