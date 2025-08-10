import Heading from '../Heading/Heading'
import AddButton from '../AddButton/AddButton'
import './TimeSlotsSection.scss'
import TimeSlot from '../TimeSlot/TimeSlot'
import { useEffect, useState } from 'react'
import AddTimeSlotModal from '../AddTimeSlotModal/AddTimeSlotModal'
import { TimeSlotProps } from '../TimeSlot/TimeSlot'
import NoContentPlaceholder from '../NoContentPlaceholder/NoContentPlaceholder'
import { useEventPageSlotsStore } from '../../pages/EventPage/EventPage'
import { useCreateTimeSlotsStore } from '../../stores/CreateTimeSlotsStore'


export type TimSlotsSectionProps = {
  timeSlots: TimeSlotProps[]
  variant: 'createSlots' |'bookSlots' 
  helperText?: string
  //onChange: ()=>void
}

export default function TimeSlotsSection(props: TimSlotsSectionProps) {
  const createTimeSlotStoreSlots = useCreateTimeSlotsStore((state)=>state.timeSlots)
  const deleteTimeSlot = useCreateTimeSlotsStore((state)=>state.deleteTimeSlot)
  const [timeSlots, setTimeSlots] = useState<TimeSlotProps[]>([])
    
  props.variant==='bookSlots'&&useEffect(()=>{
    setTimeSlots(props.timeSlots)
  },[])

  props.variant==='createSlots'&&useEffect(()=>{
    setTimeSlots(createTimeSlotStoreSlots)
  },[createTimeSlotStoreSlots])
  //const [timeSlotsList, setTimeSlotsList] = useState<typeof TimeSlot[]>([])
  const [showModal, setShowModal] = useState(false)
   
   //const timeSlots = useTimeSlotsStore((state)=>state.timeSlots)
  const setEventPageTimeSlots =  useEventPageSlotsStore((state)=>state.setTimeSlots)
  
  //  console.log(props.timeSlots)
    
 
  
  //On click toggle timeSlot(chosen/available) if its not booked 
  function toggleTimeSlot(id: TimeSlotProps['id']){
    const localTimeSlots = [...timeSlots]
    localTimeSlots.map((slot)=>{
      if(slot.id===id){
        console.log(slot.startTime)
        if(slot.state==='available'){
          slot.state='chosen'
          console.log('chosen')
        }
        else if(slot.state==='chosen'){
          slot.state='available'
          console.log('available')
        }
      }
    })
    //setTimeSlots(localTimeSlots)
    
    setEventPageTimeSlots(localTimeSlots)
  }
  
  return (
    <div className='TimeSlotsSection'>
        <AddTimeSlotModal show={showModal} onClose={()=>setShowModal(false)}/>{/* WTF?/ */}
        <div className='TimeSlotsSection-horizontalWrapper'>
            <Heading align='left' text='Slots'/>{(props.variant==='createSlots')&&<AddButton color='white' size='small' onClick={()=>setShowModal(true)}/>}
        </div>
        <div className="TimeSlotsSection-TimeSlotsList">
          {
            props.timeSlots ? 
            
            timeSlots.map((slot: TimeSlotProps, index)=>{
                return <TimeSlot key={index}
                  id={slot.id}
                  state={slot.state} 
                  startTime={slot.startTime} 
                  endTime={slot.endTime} 
                  variant={props.variant} 
                  onClick={()=>toggleTimeSlot(slot.id)} 
                  onDelete={
                  ()=>deleteTimeSlot(slot)
                }/>
              }
            )
            :
            <NoContentPlaceholder/>
    
          } 
            
            
            
        </div>
        <div className="TimeSlotsSection-HelperText HelperText">{props.helperText}</div>
    </div>
  )
}
