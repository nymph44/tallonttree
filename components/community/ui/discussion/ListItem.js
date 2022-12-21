import React from 'react'

import { discussions, comments } from '../../../../data/config'
import Divider from '../Divider'
import LoadMoreDivider from '../LoadMoreDivider'
function ListItem() {
  return (
    <div>
      {discussions.map((discussion, index) => {
        return (
          <>
            <div className=" my-2 flex justify-between w-full">
              <div className="flex">
                <div className="flex ">
                  <div>
                    <img
                      className="w-12 h-12  object-cover rounded-full mr-4"
                      src={discussion.photoUrl}
                      alt={discussion.author}
                    />
                  </div>
                  <div className="flex space-x-2 ">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div className="group cursor-pointer">
                      <h1 className="text-xl font-bold group-hover:text-primary ">
                        {discussion.title}
                      </h1>
                      <div className="flex space-x-1">
                        <p>{discussion.author}</p>
                        <p> • </p>
                        <p>{discussion.date}</p>
                        <p> • </p>
                        <p>{discussion.comments.length} replies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center mr-auto -space-x-8 ml-8">
                  {discussion.comments.map((comment) => {
                    return (
                      <img
                        className="w-8 h-8 object-cover rounded-full mr-4 border-2 z-10"
                        src={comment.photoUrl}
                        alt={comment.author}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            {index + 1 < discussions.length ? <Divider /> : <LoadMoreDivider />}
          </>
        )
      })}
    </div>
  )
}

export default ListItem
