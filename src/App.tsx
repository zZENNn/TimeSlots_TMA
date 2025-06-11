
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import EventsPage from './pages/EventsPage/EventsPage'
import CreateEventPage from './pages/CreateEventPage/CreateEventPage'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {  createTheme,  ThemeProvider } from '@mui/material';
function App() {
  //const [count, setCount] = useState(0)
  const newTheme = (theme:any) => createTheme({
  ...theme,
  palette:{
    primary:{
      main: '#2F54A5'
    },
    secondary:{
      main: '#2F54A5'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root':{
            color: 'white',
            '& .Mui-focused':{
              color: 'white',
            },
          },
          
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#1D2D61',
            
            input:{
              color: 'white',
              // backgroundColor: '#1D2D61'
            },

            textarea:{
              color: 'white', 
            },
            
            fieldset:{
              border: '3px solid #2F54A5',
              
            },
            
            '& fieldset': {
              borderColor: '#2F54A5',
            },
            
            '&:hover fieldset': {
              borderColor:'rgb(64, 106, 196)',
            },
            
            '&.Mui-focused fieldset': {
              border: '3px solid rgb(64, 106, 196)',
            },

          },
        },

      },
    },

    MuiPickersTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root':{
            color: 'white'
          },
          // minWidth: '300px',
          //color: '#2F54A5',
          //borderRadius: '4px',
          //borderColor: '#2F54A5',
          '& .MuiPickersOutlinedInput-root': {
              '& fieldset': {
              border: '3px solid #2F54A5',
            },
            
            '&:hover fieldset': {
              borderColor:'rgb(64, 106, 196)',
            },
            
            '&.Mui-focused fieldset': {
              border: '3px solid rgb(64, 106, 196)',
            },

          },
          //backgroundColor: '#1D2D61',
          //textColor: 'white',
          '& .MuiPickersInputBase-root':{
            backgroundColor: '#1D2D61',
            
          },
          button:{
            backgroundColor: '#2445B2',
            color: 'white',
            '&:hover':{
              backgroundColor:'rgb(32, 62, 158)'
            }
          },
          span:{
            color: 'white'
          }
          
        },
        
      }
    },

   

   
     }
  
})
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={newTheme}>
      <BrowserRouter>
      <Routes>
        <Route path='/TimeSlots_TMA/' element={<EventsPage/>}></Route>
        <Route path='/TimeSlots_TMA/create-event' element={<CreateEventPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </LocalizationProvider>
    
     
    </>
  )
}

export default App
