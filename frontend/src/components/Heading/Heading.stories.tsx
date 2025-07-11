
import type {Meta, StoryObj} from "@storybook/react"
import Heading from "./Heading";
import './Heading.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof Heading> = {
    title: 'Компоненты/Heading',
    component: Heading,
    tags: [],
    
}

export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingMain: Story = {
    args: {
        text: "Диджейка на Крыше"
    }
}




