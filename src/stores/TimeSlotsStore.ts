import { create } from "zustand"
import { TimeSlotProps } from "../components/TimeSlot/TimeSlot"

 
 
export interface TimeSlotsStoreState{
    timeSlots: TimeSlotProps[],
    addTimeSlot: (slot:TimeSlotProps)=>void
}
export const useTimeSlotsStore = create<TimeSlotsStoreState>((set) => ({
     timeSlots: [],
     addTimeSlot: (slot) => set((state) =>(
        {
            timeSlots: [...state.timeSlots, slot]
        }
    )),
}))