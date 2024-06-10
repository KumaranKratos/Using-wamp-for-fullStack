import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
