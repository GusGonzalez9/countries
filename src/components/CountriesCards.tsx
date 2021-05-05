export default function CountriesCards(props:any){
    return(
        <div className="CountryCard">
            <div className="CardImg">
                <img src={props.country.flag}  alt="none"></img>
            </div>
            <div className="ContentCard">
                <div className="TitleCard">
                    <h4>{props.country.name}</h4>
                </div>
                <div className="CardDescription">
                  <p> Population: <span>{props.country.population} </span></p>
                    <p>Region: <span>{props.country.region}</span></p>
                    <p>Capital:  <span> {props.country.capital} </span></p>
                </div>
            </div>
        </div>
    )
}