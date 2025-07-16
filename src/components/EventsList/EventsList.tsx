import { useState } from 'react'
import TextButton from '../TextButton/TextButton'
import { Event } from '../../pages/CreateEventPage/CreateEventPage'
import NoContentPlaceholder from '../NoContentPlaceholder/NoContentPlaceholder'
import Card from '../Card/Card'
import './EventsList.scss'
import moment from 'moment'

export type EventListProps = {
    eventList: Event[]
}

/* TODO: Сделать анимации загрузки ивентов */

export default function EventsList(props: EventListProps) {
    const [showAll, setshowAll] = useState<boolean>(false)


    if(props.eventList.length===0){
        return <NoContentPlaceholder/>
    }
    else if(showAll){
        return(
            <>
            <div className="Events">
              {
                props.eventList.map((item)=>{
                    return <Card key={item.id} title={item.title} description={item.description} date={moment(item.date).format('DD.MM.YYYY').toString()}/>
                })
            }
            </div>
            <div className="moreButtonBlock">
                <TextButton text={showAll?'Show less':'Show all'} onClick={showAll?()=>setshowAll(false):()=>setshowAll(true)}/>

            </div>
            
            </>
            
        )
    }
    else if(props.eventList.length<3){
        return(
            <>
            <div className="Events">
              {
                props.eventList.map((item)=>{
                    return <Card key={item.id} title={item.title} description={item.description} date={moment(item.date).format('DD.MM.YYYY').toString()}/>
                })
            }
            </div>
            
            
            </>
            
        )
    }
    else{
        const firstTwoItems = []
        const len = props.eventList.length<2?props.eventList.length:2
        for(let i = 0;i<len;i++){
            firstTwoItems.push(props.eventList[i])
        }
        return(
            <>
                <div className="Events">
                {
                    firstTwoItems.map((item:Event)=>{
                       return <Card  key={item.id} title={item.title} description={item.description} date={moment(item.date).format('DD.MM.YYYY').toString()}/>
                    })
                }
                </div>
                <div className="moreButtonBlock">
                <TextButton text={showAll?'Show less':'Show all'} onClick={showAll?()=>setshowAll(false):()=>setshowAll(true)}/>
                </div>
            </>
        )
        
    }
    
 
}
