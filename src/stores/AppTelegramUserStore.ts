import { create } from 'zustand'


export type TelegramAppUser = {
  allows_write_to_pm?: boolean 
  first_name: string 
  id: number 
  language_code?: string
  last_name?: string
  photo_url?: string 
  username?: string
}

interface TelegramAppUserStore {
  user : TelegramAppUser | undefined;//!!! might need changes later !!!
  setUser : (user:TelegramAppUser | undefined) => void;
}

export const useTelegramAppUserStore = create<TelegramAppUserStore>((set)=>({
  user: undefined,
  setUser: (val) => set( () => ({ user: val }) )
}))
