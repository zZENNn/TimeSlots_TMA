import './Card.scss'

export type CardProps = {
    title: string
    description: string
    date: string
    className?: string
}

export default function Card(props: CardProps) {
  return (
    <div className={`Card ${props.className}`}>
        <b id='title'>{props.title}</b>
        <p id='date'><b>Дата:</b> {props.date}</p>
        <p id='description'>{props.description}</p>
  </div>
  )
}
