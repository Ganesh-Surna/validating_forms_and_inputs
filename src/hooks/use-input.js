import { useState } from "react";

const useInput=(validate)=>{

    const [inputValue,setInputValue]=useState("");
    const [isTouched,setIsTouched]=useState(false);

    const inputValueIsValid=validate(inputValue);
    const hasError=isTouched && !inputValueIsValid;

    const handleBlur=(event)=>{
        setIsTouched(true);
      };
    
    const handleChange=(event)=>{
        setIsTouched(true);
        setInputValue(event.target.value);
      };

    const resetValue=()=>{
        setInputValue("");
        setIsTouched(false);
    };

    return {
        inputValue,
        inputValueIsValid,
        hasError,
        handleBlur,
        handleChange,
        resetValue,
    };


};
export default useInput;