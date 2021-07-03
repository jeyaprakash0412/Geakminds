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
  <div class="row bg-secondary">
    <div class="col-2 mt-2"style={{color:"white"}}align="center">
      <h4><b>SKOTE</b></h4>
    </div>
    <div class="col-3 mr-3">
      
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid ">
      <img src={Hand} alt="handberg" height="50%" width="7%"/>
  <form class="d-flex ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
          Mega Menu
          </div>
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
    
    
      <div class="col-7 mt-2 mr-1"align="right"><img src={flag} alt="handberg" height="50%" width="7%"/>
      <img src={qr} alt="qr" height="50%" width="7%"class= "mr-5"/>

      
      <img src={Menu} alt="menu" height="50%" width="7%" />
    
     <img src={square} alt="squ" height="50%" width="7%"/>
     
     <img src={notification} alt="notifi" height="50%" width="7%"/>
     
     <img src={user} alt="user" height="50%" width="7%"/>
      

    <img src={settings} alt="settings" height="50%" width="7%"/>
    



    </div>
        </div>
        </div>
    </div>
    
        
    )
}

export default Navbar
