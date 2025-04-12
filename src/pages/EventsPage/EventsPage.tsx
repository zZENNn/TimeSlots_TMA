
//import React from 'react'
import './EventsPage.scss'
import Header from '../../components/Header/Header'
import { Card, TextField } from '@mui/material'
import AddButton from '../../components/AddButton/AddButton'
export default function EventsPage() {
  return (
    <>
        <Header headingText='События'/>
        <div className="SearchAndAdd">
          <TextField className='Search' fullWidth/><AddButton color='blue' size='big'/>
        </div>
        <div className="Events">
          <Card variant='outlined'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
          </Card>

          <Card variant='outlined'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
          </Card>
          
          <Card variant='outlined'>
            <b>Заголовок</b>
            <p>Текст наполнения карточки очень длинный и важдный</p>
          </Card>
        </div>
        
    </>
  )
}
