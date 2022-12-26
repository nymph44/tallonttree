import Link from 'next/link'
import React from 'react'
function index() {
  return (
    <div className="flex flex-col items-center h-full -mt-10">
      <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            How long do you think it will take you to master this skill?
          </h2>
          <p className="text-xl">Select in months</p>
        </div>
        <div className="w-full">
          <input
            type="range"
            min="0"
            max="100"
            className="range range-primary"
            step="25"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span className="text-lg font-bold">{'< 1'}</span>
            <span className="text-lg font-bold">1</span>
            <span className="text-lg font-bold">2</span>
            <span className="text-lg font-bold">3</span>
            <span className="text-lg font-bold">{'3 >'}</span>
          </div>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <Link href="/Addskill-2">
          <button className="btn btn-primary">Back</button>
        </Link>
        <Link href="/Addskill-4">
          <button className="btn btn-primary">Next</button>
        </Link>
      </div>
    </div>
  )
}

export default index
