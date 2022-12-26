import React from 'react'
import { skills } from '../../../../data/config'
function RowSkillCards() {
  return (
    <div className="py-4">
      <h1 className="text-lg font-bold uppercase">Skills</h1>
      <div className="py-4 flex flex-grow space-x-4">
        {skills.title.map((skill, index) => (
          <div className="w-60 bg-base-100 border border-base-300 rounded-xl p-4">
            <h1 className="font-bold mb-4">{skills.title[index]}</h1>
            <div className="w-full bg-accent rounded-full h-2.5 mb-4">
              <div
                className={`bg-primary h-2.5 rounded-full  ${skills.percentage[index]}`}
              ></div>
            </div>
            <div className=" w-full flex justify-end">
              <button className="btn btn-sm btn-outline btn-primary">
                GO TO SKILL
              </button>
            </div>
          </div>
        ))}

        <div className="w-32 border bg-base-100 border-base-300 rounded-xl flex flex-col mt-4 pt-4 bottom-0 p-4">
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

          <a href="/Addskill">
            <div className="w-full flex justify-center">
              <button className="btn btn-sm btn-outline btn-primary">
                Add skill
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RowSkillCards
