
import Homepage from "./pages/homePage";
import Login from "./pages/login";

import { HashRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;