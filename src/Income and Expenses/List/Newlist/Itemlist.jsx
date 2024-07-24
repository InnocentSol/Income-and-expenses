import React, { useContext, useState } from 'react'
import './Itemlist.css'
import { Listcontext } from '../../../ListContext';

function Itemlist(props) {
    const ctx = useContext(Listcontext);
    const [isEdit, setIsEdit] = useState(false);
    const [curAmount,setCurAmount] = useState("");
    const [curCategory,setCurCategory] = useState("");
    const [curInxp,setCurInxp] = useState("");
    const [curPay,setCurPay] = useState("");

    const onClickEdit = () => {
        {   setIsEdit(true)
            setCurAmount(props.amount)
            setCurCategory(props.category)
            setCurInxp(props.inxp)
            setCurPay(props.pay)
        } 
    }

    const onClickDone = () => {
        const editValues = {
            amount : curAmount,
            category : curCategory,
            inxp : curInxp,
            pay : curPay,
        };
        ctx.editHandler(props.id, editValues);
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <div className='ListItem'>
                <input placeholder='Amount' className='edit-input' 
                value={curAmount} onChange={(e) => setCurAmount(e.target.value)}/>
                <input placeholder='Category' className='edit-input' 
                value={curCategory} onChange={(e) => setCurCategory(e.target.value)}/>
                <select className='edit-select' value={curInxp} onChange={(e) => setCurInxp(e.target.value)}>
                    <option value="Income">Income</option>
                    <option value="Expenses">Expenses</option>
                </select>
                <select className='edit-select' value={curPay} onChange={(e) => setCurPay(e.target.value)}>
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
                <button onClick={onClickDone} className='btn btn-success'>Done</button>
                <button onClick={() => setIsEdit(false)} className='btn btn-primary'>Cancel</button>
            </div>
        )
    }
    
    return (
        <div className="ListItem">
            <div>{props.amount}</div>
            <div>{props.category}</div>
            <div>{props.inxp}</div>
            <div>{props.pay}</div>
            <button onClick={onClickEdit} className='btn btn-warning'>Edit</button>
            <button onClick={() => ctx.deleteHandler(props.id)} className='btn btn-danger'>Delete</button>
        </div>
    )
}

export default Itemlist
