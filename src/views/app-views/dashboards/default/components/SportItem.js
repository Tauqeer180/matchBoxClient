import React from 'react'
import './styles.css'

export default function SportItem({ sm, md, title, image, active, onClick }) {
    return (
        <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={sm ? 'sm-sport-item' : md ? 'md-sport-item' : 'sport-item'} style={{ backgroundColor: active ? 'rgb(139, 160, 133)' : '' }}>
                <img src={image} style={{ height: sm ? 20 : md ? 30 : 40 }} />
            </div>

            <label style={{textAlign: 'center', fontSize: 12}}>{title || ''}</label>
        </div>
    )
}
