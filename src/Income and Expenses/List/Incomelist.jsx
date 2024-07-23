import React, { useState } from 'react'
import Itemlist from './Newlist/Itemlist';
import './Incomelist.css';

function Incomelist(props) {
    const INEXPlist = props.INEXPlist
    const [curInxp, setCurrentInxp] = useState("Income");
    const filteredList = INEXPlist.filter(l => l.inxp === curInxp);

    return (
        <div>
            <div className="selectdiv">
                <label>
                    <select value={curInxp} onChange={(e) => setCurrentInxp(e.target.value)}>
                        <option value="Income">Income</option>
                        <option value="Expenses">Expenses</option>
                    </select>
                </label>
            </div>
            <div>
                {filteredList.length ===0 ?<div>Not Found</div> : filteredList.map((e)=> (
                <Itemlist
                deleteHandler={props.deleteHandler}
                editHandler={props.editHandler}
                key = {e.id}
                id = {e.id}
                amount = {e.amount}
                category = {e.category}
                inxp = {e.inxp}
                pay = {e.pay}
                />))}
            </div>
        </div>

    )
}

export default Incomelist
