
import type {Meta, StoryObj} from "@storybook/react"
import EventsPage from "./EventsPage";
import './EventsPage.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof EventsPage> = {
    title: 'Компоненты/EventsPage',
    component: EventsPage,
    tags: [],
    
}

export default meta;

type Story = StoryObj<typeof EventsPage>;

export const EventsPageMain: Story = {
    args: {
        
    }
}




