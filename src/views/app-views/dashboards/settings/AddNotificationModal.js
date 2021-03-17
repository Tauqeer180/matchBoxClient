import React, { useState } from 'react'
import MyInput from '../default/components/Input'
import {TimePicker, Select, Input, Button} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Modal } from 'react-responsive-modal'
import SportItem from '../default/components/SportItem'
import BADMINTON from 'assets/icons/badminton-player.png'
import BASEBALL from 'assets/icons/baseball-player.png'
import CRICKET from 'assets/icons/criquet-silhouette.png'
import BOXING from 'assets/icons/boxing-silhouette.png'
import '../default/components/styles.css'

let { Option } = Select;

export default function AddNotificationModal({ open, setModal }) {
    const [title, setTitle] = useState('')
    const [phone, setPhone] = useState('')
    const [index, setIndex] = useState(0)

    return (
        <Modal open={open} onClose={()=>setModal(false)} closeIcon={<div />} center>
            <div className='modal-div'>
                <h3>Add Notification</h3>
                <MyInput 
                    rows="4"
                    multiline
                    value={title}
                    setValue={setTitle}
                    label='Description'
                    style={{ borderRadius: 8 }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 15 }}>
                    <label style={{fontSize: 12, marginBottom:5, color: '#7f7f7f'}}>Targeted Courts</label>
                    <Select key="Select">
                        <Option>MT Arena</Option>
                        <Option>ZTV Box</Option>
                        <Option>MT Arena</Option>
                    </Select>
                </div>    
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                        <label style={{fontSize: 12, marginBottom:5, color: '#7f7f7f'}}>Message Frequency</label>
                        <Select>
                            <Option>MT Arena</Option>
                            <Option>ZTV Box</Option>
                            <Option>MT Arena</Option>
                        </Select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                        <label style={{fontSize: 12, marginBottom:5, color: '#7f7f7f'}}>Time To Send</label>
                        <Select>
                            <Option>MT Arena</Option>
                            <Option>ZTV Box</Option>
                            <Option>MT Arena</Option>
                        </Select>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                    <Button onClick={()=>setModal(false)} style={{ color:"black", borderRadius: 10, border: '2px #7f7f7f solid', marginRight: 20}}>Cancel</Button>
                    <Button onClick={()=>setModal(false)} style={{ background: "#283851", color:"white", borderRadius: 10, border: '2px #000 solid'}}>+ Add Notification</Button>
                </div>
            </div>
        </Modal>
    )
}
