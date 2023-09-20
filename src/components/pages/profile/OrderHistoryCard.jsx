import React, { useEffect, useState } from "react";
import { getCustomerOrders } from "../../../services/orders.service";
const OrderHistoryCard = () => {
  const [orders, setOrders] = useState([]);
  const getData = async () => {
    try {
      const data = await getCustomerOrders();

      setOrders(data.orders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="card mb-3">
      <div className="card-header">Orders</div>
      <div className="card-body">
        
        <div>
          {orders.length === 0 ? (
            orders.map((order) => (
              <div key={order.id}>
                <p>{order.name}</p>
                <p>Quantity: {order.quantity}</p>
                <p>Price: ${order.price.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <>
            <h3>No Orders Yet!</h3></>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
