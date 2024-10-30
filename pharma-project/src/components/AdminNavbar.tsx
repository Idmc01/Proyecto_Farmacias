// AdminNavbar.tsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

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
        <img src="path/to/profile-icon.png" alt="Perfil" />
        {activeDropdown === 'perfil' && (
          <ul className="dropdown-menu">
            <li>Perfil</li>
            <li>Salir</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
