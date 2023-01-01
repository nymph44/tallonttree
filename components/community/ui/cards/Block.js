import React from 'react'
import { skills } from '../../../../data/config'
import 'firebase/firestore'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import initFirebase from '../../../../firebase/clientApp'
import Link from 'next/link'
function Block() {
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
    <div className="flex no-wrap justify-between space-x-4 w-full">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        skills.map((skill, index) => {
          return (
            <>
              {/* <Card
                key={index}
                title={skill.title}
                image={skill.image}
                category={skill.category}
              />
               */}

              <Link
                href={{ pathname: '/Skill-preview', query: { id: 'id' } }}
                className="cursor-pointer group card  w-1/6 group-hover:bg-opacity-0 bg-error shadow-lg image-full"
              >
                <figure>
                  <img
                    className="rounded-xl w-full  group-hover:scale-125 transition duration-300 ease-in-out"
                    src={skill.image}
                    alt={skill.title}
                  />
                </figure>
                <div className="card-body bottom-0">
                  <h2 className="card-title group-hover:text-primary-focus transition-colors duration-300">
                    {skill.title}
                  </h2>
                  <p className="text-white text-sm">{skill.category}</p>
                </div>
              </Link>
            </>
          )
        })
      )}
    </div>
  )
}

export default Block
