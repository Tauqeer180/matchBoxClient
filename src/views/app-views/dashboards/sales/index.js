import React, { useState } from "react";
import { Row, Col, Button, Card, Table, Dropdown, Select, Badge, Input, Menu, Avatar, } from 'antd';
import { DownOutlined, DownloadOutlined } from '@ant-design/icons'
import { AnnualStatisticData, RecentTransactionData } from "../default/DefaultDashboardData";
import StatisticWidget from 'components/shared-components/StatisticWidget';
import DepositesWidegt from "../../components/courtsWidget";
import Filter from "./components/Filter";
import filterIcon from "../../../../assets/icons/Iconly_Bold_Filter_2.png";
import timeCircleIcon from "assets/icons/Iconly-Bold-Paper Download.png";
import { FileExcelOutlined, PrinterOutlined, ReloadOutlined } from "@ant-design/icons";
import salesLogo from '../../../../assets/icons/Iconly_Bold_Wallet.png'
import utils from "../../../../utils";
import plusIcon from "../../../../assets/icons/add-user.png";
import AddBookingModal from "../default/components/AddBookingModal";
import '../courts/styles.css';
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
		title: 'Client Name',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<Avatar size={30} className="font-size-sm" style={{ backgroundColor: record.avatarColor }}>
					{utils.getNameInitial(text)}
				</Avatar>
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: 'Id',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		key: 'amount',
	},
];

const timeMenu = (
	<Menu>
		<Menu.Item key="1">
			Daily
	  </Menu.Item>
		<Menu.Item key="2">
			Weekly
	  </Menu.Item>
		<Menu.Item key="3">
			Monthly
	  </Menu.Item>
	</Menu>
);

const cardDropdown = (menu, setModal) => (
	<>
		<div className="court-search-view">
			<span style={{ paddingRight: "30px" }}><Input placeHolder={"Search name here..."} style={{ height: "56px", width: "350px" }} /> </span>
			<div className="add-court-btn" style={{ display: 'flex', alignItems: 'center' }}>
				{/* <span onClick={() => setModal(true)} style={{ display: 'flex', marginRight: 8, alignItems: 'center', height: 45, borderRadius: "50px", border: "1px solid rgba(226,227,223,1)", cursor: 'pointer', padding: "10px" }}>
					<img src={plusIcon} style={{ height: 25, width: 25 }} /> 
				</span> */}
				<span style={{ display: 'flex', marginRight: 8, alignItems: 'center', height: 45, width: 45, borderRadius: 50, border: "1px solid rgba(226,227,223,1)", cursor: 'pointer', paddingLeft: 15, paddingRight: 15 }}>

					<DownloadOutlined />
				</span>

				<Dropdown overlay={timeMenu} trigger={['click']}>
					<Button style={{ background: 'rgb(139, 160, 133)', color: 'white' }}>
						Weekly <DownOutlined />
					</Button>
				</Dropdown>
			</div>
		</div>
	</>
)


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
						value1='86'
						title1='Products Sold'
						value2='$120'
						title2='Average Price'
						value3='$1178'
						title3='Total Sale'
					/>
				</Col>
			</Row>

			<Row gutter={16}>
				<Col xs={24} sm={24} md={24} lg={17}>
					<Card
						title={<span><img alt='Sales' src={salesLogo} style={{ marginRight: 15 + 'px' }} />Sales</span>}
						extra={cardDropdown(latestTransactionOption, setShowModal)}>
						<Row>
							<Col span="4">
								<span style={{ fontSize: "23px" }}>Bookings</span>
							</Col>
							{/* <Col span="4">
								<span style={{fontSize:"23px", paddingLeft:"35px"}}>Commission</span>
							</Col> */}
							<Col span="16">
								<div style={{ textAlign: "right" }}>
									<span style={{ fontSize: "23px" }}>$1178</span>
									<span>Subscription</span>
								</div>
							</Col>
						</Row>
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
				<Col xs={24} sm={24} md={24} lg={7}>
					<Filter />
				</Col>
			</Row>

			<AddBookingModal
				open={showModal}
				setModal={setShowModal}
			/>
		</>
	)
}

export default SalesDashboard
