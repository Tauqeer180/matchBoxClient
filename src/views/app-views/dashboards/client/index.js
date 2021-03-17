import React, { useState } from "react";
import { Row, Col, Card, Table, Input, Menu, Avatar, Dropdown, Button, Space } from "antd";
import { ClientsData } from "../default/DefaultDashboardData";
import StatisticWidget from "components/shared-components/StatisticWidget";
import DepositesWidegt from "../../components/courtsWidget";
import Filter from "./Filter";
import timeCircleIcon from "../../../../assets/icons/Iconly_Bold_Time_Circle.png";
import salesLogo from "../../../../assets/icons/Iconly_Bold_Wallet.png";
import smsLogo from "../../../../assets/icons/Iconly-Bold-More Circle@2x.png";
import utils from "../../../../utils";

const menu = (
  <Menu>
    <Menu.Item>
      View
    </Menu.Item>
    <Menu.Item>
      Delete
    </Menu.Item>
  </Menu>
);

const tableColumns = [
  {
    title: "Client Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar
          size={30}
          className="font-size-sm"
          style={{ backgroundColor: record.avatarColor }}
        >
          {utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: "Mobile No.",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "Last Appointment",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "View",
    dataIndex: "sms",
    key: "sms",
    render:
      () => <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
        <img alt="sms" src={smsLogo} style={{ cursor: 'pointer' }} />
      </Dropdown>,
  },
];

const cardDropdown = () => (
  <>
    <div className="court-search-view">
      <span style={{ paddingRight: "30px" }}>
        <Input
          placeHolder={"Search name here..."}
          style={{ height: "56px", width: "350px" }}
        />{" "}
      </span>
      <span
        style={{
          borderRadius: "100px",
          border: "1px solid rgba(226,227,223,1)",
          padding: "16px",
        }}
        className="add-court-btn"
      >
        <img src={timeCircleIcon} />
      </span>
    </div>
  </>
);

const SalesDashboard = () => {
  const [clientsData] = useState(ClientsData);
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} md={9}>
          <StatisticWidget
            title={"Court Name"}
            value={"Ekam Sports Areana"}
            status={null}
            subtitle={"elm.subtitle"}
            onClick={() => { }}
            btnTitle='Change Court'
          />
        </Col>
        <Col xs={24} md={15}>
          <DepositesWidegt />
        </Col>

      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Card
            title={
              <span>
                <img
                  alt="Client"
                  src={salesLogo}
                  style={{ marginRight: 15 + "px" }}
                />
                Client List <small style={{ color: "grey" }}>(3.6K)</small>
              </span>
            }
            extra={cardDropdown()}
          >
            <Table
              className="no-border-last"
              columns={tableColumns}
              dataSource={clientsData}
              rowKey="id"
              pagination={false}
              scroll={{ x: 400 }}
            />
          </Card>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <Filter />
        </Col>
      </Row>
    </>
  );
};

export default SalesDashboard;
