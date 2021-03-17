import React from "react";
import LoginForm from "../../components/LoginForm";
import { Card, Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";

const { Title, Paragraph, Text, Link } = Typography;

const backgroundStyle = {
  //   backgroundImage: "url(/img/others/bgLogin.jpg)",
  backgroundColor: "#e5e5e5",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Login_WH = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <div className="h-100" style={backgroundStyle}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={10}>
            <Card style={{ borderRadius: 20 }}>
              <div className="my-4">
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
                        <h2>Welcome back</h2>
                        <h4>Enter your email</h4>
                      </Col>
                    </Row>
                    <LoginForm {...props} />
                  </Col>
                </Row>
              </div>
              <div class="text-center">
                <h5>
                  Dont have an Account?{" "}
                  <a href="/auth/register-1">
                    <span style={{ color: "#8ba085" }}>Register</span>
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

export default Login_WH;
