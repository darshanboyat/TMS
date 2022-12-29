import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const DemoApp = () => {
   const events = [
        { title: 'event 1', date: '2022-12-01' },
        { title: 'event 2', date: '2022-12-02' },
        { title: 'event 3', date: '2022-12-26' },
      ]
    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
      />
    )
}
export default  DemoApp