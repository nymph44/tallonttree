// import { LottiePlayer } from 'lottie-react'
import React from 'react'
import ProgressKDA from '../../components/global/ProgressKDA'
import Rate from '../../components/skill/rate/Rate'
import { useLottie } from 'lottie-react'
import meditating from '../../public/assets/img/vector/animations/meditating.json'
import { getSession } from 'next-auth/react'
// import groovyWalkAnimation from './groovyWalk.json'

function index() {
  const options = {
    animationData: meditating,
    loop: true,
  }
  const { View } = useLottie(options)

  return (
    <div className="flex flex-col items-center h-full -mt-10">
      {/* <LottiePlayer animationData={meditating} loop={true} /> */}
      <div className="w-96">{View}</div>

      <Rate />
      {/* <Argument /> */}
      <ProgressKDA />
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
