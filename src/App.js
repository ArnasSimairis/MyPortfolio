import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ANavBar from "./components/NavBar";
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <ANavBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contac' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
