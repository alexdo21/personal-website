import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components";
import "./App.css"
import { Landing, About, Projects, Contact } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <NavigationBar />
        <div id="content">
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
