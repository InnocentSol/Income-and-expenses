import { useState } from 'react'
import './App.css'
import Income from './Income and Expenses/Income'
import Incomelist from './Income and Expenses/List/Incomelist'

let lastId = 4;


const UP_INEXPlist = [
  { id: 1, amount: "2000", category: "Appliance", inxp: "Income", pay: "Credit Card" },
  { id: 2, amount: "1500", category: "Appliance", inxp: "Expenses", pay: "Credit Card" },
  { id: 3, amount: "250", category: "Food", inxp: "Expenses", pay: "Cash" },
  { id: 4, amount: "750", category: "Food", inxp: "Income", pay: "Cash" },
];

function App() {
  const [INEXPlist, setINEXPlist] = useState(UP_INEXPlist);
  const [isShow, setIsShow] = useState(false);

  const addListHandler = (newListdata) => {
    const newList = {
      ...newListdata,
      id : ++lastId,
    };
    setINEXPlist([newList, ...UP_INEXPlist]);
  };

  const deleteHandler = (id) => {
    const newListitem = INEXPlist.filter((e) => e.id !== id);
    setINEXPlist(newListitem)
  }

  const editHandler = (id, list) =>{
    const newListitem = [...INEXPlist];

    const idx = INEXPlist.findIndex((e) => e.id === id);
    newListitem[idx] = {...list};

    setINEXPlist(newListitem);
  }

  return (
   <div>
    {isShow?<Income setIsShow={setIsShow} onAddList ={addListHandler}/>:
    <div className='add-button-container'>
      <button className="add-button-container" onClick={() => setIsShow(true)}> ADD NEW LIST </button></div>}
    <hr />
    <Incomelist editHandler={editHandler} deleteHandler={deleteHandler} INEXPlist={INEXPlist}/>
   </div>
  )
}

export default App
