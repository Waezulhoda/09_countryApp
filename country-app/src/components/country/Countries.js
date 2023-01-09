import React,{useState,useEffect, useContext} from 'react'
import Country from './Country'
import Preloader from '../../context/Preloader'
import { CountryDataContext } from '../../context/CountryDataProvider'

export default function Countries() {
  const {allCountry}=useContext(CountryDataContext)
  // console.log('hi from Counties-component');
  const countries=allCountry.map((country,i)=>{
    return (
      <Country key={i} country={country}/>
      )
    })

  return (
      <div className='flex justify-center items-center flex-wrap '>
        {allCountry.length>0?countries: <Preloader/>}
      </div>

  )
}
