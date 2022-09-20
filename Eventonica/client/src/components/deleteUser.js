//DeleteUser Component was originally on App.js

import { useState } from "react";
//deleteUser is the props here
//passes the function const deleteUser on user.js as a prop
const DeleteUser = ({ deleteUser }) => {
  //useState for deleteId/setDeleteId to 
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    //Calls the useState deleteId/setDeleteId
    //deleteUser is the props
    deleteUser(deleteId);
    //added to reset text field to empty string
    setDeleteId("");
  };

  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleDelete}>
        <fieldset>

          {/* Deletes the user by ID */}
          <label>User ID: </label>

          <input
            type="text"
            id="delete-user-id"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />

        </fieldset>
        <input type="submit" value="Delete User" />
      </form>
    </div>
  )
}

export default DeleteUser;