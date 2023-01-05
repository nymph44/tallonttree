import { getSession } from 'next-auth/react'
import React from 'react'
import Completionist from '../../components/skill/completionist/Completionist'
import Roadmap from '../../components/skill/roadmap/Roadmap'
function index() {
  return (
    <>
      <div className="w-full flex space-between">
        <div className="flex w-1/2  items-center space-x-8">
          <div className="rounded-full items-center flex">
            <img
              className="w-60 rounded-full cover"
              src="https://scontent-ams4-1.xx.fbcdn.net/v/t31.18172-8/16178469_1395479897131830_4879926322376972206_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5AfOLDZWPhQAX8tFUgG&_nc_ht=scontent-ams4-1.xx&oh=00_AfDIwkOSfOp3xlzvkKNiYnSHB6oVzv2MVKzDwGwmOQVkBg&oe=63DE77DC"
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold">
                Portuguese for Beginners: A Complete Course
              </h1>
              <p className="text-sm">
                Learn Portuguese with this complete course for beginners.
              </p>
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
                    Learn the basics of the Portuguese language and start
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
                  <div>How to use the language in real life situations.</div>
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
                  <div>Verbs and grammar in Portuguese.</div>
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
                    Learn the basics of the Portuguese language and start
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
                  <div>How to use the language in real life situations.</div>
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
                  <div>Verbs and grammar in Portuguese.</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full border border-base-300 bg-base-200 rounded-lg p-4">
            <div>
              <h2 className="text-2xl">Skill roadmap</h2>
              <p>Generated roadmap for this skill</p>
            </div>
            <div className="grid grid-cols-3 gap-y-4 p-4">
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-info"></span>
                </div>
                <div>Subject pronouns</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-error"></span>
                </div>
                <div>Basic greetings</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-warning"></span>
                </div>
                <div>Asking questions</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-primary"></span>
                </div>
                <div>Sentence structure</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-error"></span>
                </div>
                <div>Top 20 verbs</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <div className="indicator">
                  <span className="indicator-item badge badge-error"></span>
                </div>
                <div>basic conjunctions</div>
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
      },
    }
  }

  return {
    props: { session },
  }
}
