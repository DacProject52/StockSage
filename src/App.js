import './App.css';
import {BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Footer1Component from './component/Footer1Component';
import HeaderComponent from './component/HeaderComponent';
import ListUser from './component/ListUser';
import RegisterComponent from './component/RegisterComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className= "container">
        <Routes>
          <Route path = "/" element = {<ListUser/>}> </Route>
          <Route path = "/user" element = {<ListUser/>}></Route>
          <Route path = "/reg-user" element = {<RegisterComponent/>}></Route> 
          </Routes> 
          {/* <ListUser/> */}
      </div>
      <Footer1Component/>
      </Router>
    </div>
  );
}

export default App;
