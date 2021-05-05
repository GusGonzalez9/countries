
import {FilterProps} from '../interfaces/FilterProps'

export default function FilterByRegion(props:FilterProps) {
    return (
        <div className="FilterByOthers">
        <select placeholder="Filter By Region">
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europa</option>
            <option>Oceania</option>

        </select>
    </div>
    )
}