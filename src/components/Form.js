//bind the form internal state to GetListy's state so that react can micromanage and have controlled components
//prevent form from submitting if there is user error ie.empty inputs.display error message to reflect issue

function Form() {
  return (
    <>
      <form action="">
        <label htmlFor="userListItem">add to a list</label>
        <input type="text" name="userListItem" id="userListItem" />

        <label htmlFor="userListTitle">which list to add to?</label>
        <input type="text" name="userListTitle" id="userListTitle" />

          {/* ~~~ need to look up particulars of how to do a submit element accessibly */}
        <label htmlFor="submitForm">add</label>
        <input type="submit" value="submitForm" />
      </form>
    </>
  );
}

export default Form;