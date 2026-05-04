import React from "react";

function useLocalStorage(itemName, initialValue) {
  // VARIABLE localStorage
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem(itemName);
  
      let parsedItem;
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
  
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
    }, 2000);
  }, [] );

  const saveStateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  // console.log(item);
  

  return { item, saveStateItem, loading, error };
}

export { useLocalStorage };


// localStorage.removeItem("TODOS_V1");

// const defaulTodos = [
//   { text: "Hacer la compra", completed: false },
//   { text: "Estudiar React", completed: false },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Hacer dormir", completed: true },
//   { text: "Hacer Almorzar", completed: true },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaulTodos));

// Muestra el useEffect
// console.log("log 1");

// // React.useEffect(() => {
// //   console.log("loggggggg 2");
// // })

// // React.useEffect(() => {
// //   console.log("loggggggg 2");
// // }, [])

// React.useEffect(() => {
//   console.log("loggggggg 2");
// }, [totalTodo])

// console.log("log 3");