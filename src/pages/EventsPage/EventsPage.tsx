import './EventsPage.scss'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

import SearchBar from '../../components/SearchBar/SearchBar'
import Heading from '../../components/Heading/Heading'
import TextButton from '../../components/TextButton/TextButton'
import NoContentPlaceholder from '../../components/NoContentPlaceholder/NoContentPlaceholder'

/*
TODO:
Заменить ховеры на анимации для телефонов
*/


export default function EventsPage() {
  return (
    <>
        <div className="HeaderSearchBarWrapper">
          <Header headingText='События' backButtonLink=''/>
          <SearchBar buttonLink='/TimeSlots_TMA/create-event'/>
        </div>
        <div className="EventsWrap">
          <Heading text='Мои события'/>
          <div className="Events">
            <Card title='Диджейка 22.05.2025' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>
            <Card title='Заголовок' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>  
          </div>
          <div className="moreButtonBlock">
            <TextButton text='Показать все'/>
          </div>
          
          <Heading text='Участвую' id='Participate'/>
        
          <div className="Events">
          <NoContentPlaceholder/>
          </div>
          <div className="moreButtonBlock">
            <TextButton text='Показать все'/>
          </div>
        </div>
        
    </>
  )
}
