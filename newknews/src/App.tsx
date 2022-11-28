import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Search from "./Routes/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
