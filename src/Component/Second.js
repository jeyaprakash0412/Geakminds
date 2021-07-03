import React from 'react'
import user from '../Images/user.svg'


const Second = () => {
    return (
        <div>
            <div class="container-fluid">
  <div class="row text-white bg-dark">
    <div class="col-2 " align="left" >
      Menu
    <br></br>
<br></br>
    <div class="col "align="center">
    Dashboards
    </div>
    <br></br>
    
    <div class="col"align="center">
    Default
    </div>
    <br></br>
    
    <div class="col"align="center">
    Saas
    </div>
    <br></br>
    <div class="col"align="center">
    Crypto
    </div>
    <br></br>
    <div class="col"align="center">
    Blog
    </div>
    <br></br>
    <div class="col"align="center">
    Dashboards

    </div>
    </div>
    <div class="col-4 shadow-sm p-3 mb-5 bg-dark rounded" align="left" >
        <div >
           <h4> Dashboards</h4>
           <div >
           
           <h6  class="text-primary">Welcome Back!</h6>
           <div  class="text-primary">
               Skote Dashboards
               <div>
           <img src={user} alt="user" height="20%" width="8%"/>
           
           </div>
           </div>
           
           </div>
        </div>
        <div class="d-flex mr-5 bd-highlight" align="left">125 <br></br>Projects<br></br>
        <div class="d-flex mr-5" align="right">
            $1245<br></br>Revenuge
            </div></div>
<div>
    Hendry Pri...<br></br>UI/UX Design..
<button type="button" class="btn btn-primary">View Profile </button>
</div>
<br>
    </br>
<div align="left">
<div>
    <h5>Monthly Earning</h5>
    
    This Month<br></br>
    $34,252<br></br>
    12% | From<br></br>
    Previous Period

           </div >
</div>


        </div>
        <div class="col-6 gx-8">
            <div class="d-flex  mr-5 bd-highlight " align="left">
                Order  <br></br>
              1,235
              <div>
              Revenue <br></br>
              $35,723
              </div>
              <div>
              Average Price  <br></br>
              $16.2
              </div>
            </div>

        </div>
        <div>

        </div>
    </div>
    </div>
    
        </div>
    )
}

export default Second
