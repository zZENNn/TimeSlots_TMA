
import { Link } from 'react-router'
import BackButton from '../BackButton/BackButton'
import Heading from '../Heading/Heading'
import './Header.scss'
export type HeaderProps = {
    headingText: string | undefined
    backButton?: boolean
    backButtonLink: string
}

export default function Header(props: HeaderProps) {
  if(props.backButton === true){
    return (
      <header className='Header'>
          <Link to={props.backButtonLink}><BackButton/></Link><h1 className='Header-H1'>{props.headingText}</h1>
      </header>
    )
  }
  else{
    return (
      <header className='Header'>
          <Heading text={props.headingText}/>
      </header>
    )
  }
  
}
