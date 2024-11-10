import React from "react";



function Header() {
 return (
   <header className="header">
     <h1>Chats</h1>
     <div className="icons">
       <button className="icon edit-icon">✏️</button>
       <button className="icon menu-icon">📋</button>
     </div>
   </header>
 );
}


export default Header;
