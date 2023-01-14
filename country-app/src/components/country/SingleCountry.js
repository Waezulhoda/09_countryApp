import React, { useContext,useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Container from '../Container'
import { CountryDataContext } from '../../context/CountryDataProvider'
import Currency from './Currency'
import Language from './Language'
import Preloader from '../../context/Preloader'

export default function SingleCountry() {
  const {allCountry}=useContext(CountryDataContext)
  const [singleCountry,setSingleCountry]=useState([])
  let {countryId: countryName}=useParams()
  countryName=countryName.split('-').join(' ')

  let isRender = singleCountry.length>0 ? true : false

  useEffect(()=>
    {fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res=>res.json())
        .then(data=>setSingleCountry(data))
    },[])
  if(isRender){
    var {region,population,name,flags,capital,subregion,tld,currencies,languages,maps,borders}=singleCountry[0]
    var flag=flags.svg
    var capitalName= capital?capital[0]:'unknown'
    console.log(borders);
  }

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/name/BOL')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])



  return (

    <div className='h-screen'>

      {isRender ?
      <Container className="px-4 py-8">
        <Link to={'/'}>
          <button className=' px-8 py-3 mb-10 shadow-lg text-base font-medium dark:bg-secondary_dark'>&#8592;  Back</button>
        </Link>
        <div className='flex justify-evenly	'>
          <img className='w-2/5' src={flag} />
          
          <div className='flex flex-col  w-3/5'>
            
            <div className='flex justify-evenly'>
              <div>
                <h1 className='text-2xl font-bold mb-6'>{name.common}</h1>
                <div className='font-medium text-lg my-2'>Official Name: <span className='font-normal'>{name.official}</span></div>
                <div className='font-medium text-lg my-2'>Population: <span className='font-normal'>{population}</span></div>
                <div className='font-medium text-lg my-2'>Region: <span className='font-normal'>{region}</span></div>
                <div className='font-medium text-lg my-2'>Sub Region: <span className='font-normal'>{subregion}</span ></div>
                <div className='font-medium text-lg my-2'>Capital: <span className='font-normal'>{capitalName}</span></div>
              </div>

              <div className='flex flex-col justify-center pt-6 '>
                <div className='font-medium text-lg my-2'>Top Level Domain: <span className='font-normal'>{tld[0]}</span></div>
                <Currency currencies={currencies}/>
                <Language languages={languages}/>
                <div className='font-medium text-lg my-2'>Google Map: <a className='font-normal border-b-2 hover:text-green-500' href={maps.googleMaps} target="_blank">Link</a></div>

              </div>
            </div>

            <div className='mt-16 ml-16'>
              <span className="font-semibold grow w-8 mb-12">Border Countries: </span>
              <div className=" flex gap-x-2 gap-y-6 flex-wrap mt-10 ">
                {borders ? borders.map(x => {
                    return allCountry.map(({ cca2, cca3, ccn3, cioc, name }) => {
                        if (cca2 === x || cca3 === x || ccn3 === x || cioc === x) {
                            return <Link className=' basis-46 text-center px-8 py-3 shadow-2xl text-base font-medium dark:bg-secondary_dark ' to={`/country-details/${name.common}`} key={name.common} >{name.common}</Link>;
                        }
                    })
                }):'No data'}
              </div>
            </div>
          </div>
        </div> 
      </Container>
      : <Preloader/>}
    </div>
      
  )
}
