import { useState } from "react";
import Countries from "./country/Countries";
import React,{useEffect, useContext} from 'react'
import { CountryDataContext } from "../context/CountryDataProvider";
const FilterRegions = (props) => {
  const {allCountry,setAllCountry}=useContext(CountryDataContext)
  const [isVisible, setVisibility] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");
  const regions = [
    {
      label: "All",
      name: "all",
    },
    {
      label: "Africa",
      name: "africa",
    },
    { label: "Americas", name: "americas" },
    {
      label: "Asia",
      name: "asia",
    },
    { label: "Europe", name: "europe" },
    { label: "Oceania", name: "oceania" },
  ];

  const fetchRegion = async (regionName) => {
    if (regionName === "all") {
      const url = `https://restcountries.com/v3.1/all`;
      const response = await fetch(url);
      const data = await response.json();
      setAllCountry(data);
    } else {
      const url = `https://restcountries.com/v3.1/region/${regionName}`;
      const response = await fetch(url);
      const data = await response.json();
      setAllCountry(data);
    }
  };
  const addDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };
  const removeDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };
  const temp=isVisible ? "active-regions select-region" : "select-region"

  return (
    <section
      // className="select-region"
      className={temp}
      id="regions"
    >
      <summary onClick={(e) => addDropdown(e)}>
        {activeRegion === "All" || !activeRegion
          ? "Filter by Region"
          : activeRegion}
      </summary>
      {isVisible ? (
        <div className="region-list">
          {regions.map((region) => (
            <li
              onClick={() => {
                fetchRegion(region.name);
                setActiveRegion(region.label);
                removeDropdown();
              }}
              value={region.name}
              key={region.label}
            >
              {region.label}
            </li>
          ))}
        </div>
      ) : null}
    </section>
  );
};
export default FilterRegions;