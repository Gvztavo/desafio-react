import React from "react"
import './button.css';
import { Link } from 'react-router-dom';

function Button ({name, link, onClick, disabled, className}) {
  return (
  <div className="buttonDiv">
    <Link to={link}>
      <button
      className={className}
      type="button"
      disabled={disabled}
      onClick={onClick}>{name}
      </button>
    </Link>
  </div>
  )
}

export default Button;