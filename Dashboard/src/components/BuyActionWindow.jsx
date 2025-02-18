import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

import GeneralContext from './GeneralContext';
import './BuyActionWindow.css';

function BuyActionWindow({uid}){
    // Here uid is name of the Stock
    const [stockQuantity,setstockQuantity]=useState(1);
    const [stockPrice,setstockPrice]=useState(0.0);

    const handleBuyClick=()=>{
        axios.post(`${BACKEND_URL}/newOrder`,{
            name: uid,
            qty:stockQuantity,
            price: stockPrice,
            mode: 'Buy'
        })
        GeneralContext.closeBuyWindow();
    }
    const handleCancelClick=()=>{
        GeneralContext.closeBuyWindow();
    };
    return (
        <div className="contanerClass" id='buy-window' draggable='true'>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty"  onChange={(e)=>{setstockQuantity(e.target.value)}}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step='0.05' onChange={(e)=>{setstockPrice(e.target.value)}}/>
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required 140.65</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
                    <Link to="" className="btn btn-gray" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default BuyActionWindow;