import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import PropTypes from 'prop-types';

const LanguageWidget = ({ locale, language }) => {
  return (
    <Card>
      <div>
        <div>
          <div>
            <Row justify="space-between">
              <Col>
                <div>
                  <span
                    style={{ fontSize: '32px' }}
                    className="mb-0 font-weight-bold"
                  >
                    {locale}
                  </span>

                  <span style={{ fontSize: '16px' }} className="mb-0 ">
                    {language}
                  </span>
                </div>
              </Col>
              <Col>
                <span>
                  <Button className="primary">Change</Button>
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Card>
  );
};

LanguageWidget.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string,
  subtitle: PropTypes.string,
  status: PropTypes.number,
  prefix: PropTypes.element,
};

export default LanguageWidget;
