import React,{useState,useEffect,useContext} from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Countries from './components/country/Countries'
import SingleCountry from './components/country/SingleCountry'
import ErrorPage from './components/ErrorPage'
import FilterRegions from './components/FilterRegion'
import Search from './components/Search'
export default function App() {
  return (
    <div className='dark:bg-primary_dark dark:text-primary_light'>
      
        <Header/>
        <Search/>

        <Routes>
            <Route exact path='/' element={<Countries />}/>
            <Route path='country-details/:countryId' element={<SingleCountry/>}/>
            <Route path='/*' element={<ErrorPage/>}/>

        </Routes>
    </div>
  )
}
