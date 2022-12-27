import React from 'react'
import Header from '../../components/ui/Header'

import { user } from '../../data/config'
import RowSkillCards from '../../components/ui/cards/skills/RowSkillCards'
import LineChart from '../../components/ui/charts/linechart/LineChart'
import DayView from '../../components/ui/calendar/DayView'
import WriteToCloudFirestore from '../../components/cloudFirestore/Write'
function Dashboard() {
  return (
    <div>
      <Header title="Dashboard" user={user.name} />
      <RowSkillCards />
      <div className="w-full">
        <h1 className="font-bold mb-8">Your activity</h1>
        <WriteToCloudFirestore />
        <div className="flex">
          <div className="w-1/2 border border-base-300 bg-base-100 rounded-xl pr-2 flex space-x-4">
            <div className="flex-col flex">
              <div className="border border-base-200 bg-base-300 rounded-xl  w-60 p-4 m-4 ">
                <h1 className="font-bold text-md">Upcoming deadlines</h1>
                <div className="flex space-x-4 py-4">
                  <div className="bg-primary rounded-full w-12 h-12 flex justify-center items-center p-2">
                    <svg
                      className=" stroke-base-content "
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
                  <div>
                    <h1 className="text-2xl font-bold">3</h1>
                    <h1 className="text-sm">Deadlines</h1>
                  </div>
                </div>
              </div>
              <div className="border border-base-200 bg-base-300 rounded-xl  w-60  p-4 m-4">
                <h1 className="font-bold text-md">Your hours</h1>
                <div className="flex space-x-4 py-4 ">
                  <div className="bg-primary rounded-full w-12 h-12 flex justify-center items-center p-2">
                    <svg
                      className=" stroke-base-content "
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
                  <div className="">
                    <h1 className="text-2xl font-bold">96</h1>
                    <h1 className="text-sm">Average total hours spend</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <LineChart />
            </div>
          </div>
          <div className="w-1/2 pr-4">
            <DayView />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
