import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const loadingComponent = () => <div>Loading ...</div>
const CalendarComponent = dynamic(() => import('@fullcalendar/react'), {
  ssr: false,
  loading: loadingComponent,
})

export default function FullCalendar(props) {
  const [plugins, setPlugins] = useState([])

  useEffect(() => {
    ;(async () => {
      const dayGrid = (await import('@fullcalendar/daygrid')).default
      const timeGrid = (await import('@fullcalendar/timegrid')).default
      const interaction = (await import('@fullcalendar/interaction')).default

      setPlugins([dayGrid, timeGrid])
    })()
  }, [])

  if (plugins.length === 0) return loadingComponent()

  return <CalendarComponent plugins={plugins} {...props} />
}
