
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import EventsPage from './pages/EventsPage/EventsPage'
import CreateEventPage from './pages/CreateEventPage/CreateEventPage'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

function App() {
  //const [count, setCount] = useState(0)
  
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
