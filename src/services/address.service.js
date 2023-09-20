import axios from "axios";

export const getAddresses = async () => {
  try {
    let authToken = sessionStorage.getItem("authToken");
    console.log("get addresses running");
    sessionStorage.setItem("loading", "true");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/address",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    const addresses = axiosResponse.data;
    sessionStorage.setItem("loading", "false");
    console.log("Get addresses Finished");
    console.log("addresses",addresses);
    return addresses;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAddressById = async (id) => {
  try {
    console.log("get address by id running");
    let authToken = sessionStorage.getItem("authToken");
    const response = await axios.get(
      `https://chicwardrobe-znz5.onrender.com/address/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log("Get address Finished");
    const address = response.data;
    console.log(address)
    return address;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const addNewAddress = async (updatedAddress) => {
  try {
    const authToken = sessionStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("addressLine", updatedAddress.addressLine);
    formData.append("country", updatedAddress.country);
    formData.append("city", updatedAddress.city);
    formData.append("state", updatedAddress.state);
    formData.append("postalCode", updatedAddress.postalCode);
    formData.append("phone", updatedAddress.phone);

    const response = await axios.post(
      `https://chicwardrobe-znz5.onrender.com/address`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Address Added successfully");
    sessionStorage.setItem('AddFormError', '');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Adding Address:", error);
    sessionStorage.setItem('AddFormError', error.response.data.error);
    throw error;
  }
};

export const updateAddress = async (id,updatedAddress) => {
  try {
    console.log("Updating Address:", id);
    const authToken = sessionStorage.getItem("authToken");
    console.log(updatedAddress);

    const formData = new FormData();
    formData.append("addressLine", updatedAddress.addressLine);
    formData.append("country", updatedAddress.country);
    formData.append("city", updatedAddress.city);
    formData.append("state", updatedAddress.state);
    formData.append("postalCode", updatedAddress.postalCode);
    formData.append("phone", updatedAddress.phone);

    const response = await axios.put(
      `https://chicwardrobe-znz5.onrender.com/address/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Address Updated successfully");
    sessionStorage.setItem('EditFormError', '');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Updated Address:", error);
    sessionStorage.setItem('EditFormError', error.response.data.error);
    throw error;
  }
};


export const deleteAddress = async (id) => {
  console.log("Deleting Address:", id);

  try {
    const authToken = sessionStorage.getItem("authToken");
   
    console.log(id);

    const response = await axios.delete(
      `https://chicwardrobe-znz5.onrender.com/address/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        }
      }
    );

    console.log("Address deleted successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting Address:", error);
  }
};
