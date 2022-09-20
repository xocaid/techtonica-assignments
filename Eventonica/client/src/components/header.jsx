//Component created and separated for ease, just like Footer(OPTIONAL)
//Code was originally in App.js
// dot dot slash to move up one directory, this is coming from the src directory --> components directory
//Calendar image has to be called into the Header

import calendar from "../calendar.png";

const Header = () => {
  return (
    <header>
      <img src={calendar} alt="Calendar Star Logo" />
      <h1>Eventonica</h1>
    </header>
  );
};
export default Header;