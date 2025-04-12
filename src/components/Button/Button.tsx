//import React from 'react'
import './Button.scss'

export type ButtonProps = {
  text: string
  //className: string
  size: 'big' | 'small'
  color: 'primary' | 'inverted'
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`Button Button_size_${props.size} Button_color_${props.color}`} type='button'>{props.text}</button>
  )
}