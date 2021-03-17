import { COLORS } from "../../../../constants/ChartConstant";

const jointSessionData = () => {
	let arr = []
	for (let i = 0; i < sessionData.length; i++) {
		const data = sessionData[i];
		const label = sessionLabels[i];
		const color = sessionColor[i]
		arr = [...arr, {
			data: data,
			label: label,
			color: color
		}]
	}
	return arr
}
const jointoccupancyData = () => {
	let arr = []
	for (let i = 0; i < occupancyData.length; i++) {
		const data = occupancyData[i];
		const label = occupancyLabels[i];
		const color = occupancyColor[i]
		arr = [...arr, {
			data: data,
			label: label,
			color: color
		}]
	}
	return arr
}
const jointSalesData = () => {
	let arr = []
	for (let i = 0; i < salesData.length; i++) {
		const data = salesData[i];
		const label = salesLabels[i];
		const color = salesColor[i]
		arr = [...arr, {
			data: data,
			label: label,
			color: color
		}]
	}
	return arr
}

export const VisitorChartData = {
	series: [
		{
			name: "Bookings",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "Products",
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		}
	],
	categories: [
		'01 Jan',
		'02 Jan',
		'03 Jan',
		'04 Jan',
		'05 Jan',
		'06 Jan',
		'07 Jan',
		'08 Jan',
		'09 Jan',
		'10 Jan',
		'11 Jan',
		'12 Jan'
	]
}

export const AnnualStatisticData = [
	{
		title: 'Court Name',
		value: 'Ekram Sports Areana',
	}
]

export const ActiveMembersData = [{
	name: 'Members',
	data: [25, 15, 41, 25, 44, 12, 36, 19, 54]
}]

export const NewMembersData = [{
	img: "/img/avatars/thumb-2.jpg",
	title: "Software Engineer",
	name: "Terrance Moreno",
},
{
	img: "/img/avatars/thumb-3.jpg",
	title: "UI/UX Designer",
	name: "Ron Vargas",
},
{
	img: "/img/avatars/thumb-4.jpg",
	title: "HR Executive",
	name: "Luke Cook",
},
{
	img: "/img/avatars/thumb-5.jpg",
	title: "Frontend Developer",
	name: "Joyce Freeman",
},
{
	img: "/img/avatars/thumb-6.jpg",
	title: "Compliance Manager",
	name: "Samantha Phillips",
}]

export const RecentTransactionData = [
	{
		id: '#5331',
		name: 'Clayton Bates',
		date: '8 May 2020',
		amount: '$23',
		status: '07 Seats',
		avatarColor: '#04d182'
	},
	{
		id: '#5332',
		name: 'Gabriel Frazier',
		date: '6 May 2020',
		amount: '$89',
		status: '02 Seats',
		avatarColor: '#fa8c16'
	},
	{
		id: '#5333',
		name: 'Debra Hamilton',
		date: '1 May 2020',
		amount: '$48',
		status: '10 Seats',
		avatarColor: '#1890ff'
	},
	{
		id: '#5334',
		name: 'Stacey Ward',
		date: '28 April 2020',
		amount: '$54',
		status: '05 Seats',
		avatarColor: '#ffc542'
	},
	{
		id: '#5335',
		name: 'Troy Alexander',
		date: '28 April 2020',
		amount: '$94',
		status: '00 Seats',
		avatarColor: '#ff6b72'
	},
];

export const ClientsData = [
	{
		mobile: '+91 8554491229',
		name: 'Clayton Bates',
		date: '8 May 2020',
		avatarColor: '#04d182'
	},
	{
		mobile: '+91 8554491229',
		name: 'Gabriel Frazier',
		date: '6 May 2020',
		avatarColor: '#fa8c16'
	},
	{
		mobile: '+91 8554491229',
		name: 'Debra Hamilton',
		date: '1 May 2020',
		avatarColor: '#1890ff'
	},
	{
		mobile: '+91 8554491229',
		name: 'Stacey Ward',
		date: '28 April 2020',
		avatarColor: '#ffc542'
	},
	{
		mobile: '+91 8554491229',
		name: 'Troy Alexander',
		date: '28 April 2020',
		avatarColor: '#ff6b72'
	},
];

export const sessionColor = [COLORS[0], COLORS[1], COLORS[3], COLORS[5]]
export const sessionData = [3561, 1443, 2462]
export const sessionLabels = ['Completed', 'Non-Completed', 'Cancelled']
export const conbinedSessionData = jointSessionData()

export const occupancyColor = [COLORS[0], COLORS[1]]
export const occupancyData = [3561, 1443,]
export const occupancyLabels = ['Booked', 'Un-Booked']
export const conbinedOccupancyData = jointoccupancyData()

export const salesColor = [COLORS[0], COLORS[1], COLORS[3],]
export const salesData = [3561, 1443, 1000]
export const salesLabels = ['Daily', 'Weekly', 'Monthly']
export const conbinedSalesData = jointSalesData()

