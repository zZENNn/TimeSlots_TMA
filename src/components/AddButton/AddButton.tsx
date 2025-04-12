import React from 'react'
import icon from './plus_icon_white.svg'
import './AddButton.scss'

export type AddButtonProps = {
   color: 'blue' | 'white'
   size: 'big' | 'small'

}

export default function AddButton(props:AddButtonProps) {
  return (
   <button className={`AddButton AddButton_color_${props.color} AddButton_size_${props.size}`} type='button'>
    <img src={icon} alt="" />
   </button>
  )
}
