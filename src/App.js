
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/contactUs';
import Doctors from './Components/Doctors/Doctors';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/details';
import Regester from './Components/Registerfrom/Register';
import LogIn from './Components/LoginFrom/LogIn';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PricateRoute from './Components/PricateRoute/PricateRoute';

function App() {
  return (
    <AuthProvider>
 <BrowserRouter>
       <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PricateRoute path="/doctors">
          <Doctors></Doctors>
        </PricateRoute>
        <PricateRoute path="/contactus">
          <ContactUs></ContactUs>
        </PricateRoute>
        <Route path="/register">
          <Regester></Regester>
        </Route>
        <PricateRoute path="/details">
          <Details></Details>
        </PricateRoute>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
