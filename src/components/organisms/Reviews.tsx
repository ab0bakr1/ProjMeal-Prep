import React from 'react'
import Review from '../molecules/Review'
import Button from '../atoms/Button'
import { useTranslations } from 'next-intl'
import Title from '../atoms/Title';
import { dataReviews } from '@/utils/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
    const t = useTranslations();
  return (
    <section className="ds-py-16">
        <div className="ds-container">
            {/* رأس القسم مع الأزرار */}
            <div className="flex justify-between items-end mb-8 border-b pb-6">
                <div>
                    <Title className="ds-text-3xl ds-font-heading ds-font-bold m-0">
                        {t('HomePage.Reviews.title')}
                    </Title>
                </div>
                
                {/* أزرار التحكم - جاهزة لربطها بـ Swiper لاحقاً */}
                <div className="flex gap-3">
                    <Button variant="secondary" className="ds-rounded-full w-10 h-10 p-0 flex items-center justify-center">
                        <ChevronRight size={20} />
                    </Button>
                    <Button variant="secondary" className="ds-rounded-full w-10 h-10 p-0 flex items-center justify-center">
                        <ChevronLeft size={20} />
                    </Button>
                </div>
            </div>

            {/* عرض الآراء - شبكة مرنة */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataReviews.map((review, index) => (
                    <div key={index} className="ds-animate-fade-in">
                        <Review 
                            name={review.name} 
                            rating={review.rating} 
                            comment={review.comment} 
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}