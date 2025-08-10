// import {DatePicker} from '@mui/x-date-pickers'
import Header from '../../components/Header/Header'

import HCenteredLayout from '../../layouts/HCenteredLayout/HCenteredLayout'
import {TextField } from '@mui/material'
import './CreateEventPage.scss'
import TimeSlotsSection from '../../components/TimeSlotsSection/TimeSlotsSection'
import Button from '../../components/Button/Button'
import { useCreateTimeSlotsStore } from '../../stores/CreateTimeSlotsStore'
import { /*useEffect,*/ useState } from 'react'
import moment from 'moment'
import { TimeSlotProps } from '../../components/TimeSlot/TimeSlot'
// import { useTelegramAppUserStore } from '../../stores/AppTelegramUserStore'
// import { useInitDataStore } from '../../stores/InitDataStore'
import { useForm} from 'react-hook-form'
// import { on } from '@telegram-apps/sdk-react'

export type Event = {
  id: string
  date: moment.Moment | null
  title: string
  description: string | null
  slots: TimeSlotProps[]
  creator: number

}

export default function CreateEventPage() {

  //react-hook-form
  const {
    register,
    formState:{
      errors,
    },
    // setError,
    // setFocus,
    handleSubmit,
    // control
  } = useForm(
    {
      mode: "onBlur",
      shouldFocusError: false,
      criteriaMode: 'all'
    }
  )
  
  const timeSlotsList = useCreateTimeSlotsStore((state)=>state.timeSlots)

  // const [eventDate, _] = useState<moment.Moment | null>(null)
  // const [eventTitle, setEventTitle] = useState<string | null>("")
  // const [eventDescription, setEventDescription] = useState<string | null>("")
 
  const [timeSlotsHelperText, setTimeSlotsHeplerText] = useState<string>("")

  // const appUser = useTelegramAppUserStore((state)=>state.user)
  // const initDataRaw = useInitDataStore((state)=>state.initData)

  // const sendData = (data: Event | undefined) =>{
        

  //   fetch('http://localhost:3000/events', {
  //     method: 'POST',
  //     // mode: 'cors',
  //     headers: {
  //       Authorization: `tma ${initDataRaw}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data)
  //   });
  // }

  // console.log("Now: " + moment().unix())
  // console.log("yes: " + moment("01/02/1970").unix())

  //ADD CHECKS FOR UNDEFINED VALUES
  // const composeEvent = () =>{
  //   // useEffect(()=>{
  //     //composeEvent()
  //     if(eventDate&&eventTitle&&eventDescription){//Проверить, почему эти поля undefined приходят
  //       console.log(eventDate + " " + eventTitle + " " + eventDescription)
  //       if(appUser){
  //         const event: Event = {
  //           id: crypto.randomUUID(),
  //           date: eventDate,
  //           title: eventTitle,
  //           description: eventDescription,
  //           slots: timeSlotsList,
  //           creator: appUser?.id
  //         }
  //       console.log(event)
  //       return(event)
  //       }
  //       else console.log('appUser is not defined')
        
  //     }
      
        
  //   // console.log('useEventPost')
  //   // console.log(`InitData: ${appUser}`)
  //   // },[])
  // }

  function submitForm(data:any){
    // event.preventDefault()
    console.log(timeSlotsList)
    if(timeSlotsList.length===0){
      setTimeSlotsHeplerText("You need to add at least one timeslot")
      return
    }
    else{
       alert(JSON.stringify(data))
    }
    //sendData(composeEvent())
   
  }
  
  // useEffect(()=>{
  //   setFocus("date")
  // },[errors.date])


  return (
    //TODO: Сделать нормально типы в Header, чтобы ссылка кнопки была не обязательной, но при этом работала в Link
    <div className='CreateEventPage'>
        <Header headingText='Add Event' backButton backButtonLink='/TimeSlots_TMA/'/>
          
            <HCenteredLayout>
              <form noValidate style={{ display: 'flex', flexDirection: 'column'}} >
                
              {/* <Controller   render={({ field, fieldState: { error } }) => (
                <DatePicker
                  {...field}
                  
                   minDate={moment()}
                  label="Date"
                  disablePast
                  className="Form-Field muidatepicker"
                  sx={{ width: '310px' }}
                  
                  slotProps={{
                    textField: {
                      required: true,
                      error: !!error,
                      helperText: error?.message,
            // The ref from the field object should be passed to the inputRef of the TextField
                      inputRef: field.ref,
                      onBlur: field.onBlur,
                      
                    },
                  }}
                 
                />
              )}
              name="date"
              control={control}
              rules={{ required: 'Date is required.',
                
                
               }}
              
              /> */}
              <input type='date' className='CreateEventPage-DateInput DateInput'/>
              <TextField {...register("title", {required: "Title is required"})} helperText={<>errors.title?.message</>} required error={!!errors?.title} label='Title' className='Form-Field' margin='normal' size='medium' fullWidth sx={{width: '310px'}} />
              <TextField {...register("description")}  error={!!errors?.description} label='Description...' className='Form-Field' margin='dense' multiline rows={5} fullWidth sx={{width: '310px'}} />
              </form>
              <TimeSlotsSection  helperText={timeSlotsHelperText} timeSlots={timeSlotsList} variant='createSlots'/>
              <Button type="submit" text='Create event' size='big' color='primary' onClick={handleSubmit(submitForm)}/>
          
          
            </HCenteredLayout>
          
        
        
    </div>
  )
}
