import React from 'react'
import {Card} from "antd";
import './style.css'

const CourtsWidegt = ({ value1, title1, value2, title2, value3, title3 }) => {
    return (
        <>
            <Card>
                <div>
                    <section style={{paddingLeft:"15px", display:"flex", justifyContent: 'space-around'}}>
                        <span style={{paddingLeft:"10px", display:"flex"}} className="sm-vertical">
                            <h1>{value1 ? value1 : '178'}</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                {title1 ? title1 : 'Clients Check-in'}
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}} className="sm-vertical">
                            <h1>{value2 ? value2 : '150'}</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                {title2 ? title2 : 'Clients Check-Out'}
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}} className="sm-vertical">
                            <h1 style={{color: value3 ? "" : "red"}}>{value3 ? value3 : '3.6K'}</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                {title3 ? title3 : 'Total Clients'}
                            </span>
                        </span>
                    </section>
                </div>
            </Card>
        </>
    )
}

export default CourtsWidegt
