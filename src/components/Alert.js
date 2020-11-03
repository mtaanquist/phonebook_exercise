import React from 'react'

const Alert = ({ message, style }) => {
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (message === null || message === '') {
        return null
    }

    if (style === 'success') {
        return (
            <div style={successStyle}>
                {message}
            </div>
        )
    }

    if (style === 'error') {
        return (
            <div style={errorStyle}>
                {message}
            </div>
        )        
    }
}

export default Alert