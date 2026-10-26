import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components";
import "./App.css"
import { Landing, About, Projects, MarkdownDetails, Blog, Contact, NotFound } from "./pages";

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
            <Route path="/projects/:pathName" element={<MarkdownDetails />}/>
            {/* <Route path="/blog" element={<Blog />}/> */}
            {/* <Route path="/blog/:pathName" element={<MarkdownDetails />}/> */}
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
