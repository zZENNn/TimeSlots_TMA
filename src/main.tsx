import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ruRU } from '@mui/material/locale';
import './stores/TimeSlotsStore.ts'


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
   MuiDialog:{
        styleOverrides:{
          scrollPaper:{
            position: "absolute",
            overflow: "visible",
            height: "800px",
            margin: 0,
            top: "-150px",
            left: "-5%"
            //transform: translateX(-50%),
          }
          // root:{
          //    overflow: "visible",
          //    height: "1080px"
          // }
        }
    },
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
            },
            marginRight: '-6px'
          },
          span:{
            color: 'white'
          },
         
        },
        
        
      }
    },

   

   
     }
  
},
ruRU
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={newTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
