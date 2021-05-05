import logo from '../loupe.png'
import {FilterProps} from '../interfaces/FilterProps'

export default function FilterSearch(props:FilterProps) {

    return (
      
            <div className="FilterSearch">
                <form style={{width:'100%'}}>
                <button><img src={logo} alt='none' style={{ width: '15px' }}></img></button>
                <input type="text" name="search" autoComplete="off" placeholder="Search By Name of Country"> 
                
                </input>
                </form>
            </div>
   
    )
}