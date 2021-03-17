import React, { useState } from "react";
import {Card,Avatar,Input,Row,Col,DatePicker,} from "antd";
import { Menu, Dropdown, Button,Space } from 'antd';
import {DownOutlined,AudioOutlined} from "@ant-design/icons"
import deleteIcon from "../../../../assets/icons/Iconly_Bold_Delete.png"
import filterIcon from '../../../../assets/icons/Iconly-Bold-Filter.png'
import { Slider } from 'antd';
import SportItem from '../default/components/SportItem'
import TENIS from 'assets/icons/Group 8270.png'
import VOLLEYBALL from 'assets/icons/volleyball-silhouette-1.png'
import HOCKEY from 'assets/icons/hockey-player-silhouette-6.png'
import FOOTBALL from 'assets/icons/soccer-player-running-with-the-ball-1.png'
import City from "../components/City";

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
    const [index, setIndex] = useState(0)
    const [clientIndex, setClientIndex] = useState(0)
    const [cityIndex, setCityIndex] = useState(5)
    let [values,setValue] = useState([])
    const handleChange = (value) =>{
        console.log("value", value)
        setValue = value
    }

    return (
        <>
            <Card>
                <div style={{ width: '100%', display: 'flex', marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{fontSize:"20px"}}><img src={filterIcon} alt='filter' width='36' height='36' style={{marginRight:15 +'px'}}/>Filter</span>
                    <span style={{border:"1px solid rgba(226,227,223,1)", borderRadius:"100px", padding:"8px"}}><img src={deleteIcon}/> </span>
                </div>

                <label style={{fontSize: 12, color: '#7f7f7f'}}>Sport</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <SportItem
                        md
                        title='Tennis'
                        image={TENIS}
                        active={index === 0}
                        onClick={()=>setIndex(0)}
                    />
                    <SportItem
                        md
                        title='Voley Ball'
                        image={VOLLEYBALL}
                        active={index === 1}
                        onClick={()=>setIndex(1)}
                    />
                    <SportItem
                        md
                        title='Football'
                        image={FOOTBALL}
                        active={index === 2}
                        onClick={()=>setIndex(2)}
                    />
                    <SportItem
                        md
                        title='Hockey'
                        image={HOCKEY}
                        active={index === 3}
                        onClick={()=>setIndex(3)}
                    />
                </div>

                <div style={{paddingTop:"30px"}}>
                    <span>Skill Level</span>
                    <Slider onChange={handleChange} min={1} max={16} />
                </div>
                
                <span>City</span>
                <div style={{ flexWrap: 'wrap', display: 'flex', alignItems: 'center', marginTop: 8 }}>
                    <City
                        mr
                        name="GPS"
                        active={cityIndex === 0}
                        onClick={()=>setCityIndex(0)}
                    />
                    <City
                        mr
                        name="Bangalore"
                        active={cityIndex === 1}
                        onClick={()=>setCityIndex(1)}
                    />
                    <City
                        mr
                        name="Pune"
                        active={cityIndex === 2}
                        onClick={()=>setCityIndex(2)}
                    />
                    <City
                        mr
                        name="Goa"
                        active={cityIndex === 3}
                        onClick={()=>setCityIndex(3)}
                    />
                    <City
                        mr
                        name="Mumbai"
                        active={cityIndex === 4}
                        onClick={()=>setCityIndex(4)}
                    />
                    <City
                        mr
                        name="Channai"
                        active={cityIndex === 5}
                        onClick={()=>setCityIndex(5)}
                    />
                    <City
                        mr
                        name="Delhi"
                        active={cityIndex === 6}
                        onClick={()=>setCityIndex(6)}
                    />
                </div>

                <div style={{paddingTop:"30px"}}>
                    <span>Distance</span>
                    <Slider onChange={handleChange} min={1} max={100} />
                </div>

                <div style={{paddingTop:"20px", display: 'flex', justifyContent: 'space-between'}}>
                    <span>Date Wise</span>
                    <span style={{color: 'blue', cursor: 'pointer'}}>clear</span>
                </div>

                <div style={{paddingTop:"20px", marginBottom: 15}}>
                    <Row gutter="16">
                        <Col span="12">
                            <DatePicker picker="From date" />
                        </Col>
                        <Col span="12">
                            <DatePicker picker="To date" />
                        </Col>
                    </Row>
                </div>

                <span style={{ marginTop: 15 }}>Client Type</span>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <City
                        mr
                        name="New"
                        active={clientIndex === 1}
                        onClick={()=>setClientIndex(1)}
                    />
                    <City
                        mr
                        name="Repeated"
                        active={clientIndex === 2}
                        onClick={()=>setClientIndex(2)}
                    />
                    <City
                        name="Old"
                        active={clientIndex === 3}
                        onClick={()=>setClientIndex(3)}
                    />
                </div>

                <div style={{paddingTop:"30px"}}>
                    <Button style={{background:" rgba(19,41,59,1)",color:"white", width:"100%"}}>Show 17 Results</Button>
                </div>
                
            </Card>
            </>
    )
}

export default Filter
