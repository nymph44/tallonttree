import React from 'react'

function Categories() {
  return (
    <div className="w-full bg-base-300 rounded-lg p-4">
      <p className="text-lg font-bold text-base-content">Categories</p>
      <div className="flex flex-wrap gap-4 my-2 justify-between">
        <div className="flex flex-wrap gap-4 my-2">
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">
            Programming
          </button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
          <button className="btn btn-sm btn-outline btn-base">math</button>
        </div>
        <div className="flex  justify-between  space-x-4 py-2">
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <label
              data-tip="Filter on course length"
              className="tooltip text-base-content font-bold mb-2 md:mb-0 md:mr-4 mt-1"
            >
              Time:
            </label>
            <div className="relative rounded-md shadow-sm">
              <select className="bg-base-100 form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option>Any</option>
                <option>Last 24 hours</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <label
              data-tip="Select a prefered category"
              className="tooltip text-base-content font-bold mb-2 md:mb-0 md:mr-4 mt-1"
            >
              Category:
            </label>
            <div className="relative rounded-md shadow-sm">
              <select className="bg-base-100 form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option>Any</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <label
              data-tip="Select course difficulty"
              className="tooltip text-base-content font-bold mb-2 md:mb-0 md:mr-4 mt-1"
            >
              Level:
            </label>
            <div className="relative rounded-md shadow-sm">
              <select className="bg-base-100 form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option>Any</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
