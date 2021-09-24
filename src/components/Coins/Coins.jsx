import "./Coins.css"
import coin from "../../assets/icons/coin.svg"
import useUser from "../../hooks/useUser";
import token from "../../constants/token";

export default function Coins() {

    const { boostCoins } = useUser();

    const handleClick = async(userPoints) => {
        try {
            let request = await fetch(
                "https://coding-challenge-api.aerolab.co/user/points",
                {
                    method: "POST",
                    body: JSON.stringify({
                        amount: userPoints,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            let res = await request.json();
            boostCoins(userPoints)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="Coins">
            <div className="coinsContainer">
                <p className="textCoinsPrincipal">En este apartado podrá añadir fondos a tu monedero:</p>
                <button onClick={() => handleClick(1000)} className="coinButton">1000<img className="coin" src={coin} alt="coin" /></button>
                <button onClick={() => handleClick(5000)} className="coinButton">5000<img className="coin" src={coin} alt="coin" /></button>
                <button onClick={() => handleClick(7500)} className="coinButton">7500<img className="coin" src={coin} alt="coin" /></button>
            </div>
        </div>
    );
}