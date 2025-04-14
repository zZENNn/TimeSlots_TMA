import './EventsPage.scss'
import Header from '../../components/Header/Header'
import { Card } from '@mui/material'

import SearchBar from '../../components/SearchBar/SearchBar'
import Heading from '../../components/Heading/Heading'

export default function EventsPage() {
  return (
    <>
        <Header headingText='События'/>
        <SearchBar/>
        <Heading text='Мои события'/>
        <div className="Events">
          <Card variant='outlined' className='Events-Card Card'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
          </Card>

          <Card variant='outlined' className='Events-Card Card'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
          </Card>
        </div>
        <Heading text='Участвую'/>
        <div className="Events">
          <Card variant='outlined' className='Events-Card Card'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
            
          </Card>

          <Card variant='outlined' className='Events-Card Card'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
          </Card>
        </div>
    </>
  )
}
