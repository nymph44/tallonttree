import React from 'react'

const ProgressKDA = () => {
  return (
    <div className="bottom-0 mb-4 w-full flex justify-between ">
      <div className="">
        <button className="btn">Back</button>
      </div>
      {/* <div className="flex  space-x-16">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <p className="text-xs ">Self Directed Learning</p>
          <div className="badge bg-primary border-none badge-xs"></div>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <p className="text-xs ">Initiative</p>
          <div className="badge bg-base-300 border-none badge-xs"></div>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <p className="text-xs ">Motivation</p>
          <div className="badge bg-base-300 border-none badge-xs"></div>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <p className="text-xs ">P2P</p>
          <div className="badge bg-base-300 border-none badge-xs"></div>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <p className="text-xs ">Hub Participation</p>
          <div className="badge bg-base-300 border-none badge-xs"></div>
        </div>
      </div> */}
      <ul className="steps">
        <li className="step step-primary">Self Directed Learning</li>
        <li className="step">Initiative</li>
        <li className="step">Motivation</li>
        <li className="step">P2P</li>
        <li className="step">Hub Participation</li>
      </ul>
      <div className="">
        <button className="btn">Next</button>
      </div>
    </div>
  )
}

export default ProgressKDA
