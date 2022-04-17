import { useState } from "react";

const useInputValue = () => {

  const [userInfo, setUserInfo] = useState({
    email:'',
    password:'',
    confirmPassword:''
  });
  
  const getEmail = (e) => {

/* Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ...
Character . */
const rexp = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    const validEmail =rexp.test(e.target.value);
  }

    

  return {
    userInfo
   
  }
};

export default useInputValue;
