import Heading from '../Heading/Heading'
import AddButton from '../AddButton/AddButton'
import './TimeSlotsSection.scss'
import TimeSlot from '../TimeSlot/TimeSlot'
import { useState } from 'react'
import AddTimeSlotModal from '../AddTimeSlotModal/AddTimeSlotModal'
import { TimeSlotProps } from '../TimeSlot/TimeSlot'


export type TimSlotsSectionProps = {
  timeSlots: TimeSlotProps[]
}

export default function TimeSlotsSection(props: TimSlotsSectionProps) {


    
  //const [timeSlotsList, setTimeSlotsList] = useState<typeof TimeSlot[]>([])
  const [showModal, setShowModal] = useState(false)
   
   //const timeSlots = useTimeSlotsStore((state)=>state.timeSlots)
    
    
  //  console.log(props.timeSlots)
    
 
  
  
  
  return (
    <div className='TimeSlotsSection'>
        <AddTimeSlotModal show={showModal} onClose={()=>setShowModal(false)}/>
        <div className='TimeSlotsSection-horizontalWrapper'>
            <Heading align='left' text='Slots'/><AddButton color='white' size='small' onClick={()=>setShowModal(true)}/>
        </div>
        <div className="TimeSlotsSection-TimeSlotsList">
          {
            props.timeSlots.map((slot: TimeSlotProps)=>{
              return <TimeSlot state={slot.state} startTime={slot.startTime} endTime={slot.endTime}/>
            }
    )}
            
            
            
        </div>
    </div>
  )
}
