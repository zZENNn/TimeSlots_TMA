import Heading from '../Heading/Heading'
import AddButton from '../AddButton/AddButton'
import './TimeSlotsSection.scss'
import TimeSlot from '../TimeSlot/TimeSlot'
import { useState } from 'react'
import AddTimeSlotModal from '../AddTimeSlotModal/AddTimeSlotModal'



export default function TimeSlotsSection() {

  const [showModal, setShowModal] = useState(false)
  {showModal&&console.log('click')}
  return (
    <div className='TimeSlotsSection'>
        <AddTimeSlotModal show={showModal} onClose={()=>setShowModal(false)}/>
        <div className='TimeSlotsSection-horizontalWrapper'>
            <Heading align='left' text='Slots'/><AddButton color='white' size='small' onClick={()=>setShowModal(true)}/>
        </div>
        <div className="TimeSlotsSection-TimeSlotsList">
            <TimeSlot state='available' startTime='14:00' endTime='15:00'/>
            <TimeSlot state='available' startTime='16:00' endTime='17:00'/>
            <TimeSlot state='available' startTime='17:00' endTime='18:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            <TimeSlot state='available' startTime='19:00' endTime='20:00'/>
            
        </div>
    </div>
  )
}
