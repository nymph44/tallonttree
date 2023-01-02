import React from 'react'
import Completionist from '../../components/skill/completionist/Completionist'
import Roadmap from '../../components/skill/roadmap/Roadmap'
function index() {
  return (
    <>
      <div className="w-full flex space-between">
        <div className="flex w-1/2 items-center space-x-8">
          <img
            className="w-48 h-48 rounded-full cover"
            src="https://picsum.photos/200/300"
            alt=""
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold">
                JavaScript for beginners and experts
              </h1>
              <p className="text-sm">Learn to program in modern JavaScript</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="badge badge-primary">Recommended</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <p>447 Students</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex justify-end items-end  mt-auto pr-6">
          <button className="btn btn-primary btn-lg">Add course</button>
        </div>
      </div>
      <div className="flex space-x-8 py-8">
        <div className="flex flex-col w-3/4 space-y-8">
          <div className="w-full border border-base-300 bg-base-200 rounded-lg p-4">
            <h2 className="text-2xl pb-4">What you'll learn</h2>
            <div className="flex space-x-20">
              <ul className="flex flex-col space-y-4">
                <li className="flex text-md gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <div>
                    Programming in JavaScript from the basics step by step.
                  </div>
                </li>
                <li className="flex text-md gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <div>
                    Take the step towards a fullstack developer to increase your
                    market value.
                  </div>
                </li>
                <li className="flex text-md gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <div>
                    The advanced JavaScript topics such as proxies, generators,
                    promises and async / await.
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col space-y-4">
                <li className="flex text-md gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <div>
                    Programming in JavaScript from the basics step by step.
                  </div>
                </li>
                <li className="flex text-md gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <div>
                    Take the step towards a fullstack developer to increase your
                    market value.
                  </div>
                </li>
                <li className="flex text-md gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <div>
                    The advanced JavaScript topics such as proxies, generators,
                    promises and async / await.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full border border-base-300 bg-base-200 rounded-lg p-4">
            <div>
              <h2 className="text-2xl">Skill roadmap</h2>
              <p>Generated roadmap for this skill</p>
            </div>
            <div className="flex flex-wrap gap-x-16 gap-y-4 py-4 px-4">
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-primary"></span>
                </div>
                <div>Subgoal 1</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-error"></span>
                </div>
                <div>Subgoal 1</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-warning"></span>
                </div>
                <div>Subgoal 1</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-info"></span>
                </div>
                <div>Subgoal 1</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary"></span>
                </div>
                <div>Subgoal 1</div>
              </div>
            </div>
            <div>
              <Roadmap />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/4 p-4 px-8 bg-base-200 h-3/4">
          <Completionist />
          <div className="py-4 flex flex-col items-center space-y-4">
            <h2 className="text-2xl">Badge{'(s)'}</h2>
            <div className=" tooltip" data-tip="Insane level of knowledge">
              <img
                className="w-12"
                src="https://cdn.pixabay.com/photo/2021/02/02/16/37/success-5974538_960_720.png"
                alt="badge"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
