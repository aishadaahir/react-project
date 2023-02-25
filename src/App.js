// import './App.css';
// import B from './B';
import A from './A';
import Context from './Context';
import Hook from './Hook'
import Hook2 from './Hook2';
import { useContext } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import Code from './Component/Code';
import About from './Component/About';
import Login from './Component/Login';
import {BrowserRouter as Router , Switch , Route, BrowserRouter,Link} from 'react-router-dom';
import Body from './Component/Body';
import Mission from './Component/Mission';
import Vission from './Component/Vission';
import contact from './Component/Contact';

function App() {
  return (
    <Router>
     <div>
    <Nav></Nav>

      {/* <Body/> */}

    {/* //   <Hook2/> */}
       <Switch>
       <Route path="/body" exact  component={Body}/>
       <Route path="/about" component={About}/>
        <Route path="/login"  component={Login}/>
        <Route path="/mission"  component={Mission}/>
        <Route path="/vission"  component={Vission}/>
        <Route path="/contact"  component={contact}/>
       </Switch>
      <Footer></Footer>
      
    </div>
    </Router>
  );
}

export default App;
