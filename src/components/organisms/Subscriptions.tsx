import React from 'react'
import Title from '../atoms/Title'
import { dataSubscriptions } from '@/utils/data'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'
import { Check } from 'lucide-react' // أضفنا أيقونة للتحقق من الميزات

export default function Subscriptions() {
  const t = useTranslations();

  return (
    <section className='ds-py-12 ds-bg-section'>
      <div className="ds-container">
        {/* عنوان القسم بتنسيق نظام التصميم */}
        <div className="pb-10 text-center">
          <Title size='xl' className="ds-font-heading ds-font-bold ds-text-primary">
            {t('HomePage.Subscriptions.title')}
          </Title>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 items-stretch'>
          {dataSubscriptions.map((data) => {
            // لنفترض أن الخطة الثانية هي الأكثر تميزاً (Featured)
            const isFeatured = data.id === 2;

            return (
              <div 
                key={data.id} 
                className={cn(
                  'relative flex flex-col p-8 ds-rounded-2xl transition-all duration-300',
                  'ds-bg-card ds-shadow-md ds-border-muted border',
                  isFeatured ? 'ds-shadow-xl md:-mt-4 md:mb-4 ds-border-primary border-2' : 'hover:ds-shadow-lg'
                )}
              >
                {/* شارة "الأكثر طلباً" للخطة المميزة */}
                {isFeatured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 ds-bg-primary ds-text-white px-4 py-1 ds-rounded-full ds-text-sm ds-font-bold">
                    الأكثر طلباً
                  </span>
                )}

                <div className="text-center">
                  <Title className='ds-text-2xl ds-font-bold ds-mb-2' variant="primary">
                    {t(data.title)}
                  </Title>
                  <div className="ds-mb-6">
                    <span className="ds-text-4xl ds-font-bold ds-text-text-primary">{data.price}</span>
                    <span className="ds-text-text-secondary ds-font-medium"> ريال / شهرياً</span>
                  </div>
                </div>

                {/* قائمة المميزات بتنسيق مرتب */}
                <div className="flex-grow ds-space-y-4 ds-mb-8">
                  {data.Features.map((Feat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 ds-bg-primary-300 ds-rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 ds-text-primary" strokeWidth={3} />
                      </div>
                      <Text variant="muted" size="md" className="ds-font-medium">
                        {t(Feat.key)}
                      </Text>
                    </div>
                  ))}
                </div>

                {/* زر الاشتراك */}
                <Button 
                  className={cn(
                    "w-full ds-py-4 ds-rounded-xl ds-font-bold ds-transition-all",
                    isFeatured ? "ds-bg-cta ds-text-white ds-shadow-md" : "ds-bg-primary-300 ds-text-primary hover:ds-bg-primary hover:ds-text-white"
                  )}
                >
                 {t('HomePage.Hero.CTA')}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}