import React,{useState,useEffect, useContext} from 'react'
import Country from './Country'
import { CountryDataContext } from '../../context/CountryDataProvider'

export default function Countries() {
  const {allCountry,setAllCountry}=useContext(CountryDataContext)

  const countries=allCountry.map((country,i)=>{
    return (
      <Country key={i} country={country}/>
      )
    })

  return (
      <div className='flex justify-center items-center flex-wrap '>
        {countries}
      </div>

  )
}
