import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/reactfolio/" element={<Home />} />
        <Route path="/reactfolio/about" element={<About />} />
        <Route path="/reactfolio/contact" element={<Contact />} />
        <Route path="/reactfolio/projects" element={<Projects />} />
        <Route path="/reactfolio/technologies" element={<Technologies />} />
      </Routes>
    </Router>
  );
}
export default App;
