import { useState, useReducer } from "react";
//useReducer helps manage complex state logic in React; stores & updates state like useState
//Accepts a reducer function as its 1st parameter & initial state as 2nd
//Returns an array that holds current value & dispatch fx to which you can pass an action and later invoke it
//mock events from starter code as per instructions
const event1 = {
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
};

const event3 = {
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questions",
  category: "Education",
};

//Added as per instructions
//add a case of all the inputs you will use
const reducer = (state, action) => {
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editId':
      console.log('Logged if the editId action is being dispatched');
      return { ...state, id: action.payload };

    case 'editName':
      console.log('Logged if the editName action is being dispatched');
      return { ...state, name: action.payload };

    case 'editDate':
      console.log('Logged if the editDate action is being dispatched');
      return { ...state, date: action.payload };

    case 'editDescription':
      return { ...state, description: action.payload };

    case 'editCategory':
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

const Events = () => {
  const [events, setEvents] = useState([event1, event2, event3]);
  const initialState = {
    id: "",
    name: "",
    descritpion: "",
    category: "",
    date: null,
  };
  //Added as per instructions
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setEvents([...events, state]);
  };
  return (

    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          {events.map((event, index) => {
            return (
              <li key={index}>
                Name: {event.name}, <br />
                Description: {event.description}
              </li>
            );
          })}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>

            <label>ID: </label>
            <input
              type="id"
              id="editId"
              placeholder="Event ID"
              value={state.id}
              onChange={(e) =>
                dispatch({
                  type: "editId",
                  payload: e.target.value,
                })
              }
            />
            <br />

            <label>Date: </label>
            <input
              type="date"
              id="editDate"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
            <br />

            <label>Event Name: </label>
            <input
              type="name"
              id="editName"
              placeholder="Event Name"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
            />
            <br />

            <label>Description: </label>
            <input
              type="description"
              id="editDescription"
              placeholder="Event Description"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
            <br />

            <label>Category: </label>
            <input
              type="category"
              id="editCategory"
              placeholder="Event Category"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
            <br />

          </fieldset>
          <input type="submit" value="Add Event" />
        </form>

        <h3>Delete Event</h3>
        <form id="delete-event" action="#">
          <fieldset>
            <label>Event ID: </label>
            <input type="number" min="1" id="delete-event-id" />
          </fieldset>
          <input type="submit" value="Delete Event" />
        </form>
      </div>
    </section>

  )
}
export default Events;