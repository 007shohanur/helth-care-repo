
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

import AboutUs from './Components/Aboutus/AboutUs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/contactUs';
import Doctors from './Components/Doctors/Doctors';
import Regester from './Components/Registerfrom/Register';
import LogIn from './Components/LoginFrom/LogIn';








function App() {
  return (
    <div className="App">
 <BrowserRouter>
       <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contactus">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/register">
          <Regester></Regester>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
