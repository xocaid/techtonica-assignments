//DeleteUser Component was originally on App.js

import { useState } from "react";
//deleteUserCallback is a props to pass information to the parent
const DeleteUser = ({ deleteUserCallback }) => {
  //useState for deleteId/setDeleteId to grab user Id information for delete user you want to delete
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    //Grabs the inserted ID value by client
    deleteUserCallback(deleteId);
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