import React from 'react'

function index({ awnser, dump, votes }) {
  return (
    <div>
      <div className="bg-base-300 rounded-xl">
        <div>
          <div className="flex space-x-4">
            {/* Votes */}
            <div className="flex bg-base-300 rounded-xl py-4 ">
              <div className="w-1/12 flex flex-col space-y-4">
                <div className="flex justify-center items-center cursor-pointer">
                  <button className="btn btn-circle">
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
                  </button>
                </div>
                <div className="text-xl font-bold flex justify-center items-center">
                  {votes}
                </div>
                <div className="flex justify-center items-center cursor-pointer">
                  <button className="btn btn-circle">
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
                  </button>
                </div>
              </div>
              <div className="w-11/12 rounded-xl">
                <div className="mx-2 pr-4">
                  <p>{awnser}</p>
                  {/* <div className="bg-base-200 p-4 rounded-lg my-4">
                    <p>{dump}</p>
                  </div> */}
                </div>
                <div className="divider mt-12 pr-8"></div>
                <div className="flex space-x-4">
                  <div className="flex space-x-2 items-center">
                    <img
                      className="rounded-full w-8 h-8 object-cover"
                      src="https://grandvision-images.imgix.net/media/61DFCDC7-BCC8-4E8A-ACCB81165ADF1B09/7393F0EC-FD2A-402A-961FBC7BB1503EA5/8135DEDF-F9B4-45EA-85C0A6DADB24C31B/original_png-8056597242370_ditto_model_male_06_hd-112.png"
                    />
                    <p className="font-bold">Peter de Graaf</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <p className="hover:underline hover:text-primary cursor-pointer">
                      Reply
                    </p>
                    <p className="hover:underline hover:text-primary cursor-pointer">
                      Share
                    </p>
                    <p className="hover:underline hover:text-primary cursor-pointer">
                      Report
                    </p>
                    <p className="hover:underline hover:text-primary cursor-pointer">
                      Pin
                    </p>
                    <p className="hover:underline hover:text-primary cursor-pointer">
                      Follow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
