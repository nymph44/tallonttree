import React from 'react'
import WrapSkillCards from '../../components/ui/cards/skills/WrapSkillCards'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
function index() {
  return (
    <>
    <Header title={'Skills'} user={user.name}/>
    <WrapSkillCards />
    </>
  )
}

export default index