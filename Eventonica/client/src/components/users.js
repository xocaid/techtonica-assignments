import { useState } from "react";
import DeleteUser from "./deleteUser";

const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  const [users, setUsers] = useState([marlin, nemo, dory]);
  //New State  to store the new user(Add User)
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" })

  const set = (input) => {
    return ({ target: { value } }) => {
      setNewUser((originalValues) => ({
        ...originalValues,
        [input]: value,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    setUsers([...users, newUser]);//destructuring
    setNewUser({ name: "", email: "", id: "" });
  };

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
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, Email: {user.email}
            </li>
          );
        })};
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              name="name"
              value={newUser.name}//changes the name
              onChange={set("name")} //handleChange function
            />
            <label>Email</label>
            <input
              type="text"
              id="add-user-email"
              name="email"
              value={newUser.email}//changes the email
              onChange={set("email")} //handleChange function
            />
            <label>Id</label>
            <input
              type="text"
              id="add-user-id"
              name="name"
              value={newUser.id}//changes the id
              onChange={set("id")} //handleChange function
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};
export default Users;