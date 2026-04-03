import React from 'react'
import Heading from '../molecules/Heading'
import Images from '../atoms/Images'
import Text from '../atoms/Text'
import Slogan from '../molecules/Slogan'
import mainIMG from '../../../public/assets/images/mainIMG.jpg'

export default function Main() {
  return (
    <section className='mt-20 ds-bg-section ds-rounded-xl p-10'>
        <div className="ds-container">
            <Heading />
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-10">
                <Images className='w-full ds-rounded-xl' src={mainIMG} alt="hero" />
                <div className="w-full flex flex-col justify-center items-center mt-10 md:mt-0 md:ml-10 gap-10">
                    <Text variant="primary" size="md" center={true}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                    </Text>
                    <Slogan />
                </div>
            </div>
        </div>
    </section>
  )
}
