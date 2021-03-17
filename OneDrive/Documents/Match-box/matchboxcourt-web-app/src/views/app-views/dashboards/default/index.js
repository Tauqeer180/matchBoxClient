import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Dropdown,
  Table,
  Menu,
  Tag,
  Input,
  Badge,
  Calendar,
  List,
} from "antd";
import Flex from "components/shared-components/Flex";
import StatisticWidget from "components/shared-components/StatisticWidget";
import ChartWidget from "components/shared-components/ChartWidget";
import AvatarStatus from "components/shared-components/AvatarStatus";
import GoalWidget from "components/shared-components/GoalWidget";
import Analytics from "../../components/analytics";
import CourtsWidegt from "../../components/courtsWidget";
import Chat from "../../components/chatComponent";
import moreCircle from "../../../../assets/icons/Iconly_Bold_More_Circle.png";
import filterIcon from "../../../../assets/icons/Iconly_Bold_Filter_2.png";
import plusIcon from "../../../../assets/icons/add-user.png";
import timeCircleIcon from "../../../../assets/icons/Iconly_Bold_Time_Circle.png";
import calenderIcon from "../../../../assets/icons/Iconly_Light_Calendar.png";
import DonutChartWidget from "components/shared-components/DonutChartWidget";
import Calender from "../../components/calender";
import { DownOutlined } from "@ant-design/icons";
import Sales from "../../components/sales";

