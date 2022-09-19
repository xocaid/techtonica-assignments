import  { useState } from "react";
const [userId, setUserId] = useState("");

const handleSubmit  = (e) =>{
  e.preventDefault();
  deleteUser(userId);
};

const DeleteUser = ({deleteUser}) =>{
  return(
    <div>
    <h3>Delete User</h3>
    <form id="delete-user" action="#">
      <fieldset>
        <label>User ID</label>
        <input 
        type="text" 
        id="delete-user-id"
        value = {userId}
        onChange={(e) => setUserId(e.target.value)}
        />
      </fieldset>
      <input type="submit" />
    </form>
  </div>
  )
}
export default DeleteUser;