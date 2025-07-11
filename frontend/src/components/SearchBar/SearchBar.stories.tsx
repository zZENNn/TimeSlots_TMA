import type {Meta, StoryObj} from "@storybook/react"
import SearchBar from "./SearchBar";
import './SearchBar.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof SearchBar> = {
    title: 'Компоненты/SearchBar',
    component: SearchBar,
    tags: [],
}

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const SearchBarMain: Story = {
    args: {
       
    }
}

