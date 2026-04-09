import React from 'react'
import Videos from '../atoms/Videos' 
import Heading from '../molecules/Heading'
import CTA from '../molecules/CTA'
import { cn } from "@/lib/cn"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden ds-bg-primary-900">
      {/* الفيديو كخلفية */}
      <div className="absolute inset-0 w-full h-full">
        <Videos
          src="/assets/images/HeroV.mp4"
          width="100%"
          height="100%"
          className="w-full h-full object-cover opacity-60" // تقليل الشفافية قليلاً لدمجه مع لون الخلفية
          controls={false}
          autoPlay
          muted
          loop
          priority
          loading="eager"
        />
      </div>
      
      {/* Overlay محسّن باستخدام ألوان الهوية */}
      {/* التدرج من الأخضر الداكن (البراند) إلى الشفاف ليعطي عمقاً للنص */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/40 z-10" />
      
      {/* المحتوى - باستخدام الـ Design System */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center ds-container">
        <div className="max-w-4xl mx-auto text-center ds-animate-slide-up">
          
          {/* تعديل مسافات الـ Heading */}
          <div className="mb-8">
            <Heading 
              title="HomePage.Hero.title" 
              span="HomePage.Hero.span" 
              text="HomePage.Hero.text"
              colorTitle="secondary" // تمرير لون البراند لاستخدامه في العنوان
              colorText="disabled" // تمرير لون ثانوي للنص
              // تأكد أن مكون Heading يستخدم ds-text-6xl للعناوين الكبيرة
            />
          </div>

          {/* قسم الأزرار */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTA CTA="HomePage.Hero.CTA" />
          </div>
          
        </div>
      </div>

      {/* عنصر جمالي: سهم لأسفل يشير للتمرير */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 ds-border-muted ds-rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 ds-bg-primary-200 ds-rounded-full" />
        </div>
      </div>
    </section>
  );
}