import {
  VisitorChartData,
  AnnualStatisticData,
  ActiveMembersData,
  NewMembersData,
  RecentTransactionData,
  sessionData,
  sessionLabels,
  conbinedSessionData,
  sessionColor,
  occupancyColor,
  occupancyLabels,
  occupancyData,
  conbinedOccupancyData,
  salesColor,
  salesData,
  salesLabels,
  conbinedSalesData,
} from "./DefaultDashboardData";
import ApexChart from "react-apexcharts";
import { apexLineChartDefaultOption, COLOR_2 } from "constants/ChartConstant";
import {
  UserAddOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  StopOutlined,
  ReloadOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import utils from "utils";
import exampleService from "services/ExampleService";
import { withRouter } from "react-router-dom";
import AddBookingModal from "./components/AddBookingModal";
import useWindowDimensions from "utils/dimensions";
const MembersChart = (props) => <ApexChart {...props} />;

const SalesByCategory = () => {
  const windowDimensions = useWindowDimensions();

  console.log("windowDimensions: ", windowDimensions);

  return (
    <DonutChartWidget
      series={sessionData}
      labels={sessionLabels}
      customOptions={{ colors: sessionColor }}
      height={windowDimensions.width > 450 ? 300 : 160}
      width={windowDimensions.width > 450 ? 300 : 160}
      extra={
        <Row>
          <Col xs={20} sm={20} md={20} lg={24}>
            <div className="mt-4 mx-auto" style={{ maxWidth: 200 }}>
              {conbinedSessionData.map((elm) => (
                <Flex
                  alignItems="center"
                  justifyContent="between"
                  className="mb-3"
                  key={elm.label}
                >
                  <div>
                    <Badge color={elm.color} />
                    <span className="text-gray-light">{elm.label}</span>
                  </div>
                  <span className="font-weight-bold text-dark">{elm.data}</span>
                </Flex>
              ))}
            </div>
          </Col>
        </Row>
      }
    />
  );
};
const OccupanyData = () => {
  const windowDimensions = useWindowDimensions();

  console.log("windowDimensions: ", windowDimensions);

  return (
    <DonutChartWidget
      series={occupancyData}
      labels={occupancyLabels}
      customOptions={{ colors: occupancyColor }}
      height={windowDimensions.width > 450 ? 300 : 160}
      width={windowDimensions.width > 450 ? 300 : 160}
      extra={
        <Row>
          <Col xs={20} sm={20} md={20} lg={24}>
            <div className="mt-4 mx-auto" style={{ maxWidth: 200 }}>
              {conbinedOccupancyData.map((elm) => (
                <Flex
                  alignItems="center"
                  justifyContent="between"
                  className="mb-3"
                  key={elm.label}
                >
                  <div>
                    <Badge color={elm.color} />
                    <span className="text-gray-light">{elm.label}</span>
                  </div>
                  <span className="font-weight-bold text-dark">{elm.data}</span>
                </Flex>
              ))}
            </div>
          </Col>
        </Row>
      }
    />
  );
};
const SalesData = () => {
  const windowDimensions = useWindowDimensions();

  console.log("windowDimensions: ", windowDimensions);

  return (
    <DonutChartWidget
      series={salesData}
      labels={salesLabels}
      customOptions={{ colors: salesColor }}
      height={windowDimensions.width > 450 ? 300 : 160}
      width={windowDimensions.width > 450 ? 300 : 160}
      extra={
        <Row>
          <Col xs={20} sm={20} md={20} lg={24}>
            <div className="mt-4 mx-auto" style={{ maxWidth: 200 }}>
              {conbinedSalesData.map((elm) => (
                <Flex
                  alignItems="center"
                  justifyContent="between"
                  className="mb-3"
                  key={elm.label}
                >
                  <div>
                    <Badge color={elm.color} />
                    <span className="text-gray-light">{elm.label}</span>
                  </div>
                  <span className="font-weight-bold text-dark">{elm.data}</span>
                </Flex>
              ))}
            </div>
          </Col>
        </Row>
      }
    />
  );
};

const latestTransactionOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <ReloadOutlined />
          <span className="ml-2">Refresh</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <PrinterOutlined />
          <span className="ml-2">Print</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="12">
      <span>
        <div className="d-flex align-items-center">
          <FileExcelOutlined />
          <span className="ml-2">Export</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const cardDropdown = (menu, showModal, setModal) => (
  <>
    <div style={{ display: "flex" }}>
      <span
        style={{
          borderRadius: "100px",
          border: "1px solid rgba(226,227,223,1)",
          padding: "16px",
          marginRight: "20px",
          cursor: "pointer",
        }}
        onClick={() => setModal(true)}
      >
        <img src={plusIcon} style={{ height: 25, width: 25 }} />
      </span>
      <span
        style={{
          borderRadius: "100px",
          border: "1px solid rgba(226,227,223,1)",
          padding: "16px",
        }}
      >
        <img src={timeCircleIcon} />
      </span>
    </div>
  </>
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
    title: "Court Name",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Appointment At",
    dataIndex: "date",
    key: "date",
  },
  {
    title: () => <div className="text-right"></div>,
    key: "status",
    render: (_, record) => (
      <div className="text-right">
        <svg
          class="More_Circle_kw"
          style={{ fill: "rgba(139,160,133,1)" }}
          viewBox="0 0 20 20"
        >
          <path
            id="More_Circle_kw"
            d="M 9.999899864196777 19.99979972839355 C 7.326639652252197 19.99979972839355 4.814539909362793 18.95921897888184 2.926349878311157 17.06974029541016 C 1.039269804954529 15.18136024475098 -1.358032193365943e-07 12.67057991027832 -1.358032193365943e-07 9.999899864196777 C -1.358032193365943e-07 7.329219818115234 1.039269804954529 4.818439960479736 2.926349878311157 2.930059909820557 C 4.814539909362793 1.040579915046692 7.326639652252197 -1.358032193365943e-07 9.999899864196777 -1.358032193365943e-07 C 15.51385974884033 -1.358032193365943e-07 19.99979972839355 4.485939979553223 19.99979972839355 9.999899864196777 C 19.99979972839355 15.51385974884033 15.51385974884033 19.99979972839355 9.999899864196777 19.99979972839355 Z M 14.48009967803955 8.80109977722168 C 13.81857967376709 8.80109977722168 13.28040027618408 9.338879585266113 13.28040027618408 9.999899864196777 C 13.28040027618408 10.66141986846924 13.81857967376709 11.19960021972656 14.48009967803955 11.19960021972656 C 15.13615989685059 11.19960021972656 15.66989994049072 10.66141986846924 15.66989994049072 9.999899864196777 C 15.66989994049072 9.338879585266113 15.13615989685059 8.80109977722168 14.48009967803955 8.80109977722168 Z M 9.999899864196777 8.80109977722168 C 9.338379859924316 8.80109977722168 8.800199508666992 9.338879585266113 8.800199508666992 9.999899864196777 C 8.800199508666992 10.66141986846924 9.338379859924316 11.19960021972656 9.999899864196777 11.19960021972656 C 10.65596008300781 11.19960021972656 11.18970012664795 10.66141986846924 11.18970012664795 9.999899864196777 C 11.18970012664795 9.338879585266113 10.65596008300781 8.80109977722168 9.999899864196777 8.80109977722168 Z M 5.519700050354004 8.80109977722168 C 4.858180046081543 8.80109977722168 4.319999694824219 9.338879585266113 4.319999694824219 9.999899864196777 C 4.319999694824219 10.66141986846924 4.858180046081543 11.19960021972656 5.519700050354004 11.19960021972656 C 6.176249980926514 11.19960021972656 6.710399627685547 10.66141986846924 6.710399627685547 9.999899864196777 C 6.710399627685547 9.338879585266113 6.176249980926514 8.80109977722168 5.519700050354004 8.80109977722168 Z"
          ></path>
        </svg>
      </div>
    ),
  },
];
const BookingScheduleList = ({ item }) => {
  return (
    <List.Item>
      <Row justify="space-between" style={{ width: "100vw" }}>
        <Col xs={16}>
          <div>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="08:30 AM / 21-Jan-2021"
            />
          </div>
        </Col>
        <Col
          xs={8}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            size="small"
            style={{
              background: "#8ba085",
              color: "white",
            }}
          >
            {item.btnText}
          </Button>
        </Col>
      </Row>
    </List.Item>
  );
};
const data = [
  {
    title: "Ant Design Title 1",
    btnText: "Paid",
  },
  {
    title: "Ant Design Title 2",
    btnText: "Cancelled",
  },
  {
    title: "Ant Design Title 3",
    btnText: "Paid",
  },
  {
    title: "Ant Design Title 4",
    btnText: "Paid",
  },
];
const timeMenu = (
  <Menu>
    <Menu.Item key="1">Daily</Menu.Item>
    <Menu.Item key="2">Weekly</Menu.Item>
    <Menu.Item key="3">Monthly</Menu.Item>
  </Menu>
);
export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [activeMembersData] = useState(ActiveMembersData);
  const [newMembersData] = useState(NewMembersData);
  const [recentTransactionData] = useState(RecentTransactionData);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Row gutter={16}>
        {annualStatisticData.map((elm, i) => (
          <Col xs={24} md={9}>
            <StatisticWidget
              title={elm.title}
              value={elm.value}
              status={elm.status}
              subtitle={elm.subtitle}
              onClick={() => {}}
              btnTitle="Change Court"
            />
          </Col>
        ))}
        <Col xs={24} md={15}>
          <CourtsWidegt />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Sales />
        </Col>
        <Col xs={24} lg={12}>
          <Analytics
            SalesByCategory={SalesByCategory}
            OccupanyData={OccupanyData}
            SalesData={SalesData}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Card
            title="Booking Schedules"
            extra={cardDropdown(
              latestTransactionOption,
              showModal,
              setShowModal
            )}
          >
            <Row>
              <Col sm={24} md={24} lg={12}>
                <Calender />
                <Row>
                  <Col
                    className="border text-center"
                    span="12"
                    sm={24}
                    md={24}
                    lg={12}
                  >
                    <h1>
                      68 <span style={{ fontSize: 15 }}>Bookings</span>
                    </h1>
                  </Col>
                  <Col
                    className="border text-center"
                    span="12"
                    sm={24}
                    md={24}
                    lg={12}
                  >
                    <h1>
                      178 <span style={{ fontSize: 15 }}>Customers</span>
                    </h1>
                  </Col>
                </Row>
              </Col>
              <Col sm={24} md={24} lg={12}>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => <BookingScheduleList item={item} />}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Chat />
        </Col>
      </Row>

      <AddBookingModal open={showModal} setModal={setShowModal} />
    </div>
  );
};

export default withRouter(DefaultDashboard);
