import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../services/orders.service";
const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  const getData = async () => {
    try {
      const data = await getAllOrders();
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
      <div className="card-header">All Orders</div>
      <div className="card-body">
        <p></p>
        <div>
          {orders.length == 0 ? (
            <>
              <div className="vh-100 text-center">No Orders Yet!!</div>
            </>
          ) : (
            orders.map((order) => (
              <div key={order.id}>
                <p>{order.name}</p>
                <p>Quantity: {order.quantity}</p>
                <p>Price: ${order.price.toFixed(2)}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
