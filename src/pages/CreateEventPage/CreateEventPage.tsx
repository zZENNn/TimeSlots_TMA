import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'

import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'
import TimeSlotsSection from '../../components/TimeSlotsSection/TimeSlotsSection'
import Button from '../../components/Button/Button'


export default function CreateEventPage() {

  //const dialogRef = useRef<HTMLDialogElement|null>(null) 
  
  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        <Header headingText='Add Event' backButton backButtonLink='/TimeSlots_TMA/'/>
        <HCenteredLayout>
          <DatePicker label='Date' className='Form-Field muidatepicker' sx={{width: '310px'}} />
          <TextField label='Title' className='Form-Field' margin='normal' size='medium' fullWidth sx={{width: '310px'}}/>
          <TextField label='Description' className='Form-Field' margin='dense' multiline fullWidth sx={{width: '310px'}}/>

          <TimeSlotsSection/>
          <Button text='Create event' size='big' color='primary'/>
          
        </HCenteredLayout>
        
        
    </div>
  )
}
