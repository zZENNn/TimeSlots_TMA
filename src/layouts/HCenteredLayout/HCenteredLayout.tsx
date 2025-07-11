import { ReactNode } from 'react'
import './HCenteredLayout.scss'
export type HCenteredLayoutProps = {
    children: ReactNode
}

export default function HCenteredLayout(props:HCenteredLayoutProps) {
  return (
    <div className='HCenteredLayout'>
        {props.children}
    </div>
  )
}
