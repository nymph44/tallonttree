import React from 'react'

function Rate() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="font-bold text-4xl text-primary">
          How well did you do in the key development area Self-directed
          learning?
        </h2>
        <p className="text-xl">Rate from 1 to 5</p>
      </div>
      <div className="rating space-x-8 pt-24">
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-primary w-32 h-32"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-primary w-32 h-32"
          checked
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-primary w-32 h-32"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-primary w-32 h-32"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-primary w-32 h-32"
        />
      </div>
    </div>
  )
}

export default Rate
