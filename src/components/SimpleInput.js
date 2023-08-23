

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

const nameValidateFunction=(inputVal)=>{
  return inputVal.trim() !== "";
};

const {
      inputValue:name, 
      inputValueIsValid:nameValid, 
      hasError:nameInputInvalid, 
      handleBlur:handleNameBlur, 
      handleChange:handleNameChange, 
      resetValue:resetName
} = useInput(nameValidateFunction);

const emailValidateFunction=(inputValue)=>{
  return inputValue.includes("@");
}

const {
      inputValue:email, 
      inputValueIsValid:emailValid, 
      hasError:emailInputInvalid, 
      handleBlur:handleEmailBlur, 
      handleChange:handleEmailChange, 
      resetValue:resetEmail
} = useInput(emailValidateFunction);


  // const [name,setName]=useState("");
  // const [nameTouched,setNameTouched]=useState(false);
  
  // const [email,setEmail]=useState("");
  // const [emailTouched,setEmailTouched]=useState(false);

  // const nameValid=name.trim() !== "";
  // const nameInputInvalid=nameTouched && !nameValid;

  // const emailValid= email.includes("@");
  // const emailInputInvalid= emailTouched && !emailValid;

  let formIsValid=false;

  if(nameValid && emailValid){
    formIsValid=true;
  }

  const handleSubmit=(event)=>{
    event.preventDefault();

    if(!nameValid || !emailValid){
      return;
    }

    console.log(name);
    console.log(email);

    // setName("");
    // setNameTouched(false);
    resetName();

    // setEmail("");
    // setEmailTouched(false);
    resetEmail();

  };

  // const handleNameBlur=(event)=>{
  //   setNameTouched(true);
  // };

  // const handleNameChange=(event)=>{
  //   setName(event.target.value);
  // };

  // const handleEmailBlur=(event)=>{
  //   setEmailTouched(true);
  // };

  // const handleEmailChange=(event)=>{
  //   setEmail(event.target.value);
  // };

  const nameClassNames=nameInputInvalid ? "form-control invalid" : "form-control" ;

  const emailClassNames=emailInputInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameClassNames}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onBlur={handleNameBlur} onChange={handleNameChange} />
        {nameInputInvalid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={emailClassNames}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onBlur={handleEmailBlur} onChange={handleEmailChange} />
        {emailInputInvalid && <p className="error-text">Email must contain @</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
