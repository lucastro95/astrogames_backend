import React from "react";
import { SearchBarWrapper } from "./SearchBarStyles";

const SearchBar = ({ value, setValue, handleSubmit }) => {
  return (
    <SearchBarWrapper>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Ingrese el nombre de la categoría..."
      />
      <button onClick={(e) => handleSubmit(e, value)}>
        Buscar
      </button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
