import React from 'react'
import WrapSkillCards from '../../components/ui/cards/skills/WrapSkillCards'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
function index() {
  return (
    <>
      <div className="pt-4">
        <h1 className="font-bold text-4xl mb-4">Skills</h1>
      </div>
      <WrapSkillCards />
    </>
  )
}

export default index
