//import React from 'react'
import './Heading.scss'


export type HeadingProps = {
    text: string
    id?: string
    className?: string
}

export default function Heading(props: HeadingProps) {
  return (
    <h1 className='Heading'>{props.text}</h1>
  )
}
