import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'


export default function CreateEventPage() {
  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <>
        
        <Header headingText='Добавить событие' backButton backButtonLink='/TimeSlots_TMA/'/>
        <DatePicker label='Дата'></DatePicker>
    </>
  )
}
