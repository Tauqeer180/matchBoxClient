import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  Table,
  Tag,
  Select,
  Badge,
  Input,
  Menu,
  Avatar,
  Tabs,
  Modal,
  Switch,
  Dropdown,
} from 'antd';
import {
  AnnualStatisticData,
  RecentTransactionData,
} from '../default/DefaultDashboardData';
import IMG_SRC from 'assets/icons/girl.png'
import StatisticWidget from 'components/shared-components/StatisticWidget';
import DepositesWidegt from '../../components/courtsWidget';
import Filter from '../../components/filterComponent';
import filterIcon from '../../../../assets/icons/Iconly_Bold_Filter_2.png';
import timeCircleIcon from '../../../../assets/icons/Iconly_Bold_Time_Circle.png';
import {
  FileExcelOutlined,
  PrinterOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import utils from '../../../../utils';
import smsLogo from "../../../../assets/icons/Iconly-Bold-More Circle@2x.png";

import FormComponent from './FormComponent';

import LanguageWidget from './SettingsLanguageWidget';
import SettingsIssueWidget from './SettingsIssueWidget';

import data, { notificationsData, feedbackData } from './data';
import AddNotificationModal from './AddNotificationModal';

const { Option } = Select;
const { TabPane } = Tabs;

function handleButtonClick(e) {
  // message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  // message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Edit</Menu.Item>
    <Menu.Item key="2">Delete</Menu.Item>
  </Menu>
);

const tableColumns = [
  {
    title: 'Employee Name',
    dataIndex: 'name',
  },
  {
    title: 'Employee ID',
    dataIndex: 'id',
    key: 'name',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  // {
  // title: 'Status',
  // dataIndex: 'status',
  // key: 'status',
  // render: (text, record) => (
  //   <div className="d-flex align-items-center">
  //     <span className="ml-2">{text}</span>
  //   </div>
  // ),
  // },
  {
    title: 'Mobile No',
    dataIndex: 'phone',
    key: 'phone',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: 'Permissions',
    dataIndex: 'permissions',
    key: 'permissions',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: '',
    key: 'status',
    render: (_, record) => (
      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
        <img alt="sms" src={smsLogo} style={{ cursor: 'pointer' }} />
      </Dropdown>
    ),
  },
];

const notificationsTableColumns = [
  {
    title: 'Message',
    dataIndex: 'message',
  },
  {
    title: 'Courts',
    dataIndex: 'courts',
  },
  {
    title: 'Msg. Frequency',
    dataIndex: 'msgFrequency',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Switch defaultChecked={record.status} />
      </div>
    ),
  },
  {
    title: '',
    key: 'status',
    render: (_, record) => (
      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
        <img alt="sms" src={smsLogo} style={{ cursor: 'pointer' }} />
      </Dropdown>
    ),
  },
];

const feedbackTableColumns = [
  {
    title: 'Client Name',
    dataIndex: 'name',
    render: (text, record) => (
      <div>
        <img style={{ height: 30, width: 30, borderRadius: 15, marginRight: 10 }} src={IMG_SRC} />
        <span>{text}</span>
      </div>
    )
  },
  {
    title: 'Court Name',
    dataIndex: 'courtName',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
    width: '40%'
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        {
          text > 1 ?
            <span style={{ color: '#8BA085' }}>
              {`${text} ${text > 1 ? ' Stars' : ' Star'}`}
            </span>
            :
            <span style={{ color: '#FF0000' }}>
              {`${text} ${text > 1 ? ' Stars' : ' Star'}`}
            </span>
        }
      </div>
    ),
  },
];

const Settings = () => {
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [recentTransactionData] = useState(RecentTransactionData);
  const [recentComissonData] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeKey, setActiveKey] = useState("1")
  const [notificationModal, setNotificationModal] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function callback(key) {
    setActiveKey(key)
  }
  return (
    <>
      <Row gutter={16}>
        <Col span="9">
          <LanguageWidget
            locale={'EN '}
            language={'Language'}
            subtitle={'elm.subtitle'}
          />
        </Col>
        <Col span="15">
          <SettingsIssueWidget />
        </Col>
      </Row>
      <Row justify="space-between">
        <Col></Col>
        <Col>
          {
            activeKey === '1' ?
              <Button className="add-court-btn" onClick={() => showModal(true)} style={{ marginBottom: 20, background: "#283851", color: "white", borderRadius: 10, border: '2px #000 solid' }}>
                + Add Employee
              </Button>
              : activeKey === '2' ?
                <Button className="add-court-btn" onClick={() => setNotificationModal(true)} style={{ marginBottom: 20, background: "#283851", color: "white", borderRadius: 10, border: '2px #000 solid' }}>
                  + Add Notification
              </Button>
                :
                null
          }

          <Modal
            title="Add an employee"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <FormComponent />
          </Modal>
        </Col>
      </Row>
      <Row>
        <Card
          style={{
            width: '100%',
          }}
        >
          <Col>
            <Tabs activeKey={activeKey} onChange={callback} type="card">
              <TabPane tab="My Team" key="1">
                <Table
                  className="no-border-last"
                  columns={tableColumns}
                  dataSource={recentComissonData}
                  rowKey="id"
                  pagination={false}
                  scroll={{ x: 400 }}
                />
              </TabPane>

              <TabPane tab="Push Notification" key="2">
                <Table
                  className="no-border-last"
                  dataSource={notificationsData}
                  columns={notificationsTableColumns}
                  rowKey="id"
                  pagination={false}
                  scroll={{ x: 400 }}
                />
              </TabPane>
              <TabPane tab="Feedbacks" key="3">
                <Table
                  className="no-border-last"
                  dataSource={feedbackData}
                  columns={feedbackTableColumns}
                  rowKey="id"
                  pagination={false}
                  scroll={{ x: 400 }}
                />
              </TabPane>
            </Tabs>
          </Col>
        </Card>
      </Row>
      {/* <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card title="Courts" extra={cardDropdown(latestTransactionOption)}>
            <Table
              className="no-border-last"
              columns={tableColumns}
              dataSource={recentTransactionData}
              rowKey="id"
              pagination={false}
            />
          </Card>
        </Col>
      </Row> */}

      <AddNotificationModal
        open={notificationModal}
        setModal={setNotificationModal}
      />
    </>
  );
};

export default Settings;
