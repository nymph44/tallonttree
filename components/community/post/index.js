import React from 'react'

function Slug() {
  return (
    <div>
      <h1 className="text-2xl">Post</h1>
      <div className="my-4 flex space-x-4">
        <p className="text-base-content text-xs">
          <span className="text-base-content opacity-75">Asked:&nbsp;</span>10
          years, 11 months ago
        </p>

        <p className="text-base-content text-xs">
          <span className="text-base-content opacity-75">Modified:&nbsp;</span>2
          months ago
        </p>
        <p className="text-base-content text-xs">
          <span className="text-base-content opacity-75">Viewed:&nbsp;</span>
          12.1k times
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <div className="flex">
          {/* Votes */}
          <div className="w-1/12">
            <div className="flex justify-center items-center cursor-pointer">
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
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <div className="text-xl font-bold flex justify-center items-center">
              25
            </div>
            <div className="flex justify-center items-center cursor-pointer">
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="w-2/3">
            <div className="px-2">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."{' '}
              </p>
              <div className="bg-base-200 p-4 rounded-lg my-4">
                <p>
                  {'<'}
                  <span className="text-accent">ui</span>:
                  <span className="text-accent">include</span>{' '}
                  <span className="text-accent">src</span>=
                  <span className="text-primary">"b.xhtml"</span>
                  {'/>'}
                </p>
              </div>
              <div>
                <p>
                  It means that inside a.xhtml file, I can include b.xhtml.
                  <br></br> How can we do it in *.html file?
                </p>
              </div>
              {/* Badges */}
              <div className=" flex space-x-4 my-4 ">
                <div class="badge badge-accent">Javescript</div>
                <div class="badge badge-accent">DOM</div>
                <div class="badge badge-accent">HTML</div>
                <div class="badge badge-accent">Include</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slug
