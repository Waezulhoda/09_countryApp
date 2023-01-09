import { RotatingTriangles } from  'react-loader-spinner'

import React from 'react'

export default function Preloader() {
  return (
    <div className='full-screen flex items-center justify-center'>
        <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
        />
    </div>
  )
}

