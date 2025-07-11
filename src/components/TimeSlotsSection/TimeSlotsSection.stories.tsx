import type {Meta, StoryObj} from "@storybook/react"
import TimeSlotsSection from "./TimeSlotsSection";

//import icon from './plus_icon_white.svg'

const meta: Meta<typeof TimeSlotsSection> = {
    title: 'Компоненты/TimeSlotsSection',
    component: TimeSlotsSection,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof TimeSlotsSection>;

export const SearchBarMain: Story = {
    args: {
       
    }
}

