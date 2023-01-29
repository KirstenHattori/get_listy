//bind the form internal state to GetListy's state so that react can micromanage and have controlled components
//prevent form from submitting if there is user error ie.empty inputs.display error message to reflect issue

// import { useState } from "react";

// import firebase from "../firebase";
// import { push, ref, getDatabase } from 'firebase/database';



function Form({instruction}) {
  console.log('form has rendered');

  return (
    <>
      {/* 2A. define a submit event listener on the form */}
      <form action="" >
        {/* onSubmit = { handleSubmit } */}
        <label htmlFor="userListItem">{instruction}</label>
        {/* we MUST TIE THE FORM INPUT value to state using the onChange event listener */}
        {/* 1A. use the state that we've created for this input to subsequently define the value of this input */}
        <input type="text" name="userListItem" id="userListItem" />

          {/* ~~~ need to look up particulars of how to do a submit element accessibly */}
        <label htmlFor="add"></label>
        <input type="submit" value="add" />
      </form>
    </>
  );
}

export default Form;


//issue tracker:
  //can't get the text input value from the list name form element that the user submits to be the name of the object generated in firebase rtdb