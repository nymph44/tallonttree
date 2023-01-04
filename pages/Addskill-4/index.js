import { getSession } from 'next-auth/react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'

function Argument() {
  const [subskill1, setSubskill1] = useState('')
  const [subskill2, setSubskill2] = useState('')
  const [subskill3, setSubskill3] = useState('')

  function sendProps4() {
    Router.push({
      pathname: '/Addskill-overview',
      query: {
        skillKnowledge: props.skillKnowledge,
        skillTitle: props.skillTitle,
        skillTime: props.skillTime,
        subskill1: subskill1,
        subskill2: subskill2,
        subskill3: subskill3,
      },
    })
  }

  const router = useRouter()

  const {
    query: { skillTitle, skillKnowledge, skillTime },
  } = router

  const props = {
    skillTitle,
    skillKnowledge,
    skillTime,
    subskill1,
    subskill2,
    subskill3,
  }

  return (
    <div className="flex flex-col items-center h-full -mt-10">
      <div className="w-full h-fullflex flex-col justify-center items-center my-auto relative space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            Describe 3-5 subgoals that you think can be accomplished
          </h2>
        </div>
        <div className="w-full flex space-x-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Please write desired subskill</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I would like to learn ..."
              onChange={(event) => setSubskill1(event.target.value)}
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Please write desired subskill</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I would like to learn ..."
              onChange={(event) => setSubskill2(event.target.value)}
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Please write desired subskill</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I would like to learn ..."
              onChange={(event) => setSubskill3(event.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <Link href="/Addskill-3">
          <button className="btn btn-primary">Back</button>
        </Link>
        <a onClick={() => sendProps4()}>
          <button className="btn btn-primary">Next</button>
        </a>
      </div>
    </div>
  )
}

export default Argument

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
