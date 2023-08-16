import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, Geo_Api_Ulr } from "../api";

export function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  function hnadelOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  function loadOptions(inputValue) {
    return fetch(
      `${Geo_Api_Ulr}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data?.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}  ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container">
      <AsyncPaginate
        placeholder="Search For City"
        debounceTimeout={600}
        value={search}
        onChange={hnadelOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}
