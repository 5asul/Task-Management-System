
// src/components/Navbar.js
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTasks, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>Task Management</h2>
      </div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span className="nav-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/tasks" className={location.pathname === '/tasks' ? 'active' : ''}>
            <FontAwesomeIcon icon={faTasks} className="nav-icon" />
            <span className="nav-text">All Tasks</span>
          </Link>
        </li>
        <li>
          <Link to="/new" className={location.pathname === '/new' ? 'active' : ''}>
            <FontAwesomeIcon icon={faPlusCircle} className="nav-icon" />
            <span className="nav-text">Add New Task</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar















// import {Link} from 'react-router-dom'

// const Navbar = ()=>{
//     return (
//         <header>
//             <div className="container">
//                 <Link to="/">
//                 <h1>Task Management</h1>
//                 </Link>
//             </div>
//         </header>
//     )
// }

// export default Navbar;