import logo from './logo.svg';
import { BrowserRouter,
  Routes,
  Route, } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Sixieme from './Sixieme'
import Cinquieme from './Cinquieme'
import Quatrieme from './Quatrieme'
import Troisieme from './Troisieme'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
		<Route path="/sixieme" index element={<Sixieme />} />
		<Route path="/Cinquieme" index element={<Cinquieme />} />
		<Route path="/Quatrieme" index element={<Quatrieme />} />
		<Route path="/Troisieme" index element={<Troisieme />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
