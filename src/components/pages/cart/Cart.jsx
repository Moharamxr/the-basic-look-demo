import React, { useState } from "react";

import CartItems from "./CartItems";

const Cart = () => {

  
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      {isLoggedIn ? (
        <>
          <CartItems />
        </>
      ) : (
        <>
          <h3 className="text-center text-danger fw-bold vh-100">
            LOGIN FIRST
          </h3>
        </>
      )}
    </>
  );
};

export default Cart;
