import type {Meta, StoryObj} from "@storybook/react"
import Modal from "./Modal";
import './Modal.scss';
//import icon from './plus_icon_white.svg'

const meta: Meta<typeof Modal> = {
    title: 'Компоненты/Modal',
    component: Modal,
    tags: [],
    
}

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalMain: Story = {
   
}



