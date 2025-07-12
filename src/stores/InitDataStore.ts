import { create } from 'zustand'

interface InitDataStore {
  initData : any;
  setInitData : (val : any) => void;
}
export const useInitDataStore = create<InitDataStore>((set)=>({
  initData : undefined,
  setInitData : (val) => set( (state) => ({ initData : val }) )
}))
