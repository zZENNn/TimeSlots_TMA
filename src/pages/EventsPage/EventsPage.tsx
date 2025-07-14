import './EventsPage.scss'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

import SearchBar from '../../components/SearchBar/SearchBar'
import Heading from '../../components/Heading/Heading'
import TextButton from '../../components/TextButton/TextButton'
import NoContentPlaceholder from '../../components/NoContentPlaceholder/NoContentPlaceholder'
import { useEffect } from 'react'
import { useInitDataStore } from '../../stores/InitDataStore'

/*
TODO:
Заменить ховеры на анимации для телефонов
*/


export default function EventsPage() {

const initDataRaw = useInitDataStore((state)=>state.initData)
useEffect(()=>{
  fetch('http://localhost:3000/events', {
      method: 'GET',
      headers: {
        Authorization: `tma ${initDataRaw}`
      },
    }).then(
      (res)=>{
        console.log(res)
      }
    ).catch((err)=>console.log(err))
},[])

  return (
    <>
        <div className="HeaderSearchBarWrapper">
          <Header headingText='Events' backButtonLink=''/>
          <SearchBar buttonLink='/TimeSlots_TMA/create-event'/>
        </div>
        <div className="EventsWrap">
          <Heading text='My events' align='left'/>
          <div className="Events">
            <Card title='Диджейка 22.05.2025' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>
            <Card title='Заголовок' date='22.05.2025' description='Текст наполнения карточки очень длинный и важдный' className='Events-Card'/>  
          </div>
          <div className="moreButtonBlock">
            <TextButton text='Show all'/>
          </div>
          
          <Heading text='Participating' align='left' id='Participate'/>
        
          <div className="Events">
          <NoContentPlaceholder/>
          </div>
          <div className="moreButtonBlock">
            <TextButton text='Show all'/>
          </div>
        </div>
        
    </>
  )
}
