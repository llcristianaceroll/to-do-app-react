import React from "react";

/*
const defaultTodos = [
  { text: "Go to the gym", completed: false },
  { text: "Fix bug", completed: false },
  { text: "Study English", completed: false },
];
*/

/* Custom Hook Local Storage, it is like a useState,
   logic to persist data in local storage */

   const useLocalStorage = (itemName, initialValue) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    /* logic of the Hook useEffect to simulate when
       we call an API and we wait for some information */
  
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
        }
        setItem(parsedItem);
        setLoading(false);
        } catch(error){
          setError(error);
        }
      }, 2000);
    },[]);
  
    /* lógica para guardar to-dos */
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
     
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  };

  export default useLocalStorage;