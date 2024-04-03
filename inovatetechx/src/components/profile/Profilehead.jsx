import React from 'react'
import './Profilehead.css'
function Profilehead() {
    return (
        <div className='profhead'>
            <div className="headimg">
                <img src="logo.png" alt="logo"/>
            </div>
            <div className='headinput22'>
                <span className='search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
                <input type="text" placeholder='Search' />
                </span> 
                <div className="icns3">
                    <i class="fa-regular fa-bell"></i>
                    <i class="fa-regular fa-circle-question"></i>
                </div>
                
            </div>
        </div>
    )
}

export default Profilehead