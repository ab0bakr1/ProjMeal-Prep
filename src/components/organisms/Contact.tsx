import React from 'react'

export default function Contact() {
  return (
    <section className="ds-container py-16">
        <h1>Contact</h1>
        <div className="flex justify-between items-center gap-5">
            <div className="flex-1 bg-gray-100 p-4 rounded">
                <h2 className="font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                    We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>
            <form className="flex-1 bg-gray-100 p-4 rounded space-y-4">
                <div>
                    <label className="block mb-1 font-bold" htmlFor="name">Name</label>
                    <input className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="email">Email</label>
                    <input className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="message">Message</label>
                    <textarea className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows={4}></textarea>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
                    Send Message
                </button>
            </form>

        </div>
    </section>
  )
}
