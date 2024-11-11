/*Made by Ola Ciesla*/

function Header() {
 return (
   <header className="header">
     <h1>Chats</h1> {/* Header title */}
     <div className="icons">
       <button className="icon edit-icon">✏️</button> {/* Edit button */}
       <button className="icon menu-icon">📋</button> {/* Menu button */}
     </div>
   </header>
 );
}

export default Header;
