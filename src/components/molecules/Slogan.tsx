import React from 'react'
import Title from '../atoms/Title'
import { useTranslations } from 'next-intl';

interface SloganProps {
  slogentext: string;
}

export default function Slogan({ slogentext }: SloganProps) {
  const t = useTranslations();
  return (
    <div>
      <Title variant="primary" size="lg" center={true}>
        {t(slogentext)}
      </Title>
    </div>
  )
}
