import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useSession } from 'next-auth/react'
function Topbar() {
  const { data: session, status } = useSession()
  const themeValues = [
    // 'acid',
    // 'autumn',
    // 'aqua',
    // 'black',
    // 'bumblebee',
    // 'business',
    // 'cmyk',
    // 'coffee',
    // 'corporate',
    // 'cupcake',
    // 'cyberpunk',
    // 'dark',
    // 'dracula',
    // 'fantasy',
    'forest',
    // 'garden',
    // 'halloween',
    // 'lemonade',
    // 'lofi',
    // 'luxury',
    // 'night',
    // 'pastel',
    // 'retro',
    // 'synthwave',
    // 'valentine',
    // 'wireframe',
    // 'winter',
  ]
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <div className=" pb-4  flex  items-center justify-between w-full">
      {session ? (
        <>
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full bg-neutral focus:bg-neutral-focus text-neutral-content outline-primary focus:outline-primary-focus focus:ring-2 mr-4 w-1/6"
            />
          </div>
          <div className="flex justify-end items-center space-x-4">
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
        </>
      ) : (
        <> </>
      )}
      <div className=" flex justify-end">
        <select className="select ml-4 select-ghost w-40" data-choose-theme>
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
      </div>
    </div>
  )
}

export default Topbar
