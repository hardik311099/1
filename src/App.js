import "./App.css";
import Cards from "./Components/Card/Card";
import BasicExample from "./Components/Nevbar";

function App() {
  return (
    <div >
        <BasicExample sticky="top" />
        <Cards/>
    </div>
  );
}

export default App;
