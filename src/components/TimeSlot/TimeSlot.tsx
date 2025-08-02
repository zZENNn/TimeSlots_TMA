import './TimeSlot.scss'


export type TimeSlotProps = {
    id: string
    state: 'available' | 'booked' | 'chosen'
    startTime: string
    endTime: string
    bookedBy?: number
    variant?: 'createSlots' | 'bookSlots'
    onClick: ()=>void 
    onDelete?: ()=>void
}

export default function TimeSlot(props: TimeSlotProps) {
  

  // const [slotState,setSlotState] = useState(props.state)

  // const toggleState = ()=>{
  //   if(slotState==='available'){
  //     setSlotState('chosen')
      
  //   }
  //   if(slotState==='chosen'){
  //     setSlotState('available')
      
  //   }
  // }

  let cN = `TimeSlot TimeSlot_state_${props.state}`

  if(props.state === 'booked'){
      cN = cN + " TimeSlot_untouchable"
  }

  return (
    <div className="TimeSlot-Wrapper">
      {props.variant==='createSlots'&&<button className='TimeSlot-DeleteButton' onClick={()=>props.onDelete&&props.onDelete()}>x</button>}
      <button className={cN} type='button' onClick={()=>(props.variant==='bookSlots') && props.onClick()}>{`${props.startTime} - ${props.endTime}`}</button>
    </div>
  )
}
