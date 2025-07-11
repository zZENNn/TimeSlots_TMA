import type {Meta, StoryObj} from "@storybook/react"
import NoContentPlaceholder from "./NoContentPlaceholder";
import './NoContentPlaceholder.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof NoContentPlaceholder> = {
    title: 'Компоненты/NoContentPlaceholder',
    component: NoContentPlaceholder,
    tags: [],
    
}

export default meta;

type Story = StoryObj<typeof NoContentPlaceholder>;

export const NoContentPlaceholderMain: Story = {
    args: {
        
    }
}




