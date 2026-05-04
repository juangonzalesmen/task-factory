import React from "react";
import { CreateTodoButton } from "../TodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoTitle } from "../TodoTitle";
import { TodoContext } from "../TodoContext";

const estilosHeader = {
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  margin: "20px auto",
  paddingBottom: "15px",
  borderBottom: "1px solid #E8E8E8",
};

// ESTADOS


function TodoHeader() {

  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <>
    <header style={estilosHeader}>
      <TodoTitle titulo="MIS TAREAS" subtitulo="Organiza tu día con claridad" />
      <div>
        <TodoCounter />
        <CreateTodoButton
          onClick={() => setOpenModal(true)}
          signo="+"
          texto="Nueva Tarea"
        />
      </div>
    </header>
    
    </>
  );
}

export { TodoHeader };
