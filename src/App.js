import "./App.css";
import Cards from "./Components/Card/Card";
import ConsecutiveSnackbars from "./Components/mess/Message";
import BasicExample from "./Components/Nevbar";

function App() {
  return (
    <div >
        <BasicExample sticky="top" />
        <Cards/>
        <ConsecutiveSnackbars/>
    </div>
  );
}

export default App;
