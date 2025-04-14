import './TextButton.scss'
export type TextButtonProps = {
    text: string
}

export default function TextButton(props: TextButtonProps) {
  return (
    <button className="TextButton" type='button'>{props.text}</button>
  )
}
