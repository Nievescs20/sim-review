import { Routes, Route } from "react-router-dom";
import Increment from "./Increment";
import RTK from "./RTK";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Increment />} />
        <Route path="/rtk" element={<RTK />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default RouterComponent;
