import { Input } from "@mui/material";
import AddButton from "../AddButton/AddButton";
import search_icon from '../../assets/search_icon.svg'
import './SearchBar.scss'
export default function SearchBar() {
  return (
    <div className="SearchAndAdd">
        <Input className='Search' fullWidth disableUnderline startAdornment={<img src={search_icon} width='58px'></img>} autoFocus/><AddButton color='blue' size='big'/>
    </div>
  )
}






