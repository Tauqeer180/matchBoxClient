import React from 'react'
import { Card,Button } from 'antd';
import PropTypes from "prop-types";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const StatisticWidget = ({ title, value, status, subtitle, prefix, onClick, btnTitle }) => {
	return (
		<Card>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div>
					{title && <span style={{color: "rgba(188,188,188,1)"}} className="mb-0">{title}</span>}
					<div className={`${prefix? 'd-flex': ''} ${title ? 'mt-3':''}`}>
						{prefix ? <div className="mr-2">{prefix}</div> : null}
						<div>
							<div className="d-flex align-items-center">
								<span style={{fontSize:"20px"}} className="mb-0 font-weight-bold">{value}</span>
								{
									status ?
									<span className={`font-size-md font-weight-bold ml-3 ${status !== 0 && status > 0 ? 'text-success' : 'text-danger'}`} >
										{status}
										{status !== 0 && status > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
									</span>
							
									:
									null
								}
							</div>
						</div>
					</div>
				</div>
				
				{
					onClick ?
						<Button style={{fontSize: 10, background: "#EFEFEF"}} onClick={onClick}>{btnTitle}</Button>
					:
						null	
				}
			</div>
		</Card>
	)
}

StatisticWidget.propTypes = {
  	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	value: PropTypes.string,
	subtitle: PropTypes.string,
	status: PropTypes.number,
	prefix: PropTypes.element
};

export default StatisticWidget
