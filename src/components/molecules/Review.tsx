import React from 'react'

export default function Review() {
  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
        <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div>
                <h2 className="font-bold">John Doe</h2>
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-300">★</span>
                </div>
            </div>
        </div>
        <p className="text-gray-600">
            This is a great product! I love it.
        </p>
    </div>
  )
}
