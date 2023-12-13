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
          <fieldset>
            <label htmlFor="category-search">Category: </label>
            <input type="text" id="category-search" placeholder="Social/Personal/Work" />
          </fieldset>

          <input type="submit" value="Search Event" />
        </form>
      </div>
    </aside>
  );
};

export default FindEvent;