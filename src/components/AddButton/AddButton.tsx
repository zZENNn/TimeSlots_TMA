import React from 'react'
import icon from './plus_icon.svg'

export type AddButtonProps = {
   color: 'blue' | 'white'
   size: 'big' | 'small'
   children: React.ReactNode

}

export default function AddButton(props:AddButtonProps) {
  return (
   <button className={`AddButton AddButton_color_${props.color} AddButton_size_${props.size}`} type='button'>{props.children}</button>
  )
}
