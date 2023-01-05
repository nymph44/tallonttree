import { getSession } from 'next-auth/react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
function index() {
  const [skillTime, setSkillTime] = useState('')

  console.log(skillTime)
  function sendProps3() {
    Router.push({
      pathname: '/Addskill-4',
      query: {
        skillKnowledge: props.skillKnowledge,
        skillTitle: props.skillTitle,
        skillTime: skillTime,
      },
    })
  }

  const router = useRouter()

  const {
    query: { skillTitle, skillKnowledge },
  } = router

  const props = {
    skillTitle,
    skillKnowledge,
    skillTime,
  }

  return (
    <div className="flex flex-col items-center h-[calc(100vh-120px)] -mt-10">
      <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            How long do you think it will take you to master this skill?
          </h2>
          <p className="text-xl">Select in months</p>
        </div>
        <div className="w-full">
          <input
            type="range"
            min="0"
            max="100"
            className="range range-primary"
            step="25"
            onChange={(event) => setSkillTime(event.target.value)}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span className="text-lg font-bold">{'< 1'}</span>
            <span className="text-lg font-bold">1</span>
            <span className="text-lg font-bold">2</span>
            <span className="text-lg font-bold">3</span>
            <span className="text-lg font-bold">{'3 >'}</span>
          </div>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <Link href="/Addskill-2">
          <button className="btn btn-primary">Back</button>
        </Link>
        <a onClick={() => sendProps3()}>
          <button className="btn btn-primary">Next</button>
        </a>
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
