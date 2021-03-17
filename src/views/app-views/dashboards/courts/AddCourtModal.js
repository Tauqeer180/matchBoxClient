import React, { useState } from 'react'
import MyInput from '../default/components/Input'
import { Menu, Slider, TimePicker, Input, Button, Row, Col, Tooltip, Upload } from 'antd'
import { DownOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Modal } from 'react-responsive-modal'
import SportItem from '../default/components/SportItem'
import BADMINTON from 'assets/icons/badminton-player.png'
import BASEBALL from 'assets/icons/baseball-player.png'
import CRICKET from 'assets/icons/criquet-silhouette.png'
import COURT_IMG from 'assets/icons/court-image@2x.png'
import BOXING from 'assets/icons/boxing-silhouette.png'
import EDIT from 'assets/icons/Iconly-Bold-Edit.png'
import DELETE from 'assets/icons/Iconly_Bold_Delete.png'
import ImgCrop from 'antd-img-crop';

import DayItem from './Day'

import './styles.css'


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

export default function AddCourtModal({ open, setModal }) {
    const [title, setTitle] = useState('')
    const [phone, setPhone] = useState('')
    const [index, setIndex] = useState(0)
    const [days, setDays] = useState([])
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const dayHandler = (d) => {
        let ds = [...days];

        let index = ds.indexOf(d);
        if (index && index !== -1) {
            ds.splice(index, 1)
        } else {
            ds.push(d)
        }

        setDays([...ds])
    }

    return (
        <Modal open={open} onClose={() => setModal(false)} closeIcon={<div />} center>
            <div className='court-modal-div'>
                <Row>
                    <Col sm={24} lg={12} >
                        <ImgCrop rotate>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                        {/* <div style={{ position: 'relative' }}>
                            <img src={COURT_IMG} className="court-img" />
                            <div className="action-view-container">
                                <div className="action-img-view">
                                    <img src={DELETE} className="action-img" />
                                </div>
                                <div className="action-img-view">
                                    <img src={EDIT} className="action-img" />
                                </div>
                            </div>
                        </div> */}
                    </Col>
                    <Col sm={24} lg={12} style={{ paddingLeft: 15 }}>
                        <span>Make sure the image is</span>
                        <div className='image-title'>Relatable</div>
                        <div className='image-title'>Bright Lit</div>
                        <div className='image-title'>Large & Centered</div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={24} lg={12}>
                        <label style={{ fontSize: 12, color: '#7f7f7f' }}>Sport*</label>
                        <div className="sports-view">
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
                            <SportItem
                                title='Boxing'
                                image={BOXING}
                                active={index === 2}
                                onClick={() => setIndex(2)}
                            />
                            <SportItem
                                title='Cricket'
                                image={CRICKET}
                                active={index === 3}
                                onClick={() => setIndex(3)}
                            />
                        </div>

                        <MyInput
                            value={title}
                            setValue={setTitle}
                            label='Court Name*'
                            style={{ borderRadius: 7 }}
                            placeholder="Enter court name"
                            error={title === '' ? 'This field should not be empty.' : ''}
                        />

                        <MyInput
                            value={title}
                            setValue={setTitle}
                            label='Description'
                            style={{ borderRadius: 7 }}
                            placeholder="Enter description"
                        />
                        <label style={{ fontSize: 10, marginTop: 2, color: '#A7A7A7' }}>this should give customers all the information to understand.</label>



                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                                <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Price/hr*</label>
                                <Input style={{ borderRadius: 0 }} addonBefore="$" placeholder="0.00" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                                <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Court Capacity</label>
                                <Input style={{ borderRadius: 0 }} placeholder="0.00" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} lg={1} />
                    <Col sm={24} lg={11}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                                <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>City*</label>
                                <Input style={{ borderRadius: 5 }} placeholder="Select" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                                <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Address*</label>
                                <Input
                                    style={{ borderRadius: 5 }}
                                    placeholder="0.00"
                                    suffix={
                                        <Tooltip title="Extra information">
                                            <EnvironmentOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                        </Tooltip>
                                    }
                                />
                            </div>
                        </div>

                        <label style={{ fontSize: 12, color: '#7f7f7f' }}>Service days*</label>
                        <div className="sports-view">
                            <DayItem
                                value='Mon'
                                onClick={() => dayHandler('Mon')}
                                active={days.includes('Mon')}
                            />
                            <DayItem
                                value='Tue'
                                onClick={() => dayHandler('Tue')}
                                active={days.includes('Tue')}
                            />
                            <DayItem
                                value='Wed'
                                onClick={() => dayHandler('Wed')}
                                active={days.includes('Wed')}
                            />
                            <DayItem
                                value='Thu'
                                onClick={() => dayHandler('Thu')}
                                active={days.includes('Thu')}
                            />
                            <DayItem
                                value='Fri'
                                onClick={() => dayHandler('Fri')}
                                active={days.includes('Fri')}
                            />
                            <DayItem
                                value='Sat'
                                onClick={() => dayHandler('Sat')}
                                active={days.includes('Sat')}
                            />
                            <DayItem
                                value='Sun'
                                onClick={() => dayHandler('Sun')}
                                active={days.includes('Sun')}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                                <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Opening Time*</label>
                                <TimePicker use12Hours format="hh:mm A" suffixIcon={<DownOutlined />} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                                <label style={{ fontSize: 12, marginBottom: 5, color: '#7f7f7f' }}>Closing Time*</label>

                                <TimePicker use12Hours format="hh:mm A" suffixIcon={<DownOutlined />} />
                            </div>
                        </div>

                        <div style={{ paddingTop: "30px" }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="filter-title">Skill level*</span>
                                <span className="price-range">1-8</span>
                            </div>
                            <Slider min={0} max={10} range defaultValue={[1, 8]} />
                        </div>
                    </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                    <Button onClick={() => setModal(false)} style={{ color: "black", borderRadius: 10, border: '2px #7f7f7f solid', marginRight: 20 }}>Cancel</Button>
                    <Button onClick={() => setModal(false)} style={{ background: "#283851", color: "white", borderRadius: 10, border: '2px #000 solid' }}>+ Add Court</Button>
                </div>
            </div>
        </Modal>
    )
}
