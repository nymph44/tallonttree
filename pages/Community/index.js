import React from 'react'
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
      <div className="my-8">
        <h1 className="text-2xl font-bold">Discussions & Articles</h1>
        <p>View all 556 discussions</p>
      </div>
      <div className="w-1/2 bg-base-200 p-4 rounded-lg">
        <div className="flex">
          <div className="flex flex-col w-full">
            <ListItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
