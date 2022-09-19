import { useReducer, useState } from "react";

const event1 = {
  id: "1",
  name: "Apple Event",
  date: "2022-10-19",
};

const event2 = {
  id: "2",
  name: "LA Metro Interview",
  date: "2020-04-13",
};

const event3 = {
  id: "3",
  name: "Doctor Appointment",
  date: "2020-06-25",
};

const reducer = (state, action) => {
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editId':
      console.log('Logged if the editName action is being dispatched');
      return { ...state, id: action.payload };

    case 'editName':
      return { ...state, name: action.payload };

    case 'editDate':
      return { ...state, date: action.payload };

    default:
      return state;
  }
};

const Events = () => {
  const [events, setEvents] = useState([event1, event2, event3]);
  const initialState = {
    id: "",
    name: "",
    date: null,
  };

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
                Name: {event.name}, Description: {event.description}
              </li>
            );
          })};
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            {Object.keys(initialState).map((field, index) => {
              return (
                <label>
                  {field[0].toUpperCase() + field.slice(1)}
                  <input
                    type="text"
                    id={`add-event-${field}`}
                    value={state.field}
                    onChange={(e) =>
                      dispatch({
                        type: `edit${field[0].toUpperCase() + field.slice(1)}`,
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
              );
            })};
          </fieldset>
          <input type="submit" />
        </form>

        <h3>Delete Event</h3>
        <form id="delete-event" action="#">
          <fieldset>
            <label>Event ID</label>
            <input type="number" min="1" id="delete-event-id" />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    </section>

  )
}
export default Events;