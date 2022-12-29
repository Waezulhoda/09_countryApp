import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CountryDataContext } from '../../context/CountryDataProvider'
import Container from '../Container'
import { Link } from 'react-router-dom'

export default function SingleCountry() {
    let {countryId}=useParams()
    countryId=countryId.split('-').join(' ')
    const {allCountry}=useContext(CountryDataContext)
    const countryData=allCountry.filter((country)=>{
      return country.name.common===countryId
    })[0]
  return (
    <Container className="px-4 py-8">
      <Link to={'/'}>
        <button className='px-8 py-2 shadow-lg text-base font-medium dark:bg-secondary_dark'>&#8592;  Back</button>
        <div className=''>
          
        </div>
      </Link>
      <div>

      </div>
    </Container>
      
  )
}
