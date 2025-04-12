import React from 'react'
import BackButton from '../BackButton/BackButton'
import Heading from '../Heading/Heading'
import './Header.scss'
export type HeaderProps = {
    headingText: string
}

export default function Header(props: HeaderProps) {
  return (
    <header className='Header'>
        <BackButton/><Heading text={props.headingText}/>
    </header>
  )
}
