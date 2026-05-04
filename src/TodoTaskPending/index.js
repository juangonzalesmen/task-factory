import "./TodoTaskPending.css";

function TodoTaskPending({text, completed, onClick, onDelete}) {
  return (
    <div className="task-container" onClick={onClick}>
      <input type="checkbox" checked={completed} readOnly/>
      <span className="checkmark"></span>
      <p>{text}</p>
      <div className="task-container-actions">
        <span className="status">listo</span>
        <span className="btn-delete" onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}>
          X
        </span>
      </div>
    </div>
  );
}

export { TodoTaskPending };
