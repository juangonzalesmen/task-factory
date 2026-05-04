const estilos = {
  padding: 0
}


function TodoList({ children }) {
  return (
  <ul style={estilos}>{children}</ul>
);
}

export { TodoList };
