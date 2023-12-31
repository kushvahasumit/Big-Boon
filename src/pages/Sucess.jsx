import React from 'react'
import { useLocation } from 'react-router-dom'

const Sucess = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div>
      SUCCESSFULL PAYMENT
    </div>
  )
}

export default Sucess

