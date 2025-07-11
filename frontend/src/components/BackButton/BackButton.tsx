import back_arrow from './BackButton.svg'
import './BackButton.scss'

export default function BackButton() {
  return (
    <button className="BackButton" type='button'><img src={back_arrow} alt="" /></button>
  )
}
