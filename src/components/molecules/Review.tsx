import { useTranslations } from 'next-intl';
import React from 'react';
import { Star } from 'lucide-react'; // استخدام أيقونات بدلاً من الإيموجي لشكل أرقى
import { cn } from '@/lib/cn';

interface ReviewProps {
    name: string;
    rating: number;
    comment: string;
}

export default function Review({ name, rating, comment }: ReviewProps) {
    const t = useTranslations();
  return (
    <div className="ds-bg-card ds-p-6 ds-rounded-2xl ds-shadow-sm border ds-border-muted ds-hover hover:ds-shadow-md h-full flex flex-col">
        <div className="flex items-center mb-4 gap-4">
            {/* الصورة الرمزية باستخدام ألوان البراند */}
            <div className="w-12 h-12 ds-bg-primary-300 ds-rounded-full flex items-center justify-center ds-font-bold ds-text-primary">
                {t(name).charAt(0)}
            </div>
            <div>
                <h3 className="ds-font-heading ds-font-bold ds-text-text-primary">{t(name)}</h3>
                {/* عرض النجوم بناءً على التقييم */}
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                            key={i} 
                            size={14} 
                            className={cn(i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300")} 
                        />
                    ))}
                </div>
            </div>
        </div>
        <p className="ds-text-text-secondary leading-relaxed ds-text-md italic flex-grow">
            " {t(comment)} "
        </p>
    </div>
  )
}