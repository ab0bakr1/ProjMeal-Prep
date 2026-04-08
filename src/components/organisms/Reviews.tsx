import React from 'react'
import Review from '../molecules/Review'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import Title from '../atoms/Title';
import { dataReviews } from '@/utils/data';

export default function Reviews() {
    const t = useTranslations();
  return (
    <section>
        <div className="ds-container">
            <div className="flex justify-between items-center">
                <Title>
                    {t('HomePage.Reviews.title')}
                </Title>
                <div className="flex space-x-2">
                    <Button variant="secondary" size="md">
                        {t('HomePage.Reviews.controllar.next')}
                    </Button>
                    <Button variant="secondary" size="md">
                        {t('HomePage.Reviews.controllar.prev')}
                    </Button>
                </div>
            </div>
            <hr />
            <div className="mt-8">
                {dataReviews.map((review, index) => (
                    <Review key={index} name={review.name} rating={review.rating} comment={review.comment} />
                ))}
            </div>
        </div>
    </section>
  )
}
