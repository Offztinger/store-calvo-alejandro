import { useState } from "react"
import "./Product.css"
import buyBlue from "../../../assets/icons/buy-blue.svg"
import buyWhite from "../../../assets/icons/buy-white.svg"
import coin from "../../../assets/icons/coin.svg"


export default function Product({ img, category, productName, price, points }) {
    const [allow, setAllow] = useState(true);
    const [need, setNeed] = useState(0);
    if (price > points) {
        setAllow(false)
        setNeed(price - points)
    }

    return (
        <div className="Product">
            <div className="productContainer">
                <div className="productImage">
                    <div className="buyImageBlue">
                        {!allow ? (<img className="buyBlue" src={buyBlue} alt="buyImage" />) : (<div className="notAllow">
                            <p className="textNotAllow">You need {need}</p>
                            <img className="coin" src={coin} alt="coin" />
                        </div>)}
                    </div>
                    <img className="productImage" src={img} alt="productImage" />
                </div>
                <div className="productInfo">
                    <p className="category">{category}</p>
                    <p className="productName">{productName}</p>
                </div>
                {/*Contenedor Hidden*/}
                <div className="hidden">
                    <div className="buyImageWhite">
                        <img className="buyWhite" src={buyWhite} alt="buyImage" />
                    </div>
                    <div className="buyContainer">
                        <div className="coinContainer">
                            <p className="textCoin">{price}</p>
                            <img className="coin" src={coin} alt="coin" />
                        </div>
                        <button className="redeemButton">Redeem now</button>
                    </div>

                </div>
            </div>

        </div>
    );
}