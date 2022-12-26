import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

function DayView() {
  return (
    <div className="bg-base-100 border h-96 border-base-300 rounded-xl p-4 pb-5 ml-4 w-full pr-4 ">
      <FullCalendar
        height="50%"
        plugins={[dayGridPlugin]}
        initialDate="2022-12-12"
        initialView="dayGrid"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        weekends={false}
        events={[
          { title: 'Math', date: '2022-12-12', time: '12:00:00' },
          { title: 'Php', date: '2022-12-12', time: '14:00:00' },
        ]}
      />
    </div>
  )
}

export default DayView
