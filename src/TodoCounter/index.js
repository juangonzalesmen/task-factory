import React from "react";
import { TodoContext } from "../TodoContext";

const estilosContainerTodo = {
  display: "flex",
  gap: "10px",
};

const estilosLetras = {
  fontFamily: "DM Sans, sans-serif",
  fontSize: "0.6rem",
  marginBottom: "7px",
  padding: "2px 8px",
  borderRadius: "20px",
};

const estilosTotal = {
  background: "#f1f0eb",
  color: "#6B6B6B",
  border: "0.5px solid #E0E0E0",
};

const estilosCompleted = {
  background: "#EAF3DE",
  color: "#3B6D11",
  border: "0.5px solid #C0DD97",
};

function TodoCounter() {
  const { completedTodo, totalTodo } = React.useContext(TodoContext);
  // console.log(completedTodo,totalTodo);
  return (
    <div style={estilosContainerTodo}>
      <div style={{ ...estilosLetras, ...estilosTotal }}>{totalTodo} tareas</div>
      <div style={{ ...estilosLetras, ...estilosCompleted }}>
        {completedTodo} listas
      </div>
    </div>
  );
}

export { TodoCounter };
