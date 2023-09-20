import axios from "axios";

export const login = async (loginData) => {
  try {
    const response = await axios.post(
      'https://chicwardrobe-znz5.onrender.com/auth/login',
      loginData,
      {
        headers: {
          'Content-Type': 'application/json',
          
        }
      }
    );
    sessionStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(loginData));
    sessionStorage.setItem('LoginErrorMessage', '');
    sessionStorage.setItem('authToken',response.data.token);
    sessionStorage.setItem('role',response.data.role)

    console.log(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
    sessionStorage.setItem('LoginErrorMessage', error.response.data.error);
    sessionStorage.setItem('authToken','')
    throw error;
  }
};

export const register = async (registerData) => {
  let response;
  try {
     response = await axios.post(
      'https://chicwardrobe-znz5.onrender.com/auth/register',
      registerData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    sessionStorage.setItem('RegisterErrorMessage', '');
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
    sessionStorage.setItem('RegisterErrorMessage', error.response.data.error);
    throw error;
  }
};
