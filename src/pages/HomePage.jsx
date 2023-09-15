import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../dist/img/isometric-building.png"

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <img src={HeroImage }alt="isometric-building" />
            </Col>
            <Col>
              <h1>
                Get Togather
              </h1>
              <p>Get together can connect you and your friends with just one click.
              Make plans, rent a venue, and enjoy your time with the important people in your life.</p>
              <button>Join Now</button>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="haha w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage