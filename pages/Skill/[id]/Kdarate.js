// import { LottiePlayer } from 'lottie-react'
import React from 'react'
// import ProgressKDA from '../../../components/global/ProgressKDA'
import Rate from '../../../components/skill/rate/Rate'
import { useLottie } from 'lottie-react'
import meditating from '../../../public/assets/img/vector/animations/meditating.json'
import { getSession } from 'next-auth/react'
import Link from 'next/link'

function index() {
  const options = {
    animationData: meditating,
    loop: true,
  }
  const { View } = useLottie(options)

  return (
    <div className="flex flex-col items-center h-[calc(100vh-120px)] -mt-10 my-auto">
      <div className="w-96 my-40 -mb-40 bg-primary rounded-full">{View}</div>
      <Rate />
      {/* <ProgressKDA /> */}
      <div className="bottom-0 mb-4 w-full flex justify-between">
        <div className="">
          <button className="btn">Back</button>
        </div>
        <ul className="steps">
          <li className="step step-primary">Self Directed Learning</li>
          <li className="step">Initiative</li>
          <li className="step">Motivation</li>
          <li className="step">P2P</li>
          <li className="step">Hub Participation</li>
        </ul>
        <Link href="/Kdarate-2" as="/Skill/1/Kdarate-2">
          <div className="">
            <button className="btn">Next</button>
          </div>
        </Link>
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
