import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import Button from "../Button/Button"
import Heading from "../Heading/Heading"
import "./AddTimeSlotModal.scss"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useRef } from "react";



export type AddTimeSlotModalProps = {
  show: boolean
  onClose: ()=>void
}

export default function AddTimeSlotModal(props: AddTimeSlotModalProps) {
  const dialogRef = useRef<HTMLDialogElement|null>(null)
  {props.show?dialogRef.current?.showModal():dialogRef.current?.close()}
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <dialog className="Modal Modal-AddTimeSlot"  ref={dialogRef}>
      <div className="Modal-AddTimeSlot-HeadingWrapper">
        <Heading align="center" text="Новый слот" color='#000000'/>
      </div>
      <div className="Modal-MainContentWrapper">
        <div className="Modal-AddTimeSlot-TimeInputsWrapper">
        <label htmlFor="startInput">Начало</label>
        <TimePicker className="Modal-AddTimeSlot-TimePicker" name="startInput" ampm={false} ampmInClock={false} slotProps={{
          popper:{
            sx:{
              zIndex: 1
            },
            container: document.getElementsByClassName('Modal-AddTimeSlot-TimePicker')[0]
            
          }
        }}/>
        
        <label htmlFor="input">Конец</label>
        <TimePicker className="Modal-AddTimeSlot-TimePicker" ampm={false} ampmInClock={false} slotProps={{
          popper:{
            sx:{
              zIndex: 1
            },
            container: document.getElementsByClassName('Modal-AddTimeSlot-TimePicker')[1]
            
          }
        }}/>
        </div>
        <div className="Modal-AddTimeSlot-DialogButtonsWrapper">
          <Button size="small" color="primary" text="Создать" />
          <Button size="small" color="inverted" text="Отмена" onClick={props.onClose} /> 
        </div>
      </div>
    </dialog>
    </LocalizationProvider>
  )
}
