import React from 'react'
import Header from '../../components/ui/Header'

import RowSkillCards from '../../components/ui/cards/skills/RowSkillCards'
import LineChart from '../../components/ui/charts/linechart/LineChart'
import DayView from '../../components/ui/calendar/DayView'
import { useSession, signOut, getSession } from 'next-auth/react'
import firebase from 'firebase/app'
function Dashboard() {
  const { data: session, status } = useSession()
  const CreateUser = () => {
    try {
      firebase
        .firestore()
        .collection('users')
        .doc(session.user.email)
        .set({
          fname: session.user.name.split(' ')[0],
          lname: session.user.name.split(' ')[1],
          username: session.user.name.split(' ')[0],
          email: session.user.email,
          profilePic: session.user.image,
          contributions: Math.floor(Math.random() * (1899 - 151 + 1)) + 151,
        })
      // .then(alert('Data successfully written!'))
    } catch (error) {
      console.log(error)
    }
  }

  CreateUser()
  return (
    <div>
      <Header title="Dashboard" user={session.user.name} />
      <RowSkillCards />
      <div className="w-full">
        <h1 className="font-bold mb-4">Your activity</h1>
        {/* <WriteToCloudFirestore /> */}
        <div className="flex">
          <div className="w-1/2 border border-base-300 bg-base-200 rounded-xl px-2 flex space-x-4">
            <div className="w-full ">
              <LineChart />
            </div>
          </div>
          <div className="w-1/2 pr-4">
            <DayView />
          </div>
        </div>
        <div className="flex gap-4 my-4 ">
          <div className="border border-base-300 bg-base-200 rounded-xl  w-1/4  p-4 group hover:cursor-pointer">
            <div className="flex justify-between py-4">
              <div className="rounded-full w-32 h-32 flex justify-center items-center p-2 my-auto mx-auto ">
                <svg
                  className="w-16 h-16 stroke-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <div className="w-1/2 flex flex-col my-auto mx-auto">
                <div className="flex justify-end align-end">
                  <h1 className="text-lg">Upcoming </h1>
                </div>
                <div className="flex justify-end align-end">
                  <h1 className="text-3xl font-medium group-hover:text-primary">
                    3 deadlines
                  </h1>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="text-primary">Updated now</p>
            </div>
          </div>
          <div className="border border-base-300 bg-base-200 rounded-xl  w-1/4  p-4 group hover:cursor-pointer">
            <div className="flex justify-between py-4">
              <div className="rounded-full w-32 h-32 flex justify-center items-center p-2 my-auto mx-auto ">
                <svg
                  className="w-16 h-16 stroke-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-1/2 flex flex-col my-auto mx-auto">
                <div className="flex justify-end align-end">
                  <h1 className="text-lg">Your hours </h1>
                </div>
                <div className="flex justify-end align-end">
                  <h1 className="text-3xl font-medium group-hover:text-primary">
                    96.1 Hours
                  </h1>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <p className="text-primary">This month</p>
            </div>
          </div>
          <div className="border border-base-300 bg-base-200 rounded-xl  w-1/4  p-4 group hover:cursor-pointer">
            <div className="flex justify-between py-4">
              <div className="rounded-full w-32 h-32 flex justify-center items-center p-2 my-auto mx-auto ">
                <svg
                  className="w-16 h-16 stroke-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <div className="w-1/2 flex flex-col my-auto mx-auto">
                <div className="flex justify-end align-end">
                  <h1 className="text-lg">Upcoming </h1>
                </div>
                <div className="flex justify-end align-end">
                  <h1 className="text-3xl font-medium group-hover:text-primary">
                    3 deadlines
                  </h1>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="text-primary">Updated now</p>
            </div>
          </div>
          <div className="border border-base-300 bg-base-200 rounded-xl  w-1/4  p-4 group hover:cursor-pointer">
            <div className="flex justify-between py-4">
              <div className="rounded-full w-32 h-32 flex justify-center items-center p-2 my-auto mx-auto ">
                <svg
                  className="w-16 h-16 stroke-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-1/2 flex flex-col my-auto mx-auto">
                <div className="flex justify-end align-end">
                  <h1 className="text-lg">Your hours </h1>
                </div>
                <div className="flex justify-end align-end">
                  <h1 className="text-3xl font-medium group-hover:text-primary">
                    96.1 Hours
                  </h1>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <p className="text-primary">This month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

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
