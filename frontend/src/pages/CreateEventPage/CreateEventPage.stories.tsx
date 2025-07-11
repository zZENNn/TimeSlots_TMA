import type {Meta, StoryObj} from "@storybook/react"
import CreateEventPage from "./CreateEventPage";
import './CreateEventPage.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof CreateEventPage> = {
    title: 'Компоненты/CreateEventPage',
    component: CreateEventPage,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof CreateEventPage>;

export const SearchBarMain: Story = {
    args: {
       
    }
}

