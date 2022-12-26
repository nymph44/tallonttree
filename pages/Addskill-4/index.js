import Link from 'next/link'
import React from 'react'

function Argument() {
  return (
    <div className="flex flex-col items-center h-full -mt-10">
      <div className="w-full h-fullflex flex-col justify-center items-center my-auto relative space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            Describe 3-5 subgoals that you think can be accomplished
          </h2>
        </div>
        <div className="w-full flex space-x-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Please write desired subskill</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I would like to learn ..."
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Please write desired subskill</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I would like to learn ..."
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Please write desired subskill</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I would like to learn ..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <Link href="/Addskill-3">
          <button className="btn btn-primary">Back</button>
        </Link>
        <Link href="/Addskill-overview">
          <button className="btn btn-primary">Next</button>
        </Link>
      </div>
    </div>
  )
}

export default Argument
