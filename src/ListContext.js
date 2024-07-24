import { createContext } from "react";

export const Listcontext = createContext({
    addListHandler : (newListdata) => {},
    deleteHandler : (id) => {},
    editHandler : (id, list) => {},
});