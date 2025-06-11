import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'

import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'

export default function CreateEventPage() {
  

  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        
        <Header headingText='Добавить событие' backButton backButtonLink='/TimeSlots_TMA/'/>
        <HCenteredLayout>
          
          <DatePicker label='Дата' className='Form-Field muidatepicker' sx={{width: '400px'}}/>
          <TextField label='Название' className='Form-Field' margin='normal' size='medium' sx={{width: '400px'}}/>
          <TextField label='Описание' className='Form-Field' margin='dense' multiline sx={{width: '400px'}}/>
        </HCenteredLayout>
        
        
    </div>
  )
}
