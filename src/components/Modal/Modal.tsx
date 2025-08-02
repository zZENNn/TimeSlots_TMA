import React, { useRef } from 'react'
import Button from '../Button/Button'
import './Modal.scss'
import Heading from '../Heading/Heading'
export type ModalProps = {
  show: boolean
  children?: React.ReactNode
  headingText: string
  variant: 'alert' | 'dialog'
  onClose: ()=>void
  onSubmit: ()=>void
}


export default function Modal(props: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement|null>(null)
    
    {props.show?dialogRef.current?.showModal():dialogRef.current?.close()}
    
  return (
    <dialog ref={dialogRef} className='Modal'>
          <Heading text={props.headingText} className='Modal-Heading'/>
          <div className="Modal-MainContent">
            {props.children}
          </div>
          <div className="Modal-ModalDialogButtons">
              {props.variant==="alert"&&<Button size='small' color='primary' text='OK' onClick={props.onClose}/>}
              {props.variant==="dialog"&&<><Button size='small' color='primary' text='Подтвердить' onClick={props.onSubmit}/><Button size='small' color='inverted' text='Отмена' onClick={props.onClose}/></>}
          </div>
        
    </dialog>
  )
}
