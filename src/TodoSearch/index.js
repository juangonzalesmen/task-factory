import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {

  const { searchValue, setSearchValue  } = React.useContext(TodoContext);


  return (
    <div className="inputSearch-container">
      <input
        className="inputSearch"
        placeholder="Buscar Tarea"
        value={searchValue}
        onChange={(event) => {
          console.log(event.target.value);
          
          setSearchValue(event.target.value);
          // console.log('Evento en el componente search');
          // console.log(event.target);
          // console.log(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
