import React, { useState } from "react";
import {Card, Row, Col, DatePicker,} from "antd";
import { Select, Button } from 'antd';
import deleteIcon from "assets/icons/Iconly_Bold_Delete.png"
import filterIcon from 'assets/icons/Iconly-Bold-Filter.png'
import { Slider } from 'antd';
import SportItem from '../../default/components/SportItem'
import TENIS from 'assets/icons/Group 8270.png'
import VOLLEYBALL from 'assets/icons/volleyball-silhouette-1.png'
import HOCKEY from 'assets/icons/hockey-player-silhouette-6.png'
import FOOTBALL from 'assets/icons/soccer-player-running-with-the-ball-1.png'
import City from "../../components/City";

const { Option } = Select;

export const Filter = () => {
    const [index, setIndex] = useState(0)
    const [clientIndex, setClientIndex] = useState(0)
    const [cityIndex, setCityIndex] = useState(5)

    return (
        <>
            <Card>
                <div style={{ width: '100%', display: 'flex', marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{fontSize:"20px"}}><img src={filterIcon} alt='filter' width='36' height='36' style={{marginRight:15 +'px'}}/>Filter</span>
                    <span style={{border:"1px solid rgba(226,227,223,1)", borderRadius:"100px", padding:"8px"}}><img src={deleteIcon}/> </span>
                </div>

                <div style={{paddingTop:"30px"}}>
                    <div style={{ display:'flex', justifyContent: 'space-between' }}>
                        <span className="filter-title">Price</span>
                        <span className="price-range">$200-$500</span>
                    </div>
                    <Slider min={1} max={1000} range defaultValue={[200, 500]} />
                </div>

                <span className="filter-title">Product Wise</span>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select Product"
                    optionFilterProp="children"
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>

                <div style={{paddingTop:"20px", display: 'flex', justifyContent: 'space-between'}}>
                    <span className="filter-title">Date Wise</span>
                    <span style={{color: 'blue', cursor: 'pointer'}}>clear</span>
                </div>
                <div style={{ marginBottom: 20}}>
                    <Row gutter="16">
                        <Col span="12">
                            <DatePicker picker="From date" />
                        </Col>
                        <Col span="12">
                            <DatePicker picker="To date" />
                        </Col>
                    </Row>
                </div>

                <span className="filter-title">Product Types</span>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <City
                        mr
                        name="Best Selling"
                        active={clientIndex === 1}
                        onClick={()=>setClientIndex(1)}
                    />
                    <City
                        mr
                        name="New"
                        active={clientIndex === 2}
                        onClick={()=>setClientIndex(2)}
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
