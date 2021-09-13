import React, { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { NavItems } from './NavItems';
import './Navbar.css';


function Navbar({authorized}) {
    const [sidebar, setSidebar] = useState(false);
 
  
    const showSidebar = () => setSidebar(!sidebar);
    if(!authorized)
    {
        return <Redirect to="/login"/>
    }
  
    return (
      <>
        <div className='navbar'>
          <div className="d-flex justify-content-between w-100 ">
                <div className='menu-bars'>
                  <Link to='#'>
                    <i class="material-icons" id="menu-btn"  data-toggle="dropdown">menu</i>
                        <div class="dropdown-menu">
                            <Link to="/" className="dropdown-item">
                                <span>Dashboard</span>
                            </Link>
                            <Link to="/store" className="dropdown-item">
                                <span>Store</span>
                            </Link>
                            <Link to="/events" className="dropdown-item">
                                <span>Events</span>
                            </Link>
                            <Link to="/feedback" className="dropdown-item">
                                <span>Feedback</span>
                            </Link>
                            <Link to="/transport" className="dropdown-item">
                                <span>TransportAgents</span>
                            </Link>
                            <Link to="/purchase" className="dropdown-item">
                                <span>Purchase</span>
                          </Link>
                        </div>
                  </Link>
                </div>
                <div className="profile dropdown dropleft">
                  <i class="material-icons" data-toggle="dropdown">account_circle</i>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" >Logout</a>
                  </div>
                </div>
          </div>
        </div>
          <nav className="nav-menu">
            <ul className='nav-menu-items' onClick={showSidebar}>
              {NavItems.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                    <i class="material-icons">{item.icon}</i>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        
      </>
    );
  }
  
  export default Navbar;