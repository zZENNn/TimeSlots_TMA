import type {Meta, StoryObj} from "@storybook/react"
import TimeSlot from "./TimeSlot";
import './TimeSlot.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof TimeSlot> = {
    title: 'Компоненты/TimeSlot',
    component: TimeSlot,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof TimeSlot>;

export const TimeSlotMain: Story = {
    args: {
        state: 'available',
        startTime: '14:00',
        endTime: '15:00'
    }
}




