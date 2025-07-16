import './EventsPage.scss'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import Heading from '../../components/Heading/Heading'
import { useEffect, useState } from 'react'
import { useInitDataStore } from '../../stores/InitDataStore'
import { Event } from '../CreateEventPage/CreateEventPage'
import EventsList from '../../components/EventsList/EventsList'

/*
TODO:
Заменить ховеры на анимации для телефонов
*/


export default function EventsPage() {

const initDataRaw = useInitDataStore((state)=>state.initData)
const [myEventsList, setMyEventsList] = useState<Event[]>([])
const [participatingEventsList, setParticipatingEventsList] = useState<Event[]>([])


useEffect(()=>{
  console.log('I should render once')
  //get events that I've created
  fetch('http://localhost:3000/events/my', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    }).then(
      (res)=>{
        return res.json()
      }
    ).then((resBody)=>{
      console.log(resBody)
      setMyEventsList(resBody)
    })
    .catch((err)=>console.log(err))

    
},[])

useEffect(()=>{
  //get events that I'm participating in
    fetch('http://localhost:3000/events/participating', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    }).then(
      (res2)=>{
        return res2.json()
      }
    ).then((res2Body)=>{
      console.log(res2Body)
      setParticipatingEventsList(res2Body)
    })
    .catch((err)=>console.log(err))
},[])

  return (
    <>
        <div className="HeaderSearchBarWrapper">
          <Header headingText='Events' backButtonLink=''/>
          <SearchBar buttonLink='/TimeSlots_TMA/create-event'/>
        </div>
        <div className="EventsWrap">
          <Heading text='My events' align='left'/>  
          {/* My events list */}
          <EventsList eventList={myEventsList}/>
          <Heading text='Participating' align='left' id='Participate'/>
          <EventsList eventList={participatingEventsList}/>
        </div>
        
    </>
  )
}
