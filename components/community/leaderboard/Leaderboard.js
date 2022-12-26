import React from 'react'
import { leaderboard } from '../../../data/config'
function Leaderboard() {
  return (
    <div className="w-full ">
      <div className="mt-8 mb-4">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="w-96">
          These users have been putting a lot of effort into contributing to the
          community!
        </p>
      </div>
      <div className="bg-base-100 border  border-base-300 p-4 rounded-lg w-full">
        <div className="flex">
          <div className="flex flex-col w-full">
            {leaderboard.map((item, index) => (
              <div className="flex space-x-4 my-2 group cursor-pointer">
                <div className="flex space-x-2">
                  <img
                    src={item.photoUrl}
                    alt="avatar"
                    className="rounded-full w-6 h-6"
                  />
                </div>
                <h1 className="text-md font-bold group-hover:text-primary">
                  {item.name}
                </h1>

                <p>❤️‍🔥</p>

                <p className="text-sm">{item.contributions}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
