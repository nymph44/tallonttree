import Link from 'next/link'
import React from 'react'
import WrapSkillCards from '../../components/ui/cards/skills/WrapSkillCards'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
function index() {
  return (
    <>
      <div className="py-4">
        <h1 className="font-bold text-4xl mb-4">Skills</h1>
        <p>Manage your skills and preferences here</p>
      </div>
      <div className="">
        <div className="py-4">
          <h3 className="font-semibold text-xl">Waiting for approval</h3>
          <div className="py-4 flex flex-wrap gap-4">
            <div className="w-1/4 bg-base-200 border border-base-300 rounded-xl p-4">
              <h1 className="font-bold mb-4">Test</h1>
              <div className="w-full bg-accent rounded-full h-2.5 mb-4">
                <div className={`bg-gray-300 h-2.5 rounded-full `}></div>
              </div>
              <div className="w-full flex justify-end">
                <button className="btn btn-sm btn-outline  btn-disabled">
                  Waiting for approval
                </button>
              </div>
            </div>
            <div className="w-32 border bg-base-200 border-base-300 rounded-xl flex flex-col mt-4 pt-4 bottom-0 p-4">
              <div className="flex justify-center ">
                <svg
                  className="w-12 h-12 text-primary"
                  xmlns="http://www.w3.org/2000svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m120a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Link href={{ pathname: '/Addskill' }}>
                <div className="w-full flex justify-center">
                  <button className="btn btn-sm btn-outline btn-primary">
                    Add skill
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <WrapSkillCards />
      </div>
    </>
  )
}

export default index
