import React, { useState } from "react";
import {Card,Avatar,Input,Row,Col} from "antd";
import {LeftOutlined,AudioOutlined} from "@ant-design/icons"


export const Chat = () => {
    return (
        <>
            <Card>
            <Row>
                    <LeftOutlined/>
                <span style={{paddingLeft:"10px"}}>
                    <Avatar src="/img/avatars/thumb-1.jpg"/>
                </span>
                <span style={{textAlign:"center", paddingLeft:"10px"}}>
                    Ekam Sports Areana
                    <div>Online</div>
                </span>
            </Row>
                <div style={{paddingTop:"20px"}}>
                <hr style={{border:"1px solid rgba(226,227,223,1)"}}/>
                    </div>
                <Row>
                <div style={{paddingLeft:"100px", paddingTop:"10px", color:"rgba(139,160,133,1)"}}>Today</div>
                <div style={{width:"165px", borderRadius:"20px",background:"rgba(139,160,133,1)",color:"rgba(255,255,255,1)", marginTop:"10px", marginLeft:"100px", padding:"10px"}}>
                    Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                </div>
                <div style={{width:"165px", borderRadius:"20px", float:"left",background:"rgba(226,227,223,1)",color:"black", marginTop:"10px", padding:"10px"}}>
                    Lorem ipsum dolor sit amet,
                </div>
                <div style={{width:"165px", borderRadius:"20px", marginLeft:"100px",background:"rgba(139,160,133,1)",color:"rgba(255,255,255,1)", marginTop:"10px", padding:"15px"}}>
                    Hi what's the plan for to..
                </div>
                </Row>
                <div style={{paddingTop:"40px"}}>
                <Row gutter="16">
                    <Col span="18">
                    <Input placeholder="Type here..." style={{borderRadius:"10px"}}/>
                    </Col>
                    <Col span="6">
                            <AudioOutlined style={{borderRadius:"10px",border:"1px solid rgba(226,227,223,1)", padding:"10px"}}/>
                    </Col>
                </Row>
                </div>
            </Card>
            </>
    )
}

export default Chat
