import React from 'react'
import Hand from '../Images/Hand.svg'
import flag from '../Images/flag.svg'
import Menu from '../Images/Menu.svg'
import notification from '../Images/notification.svg'
import qr from '../Images/qr.svg'
import settings from '../Images/settings.svg'
import square from '../Images/square.svg'
import user from '../Images/user.svg'



const Navbar = () => {
    return (
        <div>
            <div class="container-fluid">
  <div class="row bg-dark">
    <div class="col-2 mt-2"style={{color:"white"}}align="center" >
      <h4><b>SKOTE</b></h4>
    </div>
    <div class="col-4">
      
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <img src={Hand} alt="handberg" height="8%" width="3%"/>
  <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mega Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
           
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
    </div>
    </nav>
    </div>
    
    <div class="col-6 mt-2  " align="center">
        <div>
      <div class="mr-10"><img src={flag} alt="handberg" height="8%" width="3%"/>
      <img src={qr} alt="qr" height="8%" width="3%"class= "mr-5"/>

      <img src={Menu} alt="menu" height="8%" width="3%"/>
      <img src={square} alt="squ" height="8%" width="3%"/>
      <img src={notification} alt="notifi" height="8%" width="3%"/>
      <img src={user} alt="user" height="8%" width="3%"/>
      <div class="collapse navbar-collapse" id="navbarSupportedContent mr-5">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mega Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
           
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
    <img src={settings} alt="settings" height="8%" width="3%"/>



    </div>
    </div>
        </div>

    </div>
    </div>
        </div>
    )
}

export default Navbar
