import './App.css';
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
//import wrapper header main to render here
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
