import './EventsPage.scss'
import Header from '../../components/Header/Header'
import { Card, Input } from '@mui/material'
import AddButton from '../../components/AddButton/AddButton'
import search_icon from '../../assets/search_icon.svg'
export default function EventsPage() {
  return (
    <>
        <Header headingText='События'/>
        <div className="SearchAndAdd">
          <Input className='Search' fullWidth disableUnderline startAdornment={<img src={search_icon} width='58px' ></img>} autoFocus/><AddButton color='blue' size='big'/>
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
