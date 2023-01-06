import { getSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
function index() {
  const [skillKnowledge, setSkillKnowledge] = useState('')

  function sendProps2() {
    Router.push({
      pathname: '/Addskill-3',
      query: {
        skillKnowledge: props.skillKnowledge,
        skillTitle: props.skillTitle,
      },
    })
  }
  const router = useRouter()

  const {
    query: { skillTitle },
  } = router

  const props = {
    skillTitle,
    skillKnowledge,
  }

  return (
    <div className="flex flex-col items-center h-[calc(100vh-120px)] -mt-10">
      <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            Tell me what you already know about this skill
          </h2>
        </div>
        <div className="w-full flex space-x-4 px-60">
          <textarea
            className="textarea textarea-bordered w-full h-60"
            placeholder="I know that..."
            onChange={(event) => setSkillKnowledge(event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <Link href="/Addskill">
          <button className="btn btn-primary">Back</button>
        </Link>
        <a onClick={() => sendProps2()}>
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
