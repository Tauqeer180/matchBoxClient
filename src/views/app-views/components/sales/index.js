import React, { useState } from "react";
import { Card, Dropdown, Menu, Button, Tabs, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ChartWidget from "../../../../components/shared-components/ChartWidget";
import { VisitorChartData } from "../../dashboards/default/DefaultDashboardData";

const menu = (
  <Menu>
    <Menu.Item></Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const timeMenu = (
  <Menu>
    <Menu.Item key="1">Daily</Menu.Item>
    <Menu.Item key="2">Weekly</Menu.Item>
    <Menu.Item key="3">Monthly</Menu.Item>
  </Menu>
);
const Sales = (props) => {
  const [visitorChartData] = useState(VisitorChartData);
  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Card style={{ height: "512px" }}>
        <div style={{ display: "flex" }}>
          <h1>Sales</h1>
          <div style={{ marginLeft: "auto" }}>
            <Dropdown overlay={timeMenu} trigger={["click"]}>
              <Button
                style={{ background: "rgb(139, 160, 133)", color: "white" }}
              >
                Weekly <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
        <ChartWidget
          title=""
          series={visitorChartData.series}
          xAxis={visitorChartData.categories}
          height={370}
        />
      </Card>
    </>
  );
};

export default Sales;
