//import React from 'react'
import { ButtonBaseTypeMap } from '@mui/material'
import './Button.scss'

export type ButtonProps = {
  text: string
  //className: string
  size: 'big' | 'small'
  color: 'primary' | 'inverted'
  onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
  type?: "submit" | "reset" | "button"
        
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`Button Button_size_${props.size} Button_color_${props.color}`} onClick={props.onClick} type={props.type} >{props.text}</button>
  )
}