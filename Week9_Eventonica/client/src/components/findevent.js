const FindEvent = () => {
  return (
    <aside className="eventsDiv">
      <div>
        <h3 className="add_header">Search Events</h3>
        <form id="search" action="#" className="addForm">
          <fieldset>
            <label htmlFor="date-search">Date: </label>
            <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
          </fieldset>
          <label for="category">Category: </label>
              <select name="
              category" id="category"
                >
                <option value="" disable>Select Category</option>
                <option value="personal">Personal</option>
                <option value="school">School</option>
                <option value="party">Party</option>
                <option value="work">Work</option>
              </select>

          <input type="submit" value="Search Event" />
        </form>
      </div>
    </aside>
  );
};

export default FindEvent;