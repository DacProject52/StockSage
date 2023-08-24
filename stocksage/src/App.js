
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/login.component';
import Register from './components/register.component';
import Forgot from './components/forgot.component';
import Header from './components/header.component';


function App() {
  return (
    
    <BrowserRouter>
    
    <div className="App">
      <Header />
      <Nav />

      <div className="auth-wrapper">
           


        <div className="auth-inner">
        <Routes>
          
        
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<Forgot />} />
        </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
