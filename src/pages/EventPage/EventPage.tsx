import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useInitDataStore } from "../../stores/InitDataStore";
import TimeSlotsSection from "../../components/TimeSlotsSection/TimeSlotsSection";
import { Event } from "../CreateEventPage/CreateEventPage";
import Button from "../../components/Button/Button";
import HCenteredLayout from "../../layouts/HCenteredLayout/HCenteredLayout";
import moment from "moment";
import Heading from "../../components/Heading/Heading";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

import {create} from 'zustand'
import { TimeSlotProps } from "../../components/TimeSlot/TimeSlot";
import { useLaunchParams } from "@telegram-apps/sdk-react";

interface IEventPageSlotsStore {
    timeSlots : any[];
    setTimeSlots : (val : any) => void;
}

export const useEventPageSlotsStore = create<IEventPageSlotsStore>((set)=>({
    timeSlots : [],
    setTimeSlots : (val) => set( () => ({ timeSlots : val }) )
}))
    

export default function EventPage() {
    const initDataRaw = useInitDataStore((state)=>state.initData)
    const params = useParams();
    
    const launchParams = useLaunchParams()
    const userID = launchParams.tgWebAppData?.user?.id
    const [eventData, setEventData] = useState<Event| null>(null)
    const [showModal, setShowModal] = useState(false)
    
   
    const setTimeSlots = useEventPageSlotsStore((state)=>state.setTimeSlots)
    const timeSlots = useEventPageSlotsStore((state)=>state.timeSlots)

    useEffect(()=>{
        fetch(`http://localhost:3000/event/${params.eventId}`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                Authorization: `tma ${initDataRaw}`
            }
        }).then((res)=>{
            return res.json()
        }).then((body)=>{
            setEventData(body[0])//[0] is essential because of expresses toArray()
            setTimeSlots(body[0].slots)
        }).catch((err)=>console.log(err))

    },[])

    console.log(eventData)

    const chosenSlots: TimeSlotProps[] = timeSlots.filter((slot)=>slot.state==="chosen")


    async function bookSlots(propSlots: TimeSlotProps[]){
        console.log("bookSlots called")
        console.log(propSlots)
        const url = `http://localhost:3000/event/${params.eventId}`
        
        try{
            const response = await fetch(url,{
                method: 'PATCH',
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `tma ${initDataRaw}`
                },
                body: JSON.stringify({
                    slots: propSlots, 
                    bookedBy: userID
                })
            })

            if(!response.ok){
                throw new Error(`Response status: ${response.status}`)
            }

            const json = await response.json()
            console.log(json)

        } catch(err: any){
            console.log(err.message)
        }
       
    }

    

    return (
    <div>
        <HCenteredLayout>
            <Header headingText={eventData?.title} backButton backButtonLink="/TimeSlots_TMA"  />
            <Heading text={"Когда: " + moment(eventData?.date).toDate().toDateString()}/>
            <Modal variant={chosenSlots.length>0?"dialog":"alert"} show={showModal} onClose={()=>setShowModal(false)} onSubmit={()=>bookSlots(chosenSlots)} headingText="Записаться на событие">
                
                {
                    chosenSlots.length>0 ?
                    <>
                        
                        <p id="title"><b>{eventData?.title}</b></p>
                        <p id="date">{moment(eventData?.date).format("DD.MM.YYYY")}</p>
                        <p id="chosenSlots">Выбранные слоты:</p>
                        <div className="Modal-ChosenTimeSlotsWrapper">
                            {
                            chosenSlots.map((slot, index)=>{
                                return <p key={index}>{slot.startTime} - {slot.endTime}</p>
                            })
                        }
                        </div>
                    </>
                    :
                    <>
                        <br />Вы не выбрали ни одного слота. <br /><br />Выберите хотя бы один слот, чтобы записаться на мероприятие.
                    </>
                }
            </Modal>
            {eventData&&<TimeSlotsSection timeSlots={timeSlots} /*onChange={()=>setTimeSlots}*/ variant='bookSlots' />}

            <Button text='Submit' size="big" color="primary" onClick={()=>setShowModal(true)}/>
        </HCenteredLayout>
    </div>
    
  )
}
