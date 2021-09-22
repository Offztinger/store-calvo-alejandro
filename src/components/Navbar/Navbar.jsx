import "./Navbar.css"
import logo from "../../assets/aerolab-logo.svg"
import coin from "../../assets/icons/coin.svg"

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbarContainer">
                <img className="logo" src={logo} alt="kite" />
                <div className="userContent">
                    <p className="userText">John Kite</p>
                    <div className="coinContent">
                        <p className="coinText">9000</p>
                        <div className="coin">
                            <img className="coin" src={coin} alt="coin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}