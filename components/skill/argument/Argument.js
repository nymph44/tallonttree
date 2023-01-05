import React from 'react'

function Argument() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-8 ">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="font-bold text-4xl text-primary">
          Why did you give yourself that rating?
        </h2>
        <p className="text-xl">Give 2 arguments</p>
      </div>
      <div className="w-full flex space-x-4 px-60 pb-12">
        <textarea
          className="textarea textarea-bordered w-full h-48"
          placeholder="Firstly,"
        ></textarea>
        <textarea
          className="textarea textarea-bordered w-full h-48"
          placeholder="Secondly, "
        ></textarea>
      </div>
    </div>
  )
}

export default Argument
