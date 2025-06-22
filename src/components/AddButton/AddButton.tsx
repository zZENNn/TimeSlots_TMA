
import icon from './plus_icon_white.svg'
import './AddButton.scss'
import {  ReactNode } from 'react'


export type AddButtonProps = {
   color: 'blue' | 'white'
   size: 'big' | 'small'
   children?: ReactNode;
   onClick: ()=>void
   

}

export default function AddButton(props:AddButtonProps) {

  
  return (
   <button className={`AddButton AddButton_color_${props.color} AddButton_size_${props.size}`} type='button'onClick={props.onClick}>
    <img src={icon} alt="" />
   </button>
  )
}
