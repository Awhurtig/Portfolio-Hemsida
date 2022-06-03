import { BrowserRouter } from "react-router-dom";

import About from "./Componets/About/About";
import Navbar from "./Componets/Navbar/Navbar";
import Contact from "./Componets/Contact/Contact";
import Content from "./Componets/Content/Content";
import Projects from "./Componets/Projects/Projects";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
      <Projects />
    </BrowserRouter>
  );
}

export default App;
