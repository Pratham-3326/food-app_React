import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              That sharing a delicious burger creates a sense of camaraderie and 
              connection. Its universal appeal and casual nature make it a perfect 
              choice for socializing and bonding.
              </p>
              <ul>
                <li>
                  <p>
                  Social Experience: Sharing a burger often brings people together 
                  for a meal and conversation.
                  </p>
                </li>
                <li>
                  <p>Universal Appeal: Burgers are a popular and familiar food that 
                    appeals to a wide range of tastes.</p>
                </li>
                <li>
                  <p>
                  Casual Atmosphere: Eating burgers typically happens in relaxed,
                   informal settings, encouraging social interaction.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
