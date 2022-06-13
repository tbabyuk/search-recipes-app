
import React from 'react'

function Alert({alert}) {
  return (
        <div className='my-alert'>
            <i className="fas fa-info-circle"> {alert}</i>
        </div>
  )
}

export default Alert