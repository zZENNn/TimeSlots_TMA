import './EventsPage.scss'
import Header from '../../components/Header/Header'
import { Card } from '@mui/material'

import SearchBar from '../../components/SearchBar/SearchBar'
import Heading from '../../components/Heading/Heading'
import TextButton from '../../components/TextButton/TextButton'

/*
TODO: 
Сделать свой компонент карточки с ховер эффектом
*/


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
        <div className="moreButtonBlock">
          <TextButton text='Показать все'/>
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
        <div className="moreButtonBlock">
          <TextButton text='Показать все'/>
        </div>
    </>
  )
}
