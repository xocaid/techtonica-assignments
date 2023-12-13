import { useState, useEffect } from "react";
//Calling DeleteUser Component
import DeleteUser from "./deleteUser";
import trash from "../icons/trash.png";
import edit from '../icons/edit.png';

const Users = () => {
  const getUsers = async () => {
    const response = await fetch('http://localhost:4000/users');
    const user = await response.json();
    setUsers(user);
  };
  useEffect(() => {
    getUsers();
  }, []);

  //users/setUsers will refer to the mock users & tack on the newUser at the end of the list
  const [users, setUsers] = useState([]);

  //useState will store the new user(Add User)
  //The original state will be an empty string, this acts similar to placeholder text
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" })

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

  //ADD NEW USER - EVENT HANDLER
  const handleAddNewUser = async (e) => {
    e.preventDefault();
    //const newUser = { id, name, email};
    const response = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    const content = await response.json();
    setUsers([...users, content]);
    setNewUser({ name: "", email: "", id: "" });
  };

  //DELETE USER - EVENT HANDLER
  const handleDeleteUser = async (deleteUserCallback) => {
    const response = await fetch(`http://localhost:4000/users/${deleteUserCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteUserFunction = users.filter((i) => i.id !== deleteUserCallback);
    setUsers(deleteUserFunction);
  };
  const [editingUserId, setEditingUserId] = useState();


  //Deletes user logged from users/setUsers
  //This portion comes from the instructions
  //diff from line 50
  //filter to exclude delete, setUsers called to use new list
  //This function is triggered with the callback when submit is clicked


  return (
    <section className="userDiv">
      <h2>Contacts</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {/* display all existing Users here */}
          {/* Prints out the name & email of Each user & assigns it an index */}
          {/* Map function is placed within an UNORDERED LIST and Map function
        iterates through each user lists it as a <li> and an individual index.
        Displays the name & email of the user.*/}
          {users.map((user, index) => {
            if (user.id === editingUserId) {
              return (
                <tr key={index} className='users_tr'>
                  <td> {user.first_name} </td>
                  <td> {user.last_name} </td>
                  <td>{user.email} </td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td> {user.first_name} </td>
                  <td> {user.last_name} </td>
                  <td>{user.email} </td>
                  <td>{user.phone_number} </td>
                  <td><img src={trash} className='icon-btn' onClick={() => handleDeleteUser(user.id)} /></td>
                  <td><img src={edit} className="icon-btn" onClick={() => setEditingUserId(user.id)} /></td>
                </tr>

              );
            };
          })}
        </tbody>
      </table>

      <div className="add_Divs">
        {/* Added Id & Email fields as per instructions */}
        {/* Each field has to have an onChange event, change is actively happening as we are typing into the text box,
        when that change is happening it changes the state for setNewUser, doesn't do anything until it submits,
        it just registers it*/}
        <h3 className="add_header">Add User</h3>

        <form className='addForm' id="add-user" action="#" onSubmit={handleAddNewUser}>
          <fieldset>
            <label>First Name: </label>
            <input
              type="text"
              id="add-first-name"
              name="first_name"
              placeholder="Jane"
              value={newUser.name}//changes the name; long version value={name}
              onChange={set("first_name")} //handleChange function
            />
            <br />

            <label>Last Name: </label>
            <input
              type="text"
              id="add-last-name"
              name="last_name"
              placeholder="Smith"
              value={newUser.name}//changes the name; long version value={name}
              onChange={set("last_name")} //handleChange function
            />
            <br />

            <label>Email: </label>
            <input
              type="text"
              id="add-user-email"
              name="email"
              placeholder="janeSmith@example.com"
              value={newUser.email}//changes the email; long version value={email}
              onChange={set("email")} //handleChange function
            />
            <br />

          </fieldset>
          {/* Add more form fields here */}
          {/*Button for SUBMIT BUTTON, value can be named anything*/}
          <input type="submit" value="Add User" />
        </form>
      </div>
      {/* DeleteUser Component added to Users Component. 
deleteUserCallback (is the props) & associated with the deleteUserFunction. This connects
both components together*/}
    </section>
  );
};
export default Users;