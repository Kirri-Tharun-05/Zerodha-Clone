import React, { useState, useEffect } from "react";
import axios from 'axios'


function Orders() {
  const [allOrders, setallOrders] = useState([]);
  useEffect(() => {
    // axios.get(`${import.meta.env.BACKEND_URL}/allOrders`).then((res)=>{
    //   setallOrders(res.data)
    // })
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/allOrders`).then((res) => {
      console.log("API Response:", res.data);  // Debugging log
      setallOrders(Array.isArray(res.data) ? res.data : []); // Ensure it's always an array
    })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setallOrders([]); // Set empty array on error to prevent crashes
      });
  }, []);
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