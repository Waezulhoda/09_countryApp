import React,{useState,useEffect,useContext} from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Countries from './components/country/Countries'
import Country from './components/country/Country'
import { ThemeContext } from './context/ThemeProvider'
import SingleCountry from './components/country/SingleCountry'
import ErrorPage from './components/ErrorPage'
import Preloader from './context/Preloader'

export default function App() {
  return (
    <div className='dark:bg-primary_dark dark:text-primary_light'>
      
        <Header/>
        <Routes>
            <Route exact path='/' element={<Countries />}/>
            <Route path='country-details/:countryId' element={<SingleCountry/>}/>
            {/* <Route path='/w' element={<Preloader/>}/> */}
            <Route path='/*' element={<ErrorPage/>}/>

        </Routes>
    </div>
  )
}
