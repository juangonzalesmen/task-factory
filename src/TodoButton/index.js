import "./TodoButton.css"


function CreateTodoButton({signo, texto, estilos, onClick, disabled, type}) {
  return (
    <button className="btn-nuevTarea" style={estilos} onClick={onClick} disabled={disabled} type={type}>
      <span className="btn-mas">{signo}</span> {texto}
    </button>
  );
}

export { CreateTodoButton };