import React from 'react'

const ProgressKDA = () => {
  return (
    <div className="bottom-0 mb-4 w-full flex justify-between">
      <div className="">
        <button className="btn">Back</button>
      </div>
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
