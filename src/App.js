import './App.css';
import Header from "./components/Header.js";
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
