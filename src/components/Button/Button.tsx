//import React from 'react'
import './Button.scss'

export type ButtonProps = {
  text: string
  //className: string
  size: 'big' | 'small'
  color: 'primary' | 'inverted'
  onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
        
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`Button Button_size_${props.size} Button_color_${props.color}`} type='button' onClick={props.onClick}>{props.text}</button>
  )
}