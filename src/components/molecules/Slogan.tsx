import React from 'react'
import Title from '../atoms/Title'
import { useTranslations } from 'next-intl';

interface SloganProps {
  slogentext: string;
}

export default function Slogan({ slogentext }: SloganProps) {
  const t = useTranslations();
  
  return (
    <div className="flex items-center justify-center">
      {/* استخدام لون Primary وخط Heading (Tajawal) كما في ملفاتك */}
      <Title 
        variant="black" 
        className="ds-font-heading ds-font-bold ds-text-2xl md:ds-text-3xl ds-text-primary italic"
        center={true}
      >
        " {t(slogentext)} "
      </Title>
    </div>
  )
}