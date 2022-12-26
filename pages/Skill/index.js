import React from 'react'

function index() {
  return (
    <div>
      <div className="pt-4 flex">
        <h1 className="font-bold text-4xl">Skills</h1>
        <p className="text-4xl">&nbsp;/&nbsp;</p>
        <h1 className=" text-2xl">Dutch</h1>
      </div>
      <div className="bg-base-100 flex flex-col items-center rounded-xl p-4 my-4 w-1/6">
        <div>
          <p>Due date</p>
        </div>
        <div>
          <p className="font-bold">Friday, november 11, 2022</p>
        </div>
        <div>
          <p>11:59&nbsp; PM</p>
        </div>
      </div>
      {/* description */}
      <div>
        <p class="text-xs w-3/4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.”
        </p>
      </div>
      <div className="bg-base-100 my-8 rounded-xl py-4 px-4">
        <h1 class="text-2xl">Subgoal KDA reflection</h1>
        <div className="flex py-4 w-full">
          <div className="w-1/6">
            <div className="bg-base-100 rounded-xl p-4 flex space-y-4 flex-col">
              <h2>Reflect</h2>
              <div className="bg-primary h-2.5 rounded-full"></div>
              <a href="/Kdarate">
                <button className="btn btn-primary">
                  Continue reflect on subgoal
                </button>
              </a>
            </div>
          </div>
          <div className="w-5/6 flex">
            <div className="w-1/6 flex flex-col justify-center items-center">
              <button className="btn btn-lg btn-circle btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="mt-4">Self-directed Learning</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <button className="btn btn-lg btn-circle btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="mt-4">Initiative</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <button className="btn btn-lg btn-circle btn-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="mt-4 font-bold">Motivation</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <button className="btn btn-lg btn-circle btn-disabled">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="mt-4">P2P</p>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center">
              <button className="btn btn-lg btn-circle btn-disabled">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="mt-4">Hub Participation</p>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-2xl">Hand-in subgoal materials</h1>
      <p className="text-xs">
        Hand in any kind of materials to show your subgoal progress, if
        necessary.
      </p>
      <div class="max-w-xl my-8">
        <label class="flex justify-center w-full h-32 px-4 transition bg-base-300 border-2 border-base-100 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary focus:outline-none">
          <span class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span class="font-medium text-gray-600">
              Drop files to Attach, or&nbsp;
              <span class="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" class="hidden" />
        </label>
      </div>
    </div>
  )
}

export default index
