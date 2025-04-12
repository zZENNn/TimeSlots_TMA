import type {Meta, StoryObj} from "@storybook/react"
import Button from "./Button";
import './Button.scss'

const meta: Meta<typeof Button> = {
    title: 'Компоненты/Button',
    component: Button,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonMain: Story = {
    args: {
        text: 'Button',
        size: "big",
        color: 'primary'
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


