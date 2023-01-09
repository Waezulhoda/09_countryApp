import React, { createContext, useState, useEffect } from "react";

const CountryDataContext = createContext();

function CountryDataProvider({ children }) {
  const [allCountry, setAllCountry] = useState([]);
  const [isLoading,setLoading]=useState(true)
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

  // if(allCountry.length==0){
  //   console.log(allCountry.length);
  //   setLoading(prev=>!prev)
    // console.log(isLoading);
  // }

  useEffect(() => {
    // console.log('hi from useEffect');
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setAllCountry(sortedCountries(data)))
      setLoading(false)
      
} , []);

  return (
    <CountryDataContext.Provider
      value={{allCountry,isLoading}}
    >{children}</CountryDataContext.Provider>
  );
}

export {CountryDataProvider,CountryDataContext}