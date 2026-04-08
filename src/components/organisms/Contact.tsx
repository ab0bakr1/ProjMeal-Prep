import React from 'react'
import Title from '../atoms/Title'
import { useTranslations } from 'next-intl'

export default function Contact() {
    const t = useTranslations()
  return (
    <section className="ds-container py-16">
        <h1>{t('HomePage.Contact.title')}</h1>
        <div className="flex justify-between items-center gap-5">
            <div className="flex-1 bg-gray-100 p-4 rounded">
                <Title className="font-bold mb-4">MishMeal</Title>
                <p className="mb-2">Email: hello@mishmeal.com</p>
                <p className="mb-2">Phone: +966 50 123 4567</p>
                <p className="mb-2">{t('HomePage.Contact.map')}</p>
                <p className="mb-2">{t('HomePage.Contact.work')}</p>

            </div>
            <form className="flex-1 bg-gray-100 p-4 rounded space-y-4">
                <div>
                    <label className="block mb-1 font-bold" htmlFor="name">{t('HomePage.Contact.name')}</label>
                    <input className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="email">{t('HomePage.Contact.email')}</label>
                    <input className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="message">{t('HomePage.Contact.message')}</label>
                    <textarea className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows={4}></textarea>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
                    {t('HomePage.Contact.send')}
                </button>
            </form>

        </div>
    </section>
  )
}
