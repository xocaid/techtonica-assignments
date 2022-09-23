import { useState } from "react";

const DeleteEvent = ({deleteEventCallback}) => {

const [deleteEventId, setDeleteEventId] = useState('');

const handleDeleteEvent = (e) => {
  e.preventDefault();
  deleteEventCallback(deleteEventId);
  setDeleteEventId('');
}

  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#" onSubmit={handleDeleteEvent}>
        <fieldset>
          <label>Event ID: </label>
          <input 
          type="number" 
          min="1" 
          id="delete-event-id"
          value={deleteEventId}
          onChange={(e) => setDeleteEventId(e.target.value)}
          />
        </fieldset>
        <input 
        type="submit"/>
      </form>
    </div>
  )
}
export default DeleteEvent;