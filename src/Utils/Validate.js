
  export const checkSignUpData = (name, phoneNumber, email, password) => {
  
    const isName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

    const isPhoneNum = /^([+]\d{2})?\d{10}$/.test(phoneNumber);

    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

     
      if (!isName) return "Enter Correct Name";
      if (!isPhoneNum) return "Invalid Contact Number"
      if (!isEmailValid) return "Invalid Email address.";
      if (!isPasswordValid) return "Invalid Password.";

      return null;
  };
  
  export const checkSignInData = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

       if (!isEmailValid) return "Invalid Email address.";
       if (!isPasswordValid) return "Invalid Password.";

    return null;
  };
      
  
