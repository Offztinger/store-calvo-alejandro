import "./Product.css"
import buy from "../../../assets/icons/buy-blue.svg"

export default function Product({ key, img, category, productName }) {
    return (
        <div key={key} className="Product">
            <div className="productContainer">
                <div className="productImage">
                    <div className="buyImage">
                        <img src={buy} alt="buyImage" />
                    </div>
                    <img className="productImage" src={img} alt="productImage" />
                </div>
                <div className="productInfo">
                    <p className="category">{category}</p>
                    <p className="productName">{productName}</p>
                </div>
            </div>
        </div>
    );
}