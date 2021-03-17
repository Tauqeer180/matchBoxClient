import React from 'react'
import './styles.css'

export default function DayItem({ value, image, active, onClick }) {
    return (
        <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <div className={active ? 'active-day-item' : 'day-item'}>
                <label style={{textAlign: 'center', fontSize: 12}}>{value || ''}</label>
            </div>

        </div>
    )
}
