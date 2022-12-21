import React from 'react'
import Leaderboard from '../../components/community/leaderboard/Leaderboard'
import Block from '../../components/community/ui/cards/Block'
import ListItem from '../../components/community/ui/discussion/ListItem'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
function index() {
  return (
    <div>
      <Header title="Community" user={user.name} />
      <div className="flex space-x-4 overflow-auto overflow-invisble no-scrollbar">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      <div className="flex space-x-8 w-full">
        <div className="w-full">
          <div className="my-8">
            <h1 className="text-2xl font-bold">Discussions & Articles</h1>
            <button className="btn glass btn-sm">
              View all 556 discussions
            </button>
          </div>
          <div className="bg-base-200 p-4 rounded-lg">
            <div className="flex">
              <div className="flex flex-col w-full">
                <ListItem />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Leaderboard />
        </div>
      </div>
    </div>
  )
}

export default index
