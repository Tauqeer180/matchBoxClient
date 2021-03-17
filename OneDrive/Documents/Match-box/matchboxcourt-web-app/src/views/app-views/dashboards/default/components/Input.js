import React from 'react'
import { Input } from 'antd'

export default function MyInput({
    rows,
    style,
    error,
    label,
    value,
    setValue,
    multiline,
    placeholder,
    containerStyle,
}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', ...containerStyle }}>
            <label style={{fontSize: 12, marginBottom:5, color: '#7f7f7f'}}>{label || ''}</label>
            {
                multiline ?
                    <textarea rows={rows} value={value} onChange={e=>setValue(e.target.value)} placeholder={placeholder || ''} style={{borderRadius: 0, height:"45px", ...style}} />
                :
                    <Input value={value} onChange={e=>setValue(e.target.value)} placeholder={placeholder || ''} style={{borderRadius: 0, height:"45px", ...style}} />
            }
            <label style={{textAlign: 'end', fontSize: 10, marginTop:2, color: 'red'}}>{error || ''}</label>
        </div>
    )
}
