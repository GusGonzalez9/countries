import {ListOfCountries} from '../interfaces/ListCountries'
import CountriesCard from '../components/CountriesCards'
export default function ListCountries(props:ListOfCountries){
    console.log(props.countries)
    return (
        <div className="ListCountries">
            {props.countries.map((country,i) => {

                <CountriesCard key={i} country={country} />
            })}
        </div>
    )
}