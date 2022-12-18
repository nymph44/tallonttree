import React from 'react'
import Header from '../../components/ui/Header'

import { user } from '../../data/config'
import RowSkillCards from '../../components/ui/cards/skills/RowSkillCards'
function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" user={user.name}/>
      <RowSkillCards />

    </div>
  )
}

export default Dashboard