import { useState, useReducer, useEffect } from "react";
import DeleteEvent from "./deleteEvent";
import trash from "../icons/trash.png";
import edit from '../icons/edit.png';


//useReducer helps manage complex state logic in React; stores & updates state like useState
//Accepts a reducer function as its 1st parameter & initial state as 2nd
//Returns an array that holds current value & dispatch fx to which you can pass an action and later invoke it
//mock events from starter code as per instructions
// const event1 = {
//   id: "1",
//   name: "Birthday",
//   date: "2021-09-01",
//   description: "A birthday party for my best friend",
//   category: "Celebration",
// };

// const event2 = {
//   id: "2",
//   name: "Graduation",
//   date: "2021-08-01",
//   description: "The class of 2021 graduates from East High",
//   category: "Education",
// };

// const event3 = {
//   id: "3",
//   name: "JS Study Session",
//   date: "2021-10-01",
//   description: "A chance to practice Javascript interview questions",
//   category: "Education",
// };

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

    case 'clearForm':
      return {
        id: "",
        date: "",
        description: "",
        category: "",
        name: ""
      };

    default:
      return state;
  }
};

const Events = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch('http://localhost:4000/events');
    const events = await response.json();
    setEvents(events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  //const initialState is associated with useReducer below(const [state, dispatch = useReducer(reducer, initialState)])
  //initialState needs to be declared for useReducer
  const initialState = {
    id: "",
    date: null,
    description: "",
    category: "",
    name: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //ADD NEW EVENT  - EVENT HANDLER
  const handleAddNewEvent = async (e) => {
    e.preventDefault();
    const newEvent = {
      id: state.id,
      name: state.name,
      description: state.description,
      category: state.category,
      date: state.date
    };

    const response = await fetch('http://localhost:4000/events', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    });
    const content = await response.json();
    setEvents([...events, content]);
    dispatch({ type: 'clearForm' })
  };

  //DELETE EVENT  - EVENT HANDLER
  const handleDeleteEvent = async (deleteEventCallback) => {
    const response = await fetch(`http://localhost:4000/events/${deleteEventCallback}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteEventFunction = events.filter((i) => i.id !== deleteEventCallback);
    setEvents(deleteEventFunction);
  }

  return (
    <section className="eventsDiv">
      <h2>Upcoming Events</h2>
      <div>
        <table className="events-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Date</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Display all Events here */}
            {events.map((event, index) => {
              return (
                <tr key={index}>
                  <td > {event.event_time} </td>
                  <td > {event.event_date} </td>
                  <td >{event.name} </td>
                  <td >{event.description} </td>
                  <td className="category_event">{event.category}</td>
                  <td><img src={trash} className="icon-btn" onClick={() => handleDeleteEvent(event.id)} /></td>
                  <td><img src={edit} className="icon-btn" onClick={() => handleDeleteEvent(event.id)} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="add_Divs">
          <h3 className="add_header">Add Event</h3>
          <form className='addForm' id="add-event" action="#" onSubmit={handleAddNewEvent}>
            <fieldset>
              <label>Date: </label>
              <input
                required
                type="datetime-local"
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
                required
                type="text"
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
                type="text"
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

              <label for="category">Category: </label>
              <select name="
              category" id="category"
                value={state.category}
                onChange={(e) =>
                  dispatch({
                    type: "editCategory",
                    payload: e.target.value,
                  })
                }>
                <option value="" disable>Select Category</option>
                <option value="personal">Personal</option>
                <option value="school">School</option>
                <option value="party">Party</option>
                <option value="work">Work</option>
              </select>

              <br />

            </fieldset>
            <input type="submit" value="Add Event" />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Events;

//*******NOTES ON USEREDUCER********
/*useReducer(reducer, initialState) HOOK accepts 2 arguments: reducer fx & initial state.
Hook returns an array of 2 items [currentState, dispatch fx](ex: [state, dispatch]).
Initial State: value the state is initialized with(ex: Counter: 0,  initialState is 0)
Action Object: object that describes how to updated the state(ex: dispatch({type: 'editCategory' or 'add/increase'})).
  Has a property type, what kind of state update reducer will do & has to carry info(PAYLOAD) to be used by reducer.
Dispatch fx:  special fx  that dispatches an action object, created by useReducer() hook:
const [state, dispatch]  = useReducer(reducer, initialState); When  you want to update the state(eventHandler/Fetch request)
call dispatch fx with an action object
Reducer: PURE fx, 2 parameters: current state & action object
Reducer fx must update the state immutably and return new state. Doesn't modify current state (state), created new state object stored in newState
Process: eventHandler --> Dispatch fx (w/ action object) (React redirects action object & state to  reducer fx)-->Reducer fx uses action object & does state update, returning new state --> React checks if new state differs from old/current/initial state, if updated, rerenders component and userReducer() returns new state value [newState, ...] = useReducer(...)
*/