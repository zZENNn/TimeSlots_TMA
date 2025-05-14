import { Input } from "@mui/material";
import AddButton from "../AddButton/AddButton";
import search_icon from '../../assets/search_icon.svg'
import './SearchBar.scss'
import { Link } from "react-router";

export type SearchBarProps = {
  buttonLink: string
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="SearchAndAdd">
        <Input className='Search' fullWidth disableUnderline startAdornment={<img src={search_icon} width='58px'></img>} autoFocus/>
        <Link to={props.buttonLink}>
          <AddButton color='blue' size='big'/>
        </Link>
        
        
    </div>
  )
}






