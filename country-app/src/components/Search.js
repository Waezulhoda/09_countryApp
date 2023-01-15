import { FaSearch } from "react-icons/fa";
import React,{useState,useEffect, useContext} from 'react'
import FilterRegions from "./FilterRegion";
import { CountryDataContext } from "../context/CountryDataProvider";
const Search = (props) => {
  const {allCountry,setAllCountry}=useContext(CountryDataContext)

  function sortedCountries(arr) {
    return arr.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
  }
  // e.target.value
  function searchCountries(e){
    if(e.target.value){
      fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
          .then(res=>res.json())
          .then(data=>setAllCountry(data))
          .catch(error => console.log(error) );
    }
    else{
      fetch(`https://restcountries.com/v3.1/all`)
          .then(res=>res.json())
          .then(data=>setAllCountry(sortedCountries(data)))
    }
  }
  return (
    <article className="search-section ">
      <section className="input-block bg-secondary_light shadow dark:bg-secondary_dark">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={props.searchInput}
          onChange={(e)=>{searchCountries(e)}}
        ></input>
      </section>
      <FilterRegions setCountries={props.setCountries} />
    </article>
  );
};

export default Search;