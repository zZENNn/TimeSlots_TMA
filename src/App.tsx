
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { useLaunchParams } from '@telegram-apps/sdk-react';
import EventsPage from './pages/EventsPage/EventsPage'
import CreateEventPage from './pages/CreateEventPage/CreateEventPage'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useTelegramAppUserStore } from './stores/AppTelegramUserStore';
import { useEffect } from 'react';

function App() {
  //const [count, setCount] = useState(0)
  const setUser = useTelegramAppUserStore((state)=>state.setUser)

  useEffect(()=>{
    ()=>setUser(useLaunchParams().tgWebAppData?.user)
  },[])
  
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      
      <BrowserRouter>
      <Routes>
        <Route path='/TimeSlots_TMA/' element={<EventsPage/>}></Route>
        <Route path='/TimeSlots_TMA/create-event' element={<CreateEventPage/>}></Route>
      </Routes>
    </BrowserRouter>

    </LocalizationProvider>
    
     
    </>
  )
}

export default App
