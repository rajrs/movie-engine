import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
} from "react-router-dom"
import PageLayout from "./components/PageLayout";
function App(prop) {
  console.log(prop)
  return (
    <div className="App">
      <Router>
      <NavBar/> 
      <PageLayout/>
      </Router>
    </div>
  );
}

export default App;
