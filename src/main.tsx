import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ruRU } from '@mui/material/locale';
import './stores/TimeSlotsStore.ts'
// import { mockTelegramEnv } from '@telegram-apps/sdk-react';


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


// 'user=%7B%22id%22%3A413738189%2C%22first_name%22%3A%22zzzennn%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mr_zzzennn%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F9INp5YwWHJQOMefsatVPV1mY7bpSwTX5PybGohggaqw.svg%22%7D&chat_instance=9189780410536999988&chat_type=supergroup&auth_date=1752318657&signature=EivZxvufQ8TR4SFaQ9XIyJ3C5ZvQcu7_phrjNOfbou_0dH8_FoS-msu0q4wnJBJWZGdPV1UqnquX41mPwImfBQ&hash=5ab60626c6096a28f505f469a3da27e990688ca8975562535016978c3e82f149'

// mockTelegramEnv({
//   launchParams: {
//     tgWebAppPlatform: '',
//     tgWebAppData: 'user=%7B%22id%22%3A413738189%2C%22first_name%22%3A%22zzzennn%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22mr_zzzennn%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F9INp5YwWHJQOMefsatVPV1mY7bpSwTX5PybGohggaqw.svg%22%7D&chat_instance=9189780410536999988&chat_type=supergroup&auth_date=1752318657&signature=EivZxvufQ8TR4SFaQ9XIyJ3C5ZvQcu7_phrjNOfbou_0dH8_FoS-msu0q4wnJBJWZGdPV1UqnquX41mPwImfBQ&hash=5ab60626c6096a28f505f469a3da27e990688ca8975562535016978c3e82f149'
//   }
// })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={newTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
