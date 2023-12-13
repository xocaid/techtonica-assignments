//App.js code was copied from starter code as per instructions
//App.js was broken down into components as per instructions and for ease
import Header from "./margins/header";
import Users from "./components/users";
import Events from "./components/events";
import FindEvent from "./components/findevent";


import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Imported Header componenet to call in App.js */}
      <Header />
      <main>
        <div className="user-and-events">
          <Events />
          <Users />
        </div>
      </main>
      <FindEvent />
    </div>
  );
}

export default App;