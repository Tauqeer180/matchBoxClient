import { Col, Row, Card, Button } from "antd";
import { useHistory } from "react-router-dom";
import React from "react";

const Thankyou = () => {
  let history = useHistory();
  return (
    <div className="h-100">
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={10}>
            <Card
              style={{ borderRadius: 20, paddingTop: 50, paddingBottom: 50 }}
            >
              <Row type="flex" justify="center" align="center">
                <Col>
                  <img
                    style={{ width: "60px" }}
                    className="img-fluid"
                    src={`/img/logoMatchbox.jpeg`}
                    alt=""
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" align="center">
                <Col>
                  <img
                    style={{ width: 200, height: 200 }}
                    className="img-fluid"
                    src={`/img/3d-hands-classy-32.png`}
                    alt=""
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" align="center">
                <Col className="text-center">
                  <h3>Thank you for signing up.</h3>
                  <p style={{ color: "cyan", fontWeight: "700" }}>
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                  </p>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="center">
                <Col className="text-center">
                  <Button
                    type="primary"
                    size="medium"
                    style={{
                      background: "#1C3345",
                      borderColor: "#000000",
                      borderWidth: 3,
                    }}
                    htmlType="submit"
                    block
                    onClick={() => history.push("")}
                  >
                    Proceed
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Thankyou;
