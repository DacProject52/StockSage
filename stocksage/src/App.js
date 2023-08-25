
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/login.component';
import Register from './components/register.component';
import LineGraph from './components/LineGraph';
import CandlestickGraph from './components/CandlesticksGraph';
import Forgot from './components/forgot.component';
import { Card, Button } from 'react-bootstrap';



function App() {

  return (
    
    <BrowserRouter>
    
    <div className="container">
      <Card>
      <Card.Header>
        <h1>StockSage: Unveiling The Market Trends</h1>
      </Card.Header>
      

      <div className="auth-wrapper">
           

        <Card.Body>
        <div className="auth-inner">
        <Routes>
          
        
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/candlestickgraph' element={<CandlestickGraph />} />
          <Route path='/forgot' element={<Forgot />} />
          
        </Routes>
        
        </div>
        </Card.Body>
        <Card.Footer>
          <h1>Created By Mohit And Ashu</h1>
        </Card.Footer>
      </div>
      
      </Card>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
