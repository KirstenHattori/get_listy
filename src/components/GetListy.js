//functions as a props bridge between Form.js and MetaList.js by:
// containing state init and passing it to Form as a prop to be updated by form submit
// + holds firebase side effect(useEffect) and uses onValue to listen for changes to db.on state change: (re)render MetaList which triggers(re)renders of Lists and ListItems

//1. import React Hooks
import { useEffect, useState } from 'react';

//import child components
import Form from './Form';
import MetaList from './MetaList';

//2. import firebase config info
import firebase from '../firebase';
// 2a. import necessary modules to complete steps in 4. 
// import { onValue, ref, getDatabase, remove, push } from 'firebase/database';



function GetListy() {
  //3. initiailize piece of state that will hold the data received from firebase db. - will be passed to Form as props for it to update when user submits new list (& list name)
  // const [lists, setLists] = useState([]);
  
  //4. side effect to run on component mount
  //4a. set up firebase db ref and all the boiler plate stuff
  useEffect(()=>{
    // const db = getDatabase(firebase);
    // const dbRef = ref(db);
  })

  console.log(firebase);


  return(
    <>
      <Form/>
      <MetaList/>
    </>
  );
}

export default GetListy;