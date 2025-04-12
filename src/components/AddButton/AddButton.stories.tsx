import type {Meta, StoryObj} from "@storybook/react"
import AddButton, {AddButtonProps} from "./AddButton";
import './AddButton.scss';
import icon from './plus_icon_white.svg'

const meta: Meta<typeof AddButton> = {
    title: 'Компоненты/AddButton',
    component: AddButton,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof AddButton>;

export const AddButtonMain: Story = {
    args: {
        color: 'blue',
        size: 'big',
        children: <img src={icon}></img>
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


