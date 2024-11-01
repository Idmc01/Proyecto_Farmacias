// AdminNavbar.tsx
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const AdminNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    navigate('/login');
  }
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item" onClick={() => toggleDropdown('farmacias')}>
          
          Pharmacies ▾
          {activeDropdown === 'farmacias' && (
            <ul className="dropdown-menu">
              <li><Link to='/pharmacies'>View Pharmacies</Link></li>
            </ul>
          )}
        </li>

        <li className="navbar-item" onClick={() => toggleDropdown('medicamentos')}>
          Products ▾
          {activeDropdown === 'medicamentos' && (
            <ul className="dropdown-menu">
              <li><Link to='/products'>View Products</Link></li>
            </ul>
          )}
        </li>

        <li className="navbar-item" onClick={() => toggleDropdown('solicitudes')}>
          Requests ▾
          {activeDropdown === 'solicitudes' && (
            <ul className="dropdown-menu">
              <li><Link to='/requests'>View Requests</Link></li>
            </ul>
          )}
        </li>
      </ul>

      <div className="profile-icon" onClick={() => toggleDropdown('perfil')}>
        <img src="src/assets/user-icon-green-1.png" alt="Perfil" />
        {activeDropdown === 'perfil' && (
          <ul className="dropdown-menu">
            <li>Perfil</li>
            <li onClick={handleLogout}>Salir</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
