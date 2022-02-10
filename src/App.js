import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../src/pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
