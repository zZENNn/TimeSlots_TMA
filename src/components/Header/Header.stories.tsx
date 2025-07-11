
import type {Meta, StoryObj} from "@storybook/react"
import Header from "./Header";
import './Header.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof Header> = {
    title: 'Компоненты/Header',
    component: Header,
    tags: [],
    
}

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderMain: Story = {
    args: {
        headingText: 'Диджейка на Крыше'
    }
}




