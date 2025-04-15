import './EventsPage.scss'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

import SearchBar from '../../components/SearchBar/SearchBar'
import Heading from '../../components/Heading/Heading'
import TextButton from '../../components/TextButton/TextButton'




export default function EventsPage() {
  return (
    <>
        <Header headingText='События'/>
        <SearchBar/>
        <Heading text='Мои события'/>
        <div className="Events">
          <Card title='Диджейка 22.05.2025' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>
          <Card title='Заголовок' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>  
        </div>
        <div className="moreButtonBlock">
          <TextButton text='Показать все'/>
        </div>
        <Heading text='Участвую'/>
        <div className="Events">
        <Card title='Заголовок' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>
        <Card title='Заголовок' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>
        </div>
        <div className="moreButtonBlock">
          <TextButton text='Показать все'/>
        </div>
    </>
  )
}
