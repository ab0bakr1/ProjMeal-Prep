import { useTranslations } from 'next-intl';
import React from 'react'

interface ReviewProps {
    name: string;
    rating: number;
    comment: string;
}

export default function Review({ name, rating, comment }: ReviewProps) {
    const t = useTranslations();
  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
        <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div>
                <h2 className="font-bold">{t(name)}</h2>
                <p className="text-yellow-500">{'⭐'.repeat(rating)}</p>
            </div>
        </div>
        <p className="text-gray-600">
            {t(comment)}
        </p>
    </div>
  )
}
