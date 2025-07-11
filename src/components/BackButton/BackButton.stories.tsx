
import type {Meta, StoryObj} from "@storybook/react"
import BackButton from "./BackButton";
import './BackButton.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof BackButton> = {
    title: 'Компоненты/BackButton',
    component: BackButton,
    tags: [],
    
}

export default meta;

type Story = StoryObj<typeof BackButton>;

export const BackButtonMain: Story = {
    args: {
        
    }
}




