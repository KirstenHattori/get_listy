//functions as a props bridge between Form.js and MetaList.js by:
// containing state init and passing it to Form as a prop to be updated by form submit
// + holds firebase side effect(useEffect) and uses onValue to listen for changes to db.on state change: (re)render MetaList which triggers(re)renders of Lists and ListItems

// //1. import React Hooks
// import { useEffect, useState } from 'react';
// //useState

// //import child components
// import Form from './Form';
// import MetaList from './MetaList';

// //2. import firebase config info
// import firebase from '../firebase';
// // 2a. import necessary modules to complete steps in 4. 
// import { onValue, ref, getDatabase } from 'firebase/database';
// //, remove, push


function GetListy() {

  //initialize piece of state to control user inputs in the form
    //pass the 
  // handle submit event of form, 
    //prevent default,
    //capture the user input values
    //update state with the new values
    //push user values to firebase


  return(
    <>
      <Form/>

      <MetaList />
    </>
  );
}

export default GetListy;