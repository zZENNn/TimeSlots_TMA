
import { Link } from 'react-router'
import BackButton from '../BackButton/BackButton'
import Heading from '../Heading/Heading'
import './Header.scss'
export type HeaderProps = {
    headingText: string
    backButton?: boolean
    backButtonLink: string
}

export default function Header(props: HeaderProps) {
  if(props.backButton === true){
    return (
      <header className='Header'>
          <Link to={props.backButtonLink}><BackButton/></Link><Heading text={props.headingText}/>
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
