import React, { useState } from "react";
import { Row, Col, Dropdown, Card, Table, Tag, Select, Button, Input, Menu, Avatar } from 'antd';
import { AnnualStatisticData, RecentTransactionData } from "../default/DefaultDashboardData";
import StatisticWidget from 'components/shared-components/StatisticWidget';
import DepositesWidegt from "../../components/courtsWidget";
import Filter from "../../components/filterComponent";
import filterIcon from "../../../../assets/icons/Iconly_Bold_Filter_2.png";
import timeCircleIcon from "../../../../assets/icons/Iconly_Bold_Time_Circle.png";
import { FileExcelOutlined, PrinterOutlined, ReloadOutlined } from "@ant-design/icons";
import smsLogo from "../../../../assets/icons/Iconly-Bold-More Circle@2x.png";
import utils from "../../../../utils";
import AddCourtModal from "./AddCourtModal";
const { Option } = Select;

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

const tableColumns = [
	{
		title: 'No',
		dataIndex: 'id'
	},
	{
		title: 'Court Name',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: 'Sports',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: 'Type',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: 'Where',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: 'Rate',
		dataIndex: 'amount',
		key: 'amount',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<span className="ml-2" style={{ color: "#8BA085" }}>{text}</span>
			</div>
		)
	},
	{
		title: () => <div className="text-left">Status</div>,
		key: 'status',
		render: (_, record) => (
			<div className="text-left">
				<Tag className="mr-0" color={record.status.includes('00') ? 'volcano' : 'cyan'}>{record.status}</Tag>
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

const cardDropdown = (menu, setModal) => (
	<>
		<div className="court-search-view">
			<span style={{ paddingRight: "30px" }}><Input placeHolder={"Search name here..."} className="court-search-input" /> </span>
			<Button className="add-court-btn" onClick={() => setModal(true)} style={{ background: "#283851", color: "white", borderRadius: 10, border: '2px #000 solid' }}>+ Add Court</Button>
		</div>
	</>
)

const menu = (
	<Menu>
		<Menu.Item>
			Edit
	  </Menu.Item>
		<Menu.Item>
			View
	  </Menu.Item>
		<Menu.Item>
			Delete
	  </Menu.Item>
	</Menu>
);

const SalesDashboard = () => {
	const [annualStatisticData] = useState(AnnualStatisticData);
	const [recentTransactionData] = useState(RecentTransactionData)
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Row gutter={16}>
				<Col xs={24} md={9}>
					<StatisticWidget
						title={"Court Name"}
						value={"Ekam Sports Areana"}
						status={""}
						subtitle={"elm.subtitle"}
						onClick={() => { }}
						btnTitle='Change Court'
					/>
				</Col>
				<Col xs={24} md={15}>
					<DepositesWidegt
						value1='05'
						title1='Active Courts'
						value2='01'
						title2='Non Active Courts'
						value3='08'
						title3='Total Courts'
					/>
				</Col>

			</Row>
			<Row gutter={16}>
				<Col xs={24} sm={24} md={24} lg={24}>
					<Card title="Courts (4)" extra={cardDropdown(latestTransactionOption, setShowModal)}>
						<Table
							className="no-border-last"
							columns={tableColumns}
							dataSource={recentTransactionData}
							rowKey='id'
							pagination={false}
							scroll={{ x: 400 }}
						/>
					</Card>
				</Col>
			</Row>

			<AddCourtModal
				open={showModal}
				setModal={setShowModal}
			/>
		</>
	)
}

export default SalesDashboard
