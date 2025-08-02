import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import "./AddTimeSlotModal.scss"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useRef, useState } from "react";
import { useCreateTimeSlotsStore } from "../../stores/CreateTimeSlotsStore";
import * as moment from "moment"

export type AddTimeSlotModalProps = {
  show: boolean
  onClose: ()=>void
}

export default function AddTimeSlotModal(props: AddTimeSlotModalProps) {

  const dialogRef = useRef<HTMLDialogElement|null>(null)

  {props.show?dialogRef.current?.showModal():dialogRef.current?.close()}

  const [sTime, set_sTime] = useState<moment.Moment | null>();
  const [eTime, set_eTime] = useState<moment.Moment | null>();

  const addTimeSlot = useCreateTimeSlotsStore((state)=>state.addTimeSlot)
  
  const addSlot = ()=>{
      if(sTime&&eTime){
        addTimeSlot({id: crypto.randomUUID().toString(), state: 'available', variant: 'createSlots', startTime: sTime?.format("HH:mm").toString(), endTime: eTime?.format("HH:mm").toString(), onClick: ()=>{}})
        console.log(`${sTime}`)
    }
  
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <dialog className="Modal Modal-AddTimeSlot"  ref={dialogRef}>
      <div className="Modal-AddTimeSlot-HeadingWrapper">
        <Heading align="center" text="Новый слот" color='#000000'/>
      </div>
      <div className="MUIPoppersContainer"></div>
      <div className="Modal-MainContentWrapper">
        <div className="Modal-AddTimeSlot-TimeInputsWrapper">
        <label htmlFor="startInput">Начало</label>
        <TimePicker className="Modal-AddTimeSlot-TimePicker" name="startInput"  ampm={false} ampmInClock={false}  onChange={(newValue)=>{set_sTime(newValue)}} slotProps={{
          popper:{
            sx:{
              zIndex: 1
            },
            container: document.getElementsByClassName('Modal-AddTimeSlot-TimePicker')[0]
            
          },
          dialog:{
             sx:{
              overflow: "visible",
              zIndex: 1500,
              
            },
            container: document.getElementsByClassName('MUIPoppersContainer')[0],
            scroll: "paper",
            //See theme in main.ts for mobile clock-popper positions
            
          }
          
        }}/>
        
        <label htmlFor="input">Конец</label>
        <TimePicker className="Modal-AddTimeSlot-TimePicker" ampm={false} ampmInClock={false} onChange={(newValue)=>{set_eTime(newValue)}} slotProps={{
          popper:{
            sx:{
              zIndex: 1
            },
            container: document.getElementsByClassName('Modal-AddTimeSlot-TimePicker')[1]
            
          },
          dialog:{
             sx:{
              overflow: "visible",
              zIndex: 1500,
              
              
            },
            container: document.getElementsByClassName('MUIPoppersContainer')[0],
            scroll: "paper",
            //See theme in main.ts for mobile clock-popper positions
            
          }
          
        }}/>
        </div>
        <div className="Modal-AddTimeSlot-DialogButtonsWrapper">
          {/* fix the shit in the next line!!! */}
          <Button size="small" color="primary" text="Создать" onClick={
            ()=>{
              addSlot()
              props.onClose()
            }
              
          }/>
          <Button size="small" color="inverted" text="Отмена" onClick={props.onClose} /> 
        </div>
      </div>
    </dialog>
    </LocalizationProvider>
  )
}
