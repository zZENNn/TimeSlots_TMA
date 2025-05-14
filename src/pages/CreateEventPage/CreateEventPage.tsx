import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'


export default function CreateEventPage() {
  return (
    <>
        <Header headingText='Добавить событие' backButton/>
        <DatePicker label='Дата'></DatePicker>
    </>
  )
}
