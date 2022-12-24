//import firebase config info module
//functions as a props bridge between Form.js and MetaList.js by:
    // containing state init and passing it to Form as a prop to be updated by form submit
  // + holds firebase side effect(useEffect) and uses onValue to listen for changes to db.on state change: (re)render MetaList which triggers(re)renders of Lists and ListItems

//import firebase config info
import firebase from './firebase'

function GetListy() {
  console.log(firebase);
  return(
    <>

    </>
  );
}

export default GetListy;