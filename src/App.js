import './App.css';
import Home from './Pages/Home';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Story from './Pages/Story';
import Blog from './Pages/Blog';
import About_us from './Pages/About_us';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About_us />} />
              <Route path="/story" element={<Story />} />
              <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
