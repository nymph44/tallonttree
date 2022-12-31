import React from 'react'
// import { leaderboard } from '../../../data/config'
// import * as firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect } from 'react'

import axios from 'axios'

// initFirebase()

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      ;(async () => {
        try {
          const db = firebase.firestore()
          const query = db
            .collectionGroup('users')
            .orderBy('contributions', 'desc')
            .limit(8)
          // console.log(query)
          const data = await query.get()
          // console.log(data)
          const users = data.docs.map((doc) => doc.data())
          // console.log(users)
          setLeaderboard(users)
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      })()
    }
    fetchData()
  }, [])
  // const db = firebase.firestore()
  // const query = db
  //   .collectionGroup('users')
  //   .orderBy('contributions', 'desc')
  //   .limit(10)
  // console.log(query)
  return (
    <div className="w-full ">
      <div className="mt-8 mb-4">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="w-96">
          These users have been putting a lot of effort into contributing to the
          community!
        </p>
      </div>

      <div className="bg-base-100 border  border-base-300 px-4 rounded-lg w-full">
        <div className="flex">
          <div className="flex flex-col w-full">
            {/* {leaderboard.map((item, index) => ( */}
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              leaderboard.map((leaderboard) => (
                <>
                  <div className="hidden" key={leaderboard.id}>
                    {/* <p>{leaderboard.name}</p>
                    <p>{leaderboard.contributions}</p> */}
                  </div>
                  <div className="flex space-x-4 my-2 group cursor-pointer">
                    <div className="flex space-x-2">
                      <img
                        src={leaderboard.profilePic}
                        alt="avatar"
                        className="rounded-full w-6 h-6"
                      />
                    </div>
                    <h1 className="text-md font-bold group-hover:text-primary">
                      {leaderboard.username}
                    </h1>

                    <p>❤️‍🔥</p>

                    <p className="text-sm">{leaderboard.contributions}</p>
                  </div>
                </>
              ))
            )}
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
