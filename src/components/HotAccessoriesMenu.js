 import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
      <div className='hot-accessaries-menu'>
        <Link className="hot-accessaries-link" to = "/music" >Music Store</Link>
        <Link className="hot-accessaries-link" to = "/smart-device" >Smart Devices</Link>
        <Link className="hot-accessaries-link" to = "/home" >Home</Link>
        <Link className="hot-accessaries-link" to = "/lifestyle" >Lifestyle</Link>
        <Link className='hot-accessaries-link' to = "/mobile-accessories" >Mobile Accessories</Link>
       
      </div>
  )
}

export default HotAccessoriesMenu