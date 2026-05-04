import React from "react";
import { CreateTodoButton } from "../TodoButton";
import { TodoTitle } from "../TodoTitle";
import { TodoContext } from "../TodoContext";
import "./TodoModal.css";

const estilo = {
  padding: "8px 50px",
};

function TodoModal() {

const [nothingText, setNothingText] = React.useState("");
const { setOpenModal, addTodo } = React.useContext(TodoContext);

// Funcion personalizada llamada onSubmit para pasarsela a onSubmit
const onSubmit = (event) => {
  event.preventDefault();
  // console.log(nothingText);
  addTodo(nothingText);
  setOpenModal(state => !state);
};

const onCancel = () => {
  setOpenModal(state => !state);
};

const onChangeText = (e) => {
  setNothingText(e.target.value);
};

  return (
    <div className="container-modal-principal">
      <div className="modal-container-info">
        <TodoTitle
          titulo="Nueva Tarea"
          subtitulo="Describe lo que necesitas hacer"
        />
        <form onSubmit={onSubmit}>
        <textarea
          className="textArea"
          placeholder="Ej: Revisar el informe mensual..."
          value={nothingText}
          onChange={onChangeText}
        ></textarea>
        <div className="btn-container">
          <CreateTodoButton type={"button"}  texto="Cancelar" onClick={onCancel} />
          <CreateTodoButton estilos={estilo} texto="Agregar tarea" disabled={!nothingText.trim()} />
        </div>
        </form>
      </div>
    </div>
  );
}

export { TodoModal };
