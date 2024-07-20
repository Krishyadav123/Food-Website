import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectablem array of dishes crafted with the finest ingredients and culinary expertise. Our miission is to satisfy your cravings and elevent your dining experience, one delicious meal at a time.</p>
            <a href='#explore-menu' className='view-menu'>View Menu</a>
        </div>
    </div>
  )
}

export default Header