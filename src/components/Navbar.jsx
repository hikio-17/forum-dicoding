import React from 'react';
import '../styles/navbar.css';
import { FaHome, FaFolderPlus, FaSign, FaSignOutAlt } from 'react-icons/fa'

function Navbar() {
 
   return (
      <nav>
         <h1>Qouraku</h1>
         <div className="icon-group">
            <span><FaHome /></span>
            <span><FaFolderPlus /></span>
         </div>
         <input type="text" />
         <div>
         <div className="users">
         <p>Users</p>
         <span><FaSignOutAlt /></span>
         </div>
         </div>
      </nav>
   )
}

export default Navbar;