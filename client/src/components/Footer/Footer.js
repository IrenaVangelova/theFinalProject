import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';
import { iconStyle } from './NavigationStyles';


function Footer() {
  return (
    <div className='nav-bar'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='nav-logo'>
          <div className='nav-logo-baby'>Baby's</div>
          <div className='nav-logo-food'>food place</div>
        </div>
      </Link>
      <div className='nav-links'>
        <Link to='/breakfast'>Breakfast</Link>
        <FontAwesomeIcon icon={faCircle} color='#F0972A' style={iconStyle} />
        <Link to='/brunch'>Brunch</Link>
        <FontAwesomeIcon icon={faCircle} color='#F0972A' style={iconStyle} />
        <Link to='/lunch'>Lunch</Link>
        <FontAwesomeIcon icon={faCircle} color='#F0972A' style={iconStyle} />
        <Link to='/dinner'>Dinner</Link>
      </div>
    </div>
  );
}

export default Footer;