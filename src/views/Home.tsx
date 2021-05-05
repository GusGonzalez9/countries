import React,{useEffect, useState} from 'react'
import Filters from './Filters'
import ListCountries from './ListCountries'
import {baseUri} from '../queries/queries'
import axios from 'axios'
export default function Home(){

    const[countries,setCountries] = useState([]) 
    const[filteredCountries,setFilteredCountries] = useState<Object[]>([])
    useEffect(() => {
        async function getCountries() {
           let {data} = await axios.get(baseUri)

           setCountries(data.slice(10,22))
        }
        getCountries()
    },[])
    
    return(
        <div className="Home">
            <Filters countries={countries} setFilteredCountries={setFilteredCountries}/>
            <ListCountries filteredCountries={filteredCountries} countries={countries} />
        </div>
    )
}