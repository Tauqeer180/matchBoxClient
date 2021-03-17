import React from 'react'
import '../default/components/styles.css'

export default function City({ mr, active, name, onClick }) {
    return (
        <div className={active ? 'active-city-item' : 'city-item'} style={{ marginRight: mr ? 5 : 0 }} onClick={onClick}>
            {name}
        </div>
    )
}
