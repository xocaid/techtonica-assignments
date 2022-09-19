//App.js code was copied from starter code as per instructions
import Header from "./components/header";
import Users from "./components/users";
import Events from "./components/events";
import FindEvent from "./components/findevent";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="user-and-events">
          <Users />
          <Events />
        </div>
      </main>
      <FindEvent />

      <Footer />
    </div>
  );
}

export default App;