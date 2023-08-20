import React from 'react'

const AlertComponent = ({ alertMessage }) => {
    return (
        <div className="bg-success text-light m-1 p-2 rounded-pill">
            {alertMessage}
        </div>
    )
}


export default AlertComponent;