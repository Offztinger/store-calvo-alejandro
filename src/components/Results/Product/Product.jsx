import "./Product.css"
import buyBlue from "../../../assets/icons/buy-blue.svg"
import buyWhite from "../../../assets/icons/buy-white.svg"
import coin from "../../../assets/icons/coin.svg"

export default function Product({ key, img, category, productName, price }) {
    return (
        <div key={key} className="Product">
            <div className="productContainer">
                <div className="productImage">
                    <div className="buyImageBlue">
                        <img className="buyBlue" src={buyBlue} alt="buyImage" />
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