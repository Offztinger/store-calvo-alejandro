import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../../assets/aerolab-logo.svg"
import coin from "../../assets/icons/coin.svg"

export default function Navbar({ name, points }) {
    return (
        <div className="Navbar">
            <div className="navbarContainer">
                <Link to="/store-calvo-alejandro/">
                    <img className="logo" src={logo} alt="kite" />
                </Link>
                <div className="userContent">
                    <Link to="/store-calvo-alejandro/user" style={{ textDecoration: 'none' }}>
                        <p className="userText">{name}</p>
                    </Link>
                    <Link to="/store-calvo-alejandro/coins" style={{ textDecoration: 'none' }}>
                        <div className="coinContent">
                            <p className="coinText">{points}</p>
                            <div className="coin">
                                <img className="coin" src={coin} alt="coin" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}