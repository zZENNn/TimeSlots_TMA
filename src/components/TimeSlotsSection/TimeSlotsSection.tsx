import Heading from '../Heading/Heading'
import AddButton from '../AddButton/AddButton'
import './TimeSlotsSection.scss'
import TimeSlot from '../TimeSlot/TimeSlot'

export default function TimeSlotsSection() {
  return (
    <div className='TimeSlotsSection'>
        <div className='TimeSlotsSection-horizontalWrapper'>
            <Heading align='left' text='Слоты'/><AddButton color='white' size='small'/>
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
