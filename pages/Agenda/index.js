import { getSession } from 'next-auth/react'
import React from 'react'
import FullCalendar from '../../components/global/Fullcalendar'
import Header from '../../components/ui/Header'
import { user } from '../../data/config'
export default function index() {
  return (
    <>
      <div className="pt-4">
        <h1 className="font-bold text-4xl mb-4">Agenda</h1>
      </div>
      <div className="h-3/4">
        <FullCalendar height={1000} initialView="dayGridMonth" />
      </div>
      {/* <FullCalendar initialView="timeGridWeek" /> */}
    </>
  )
}

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
