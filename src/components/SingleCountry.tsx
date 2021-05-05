import React,{useEffect, useState} from 'react'
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
        <h1>Vista de un pais</h1>
    </div>)
}