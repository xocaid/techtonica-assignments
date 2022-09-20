//User Component was  originally on App.js
//Created separate component as per instructions

import { useState } from "react";
//Calling DeleteUser from the DeleteUser component
import DeleteUser from "./deleteUser";

//Mock  users added as per instrusctions
const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  //useState for user/setUsers added as per instructions
  //The default state will display: marlin, nemo, & dory
  //users/setUsers will refer to the mock users & tack on the newUser at the end of the list
  const [users, setUsers] = useState([marlin, nemo, dory]);

  //useState will store the new user(Add User)
  //The original state will be an empty string, this acts similar to placeholder text
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" })
  /*  
  newUser/setNewUser can be broken down more to: 
    const [name, setName] = useState(""); {setName};
    const [is. setId] = useState("");
    const [email, setEmail] = useState("");
    Calling as {set("name")}, {set("email")}, {set("id")}, this is a shorter, condensed version
    */

  //This is associated with the newUser/setNewUser
  //input would be name,email,id
  //target:{value} is retrieving value of variable input by client
  //setNewUser is calling on the original value, which is an empty string
  const set = (input) => {
    return ({ target: { value } }) => {
      setNewUser((originalValues) => ({
        ...originalValues,
        [input]: value,
      }));
    };
  };

  //This is from the instructions for Event Handler for Form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    /*spread operator is adding mock users, and then adds the newUser we add
    at the end of list. Spread operator includes the already existing array*/
    //Logs the newUser when Submit button is clicked
    setUsers([...users, newUser]);//as soon as submit happens, the new entries are added and mapped
    console.log(users);
    //Reset the input fields to empty string on submit
    setNewUser({ name: "", email: "", id: "" });
    //Longer version: setName(""); setId(""); setEmail("");
  };

  //Deletes user logged from users/setUsers
  //This portion comes from the instructions
  const deleteUser = (deleteId) => {
    const newUser = users.filter((i) => i.id !== deleteId);
    setUsers(newUser);
  };

  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {/* Prints out the name & email of Each user & assigns it an index */}
        {/* Map function is placed within an UNORDERED LIST and Map function
        iterates through each user lists it as a <li> and an individual index.
        Displays the name & email of the user.*/}
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, Email: {user.email}, ID#: {user.id}
            </li>
          );
        })}
      </ul>

      <div>
        {/* Added Id & Email fields as per instructions */}
        {/* Each field has to have an onChange event, change is actively happening as we are typing into the text box,
        when that change is happening it changes the state for setNewUser, doesn't do anything until it submits,
        it just registers it*/}
        <h3>Add User</h3>

        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>

            <label>Name: </label>
            <input
              type="text"
              id="add-user-name"
              name="name"
              value={newUser.name}//changes the name; long version value={name}
              onChange={set("name")} //handleChange function
            />

            <label>Email: </label>
            <input
              type="text"
              id="add-user-email"
              name="email"
              value={newUser.email}//changes the email; long version value={email}
              onChange={set("email")} //handleChange function
            />

            <label>User Id: </label>
            <input
              type="text"
              id="add-user-id"
              name="name"
              value={newUser.id}//changes the id; long version value={id}
              onChange={set("id")} //handleChange function
            />

          </fieldset>
          {/* Add more form fields here */}
          {/*Button for SUBMIT BUTTON, value can be named anything*/}
          <input type="submit" value="Add User" />
        </form>
      </div>
{/* DeleteUser Component added to Users Component. deleteUser would be the
props in this situation to use the callback function */}

      <DeleteUser deleteUser={deleteUser} />

    </section>
  );
};
export default Users;