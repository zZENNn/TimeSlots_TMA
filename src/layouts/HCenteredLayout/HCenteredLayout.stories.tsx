import type {Meta, StoryObj} from "@storybook/react"
import HCenteredLayout from "./HCenteredLayout";
import './HCenteredLayout.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof HCenteredLayout> = {
    title: 'Компоненты/HCenteredLayout',
    component: HCenteredLayout,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof HCenteredLayout>;

export const SearchBarMain: Story = {
    args: {
       
    }
}

