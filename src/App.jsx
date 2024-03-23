import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

