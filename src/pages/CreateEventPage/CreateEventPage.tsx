import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'

import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'
import TimeSlotsSection from '../../components/TimeSlotsSection/TimeSlotsSection'
import Button from '../../components/Button/Button'
import { useTimeSlotsStore } from '../../stores/TimeSlotsStore'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { TimeSlotProps } from '../../components/TimeSlot/TimeSlot'

export type Event = {
  date: moment.Moment | null
  title: string | null
  description: string | null
  slots: TimeSlotProps[]
  creator: "telegram user"

}

export default function CreateEventPage() {

  
  const timeSlotsList = useTimeSlotsStore((state)=>state.timeSlots)

  const [eventDate, setEventDate] = useState<moment.Moment | null>()
  const [eventTitle, setEventTitle] = useState<string | null>()
  const [eventDescription, setEventDescription] = useState<string | null>()
  

  

  // const useEventPost = () =>{
  //   useEffect(()=>{
  //     //composeEvent()
  //     if(eventDate!==undefined&&eventTitle!==undefined&&eventDescription!==undefined){
  //       const event: Event = {
  //         date: eventDate,
  //         title: eventTitle,
  //         description: eventDescription,
  //         slots: timeSlotsList,
  //         creator: "telegram user"
  //       }
  //     }
      
        


  //   },[])
  // }
  
  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        <Header headingText='Add Event' backButton backButtonLink='/TimeSlots_TMA/'/>
        <HCenteredLayout>
          <DatePicker label='Date' className='Form-Field muidatepicker' sx={{width: '310px'}} onChange={(date)=>setEventDate(date)}/>
          <TextField label='Title' className='Form-Field' margin='normal' size='medium' fullWidth sx={{width: '310px'}} onChange={(title)=>setEventTitle(title.toString())}/>
          <TextField label='Description' className='Form-Field' margin='dense' multiline fullWidth sx={{width: '310px'}} onChange={(description)=>setEventDescription(description.toString())}/>

          <TimeSlotsSection timeSlots={timeSlotsList}/>
          <Button text='Create event' size='big' color='primary'/>
          
        </HCenteredLayout>
        
        
    </div>
  )
}
