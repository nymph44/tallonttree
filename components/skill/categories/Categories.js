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
        <div className="flex  justify-between  py-2">
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <label className="text-gray-700 font-bold mb-2 md:mb-0 md:mr-4">
              Time:
            </label>
            <div className="relative rounded-md shadow-sm">
              <select className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option>Any</option>
                <option>Last 24 hours</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7l4-4m0 0l4 4m-4-4v10"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <label className="text-gray-700 font-bold mb-2 md:mb-0 md:mr-4">
              Category:
            </label>
            <div className="relative rounded-md shadow-sm">
              <select className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option>Any</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7l4-4m0 0l4 4m-4-4v10"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <label className="text-gray-700 font-bold mb-2 md:mb-0 md:mr-4">
              Level:
            </label>
            <div className="relative rounded-md shadow-sm">
              <select className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option>Any</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7l4-4m0 0l4 4m-4-4v10"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
