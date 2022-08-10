import React from 'react'

function AlertaError({children}) {
  return (
    <div className=' rounded text-center my-3 bg-danger text-white p-2 uppercase'>
        {children}

    </div>
  )
}

export default AlertaError