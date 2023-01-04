import Link from 'next/link'
import React from 'react'
import { skillsAll } from '../../../../data/config'
function RowSkillCards() {
  return (
    <div className="py-4">
      <h1 className="text-lg font-bold uppercase">Skills</h1>
      <div className="py-4 flex flex-grow space-x-4">
        {skillsAll.title.map(
          (skill, index) =>
            index < 3 && (
              <div className="w-60 bg-base-200 border border-base-300 rounded-xl p-4">
                <h1 className="font-bold mb-4">{skillsAll.title[index]}</h1>
                <div className="w-full bg-accent rounded-full h-2.5 mb-4">
                  <div
                    className={`bg-primary h-2.5 rounded-full  ${skillsAll.percentage[index]}`}
                  ></div>
                </div>
                <div className=" w-full flex justify-end">
                  <Link
                    href={{
                      pathname: '/Skill/' + skillsAll.id[index],
                    }}
                  >
                    <button className="btn btn-sm btn-outline btn-primary">
                      GO TO SKILL
                    </button>
                  </Link>
                </div>
              </div>
            ),
        )}

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

          <Link
            href={{
              pathname: '/Addskill',
            }}
          >
            <div className="w-full flex justify-center">
              <button className="btn btn-sm btn-outline btn-primary">
                Add skill
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RowSkillCards
