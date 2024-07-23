import React, { useState } from 'react'
import "./Income.css"

function Income(props) {
    const [currentAmount, setCurrentAmount] = useState ("");
    const [currentCategory, setCurrentCategory] = useState ("");
    const [currentInxp, setCurrentInxp] = useState ("Income");
    const [currentPay, setCurrentPay] = useState ("Cash");

    const amountChangeHandler = (event) => {
        setCurrentAmount(event.target.value);
    };
    const categoryChangeHandler = (event) => {
        setCurrentCategory(event.target.value);
    };
    const inxpChangeHandler = (event) => {
        setCurrentInxp(event.target.value);
    };
    const payChangeHandler = (event) => {
        setCurrentPay(event.target.value);
    };

    const SubmitHandler = (event) => {
        event.preventDefault();
        const newList = {
            amount : currentAmount,
            category : currentCategory,
            inxp : currentInxp,
            pay : currentPay,
        };

        props.onAddList(newList);

        setCurrentAmount("");
        setCurrentCategory("");
        setCurrentInxp("Income");
        setCurrentPay("Cash");
        props.setIsShow(false);
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className="ListContainer">
                <div className="ListInput">
                    <label>Amount</label>
                    <input type="text" onChange={amountChangeHandler} value={currentAmount}/>
                </div>
                <div className="ListInput">
                    <label>Category</label>
                    <input type="text" onChange={categoryChangeHandler} value={currentCategory}/>
                </div>
                <div className="ListInput">
                    <label>Income/Expenses</label>
                    <select onChange={inxpChangeHandler} value={currentInxp}>
                        <option value="Income">Income</option>
                        <option value="Expenses">Expenses</option>
                    </select>
                </div>
                <div className="ListInput">
                    <label>Payment</label>
                    <select onChange={payChangeHandler} value={currentPay}>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                    </select>
                </div>
                <div className="SubmitButton">
                    <button type="submit">Add List</button>
                </div>
                <div className="SubmitButton">
                    <button onClick={() => props.setIsShow(false)} type="button">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default Income
