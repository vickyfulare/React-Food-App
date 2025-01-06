//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Section2 from './Pages/Home/Section2';
import Section3 from './Pages/Home/Section3';
//import Section4 from './Pages/Home/Section4';
import Section5 from './Pages/Home/Section5';
import Section6 from './Pages/Home/Section6';
import Section7 from './Pages/Home/Section7';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Section2 />} />
          <Route path="/menu" element={<Section3 />} />
          <Route path="/shop" element={<Section5 />} />
          <Route path="/blog" element={<Section6 />} />
          <Route path="/contact" element={<Section7 />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
