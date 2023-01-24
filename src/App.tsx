import Board from "./components/Board/Board";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import Navbar from "./components/NavBar/Navbar";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <SideNav />
        <Board />
      </main>
      <CreateTicket />
    </div>
  );
}

export default App;
