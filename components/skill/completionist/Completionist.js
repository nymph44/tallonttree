import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState, useEffect } from 'react'

function Completionist() {
  const [completionist, setCompletionist] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      ;(async () => {
        try {
          const db = firebase.firestore()
          const query = db.collectionGroup('users').limit(9)
          const data = await query.get()

          const users = data.docs.map((doc) => doc.data())

          setCompletionist(users)
          console.log(users)
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      })()
    }
    fetchData()
  }, [])
  return (
    <div className="">
      <div>
        <h2 className="text-lg font-bold">Completionist</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          completionist.map((completionist) => (
            <>
              <div className="flex group cursor-pointer flex-col items-center my-4 space-y-4">
                <div className="flex ">
                  <img
                    src={completionist.profilePic}
                    alt="avatar"
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <h1 className="text-md font-bold group-hover:text-primary">
                  {completionist.username}
                </h1>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  )
}
export default Completionist
