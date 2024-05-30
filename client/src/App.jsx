import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../src/pages/SignIn"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}


