import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contanct Us</li>
                    <li>Cart</li>

                </ul>

            </div>
        </div>
        </div>
        
    );
};


export default Header;