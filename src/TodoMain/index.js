import "./TodoMain.css";
import checkIcon from "../assets/iconCheck.svg";

function TodoMain() {
  return (
    <main className="main-container">
      <div className="noInfo-container">
        <img src={checkIcon} alt="Check" />
        <h3 className="main-title">Sin Tareas aún</h3>
        <p className="main-subtitle">Presiona "Nueva tarea" para comenzar</p>
      </div>
    </main>
  );
}

export { TodoMain };
