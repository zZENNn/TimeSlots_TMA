
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import {useLaunchParams, useRawInitData } from '@telegram-apps/sdk-react';
import EventsPage from './pages/EventsPage/EventsPage'
import CreateEventPage from './pages/CreateEventPage/CreateEventPage'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { useTelegramAppUserStore } from './stores/AppTelegramUserStore';
// import { retrieveRawInitData } from '@telegram-apps/sdk'
import { useInitDataStore } from './stores/InitDataStore';
import { useTelegramAppUserStore } from './stores/AppTelegramUserStore';
import EventPage from './pages/EventPage/EventPage';
// import { useEffect } from 'react';

function App() {
  //const [count, setCount] = useState(0)
  const setUser = useTelegramAppUserStore((state)=>state.setUser)
  const launchParams = useLaunchParams()
  setUser(launchParams.tgWebAppData?.user)
  //console.log(launchParams)

  const initDataRaw = useRawInitData()

  const setRawInitData = useInitDataStore((state)=>state.setInitData)

  setRawInitData(initDataRaw)
  

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      
      <BrowserRouter>
      <Routes>
        <Route path='/TimeSlots_TMA/' element={<EventsPage/>}></Route>
        <Route path='/TimeSlots_TMA/create-event' element={<CreateEventPage/>}></Route>
        <Route path='/TimeSlots_TMA/events/:eventId' element={<EventPage/>}></Route>
      </Routes>
    </BrowserRouter>

    </LocalizationProvider>
    
     
    </>
  )
}

export default App
