import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

import FullCalendar from '@fullcalendar/react' ;// must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' ;// a plugin!
import interactionPlugin from "@fullcalendar/interaction" ;

const Events = (props) => {

    const { username } = useContext(AppContext);

    useEffect(()=>{
        console.log("username in Events: " + username);
    }, [username])

    const handleEventClick = (eventInfo) => { // bind with an arrow function
       alert(eventInfo.event.title) ;

    }

      return (
          <div className="">
              This is the Events Page

              {username !== '' &&
              <div>Hello, {username}</div>}

              <div className="eventCalendar">
                <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin ]}
                  eventClick={handleEventClick}
                  initialView="dayGridMonth"
                  events={[
                    { title: 'event 1', start: '2022-03-07', end: '2022-03-10' },
                    { title: 'event 2', date: '2022-03-09' }
                  ]}
                />
              </div>
          </div>
        );
}

export default Events;
