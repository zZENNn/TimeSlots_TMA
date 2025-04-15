import './Card.scss'

export type CardProps = {
    title: string
    p: string
    className?: string
}

export default function Card(props: CardProps) {
  return (
    <div className={`Card ${props.className}`}>
        <b>{props.title}</b>
        <p>{props.p}</p>
  </div>
  )
}
