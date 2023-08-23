// import { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  // const [fName,setfName]=useState("");
  // const [fNameIsTouched,setfNameIsTouched]=useState(false);
  // const fNameIsValid=fName.trim().length>0;
  // const fNameHasError=fNameIsTouched && !fNameIsValid;
  const { 
    inputValue:fName,
    inputValueIsValid:fNameIsValid,
    hasError:fNameHasError,
    handleBlur:handlefNameBlur,
    handleChange:handlefNameChange,
    setTouchedFun:setfNameTouchedFun,
    resetValue:resetfName,
  }=useInput((inputVal)=>inputVal.trim().length>0);


  // const [lName,setlName]=useState("");
  // const [lNameIsTouched,setlNameIsTouched]=useState(false);
  // const lNameIsValid=lName.trim().length>0;
  // const lNameHasError=lNameIsTouched && !lNameIsValid;
  const {
    inputValue:lName,
    inputValueIsValid:lNameIsValid,
    hasError:lNameHasError,
    handleBlur:handlelNameBlur,
    handleChange:handlelNameChange,
    setTouchedFun:setlNameTouchedFun,
    resetValue:resetlName,
  }=useInput((inputVal)=>inputVal.trim().length>0);


  // const [email,setEmail]=useState("");
  // const [emailIsTouched,setEmailIsTouched]=useState(false);
  // const emailIsValid=email.includes("@");
  // const emailHasError=emailIsTouched && !emailIsValid;
  const {
    inputValue:email,
    inputValueIsValid:emailIsValid,
    hasError:emailHasError,
    handleBlur:handleEmailBlur,
    handleChange:handleEmailChange,
    setTouchedFun:setEmailTouchedFun,
    resetValue:resetEmail,
  }=useInput((inputVal)=>inputVal.includes("@"));
  

  let formIsValid=false;

  if(fNameIsValid && lNameIsValid && emailIsValid){
    formIsValid=true;
  }

  // const handlefNameChange=(event)=>{
  //   setfNameIsTouched(true);
  //   setfName(event.target.value);
  // };
  // const handlefNameBlur=(event)=>{
  //   setfNameIsTouched(true);
  // };


  // const handlelNameChange=(event)=>{
  //   setlNameIsTouched(true);
  //   setlName(event.target.value);
  // };
  // const handlelNameBlur=(event)=>{
  //   setlNameIsTouched(true);
  // };


  // const handleEmailChange=(event)=>{
  //   setEmailIsTouched(true);
  //   setEmail(event.target.value);
  // };
  // const handleEmailBlur=(event)=>{
  //   setEmailIsTouched(true);
  // };


  const handleSubmit=(event)=>{
    event.preventDefault();

    // setfNameIsTouched(true);
    setfNameTouchedFun();

    // setlNameIsTouched(true);
    setlNameTouchedFun();

    // setEmailIsTouched(true);
    setEmailTouchedFun();

    if(!fNameIsValid || !lNameIsValid || !emailIsValid){
      return;
    }

    console.log(fName);
    console.log(lName);
    console.log(email);

    // setfName("");
    // setfNameIsTouched(false);
    resetfName();

    // setlName("");
    // setlNameIsTouched(false);
    resetlName();

    // setEmail("");
    // setEmailIsTouched(false);
    resetEmail();
  };


  return (
    <form onSubmit={handleSubmit} >
      <div className='control-group'>
        <div className={`form-control ${fNameHasError ? "invalid" : ""}`}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' value={fName} onBlur={handlefNameBlur} onChange={handlefNameChange} />
          {fNameHasError && <p className="error-text">Enter a valid First Name!</p>}
        </div>
        <div className={`form-control ${lNameHasError ? "invalid" : ""}`}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' value={lName} onBlur={handlelNameBlur} onChange={handlelNameChange} />
          {lNameHasError && <p className="error-text">Enter a valid Last Name!</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={email} onBlur={handleEmailBlur} onChange={handleEmailChange} />
        {emailHasError && <p className="error-text">Enter a valid Email</p>}
      </div>
      <div className='form-actions'>
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
