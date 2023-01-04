import React, { useState } from 'react'
import Link from 'next/link'
import { getSession } from 'next-auth/react'
import Router from 'next/router'
function index() {
  const [skillTitle, setSkillTitle] = useState('')
  function sendProps() {
    Router.push({
      pathname: '/Addskill-2',
      query: { skillTitle: skillTitle },
    })
  }
  return (
    <div className="flex flex-col items-center h-full -mb-96 -mt-10">
      <div className="w-full flex flex-col justify-center items-center my-auto relative space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="font-bold text-4xl text-primary">
            What would you like to learn next?
          </h2>
        </div>
        <div className="w-full flex space-x-4 px-60">
          <textarea
            className="textarea textarea-bordered w-full h-60"
            placeholder="Firstly,"
            onChange={(event) => setSkillTitle(event.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="bottom-0 mb-10 w-full flex justify-between ">
        <div className="">{/* <button className="btn">Back</button> */}</div>
        <a onClick={() => sendProps()}>
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
