import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // ESTADOS

  const {
    item: todos,
    saveStateItem: saveStateTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("Los usuarios buscan todo de: " + searchValue);

  const [openModal, setOpenModal] = React.useState(false);

  // ESTADOS DERIVADOS

  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const totalTodo = todos.length;

  const searchTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  //Array copia ESTADOS

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveStateTodo(newTodos);
  };

  const actualizarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveStateTodo(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveStateTodo(newTodos);
    // console.log("si llega el click en delete");
  };
  // console.log(`este es un array copia: ${JSON.stringify(newTodos)}`);
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodo,
        totalTodo,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
        searchTodos,
        actualizarTodo,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
