//map through the metaList piece of state and generate an li for each List title and pass them the array of listItems as props

// import { useState } from "react";

import ListCard from "./ListCard";

//receive firebase ref as prop from GetListy,
  //use the connection and onValue to map through the data and generate nec lists accordingly

function MetaList(lists) {
  // const [lists, setLists] = useState({});

  return (
    <>
    {/* {
      lists.map((list)=>{
        return <ListCard dataFromFirebase={lists}/>
      })
    } */}
    <ListCard/>
    </>
  );
}

export default MetaList;