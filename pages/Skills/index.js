import { getSession, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import WrapSkillCards from '../../components/ui/cards/skills/WrapSkillCards'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
import initFirebase from '../../firebase/clientApp'
import firebase from 'firebase/app'
function index() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [unApprovedSkills, setUnApprovedSkills] = useState([])
  useEffect(() => {
    initFirebase()
    const db = firebase.firestore()
    const unsubscribe = db
      .collection('mySkills')
      .where('user', '==', session.user.email)
      .limit(3)
      // .where('approved', '==', false)
      .onSnapshot((snapshot) => {
        const newUnApprovedSkills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setUnApprovedSkills(newUnApprovedSkills)
        setIsLoading(false)
      })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <div className="py-4">
        <h1 className="font-bold text-4xl mb-4">Skills</h1>
        <p>Manage your skills and preferences here</p>
      </div>
      <div className="">
        <div className="py-4">
          <h3 className="font-semibold text-xl">Waiting for approval</h3>
          <div className="py-4 flex flex-wrap gap-4">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
              </div>
            ) : (
              unApprovedSkills.map((unApprovedSkills, index) => {
                return (
                  <div className="w-1/5 bg-base-200 border border-base-300 rounded-xl p-4">
                    <h1 className="font-bold mb-4">{unApprovedSkills.id}</h1>
                    <div className="w-full bg-accent rounded-full h-2.5 mb-4">
                      <div className={`bg-gray-300 h-2.5 rounded-full `}></div>
                    </div>
                    <div className="w-full flex justify-end">
                      <button className="btn btn-sm btn-outline  btn-disabled">
                        Waiting for approval
                      </button>
                    </div>
                  </div>
                )
              })
            )}
            <div className="w-32 border bg-base-200 border-base-300 rounded-xl flex flex-col mt-4 pt-4 bottom-0 p-4">
              <div className="flex justify-center ">
                <svg
                  className="w-12 h-12 text-primary"
                  xmlns="http://www.w3.org/2000svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m120a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <Link href={{ pathname: '/Addskill' }}>
                <div className="w-full flex justify-center">
                  <button className="btn btn-sm btn-outline btn-primary">
                    Add skill
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold">Your skills</h2>
        <WrapSkillCards />
      </div>
    </>
  )
}

export default index

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
      },
    }
  }

  return {
    props: { session },
  }
}
