import axios from "axios";

export const contact = async (contactData) => {
    let response;
  try {
     response = await axios.post(
      "https://chicwardrobe-znz5.onrender.com/contact",
      contactData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    sessionStorage.setItem("ContactErrorMessage", "");
    sessionStorage.setItem("SuccessMessage","Message Sent Successfully");
    console.log(response.data)
    return response.data;
  } catch (error) {
    
    console.log(error.response.data.error);
    sessionStorage.setItem('ContactErrorMessage', error.response.data.error);
    throw error;
  }

  
};
