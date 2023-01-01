import Link from 'next/link'
import React from 'react'
import { skillsAll } from '../../../../data/config'
function WrapSkillCards() {
  return (
    <div className="py-4 flex flex-wrap gap-4">
      {skillsAll.title.map((skill, index) => (
        <div className="w-1/5 bg-base-200 border border-base-300 rounded-xl p-4">
          <h1 className="font-bold mb-4">{skillsAll.title[index]}</h1>
          <div className="w-full bg-accent rounded-full h-2.5 mb-4">
            <div
              className={`bg-primary h-2.5 rounded-full  ${skillsAll.percentage[index]}`}
            ></div>
          </div>
          <div className="w-full flex justify-end">
            <Link
              href={{ pathname: '/Skill', query: { id: index } }}
              className="text-accent w-full "
            >
              <button className="btn btn-sm btn-outline btn-primary">
                GO TO SKILL
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WrapSkillCards
