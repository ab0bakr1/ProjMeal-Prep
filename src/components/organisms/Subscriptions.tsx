import React from 'react'
import Title from '../atoms/Title'
import { dataSubscriptions } from '@/utils/data'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

export default function Subscriptions() {
  return (
    <section className='py-10 ds-bg-section'>
        <div className="ds-container">
            <Title size='xl' center={true}>
                Lorem ipsum dolor sit amet.
            </Title>
            <div className='grid md:grid-cols-3 grid-cols-1 justify-between mt-10 gap-5'>
                {dataSubscriptions.map((data) => (
                    <div key={data.id} className='text-center p-5 rounded-lg ds-bg-card ds-shadow-md flex flex-col justify-between'>
                        <Title className='mt-5'>{data.title}</Title>
                        <div className="">
                            {data.Features.map((Features) => (
                                <Text>{Features.Features1}</Text>
                            ))}
                        </div>
                        <Button>{data.price}$</Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
