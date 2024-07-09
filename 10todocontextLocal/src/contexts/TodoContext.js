// 1 METHOD to export Context 
import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [
        //these are the properties
        {
            id:1,
            todo:"Todo msg",
            completed : false,
        }
    ],
    //these are functionalities
    addTodo:(todo) => {},
    updatedTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider