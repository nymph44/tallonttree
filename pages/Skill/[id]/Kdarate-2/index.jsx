// import { LottiePlayer } from 'lottie-react'
import React from 'react'
// import ProgressKDA from '../../components/global/ProgressKDA'
import Rate from '../../../../components/skill/rate/Rate'
import { useLottie } from 'lottie-react'
import meditating from '../../../../public/assets/img/vector/animations/meditating.json'
import { getSession } from 'next-auth/react'
import Argument from '../../../../components/skill/argument/Argument'
// import groovyWalkAnimation from './groovyWalk.json'
import Link from 'next/link'
function index() {
  const options = {
    animationData: meditating,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const { View } = useLottie(options)

  return (
    <div className="flex flex-col items-center h-[calc(100vh-120px)]   -mt-10">
      {/* <LottiePlayer animationData={meditating} loop={true} /> */}
      <div className="w-40 mt-40 bg-primary rounded-full">{View}</div>

      <Argument />
      {/* <Argument /> */}
      <div className="bottom-0 mb-4 w-full flex justify-between">
        <div className="">
          <Link
            href={{
              pathname: '/Skill/',
            }}
          >
            <button className="btn">Back</button>
          </Link>
        </div>
        <ul className="steps">
          <li className="step step-primary">Self Directed Learning</li>
          <li className="step">Initiative</li>
          <li className="step">Motivation</li>
          <li className="step">P2P</li>
          <li className="step">Hub Participation</li>
        </ul>
        <a href="/Skills" className="">
          <button className="btn">Finish</button>
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
