import React from 'react'
import Review from '../molecules/Review'
import Button from '../atoms/Button'

export default function Reviews() {
  return (
    <section>
        <div className="ds-container">
            <div className="flex justify-between items-center">
                <h1>Reviews</h1>
                <div className="flex space-x-2">
                    <Button variant="secondary" size="md">
                        next
                    </Button>
                    <Button variant="secondary" size="md">
                        prev
                    </Button>
                </div>
            </div>
            <hr />
            <div className="mt-8">
                {[1, 2, 3].map((_, index) => (
                    <Review key={index} />
                ))}
            </div>
        </div>
    </section>
  )
}
