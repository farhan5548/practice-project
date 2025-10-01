import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import Click from "./Components/Click";
import ActionHook from "./Components/ActionHook";
import Bgchange from "./Components/Bgchange";
import Timer from "./Components/Timer";
import Taskeffect from "./Components/Taskeffect";
import NewEffectTask from "./Components/NewEffectTask";
import FetchUsers from "./Components/FetchUsers";
import Ref from "./Components/Ref";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="timer" element={<Timer />} />
          <Route path="/list" element={<List />} />
          <Route path="/click" element={<Click />} />
          <Route path="/increment" element={<ActionHook />} />
          <Route path="/length" element={<Taskeffect />} />
          <Route path="/cd" element={<NewEffectTask />} />
          <Route path="/bg" element={<Bgchange />} />
          <Route path="/api" element={<FetchUsers />} />
          <Route path="/ref" element={<Ref />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
