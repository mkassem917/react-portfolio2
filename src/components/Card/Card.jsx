import React from 'react'

function Card() {
    return (
    <div className="container px-md-12">
    <div className="row-md-12">
      <div className="col py-3 px-md-5 border bg-light">
        <h1>About Me</h1> 
        <img src="../../../assets/Moe.jpeg" width="266" alt="Orlando Pic"></img>
      </div>
      <div className="col py-3 px-lg-5 border bg-light">
        <p>
          I'm 42 years old, married with 2 young boys.
          I have a Bachelors degree in IT and I currently hold a Senior IT Manager position with the Beef Jerky Outlet,
          Franchise INC. Currently studying to become a full stack developer. My family owns and operates a Beef Jerky
          Outlet Franchise in Dundee, MI.
        </p>
      </div>
    </div>

  </div>
  
    )
    
}

export default Card;


