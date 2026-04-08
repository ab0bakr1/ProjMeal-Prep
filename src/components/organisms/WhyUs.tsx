import React from 'react'
import Title from '../atoms/Title'
import { dataBox } from '@/utils/data'
import { useTranslations } from 'next-intl'

export default function WhyUs() {
    const t = useTranslations()
  return (
    <section className='ds-container py-10'>
        <div className='grid md:grid-cols-3 grid-cols-1 justify-between mt-10 gap-5'>
            {dataBox.map((box) => (
                <div key={box.id} className='text-center p-5 rounded-lg ds-bg-card ds-shadow-md'>
                    <box.icon className='m-auto' />
                    <Title className='mt-5'>{t(box.title)}</Title>
                    <p>{t(box.text)}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
