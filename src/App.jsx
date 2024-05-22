import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import  Home from './pages/Home';
import  Contacts from './pages/Contacts';
import  Form  from './pages/RegistrationForm';

function App() {
  return (
    <>
      <nav>
        <ul className="nav-left">
          <li><Link to='/'>Kalvium</Link></li>
        </ul>
        <ul className="nav-right">
          <li><Link to='/Contacts'>Contacts</Link></li>
          <li><Link to='/RegistrationForm'>Registration Form</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/RegistrationForm" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
