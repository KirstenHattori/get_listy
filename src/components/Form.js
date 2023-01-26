//bind the form internal state to GetListy's state so that react can micromanage and have controlled components
//prevent form from submitting if there is user error ie.empty inputs.display error message to reflect issue

import { useState } from "react";

import firebase from "../firebase";
import { push, ref, getDatabase } from 'firebase/database';



function Form() {
  const [itemTextInput, setItemTextInput] = useState("");
  const [listTextInput, setListTextInput] = useState("");

  // 1. define a handleChange event handler which will update state every single time the user types within the input with the value of what they have typed
  const handleItemChange = (event) => {

    // grab the value of what is currently within the input as the typing (AKA "change event") occurs!
    // console.log(event.target.value);

    // update state to be equivalent to whatever the user has most recently typed:
    setItemTextInput(event.target.value);

  }

  const handleListChange = (event) => {

    // grab the value of what is currently within the input as the typing (AKA "change event") occurs!
    // console.log(event.target.value);

    // update state to be equivalent to whatever the user has most recently typed:
    setListTextInput(event.target.value);

  }

  // create an object to contain the different lists in firebase 
  const listObject = {listTextInput: { itemTextInput }}

  // 2. define a submit event handler
  // when the form is submitted, prevent the form from refreshing the page
  // take the textInput state value and push it into the database
  const handleSubmit = (event) => {

    event.preventDefault();

    // create a reference to our database
    const db = getDatabase(firebase);
    const dbRef = ref(db);

    push(dbRef, listObject);

    // in order to empty the input, just use the state updater function for the input and update the state value to an empty string:
    setItemTextInput("");
    setListTextInput("");


  }

  return (
    <>
      {/* 2A. define a submit event listener on the form */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userListItem">add to a list</label>
        {/* we MUST TIE THE FORM INPUT value to state using the onChange event listener */}
        {/* 1A. use the state that we've created for this input to subsequently define the value of this input */}
        <input type="text" name="userListItem" id="userListItem" onChange={handleItemChange} value={itemTextInput} />

        <label htmlFor="userListTitle">which list to add to?</label>
        <input type="text" name="userListTitle" id="userListTitle" onChange={ handleListChange} value={listTextInput} />

          {/* ~~~ need to look up particulars of how to do a submit element accessibly */}
        <label htmlFor="submitForm">add</label>
        <input type="submit" value="submitForm" />
      </form>
    </>
  );
}

export default Form;


//issue tracker:
  //can't get the text input value from the list name form element that the user submits to be the name of the object generated in firebase rtdb