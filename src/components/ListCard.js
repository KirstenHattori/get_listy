//render a title for the List and ListItem components based on the props recieved from metaList

import ListItem from "./ListItem";

function ListCard() {
  return (
    <>
    <ul>
        {
          //map through the props and return a list card for each type of list and pass the array of listItems to ListItem as props
        }
      <li className="listCard">
        <ul className="titleWillBeDynamic">
          <ListItem/>
          
        </ul>
      </li>
    </ul>
    </>
  );
}


export default ListCard;