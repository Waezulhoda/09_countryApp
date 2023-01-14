import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegion";

const Search = (props) => {
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
          onChange={(e) => props.searchCountries(e.target.value)}
        ></input>
      </section>
      <FilterRegions setCountries={props.setCountries} />
    </article>
  );
};

export default Search;