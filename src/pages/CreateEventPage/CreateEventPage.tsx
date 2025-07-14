import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'

import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'
import TimeSlotsSection from '../../components/TimeSlotsSection/TimeSlotsSection'
import Button from '../../components/Button/Button'
import { useTimeSlotsStore } from '../../stores/TimeSlotsStore'
import { /*useEffect,*/ useState } from 'react'
import moment from 'moment'
import { TimeSlotProps } from '../../components/TimeSlot/TimeSlot'
import { useTelegramAppUserStore } from '../../stores/AppTelegramUserStore'
import { useInitDataStore } from '../../stores/InitDataStore'

export type Event = {
  date: moment.Moment | null
  title: string | null
  description: string | null
  slots: TimeSlotProps[]
  creator: number

}

export default function CreateEventPage() {

  
  const timeSlotsList = useTimeSlotsStore((state)=>state.timeSlots)

  const [eventDate, setEventDate] = useState<moment.Moment | null>(null)
  const [eventTitle, setEventTitle] = useState<string | null>("")
  const [eventDescription, setEventDescription] = useState<string | null>("")
  

  const appUser = useTelegramAppUserStore((state)=>state.user)
  const initDataRaw = useInitDataStore((state)=>state.initData)

  const sendData = (data: Event | undefined) =>{
    

    fetch('http://localhost:3000/events', {
      method: 'POST',
      // mode: 'cors',
      headers: {
        Authorization: `tma ${initDataRaw}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
  }


  //ADD CHECKS FOR UNDEFINED VALUES
  const composeEvent = () =>{
    // useEffect(()=>{
      //composeEvent()
      if(eventDate!==undefined&&eventTitle!==undefined&&eventDescription!==undefined){//Проверить, почему эти поля undefined приходят
        console.log(eventDate + " " + eventTitle + " " + eventDescription)
        if(appUser){
          const event: Event = {
            date: eventDate,
            title: eventTitle,
            description: eventDescription,
            slots: timeSlotsList,
            creator: appUser?.id
          }
        console.log(event)
        return(event)
        }
        else console.log('appUser is not defined')
        
      }
      
        
    console.log('useEventPost')
    console.log(`InitData: ${appUser}`)
    // },[])
  }

  
  
  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        <Header headingText='Add Event' backButton backButtonLink='/TimeSlots_TMA/'/>
        <HCenteredLayout>
          <DatePicker label='Date' className='Form-Field muidatepicker' sx={{width: '310px'}} value={eventDate} onChange={(date)=>setEventDate(date)}/>
          <TextField label='Title' className='Form-Field' margin='normal' size='medium' fullWidth sx={{width: '310px'}} value={eventTitle} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEventTitle(event.target.value)}}/>
          <TextField label='Description' className='Form-Field' margin='dense' multiline fullWidth sx={{width: '310px'}} value={eventDescription} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEventDescription(event.target.value)}}/>

          <TimeSlotsSection timeSlots={timeSlotsList}/>
          <Button text='Create event' size='big' color='primary' onClick={()=>sendData(composeEvent())}/>
          
        </HCenteredLayout>
        
        
    </div>
  )
}
