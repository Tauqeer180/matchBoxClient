import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Card, Row, Col } from "antd";
import { useSelector } from "react-redux";

const backgroundStyle = {
  // backgroundImage: 'url(/img/others/img-17.jpg)',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const RegisterOne = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className="h-100" style={backgroundStyle}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={10}>
            <Card>
              <div className="my-2">
                <div class="text-center">
                  <Row type="flex" justify="center" align="center">
                    <Col span={18} push={3}>
                      <img
                        style={{ width: "60px" }}
                        className="img-fluid"
                        src={`/img/logoMatchbox.jpeg`}
                        alt=""
                      />
                    </Col>
                    <Col span={6} pull={18}>
                      <img
                        style={{ width: "30px" }}
                        className="img-fluid"
                        src={`/img/Iconly-Light-outline-Arrow-Left3.png`}
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>

                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={20}>
                    <Row type="flex" justify="flex-start" align="flex-start">
                      <Col>
                        <h2>New Account</h2>
                        <h4>Create your account</h4>
                      </Col>
                    </Row>
                    <RegisterForm {...props} />
                  </Col>
                </Row>
              </div>

              <div class="text-center">
                <h5>
                  Already have an account?{" "}
                  <a href="/auth/login_wh">
                    <span style={{ color: "#8ba085" }}>Login</span>
                  </a>
                </h5>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RegisterOne;
