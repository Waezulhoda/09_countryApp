import React from 'react'
import { Link } from 'react-router-dom'

export default function Country(props) {
  // console.log(props.country)
  const {region,population,name,flags,capital}=props.country
  const commonName=name.common
  const flag=flags.svg
  const capitalName= capital?capital[0]:'unknown'
  const url=commonName.replace(/\s+/g, '-')

  return (

    
      <div className=' width h-96 my-10 shadow-md mx-8 bg-secondary_light rounded-lg hover:shadow-2xl dark:bg-secondary_dark'>
        <Link to={`/country-details/${url}`}>
          <img src={flag} className='h-1/2 w-80 rounded-t-lg'/>
          <div className='px-4 pt-4 pb-10 '>
            <h1 className='text-xl font-bold my-3'>{commonName}</h1>
            <div>Region: {region}</div>
            <div>Population: {population}</div>
            <div>Capital: {capitalName}</div>
          </div>

        </Link>

      </div>

  )
}
