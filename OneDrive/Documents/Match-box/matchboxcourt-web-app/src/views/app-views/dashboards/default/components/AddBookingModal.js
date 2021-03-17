import React, { useState } from 'react'
import MyInput from './Input'
import { Menu, TimePicker, Input, Button, Dropdown, Select } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Modal } from 'react-responsive-modal'
import SportItem from './SportItem'
import BADMINTON from 'assets/icons/badminton-player.png'

import './styles.css'
const { Option, OptGroup } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}


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
const bookingDuration = (
    <Menu>
        <Menu.Item>
            1st menu item
        </Menu.Item>
        <Menu.Item>
            2nd menu item
        </Menu.Item>
        <Menu.Item>
            3rd menu item
        </Menu.Item>
    </Menu>
);

export default function AddBookingModal({ open, setModal }) {
    const [clientName, setClientName] = useState('')
    const [phone, setPhone] = useState('')
    const [index, setIndex] = useState(0)

    return (
        <Modal open={open} onClose={() => setModal(false)} closeIcon={<div />} center>
            <div className='modal-div'>
                <h3>Add Booking</h3>
                <MyInput
                    value={clientName}
                    setValue={setClientName}
                    label='Client Name'
                    error={clientName === '' ? 'This field should not be empty.' : ''}
                />

                <MyInput
                    value={phone}
                    label='Mobile Number'
                    setValue={setPhone}
                    containerStyle={{ marginTop: 20 }}
                    error={phone === '' ? 'This field should not be empty.' : ''}
                />

                <div style={{ marginTop: 15, }}>
                    <label style={{ fontSize: 12, color: '#7f7f7f' }}>Court</label>
                    <div style={{ marginTop: 5 }}>
                        <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>

                {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <SportItem
                        title='Badminton'
                        image={BADMINTON}
                        active={index === 0}
                        onClick={() => setIndex(0)}
                    />
                    <SportItem
                        title='Base Ball'
                        image={BASEBALL}
                        active={index === 1}
                        onClick={() => setIndex(1)}
                    />
                 
                    />
                </div> */}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                        <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Fees</label>
                        <Input style={{ borderRadius: 0 }} addonBefore="$" placeholder="0.00" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                        <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Booking At</label>

                        <TimePicker use12Hours format="hh:mm A" suffixIcon={<DownOutlined />} />
                    </div>
                </div>
                <div style={{ marginTop: 15, }}>
                    <label style={{ fontSize: 12, color: '#7f7f7f' }}>Booking Duration</label>
                    <div style={{ marginTop: 5 }}>
                        <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                    <Button onClick={() => setModal(false)} style={{ color: "black", borderRadius: 10, border: '2px #7f7f7f solid', marginRight: 20 }}>Cancel</Button>
                    <Button onClick={() => setModal(false)} style={{ background: "#283851", color: "white", borderRadius: 10, border: '2px #000 solid' }}>+ Add Booking</Button>
                </div>
            </div>
        </Modal>
    )
}
