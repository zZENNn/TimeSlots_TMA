import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'

export default function CreateEventPage() {
  const newTheme = (theme:any) => createTheme({
  ...theme,
  components: {
    MuiPickersTextField: {
      styleOverrides: {
        root: {
          color: '#2F54A5',
          borderRadius: '4px',
          borderColor: '#2F54A5',
          border: '3px solid',
          backgroundColor: '#1D2D61',
          textColor: 'white'
        },
        label:{
          color: 'white',
          
          
        }
      }
    },
    MuiTextField:{
      styleOverrides: {
        root: {
          color: '#2F54A5',
          borderRadius: '4px',
          borderColor: '#2F54A5',
          border: '3px solid',
          backgroundColor: '#1D2D61',
          textColor: 'white',
          width: '245px'
        }
      }
    }
  }
})

  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        
        <Header headingText='Добавить событие' backButton backButtonLink='/TimeSlots_TMA/'/>
        <HCenteredLayout>
          <ThemeProvider theme={newTheme}>
          <DatePicker label='Дата' className='Form-Field muidatepicker' sx={
            { label:
              {
               color: 'white',
               ":focused":{
                  bgcolor: 'white',
                  color: 'blue'} 
              },
              margin: '5px',
              
            }
          } />
          <TextField label='Название' className='Form-Field' sx={{ label: { color: 'white' }, margin: '5px'  }}/>
          <TextField label='Описание' className='Form-Field' multiline sx={{ label: { color: 'white' }, margin: '5px'  }}/>
        </ThemeProvider>
        </HCenteredLayout>
        
        
    </div>
  )
}
