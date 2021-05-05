import {useEffect, useState} from 'react'
import CountriesCards from './CountriesCards'
import axios from 'axios'
import {querySingleCountry} from '../queries/queries'
export default function SingleCountry(props:any)  {
   
    const[country,setCountry] = useState('')
    useEffect(() => {
        async function getSingleCountry() {
            const route = querySingleCountry(props.country)
            const countryData: any = await axios.get(route)
            setCountry(countryData.data[0])
        }
        getSingleCountry()

    },[])

    return (
        console.log(country),
    <div>

        <CountriesCards country={country}/>
    </div>)
}