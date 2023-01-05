import Link from 'next/link'
import React from 'react'
import Router, { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import initFirebase from '../../firebase/clientApp'
import { getSession, useSession } from 'next-auth/react'
function index() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const {
    query: {
      skillTitle,
      skillKnowledge,
      skillTime,
      subskill1,
      subskill2,
      subskill3,
    },
  } = router

  const props = {
    skillTitle,
    skillKnowledge,
    skillTime,
    subskill1,
    subskill2,
    subskill3,
  }

  console.log(
    props.skillTitle,
    props.skillKnowledge,
    props.skillTime,
    props.subskill1,
    props.subskill2,
    props.subskill3,
  )

  const CreateSkill = () => {
    initFirebase()
    console.log(skillTime)
    try {
      firebase
        .firestore()
        .collection('mySkills')
        .doc(props.skillTitle)
        .set({
          id: props.skillTitle,
          skillTitle: props.skillTitle,
          skillKnowledge: props.skillKnowledge,
          skillTime: props.skillTime,
          subskill1: props.subskill1,
          subskill2: props.subskill2,
          subskill3: props.subskill3,
          user: session.user.email,
          // dateCreated: new Date(),
        })
        .then(alert('Data successfully written!'))
    } catch (error) {
      console.log(error)
    }
  }

  function finalizeProps() {
    CreateSkill()
    Router.push({
      pathname: '/Skills',
    })
  }
  return (
    <div className="flex space-x-8">
      <div className="w-1/2 bg-base-100 p-4 rounded-xl">
        <h2 className="text-2xl font-bold">Overview</h2>
        <h2 className="text-xl">{props.skillTitle}</h2>
        <div className="my-4 flex flex-col space-y-4">
          <p className=" text-sm font-light text-gray-500">My desired skill</p>
          <p className="text-xs">{props.skillKnowledge}</p>
          <div className="divider"></div>
        </div>
        <div>
          <h2 className="text-xl">Time</h2>
          <div className="flex">
            <div className="w-1/2 my-4">
              <p className="text-sm -mb-4">Expected time to learn this skill</p>
              <div className="divider"></div>
            </div>
            <div className="flex justify-center space-x-2 w-1/2 items-center -mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-sm  font-bold text-primary">
                {props.skillTime} months
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Subgoals</h2>
          <div className="flex flex-wrap basis-2 mt-4">
            <div className="w-1/2 pr-4">
              <p className="text-xs">{props.subskill1}</p>
              <div className="divider"></div>
            </div>
            <div className="w-1/2 pr-4">
              <p className="text-xs">
                {props.subskill2 ? props.subskill2 : 'No subskill added'}
              </p>
              <div className="divider"></div>
            </div>
            <div className="w-1/2 pr-4">
              <p className="text-xs">
                {props.subskill3 ? props.subskill3 : 'No subskill added'}
              </p>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full rounded-xl flex flex-col space-y-8">
        <div className=" h-1/2 bg-base-100 p-4 rounded-xl">
          <h2 className="text-2xl font-bold">Skill roadmap</h2>
          <p className="text-xl">Generated roadmap for your skill</p>
        </div>
        <div className=" flex justify-end">
          <a onClick={() => finalizeProps()}>
            <button className="btn btn-primary">Accept and save</button>
          </a>
        </div>
      </div>
    </div>
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
