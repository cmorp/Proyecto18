import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className="bg-success text-light m-1 p-2 rounded-pill">
            {message}
        </div>
    )
}


export default Alert;