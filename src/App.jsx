import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Income from './Income and Expenses/Income'
import Incomelist from './Income and Expenses/List/Incomelist'
import { Listcontext } from './ListContext'

let count = 4;

function uniqueId() {
  count = count + 1;
  return count;
}


const UP_INEXPlist = [
  { id: 1, amount: "2000", category: "Appliance", inxp: "Income", pay: "Credit Card" },
  { id: 2, amount: "1500", category: "Appliance", inxp: "Expenses", pay: "Credit Card" },
  { id: 3, amount: "250", category: "Food", inxp: "Expenses", pay: "Cash" },
  { id: 4, amount: "750", category: "Food", inxp: "Income", pay: "Cash" },
];

function reducer(INEXPlist, action){
  switch(action.type){
    case "add_list":
      return [...INEXPlist, action.newList];
    case "delete_list":
      return INEXPlist.filter((e) => e.id !== action.deleteID);
    case "edit_list" :
      const newListitem = [...INEXPlist];

      const idx = INEXPlist.findIndex((e) => e.id === action.editID);
      newListitem[idx] = {...action.list};
      return newListitem;
      default:
  }
}

function App() {

  const [INEXPlist, dispatch] = useReducer(reducer, {}, () => {
    const localList = localStorage.getItem("List");
    if(localList === null) {
      return UP_INEXPlist;
    }

    return JSON.parse(localList)
  });

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(INEXPlist));
  },[INEXPlist]);

  const addListHandler = (newListdata) => {
    const newList = {
      ...newListdata,
      id : uniqueId(),
    };
    dispatch({
      type : "add_list",
      newList : newList,
    })
  };

  const deleteHandler = (id) => {
    dispatch({
      type : "delete_list",
      deleteID : id,
    })
  }

  const editHandler = (id, list) =>{
    dispatch({
      type : "edit_list",
      editID : id,
      list : list,
    })
  }

  return (
  <Listcontext.Provider value={{
    addListHandler : addListHandler,
    deleteHandler : deleteHandler,
    editHandler : editHandler,
  }}>
   <div>
    {isShow?<Income setIsShow={setIsShow}/>:
    <div className='add-button-container'>
      <button className="add-button-container" onClick={() => setIsShow(true)}> ADD NEW LIST </button></div>}
    <hr />
    <Incomelist INEXPlist={INEXPlist}/>
   </div>
  </Listcontext.Provider>
  )
}

export default App
