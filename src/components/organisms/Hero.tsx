import React from 'react'
import Videos from '../atoms/Videos'  // 👈 Video وليس Videos
import Heading from '../molecules/Heading'
import CTA from '../molecules/CTA'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* الفيديو */}
      <Videos
        src="/assets/images/HeroV.mp4"
        width="100%"
        height= "100vh"
        className="absolute inset-0 w-full h-full object-cover"  // 👈 تغطية كامل
        controls={false}
        autoPlay
        muted
        loop
        priority  // 👈 تحميل فوري
        loading="eager"
      />
      
      {/* Overlay أولاً */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />
      
      {/* المحتوى أخيراً */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <Heading  />
          <CTA />
        </div>
      </div>
    </section>
  );
}