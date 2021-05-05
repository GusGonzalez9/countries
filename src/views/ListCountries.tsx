import CountriesCard from "../components/CountriesCards";
import { Link } from "react-router-dom";
export default function ListCountries(props: any) {
    return (
    <div className="ListCountries">
      {props.countries.map((country: any, i: Number) => {
        return (
          <Link style={{textDecoration:'none', color:'black'}} to={`/country/${parseInt(country.callingCodes[0])}`}>
            <CountriesCard key={i} country={country} />
          </Link>
        );
      })}
    </div>
  );
}
