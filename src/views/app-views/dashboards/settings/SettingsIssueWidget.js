import React from 'react';
import { Button, Card, Row, Col } from 'antd';

const IssueWidget = () => {
  return (
    <>
      <Card>
        <div>
          <Row justify="space-between">
            <Col>
              <span>
                <h3>Facing an Issue</h3>
              </span>
            </Col>
            <Col>
              <span>
                <Button>Chat with Admin</Button>
              </span>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};

export default IssueWidget;
