import React from 'react'

function Topbar() {
  return (
    <div className=" pb-4  flex  items-center w-full">
      <div className="flex items-center w-full">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg> */}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full bg-base-300 text-base-content outline-primary focus:outline-primary-focus focus:ring-2 w-full mr-4"
        />
      </div>
      <div className="flex flex-end items-center space-x-4 w-20">
        <svg
          className="w-8 h-8 hover:bg-primary rounded-full p-1  transition-colors duration-300 stroke-base-content hover:fill-primary hover:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <svg
          className="w-8 h-8 hover:bg-primary rounded-full p-1  transition-colors duration-300 stroke-base-content hover:fill-primary hover:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Topbar
