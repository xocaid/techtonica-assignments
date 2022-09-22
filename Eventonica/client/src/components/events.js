import { useState, useReducer, useEffect } from "react";
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
  const [events, setEvents] = useState([]);
  //Added as per instructions
  const getEvents = async () => {
    const response = await fetch('http://localhost:4000/events');
    const events = await response.json();
    setEvents(events);
  };
  
  //Added as per instructions
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
  //Added as per instructions
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(state);
  //   setEvents([...events, state]);
  // };

  //Added as per instructions
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
                ID: {event.id}, <br />
                Date: {event.date}, <br />
                Name: {event.name}, <br />
                Description: {event.description}, <br />
                Category: {event.category}

              </li>
            );
          })}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleAddNewEvent}>
          <fieldset>

            <label>ID: </label>
            <input
              type="text"
              id="editId"
              placeholder="Event ID"
              value={state.id}
              //Dispatch fx: dispatches an Action Object; when you update the state, call dispatch fx with Action Object
              //State is update by eventHandler or completing fetch request
              //dispatch(actionObject)
              // Action Object: property type, string describing what kind of state update reducer must do, in this case editId
              //Payload is useful information to be used by reducer and associated with Action Object
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
              type="text"
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

            <label>Category: </label>
            <input
              type="text"
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