import { create } from "zustand"
import { TimeSlotProps } from "../components/TimeSlot/TimeSlot"

 
 
export interface ICreateTimeSlotsStore{
    timeSlots: TimeSlotProps[],
    addTimeSlot: (slot:TimeSlotProps)=>void
    deleteTimeSlot: (slot:TimeSlotProps)=>void
}
export const useCreateTimeSlotsStore = create<ICreateTimeSlotsStore>((set) => ({
     timeSlots: [],
     addTimeSlot: (slot) => set((state) =>(
        {
            timeSlots: [...state.timeSlots, slot]
        }
    )),
    deleteTimeSlot: (slot) => set((state) =>(
        {
            timeSlots: [...state.timeSlots.filter((currentSlot)=>currentSlot.id!==slot.id)]
        }
    )),

}))