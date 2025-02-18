import React,{useState,useEffect} from "react";
import axios from 'axios'

require('dotenv').config();
function Orders() {
  const [allOrders,setallOrders]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.BACKEND_URL}/allOrders`).then((res)=>{
      setallOrders(res.data)
    })
  },[]);
  return (
    <div className="orders">
      <div className="">
        <p>You haven't placed any orders today</p>
        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;