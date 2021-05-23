import './App.css';
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import DataTable from "./components/DataTable.js"
import Wrapper from './components/Wrapper';
//import wrapper header main to render here
function App() {
  return (
    <div className="App">
      <Header/>
      <Wrapper>
      <DataTable/>
      </Wrapper>
    </div>
  );
}

export default App;
