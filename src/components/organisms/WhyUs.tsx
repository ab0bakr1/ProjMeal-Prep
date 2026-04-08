import React from 'react'
import { dataBox } from '@/utils/data'
import Box from '../molecules/Box'

export default function WhyUs() {
  return (
    <section className='ds-container ds-py-12'>
      {/* استخدام CSS Grid مع فجوات مدروسة من النظام الخاص بك */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {dataBox.map((item) => (
          <div key={item.id} className="ds-animate-fade-in">
            <Box 
              title={item.title} 
              text={item.text} 
              Icon={item.icon} 
            />
          </div>
        ))}
      </div>
    </section>
  )
}