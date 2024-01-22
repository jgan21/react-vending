import VendingMachine from './VendingMachine';
import Soda from "./Soda";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />}/>
      </Routes>
      </BrowserRouter>
      <VendingMachine />
    </div>
  );
}

export default App;
