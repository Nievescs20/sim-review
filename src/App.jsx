// import RTK from "./components/RTK";
import { Link } from "react-router-dom";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/counter">counter</Link>
        </div>
        <div>
          <Link to="/rtk">rtk</Link>
        </div>
      </nav>
      <RouterComponent />
    </div>
  );
}

export default App;
