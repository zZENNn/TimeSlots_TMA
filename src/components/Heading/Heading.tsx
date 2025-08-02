
import './Heading.scss'


export type HeadingProps = {
    text: string | undefined
    id?: string
    className?: string
    align?: 'left'|'center'| 'right'
    color?: string
}

export default function Heading(props: HeadingProps) {
  return (
    <h1 className={`Heading Heading_align_${props.align ? props.align : 'center'} ${props.className}`}  >{props.text}</h1>
  )
}
