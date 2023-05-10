function Header() {
  return (
      <nav className="navbar navbar-default custom-col1">
         <div className="container-fluid">
            <div className="navbar-header">
               <a className="navbar-brand custom-nav" href="#">PIZZAMANIA</a>
            </div>
         
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               
               <ul className="nav navbar-nav navbar-right">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
               
               </ul>
            </div>
         </div>
      </nav>
   )
}




export default Header
