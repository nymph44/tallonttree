import React from 'react'
function index() {
  return (
    <div className="flex flex-col items-center h-full -mt-10">
      <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            What would you like to learn next?
          </h2>
        </div>
        <div className="w-full flex space-x-4 px-60">
          <textarea
            className="textarea textarea-bordered w-full h-60"
            placeholder="Firstly,"
          ></textarea>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <div className="">{/* <button className="btn">Back</button> */}</div>
        <a href="/Addskill-2">
          <button className="btn btn-primary">Next</button>
        </a>
      </div>
    </div>
  )
}

export default index
