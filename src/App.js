import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/about/About";
import Project from "./pages/project/Project";
import Resume from "./pages/resume/Resume";
import NoResource from "./pages/NoResource";
import Home from "./pages/home/Home";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NoResource />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
