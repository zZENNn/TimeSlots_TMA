import type {Meta, StoryObj} from "@storybook/react"
import AddTimeSlotModal from "./AddTimeSlotModal";
import './AddTimeSlotModal.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof AddTimeSlotModal> = {
    title: 'Компоненты/AddTimeSlotModal',
    component: AddTimeSlotModal,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof AddTimeSlotModal>;

export const AddTimeSlotModalMain: Story = {
    args: {
        
    }
}



// export const ButtonSmall: Story = {
//     args: {
//         text: 'Button',
//         className: 'button small '
//     }
// }

// export const ButtonSmallInverted: Story = {
//     args: {
//         text: 'Button',
//         className: 'button small inverted '
//     }
// }


