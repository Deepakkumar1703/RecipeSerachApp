import React from 'react'
import "./alert.css"

function Alert({alert}) {
    return (
        <div className="alert">
            <h5>{alert}</h5>
        </div>
    )
}

export default Alert
