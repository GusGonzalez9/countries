import FilterSearch from '../components/FilterSearch'
import FilterByRegion from '../components/FilterByRegion'
import {FilterProps} from '../interfaces/FilterProps'
export default function Filters(props:FilterProps) {

    return (
        <div className="Filter">
         <FilterSearch countries={props.countries} setFilteredCountries={props.setFilteredCountries}/>
         <FilterByRegion countries={props.countries} setFilteredCountries={props.setFilteredCountries}/>
        </div>
    )
}

