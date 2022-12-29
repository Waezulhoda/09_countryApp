import React,{useState,useEffect,useContext} from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Countries from './components/country/Countries'
import Country from './components/country/Country'
import { ThemeContext } from './context/ThemeProvider'
import SingleCountry from './components/country/SingleCountry'

export default function App() {
  return (
    <div className='dark:bg-primary_dark dark:text-primary_light'>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Countries/>}/>
            <Route path='/:countryId' element={<SingleCountry/>}/>
        </Routes>
    </div>
  )
}
