import calendar from "../icons/calendar.png";

const Header = () => {
  return (
    <header className="header">
      <img src={calendar} alt="Calendar Star Logo" />
      <h1>Eventonica</h1>
    </header>
  );
};
export default Header;