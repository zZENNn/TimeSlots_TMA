//import React from 'react'
import './Heading.scss'


export type HeadingProps = {
    text: string
    id?: string
    className?: string
    align?: 'left'|'center'| 'right'
}

export default function Heading(props: HeadingProps) {
  return (
    <h1 className={`Heading Heading_align_${props.align ? props.align : 'center'}`}>{props.text}</h1>
  )
}
