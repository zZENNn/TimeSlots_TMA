//import React from 'react'
import './TimeSlot.scss'

export type TimeSlotProps = {
    state: 'available' | 'booked' | 'chosen'
    startTime: string
    endTime: string
    bookedBy?: number 
}

export default function TimeSlot(props: TimeSlotProps) {
  let cN = `TimeSlot TimeSlot_state_${props.state}`

  if(props.state === 'booked'){
      cN = cN + " TimeSlot_untouchable"
  }

  return (
    <button className={cN} type='button'>{`${props.startTime} - ${props.endTime}`}</button>
  )
}
