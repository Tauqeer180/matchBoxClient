import React, { useState } from "react";
import {Card,Avatar,Input,Row,Col,DatePicker,} from "antd";
import { Menu, Dropdown, Button,Space } from 'antd';
import {DownOutlined,AudioOutlined} from "@ant-design/icons"
import deleteIcon from "../../../../assets/icons/Iconly_Bold_Delete.png"
import filterIcon from '../../../../assets/icons/Iconly-Bold-Filter.png'
import { Slider } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
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

export const Filter = () => {
    let [values,setValue] = useState([])
    const handleChange = (value) =>{
        console.log("value", value)
        setValue = value
    }
    return (
        <>
            <Card>
            <Row>
                <div>
                    <span style={{fontSize:"23px"}}><img src={filterIcon} alt='filter' width='36' height='36' style={{marginRight:15 +'px'}}/>Filter <small style={{color:"grey"}}>(4)</small></span>
                    <span style={{border:"1px solid rgba(226,227,223,1)", borderRadius:"100px", padding:"15px", marginLeft:"120px"}}><img src={deleteIcon}/> </span>
                </div>
            </Row>
                <div style={{paddingTop:"30px"}}>
                <span>Price</span>
                <span style={{paddingLeft:"130px"}}>
                    $200 - $500
                </span>
                    <Slider  onChange={handleChange} defaultValue={[20, 500]} />
                </div>
                <div>
                    <span>Court Type</span>
                    <div style={{paddingTop:"20px"}}>
                    <Dropdown overlay={menu} style={{width:"100%"}} placement="bottomLeft" arrow>
                        <Button>Select Type <span style={{paddingLeft:"100px", background:""}}><DownOutlined /></span></Button>
                    </Dropdown>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <span>Date Wise</span>
                        <span style={{paddingLeft:"120px"}}>Clear</span>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <Row gutter="16">
                            <Col span="12">
                                <DatePicker picker="From date" />
                            </Col>
                            <Col span="12">
                                <DatePicker picker="To date" />
                            </Col>
                        </Row>
                    </div>
                    <div style={{paddingTop:"100px"}}>
                        <Button style={{background:" rgba(19,41,59,1)",color:"white", width:"100%"}}>Show 17 Results</Button>
                    </div>
                </div>
            </Card>
            </>
    )
}

export default Filter
