//App.js code was copied from starter code as per instructions
//App.js was broken down into components as per instructions and for ease
import Header from "./components/header";
import Users from "./components/users";
import Events from "./components/events";
import FindEvent from "./components/findevent";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Imported Header componenet to call in App.js */}
      <Header />
      <h1>This is a calendar</h1>
      <main>
        <div className="user-and-events">
          <Users />
          <Events />
        </div>
      </main>
      <FindEvent />
      {/* Imported Footer from the componenet to call the instance of it in App.js */}
      <Footer />
    </div>
  );
}

export default App;