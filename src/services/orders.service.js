import axios from "axios";

export const getAllOrders = async () => {
  try {
    let authToken = sessionStorage.getItem("authToken");
    console.log("get allOrders running");
    sessionStorage.setItem("loading", "true");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/orders/all",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    const orders = axiosResponse.data;
    sessionStorage.setItem("loading", "false");
    console.log("Get all orders Finished");
    console.log(orders);
    return orders;
  } catch (error) {
    console.error(error);
    
  }
};

export const getCustomerOrders = async () => {
  try {
    let authToken = sessionStorage.getItem("authToken");
    console.log("get orders running");
    sessionStorage.setItem("loading", "true");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/orders",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    const orders = axiosResponse.data;
    sessionStorage.setItem("loading", "false");
    console.log("Get orders Finished");
    console.log(orders);
    return orders;
  } catch (error) {
    console.error(error);
    
  }
};
