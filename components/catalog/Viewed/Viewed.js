import React from 'react'
import 'firebase/firestore'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import initFirebase from '../../../firebase/clientApp'
function Viewed() {
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  initFirebase()
  useEffect(() => {
    const fetchData = async () => {
      ;(async () => {
        try {
          const db = firebase.firestore()
          const query = db.collectionGroup('PopularSkills')
          const data = await query.get()
          const skills = data.docs.map((doc) => doc.data())
          console.log(skills)
          setSkills(skills)
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
    <div class="pl-4 pt-4">
      <div className="overflow-x-auto w-full">
        <table className="table w-full bg-base-300 rounded-xl">
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th className="bg-opacity-0">Most Viewed skills</th>
              {/* <th>Job</th>
              <th></th> */}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
              </div>
            ) : (
              skills.map((skill, index) => {
                return (
                  <tr>
                    <td className="group hover:bg-base-200 hover:cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={skill.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold group-hover:text-primary">
                            {skill.title}
                          </div>
                          <div className="text-sm opacity-50">
                            {skill.category}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Viewed
