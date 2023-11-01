import logo from './logo.svg';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import AppNavbar from './Pages/Navbar';


function App() {
  return (
   <AppNavbar/>
  );
}

export default App;
