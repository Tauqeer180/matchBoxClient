import React, { useState } from "react";
import { Card, Dropdown, Menu, Button, Tabs, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons'

const { TabPane } = Tabs;


const menu = (
    <Menu>
        <Menu.Item>

        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
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
const Analytics = (props) => {

    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <Card>
                <div style={{ display: "flex" }}>
                    <h1>Analytics</h1>
                    <div style={{ marginLeft: "auto" }}>
                        <Dropdown overlay={timeMenu} trigger={['click']}>
                            <Button style={{ background: 'rgb(139, 160, 133)', color: 'white' }}>
                                Weekly <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
                <Tabs onChange={callback} type="card" style={{ alignItems: "center", paddingTop: "20px" }}>
                    <TabPane tab="Appointment" key="1">
                        <props.SalesByCategory />
                    </TabPane>
                    <TabPane tab="Occupancy" key="2">
                        <props.OccupanyData />
                    </TabPane>
                    <TabPane tab="Sales" key="3">
                        <props.SalesData />
                    </TabPane>
                </Tabs>
            </Card>
        </>
    )
}

export default Analytics
