const uri:string ='https://restcountries.eu/rest/v2'

export const baseUri : string = `${uri}/all`

export function querySingleCountry (CountryCallingCode:Number): string{
    const callingCode:string= `${uri}/callingcode/${CountryCallingCode}`
   return callingCode
}


