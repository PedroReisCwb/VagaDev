import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import jordamLogo from "../../images/jordan.svg";
import snkrs from "../../images/snkrs.svg";

export default function DefaultNavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex">
            <img src={jordamLogo} alt="jordam-logo" className="d-block me-2" />
            <img src={snkrs} alt="snkrs-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#" className="text-sm">
                Ajuda
              </Nav.Link>
              <Nav.Link href="#" className="text-sm">
                Junte-se a nós
              </Nav.Link>
              <Nav.Link href="#" className="text-sm">
                Entrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-center">
            <Nav>
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0">
                  <Nav.Link href="#" className="text-black">
                    Black Friday
                  </Nav.Link>
                  <Nav.Link href="#" className="text-black">
                    Lançamentos
                  </Nav.Link>
                  <Nav.Link href="#" className="text-black">
                    Feminino
                  </Nav.Link>
                  <Nav.Link href="#" className="text-black">
                    Masculino
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
