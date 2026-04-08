import React from 'react'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'

interface CTAProps {
  CTA: string;
}

export default function CTA({ CTA }: CTAProps) {
  const t = useTranslations();
  return (
    <Button className='bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300'>
      {t(CTA)}
    </Button>
  )
}
