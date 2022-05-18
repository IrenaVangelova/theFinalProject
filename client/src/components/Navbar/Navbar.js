import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return ( 
        <div>
            <div>
                <p>Baby's</p>
            </div>
            <nav>
                <ul>
                    <li>
                        {/* <Link to=''>Breakfast</Link> */}
                        a
                    </li>
                    <span className="dot"></span>
                    <li>
                        {/* <Link to=''>Brunch</Link> */}
                        b
                    </li>
                    <span className="dot"></span>
                    <li>
                        {/* <Link to=''>Lunch</Link> */}
                        c
                    </li>
                    <span className="dot"></span>
                    <li>
                        {/* <Link to=''>Dinner</Link> */}
                        d
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;