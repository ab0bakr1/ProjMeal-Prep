import React from 'react'
import Title from '../atoms/Title'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'

export default function Contact() {
    const t = useTranslations()

    return (
        <section className="ds-container ds-py-8">
            {/* عنوان القسم باستخدام نظام الخطوط */}
            <Title size="xl" className="ds-mb-10 ds-font-heading ds-font-bold">
                {t('HomePage.Contact.title')}
            </Title>

            <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
                
                {/* معلومات التواصل - كرت المعلومات */}
                <div className="flex-1 ds-bg-card ds-p-8 ds-rounded-2xl ds-shadow-md border ds-border-muted">
                    <Title className="ds-font-bold ds-mb-6 ds-text-primary" variant="primary">
                        MishMeal
                    </Title>
                    <div className="ds-space-y-4 ds-text-text-secondary">
                        <p className="flex items-center gap-2">
                            <span className="ds-font-bold text-primary"></span> hello@mishmeal.com
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="ds-font-bold text-primary"></span> +966 50 123 4567
                        </p>
                        <p className="ds-pt-2">{t('HomePage.Contact.map')}</p>
                        <p>{t('HomePage.Contact.work')}</p>
                    </div>
                </div>

                {/* نموذج التواصل (Form) */}
                <form className="flex-1 ds-bg-card ds-p-8 ds-rounded-2xl ds-shadow-md border ds-border-muted ds-space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="ds-text-sm ds-font-bold ds-text-text-primary" htmlFor="name">
                            {t('HomePage.Contact.name')}
                        </label>
                        <input 
                            className="w-full ds-bg-section border ds-border-muted ds-rounded-xl py-3 px-4 outline-none transition-all ds-focus-ring" 
                            type="text" 
                            id="name" 
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="ds-text-sm ds-font-bold ds-text-text-primary" htmlFor="email">
                            {t('HomePage.Contact.email')}
                        </label>
                        <input 
                            className="w-full ds-bg-section border ds-border-muted ds-rounded-xl py-3 px-4 outline-none transition-all ds-focus-ring" 
                            type="email" 
                            id="email" 
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="ds-text-sm ds-font-bold ds-text-text-primary" htmlFor="message">
                            {t('HomePage.Contact.message')}
                        </label>
                        <textarea 
                            className="w-full ds-bg-section border ds-border-muted ds-rounded-xl py-3 px-4 outline-none transition-all ds-focus-ring resize-none" 
                            id="message" 
                            rows={4}
                        ></textarea>
                    </div>

                    <button 
                        className="w-full ds-bg-primary ds-text-white ds-py-4 ds-rounded-xl ds-font-bold ds-hover:opacity-95 ds-active:scale-95 transition-all ds-shadow-sm" 
                        type="submit"
                    >
                        {t('HomePage.Contact.send')}
                    </button>
                </form>

            </div>
        </section>
    )
}