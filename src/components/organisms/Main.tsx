import React from 'react'
import Heading from '../molecules/Heading'
import Images from '../atoms/Images'
import Text from '../atoms/Text'
import Slogan from '../molecules/Slogan'
import mainIMG from '../../../public/assets/images/mainIMG.jpg'
import { useTranslations } from 'next-intl'

export default function Main() {
  const t = useTranslations();

  return (
    <section className='ds-py-12 ds-bg-section'>
      <div className="ds-container">
        {/* العنوان الرئيسي للقسم */}
        <div className="mb-12">
          <Heading title="HomePage.Main.title" span="" text="HomePage.Main.sub" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12">
          {/* حاوية الصورة مع ظل ناعم وحواف مستديرة كبيرة */}
          <div className="w-full lg:w-1/2 ds-animate-fade-in">
            <Images 
              className='w-full h-full object-cover ds-rounded-2xl ds-shadow-lg' 
              src={mainIMG} 
              alt="Healthy Meal" 
              lazyLoad 
            />
          </div>

          {/* محتوى النص */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className="ds-p-6 ds-bg-card ds-rounded-xl ds-shadow-sm ds-border-muted border">
              <Text variant="secondary" className="ds-text-lg ds-font-medium leading-relaxed">
                {t("HomePage.Main.text")}
              </Text>
            </div>
            
            {/* الشعار أو الـ Slogan مع لمسة ألوان البراند */}
            <div className="w-full ds-py-4 ds-border-primary border-t-2 border-b-2">
              <Slogan slogentext="HomePage.Main.Slogan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}