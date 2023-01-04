import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
function Account() {
  const { data: session, status } = useSession({ required: true }) // required: true will redirect to login page if not signed in

  if (status === 'authenticated') {
    return (
      <div>
        <p>Signed in</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Not signed in</p>
      </div>
    )
  }
}

export default Account

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
