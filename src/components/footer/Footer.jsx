import React from 'react';
import './footer.css';
import GU from '../../assests/LogoGU.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Footer(props) {

  return (
    <div className="footer-container">
      <footer className="footer">
        <h1>Copyright By UniLink</h1>
      </footer>
    </div>
  );
}
