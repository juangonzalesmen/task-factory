import React from "react";
import { TodoSearch } from "../TodoSearch";
import { TodoHeader } from "../TodoHeader";
import { TodoTaskPending } from "../TodoTaskPending";
import { TodoList } from "../TodoList";
import { TodoMain } from "../TodoMain";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { TodoContext } from "../TodoContext";
import { TodoModal } from "../TodoModal";

function AppUI() {
  const { loading, error, searchTodos, actualizarTodo, deleteTodo, openModal } = React.useContext(TodoContext);
  // console.log("renderiza 2");

  return (
    <div>
      {/* <TodoHeader /> */}
      <TodoHeader />
      <TodoSearch />
      {/* <TodoMain /> */}
      {openModal && <TodoModal />}
      
          <TodoList>
            {loading && <TodoLoading />}
            {error && <TodoError />}
            {!loading && !error && searchTodos.length === 0 && <TodoMain />}
            {searchTodos.map((todo) => (
              <TodoTaskPending
                onClick={() => {
                  actualizarTodo(todo.text);
                }}
                onDelete={() => deleteTodo(todo.text)}
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
    </div>
  );
}

export { AppUI };
