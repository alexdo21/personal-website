import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components";
import "./App.css"
import { Landing, About, Projects, ProjectDetails, Contact, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter basename="/personal-website" >
      <div id="app">
        <NavigationBar />
        <div id="content">
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/:name" element={<ProjectDetails />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
