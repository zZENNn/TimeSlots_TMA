import './TextButton.scss'
export type TextButtonProps = {
    text: string
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
}

export default function TextButton(props: TextButtonProps) {
  return (
    <button className="TextButton" type='button' onClick={props.onClick}>{props.text}</button>
  )
}
