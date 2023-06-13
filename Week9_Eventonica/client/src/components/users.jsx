import { useState, useEffect } from "react";
//Calling DeleteUser Component
import DeleteUser from "./deleteUser";

//DEFAULT INFO - Mock  users for hardcode data
// const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
// const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
// const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  const getUsers = async () => {
    const response = await fetch('http://localhost:4000/users');
    const user = await response.json();
    setUsers(user);
  };
  useEffect(() => {
    getUsers();
  }, []);

  //useState for user/setUsers added as per instructions
  //The default state will display: marlin, nemo, & dory
  //users/setUsers will refer to the mock users & tack on the newUser at the end of the list
  const [users, setUsers] = useState([]);

  //useState will store the new user(Add User)
  //The original state will be an empty string, this acts similar to placeholder text
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" })
  /*  
  newUser/setNewUser can be broken down more to: 
    const [name, setName] = useState(""); {setName};
    const [id, setId] = useState(""); {setId}
    const [email, setEmail] = useState(""); {setEmail}
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(newUser);
  //   /*spread operator is adding mock users, and then adds the newUser we add
  //   at the end of list. Spread operator includes the already existing array*/
  //   //Logs the newUser when Submit button is clicked
  //   setUsers([...users, newUser]);//as soon as submit happens, the new entries are added and mapped
  //   console.log(users);
  //   //Reset the input fields to empty string on submit
  //   setNewUser({ name: "", email: "", id: "" });
  //   //Longer version: setName(""); setId(""); setEmail("");
  // };

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
    <section className="user-management">
      <h2>User Management</h2>
      <table class="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>ID</th>
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
                <tr key={index}>
                  <td> {user.name} </td>
                  <td>{user.email} </td>
                  <td> {user.id}</td>
                  </tr>
                  );
            } else {
              return (
                <tr key={index}>
                  <td> {user.name} </td>
                  <td>{user.email} </td>
                  <td> {user.id}</td>
                  <td><button onClick={() => handleDeleteUser(user.id)}>Delete User</button></td>
                  <td><button onClick={() => setEditingUserId(user.id)}>Edit</button></td>
                </tr>

              );
            };
          })}
        </tbody>
      </table>

      <div className="addusersdiv">
        {/* Added Id & Email fields as per instructions */}
        {/* Each field has to have an onChange event, change is actively happening as we are typing into the text box,
        when that change is happening it changes the state for setNewUser, doesn't do anything until it submits,
        it just registers it*/}
        <h3>Add User</h3>

        <form id="add-user" action="#" onSubmit={handleAddNewUser}>
          <fieldset>
            <label>Name: </label>
            <input
              type="text"
              id="add-user-name"
              name="name"
              value={newUser.name}//changes the name; long version value={name}
              onChange={set("name")} //handleChange function
            />
            <br />

            <label>Email: </label>
            <input
              type="text"
              id="add-user-email"
              name="email"
              value={newUser.email}//changes the email; long version value={email}
              onChange={set("email")} //handleChange function
            />
            <br />

            {/* <label>User Id: </label>
            <input
              type="text"
              id="add-user-id"
              name="name"
              value={newUser.id}//changes the id; long version value={id}
              onChange={set("id")} //handleChange function
            /> */}
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