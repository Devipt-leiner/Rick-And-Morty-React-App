import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Characters } from "./components/Characters";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route Exact path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
