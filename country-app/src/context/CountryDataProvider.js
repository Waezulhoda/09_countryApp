import React, { createContext, useState, useEffect } from "react";

const CountryDataContext = createContext();

function CountryDataProvider({ children }) {
  const [allCountry, setAllCountry] = useState([]);

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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setAllCountry(sortedCountries(data)));
  }, []);

  return (
    <CountryDataContext.Provider
      value={{allCountry,setAllCountry}}
    >{children}</CountryDataContext.Provider>
  );
}

export {CountryDataProvider,CountryDataContext}