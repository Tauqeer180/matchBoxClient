import React from 'react'
import {Card} from "antd";

const DepositesWidegt = () => {
    return (
        <>
            <Card>
                <div>
                    <section style={{paddingLeft:"15px", display:"flex"}}>
                        <span style={{paddingLeft:"10px", display:"flex"}}>
                            <h1>05</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Active Courts
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}}>
                            <h1>01</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Non-active Courts
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}}>
                            <h1>06</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Total Courts
                            </span>
                        </span>
                    </section>
                </div>
            </Card>
            </>
    )
}

export default DepositesWidegt
