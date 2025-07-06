import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'

import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'
import TimeSlotsSection from '../../components/TimeSlotsSection/TimeSlotsSection'
import Button from '../../components/Button/Button'
import { useEffect, useState } from 'react'
import { TimeSlotProps } from '../../components/TimeSlot/TimeSlot'
import { useTimeSlotsStore } from '../../stores/TimeSlotsStore'


export default function CreateEventPage() {

  // const [timeSlots, setTimeSlots] = useState<TimeSlotProps[]>([])

  // const timeSlotsList = useTimeSlotsStore((state)=>state.timeSlots)
  // const setSlots = ()=>setTimeSlots(timeSlotsList)
  // useEffect(()=>{
  //   ()=>setSlots()
  // },[])
  
  // console.log(timeSlots)
  const timeSlotsList = useTimeSlotsStore((state)=>state.timeSlots)
  
  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        <Header headingText='Add Event' backButton backButtonLink='/TimeSlots_TMA/'/>
        <HCenteredLayout>
          <DatePicker label='Date' className='Form-Field muidatepicker' sx={{width: '310px'}} />
          <TextField label='Title' className='Form-Field' margin='normal' size='medium' fullWidth sx={{width: '310px'}}/>
          <TextField label='Description' className='Form-Field' margin='dense' multiline fullWidth sx={{width: '310px'}}/>

          <TimeSlotsSection timeSlots={timeSlotsList}/>
          <Button text='Create event' size='big' color='primary'/>
          
        </HCenteredLayout>
        
        
    </div>
  )
}
