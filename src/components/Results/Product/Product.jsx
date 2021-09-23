import "./Product.css"
import test from "../../../assets/product-pics/Switch-x1.png"
import buy from "../../../assets/icons/buy-blue.svg"

export default function Product() {
    return (
        <div className="Product">
            <div className="productContainer">
                <div className="productImage">
                    <div className="buyImage">
                        <img src={buy} alt="buyImage" />
                    </div>
                    <img className="productImage" src={test} alt="productImage" />
                </div>
                <div className="productInfo">
                    <p className="category">Gaming</p>
                    <p className="productName">Nintendo Switch 32GB</p>
                </div>
            </div>
        </div>
    );
}