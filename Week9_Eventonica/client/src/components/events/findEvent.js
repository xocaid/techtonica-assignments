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
          <label htmlFor="category">Category: </label>
          <select
            required
            name="category"
            id="category"
          >
            <option value="" disabled>Select Category</option>
            <option >Personal</option>
            <option >School</option>
            <option >Party</option>
            <option >Work</option>
          </select>

          <input type="submit" value="Search Event" />
        </form>
      </div>
    </aside>
  );
};

export default FindEvent;