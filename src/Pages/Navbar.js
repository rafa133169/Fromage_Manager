import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

const AppNavbar = () => {
  return (
    <Navbar className="purple-bg" variant="dark"> {/* Aplica la clase purple-bg */}
      <Navbar.Brand>Recetas de Queso Tradicional</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar receta" className="mr-sm-2" />
        <Button variant="light">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
      <Nav className="ml-2">
        <Nav.Link>
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faCog} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
