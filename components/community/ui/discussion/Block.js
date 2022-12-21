import React from 'react'
import ListItem from './ListItem'
function Block() {
  return (
    <div className="">
      <div className="my-8">
        <h1 className="text-2xl font-bold">Discussions & Articles</h1>

        <button className="btn glass btn-sm">View all 556 discussions</button>
      </div>
      <div className="bg-base-200 p-4 rounded-lg">
        <div className="flex">
          <div className="flex flex-col w-full">
            <ListItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block
