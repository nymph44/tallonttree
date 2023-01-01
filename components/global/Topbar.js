import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'
function Topbar() {
  const themeValues = ['night', 'dracula', 'cupcake', 'bumblebee', 'synthwave']
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <div className=" pb-4  flex  items-center w-full">
      <div className="flex items-center w-full">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg> */}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full bg-neutral focus:bg-neutral-focus text-neutral-content outline-primary focus:outline-primary-focus focus:ring-2 mr-4 w-1/6"
        />
      </div>
      <div className="flex flex-end items-center space-x-4">
        <select className="select   select-ghost w-40" data-choose-theme>
          <option className="text-base-content" option value="tallenttree">
            Tallent Tree
          </option>
          {themeValues.map((value) => (
            <option
              className="text-base-content"
              key={value.toLowerCase}
              value={value.toLowerCase()}
            >
              {value}
            </option>
          ))}
        </select>
        {/* <label className="swap swap-rotate">
          <input type="checkbox" data-choose-theme />

          <svg
            className="swap-on w-8 h-8  rounded-full p-1 fill-base-content "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            value={themeValues[0].toLowerCase()}
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off w-8 h-8 rounded-full p-1 fill-base-content "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            value={themeValues[1]}
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label> */}
        <div>
          <div className="indicator group">
            <span className="indicator-item badge badge-secondary group-hover:bg-opacity-0 group-hover:border-0 group-hover:text-opacity-0  transition-colors duration-300">
              2
            </span>
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
          </div>

          {/* <span className="indicator-item badge badge-secondary"></span> */}
        </div>
        <div>
          <div className="indicator group">
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
      </div>
    </div>
  )
}

export default Topbar
