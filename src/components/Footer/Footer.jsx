import { Container, Row, Col } from "react-bootstrap"; // Import komponen dari react-bootstrap

function Footer() {
  const currentYear = new Date().getFullYear(); // Ambil tahun saat ini

  return (
    <footer className="bg-light mt-5">
      <Container className="py-5">
        {/* Row untuk Social Media Icons */}
        <Row className="justify-content-center mb-4">
          <Col xs="auto" className="px-3">
            <a href="#!" className="text-decoration-none text-dark">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto" className="px-3">
            <a href="#!" className="text-decoration-none text-dark">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto" className="px-3">
            <a href="#!" className="text-decoration-none text-dark">
              <i className="fab fa-google fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto" className="px-3">
            <a href="#!" className="text-decoration-none text-dark">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto" className="px-3">
            <a href="#!" className="text-decoration-none text-dark">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </Col>
          <Col xs="auto" className="px-3">
            <a href="#!" className="text-decoration-none text-dark">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </Col>
        </Row>
        
        {/* Copyright */}
        <Row className="justify-content-center">
          <Col className="text-center text-muted">
            <p>
              © {currentYear} Copyright:{" "}
              <a href="#!" className="text-dark">
                Alpin Apriliansyah Mohsa
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
