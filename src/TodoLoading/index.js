import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="skeleton-container">
      <p>cargando...</p>
      <div className="task-skeleton">
        <span className="sk check-skeleton"></span>
        <span className="sk text-skeleton w90"></span>
        <span className="sk status-skeleton"></span>
      </div>
      <div className="task-skeleton">
        <span className="sk check-skeleton"></span>
        <span className="sk text-skeleton w60"></span>
        <span className="sk status-skeleton"></span>
      </div>
      <div className="task-skeleton">
        <span className="sk check-skeleton"></span>
        <span className="sk text-skeleton w55"></span>
        <span className="sk status-skeleton"></span>
      </div>
      <div className="task-skeleton">
        <span className="sk check-skeleton"></span>
        <span className="sk text-skeleton w45"></span>
        <span className="sk status-skeleton"></span>
      </div>
      <div className="task-skeleton">
        <span className="sk check-skeleton"></span>
        <span className="sk text-skeleton w70"></span>
        <span className="sk status-skeleton"></span>
      </div>
    </div>
  );
}

export { TodoLoading };
