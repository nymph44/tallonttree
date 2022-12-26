import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div className="flex space-x-8">
      <div className="w-1/2 bg-base-100 p-4 rounded-xl">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="my-4 flex flex-col space-y-4">
          <p className=" text-sm font-light text-gray-500">My desired skill</p>
          <p className="text-xs">
            I would like to learn "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <div className="divider"></div>
        </div>
        <div>
          <h2 className="text-xl">Time</h2>
          <div className="flex">
            <div className="w-1/2 my-4">
              <p className="text-sm -mb-4">Expected time to learn this skill</p>
              <div className="divider"></div>
            </div>
            <div className="flex justify-center space-x-2 w-1/2 items-center -mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-sm  font-bold text-primary">3 months</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Subgoals</h2>
          <div className="flex flex-wrap basis-2 mt-4">
            <div className="w-1/2 pr-4">
              <p className="text-xs">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="divider"></div>
            </div>
            <div className="w-1/2 pr-4">
              <p className="text-xs">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="divider"></div>
            </div>
            <div className="w-1/2 pr-4">
              <p className="text-xs">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full rounded-xl flex flex-col space-y-8">
        <div className=" h-1/2 bg-base-100 p-4 rounded-xl">
          <h2 className="text-2xl font-bold">Skill roadmap</h2>
          <p className="text-xl">Generated roadmap for your skill</p>
        </div>
        <div className=" flex justify-end">
          <Link href="/Dashboard">
            <button className="btn btn-primary">Accept and save</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index
