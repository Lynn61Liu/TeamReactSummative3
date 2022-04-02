import {TextField} from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";
import useFormControls from './useFormControls'

const inputFieldValues = [
  {
    name: "photo",
    label: "photo",
    id: "my-photo",
type:'file',
  },
  {
    name: "AnimalName",
    label: "AnimalName",
    id: "my-name",
  },
  
  {
    name: "description",
    label: "description",
    id: "my-description",
     multiline: true,
    rows: 10,   
  }
];
export const Add = () => {
  const { handleInputValue, handleFormSubmit,formIsValid,errors } = useFormControls();

  const onSelectFile=(e)=>{
    console.log(e.currentTarget);
    e.preventDefault();

  }
  return (
    <form onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField 
          type={inputFieldValue.type ?? 'text'}
          fullWidth
            key={index}
            onBlur={ handleInputValue}
            // onChange={onSelectFile}
         onChange={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            multiline={inputFieldValue.multiline ?? false}
            rows={inputFieldValue.rows ?? 1}
        autoComplete="none"
        {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}

          />
        );
      })}
   


      <Button
      //  onClick={handleposting}
        type="submit"
        disabled={!formIsValid()}
      >
        posting
      </Button>
    </form>
  )
}


export default Add
