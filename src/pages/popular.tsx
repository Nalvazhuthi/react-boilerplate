import React from 'react'
import product1 from "../assets/image/products/product-1.png"
import product2 from "../assets/image/products/product-2.png"
import product3 from "../assets/image/products/product-3.png"
import { RatingIcon } from '../assets/svg/exportIcons'

const Popular = () => {
    const popular = [
        {
            productImage: product1,
            productName: "Vanilla Latte",
            price: 280,               // Short size, ₹
            availability: ["hot", "iced"],
            rating: 4.8
        },
        {
            productImage: product2,
            productName: "Espresso",
            price: 215,               // Single shot, ₹
            availability: ["hot", "iced"],
            rating: 4.8
        },
        {
            productImage: product3,
            productName: "Cappuccino",
            price: 260,               // Short size, ₹
            availability: ["hot", "iced"],
            rating: 4.7
        },

    ];

    return (
        <section className='popular-page'>
            <div className="section-header">Popular <div className="highlight">Now</div></div>
            <div className="popular-page-main-wrapper">
                <div className="popular-page-wrapper">
                    {popular.map((product, index) => (
                        <div className="product-container">
                            <div className="product-wrapper">
                                <div className="image-wrapper">
                                    <img src={product.productImage} alt="" />
                                    <div className="rating-wrapper">
                                        <div className="rating">
                                            <div className="rating-number">
                                                {product.rating}
                                            </div>
                                            <div className="icon"><RatingIcon /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <div className="details">
                                        <div className="productName">{product.productName}</div>
                                        <div className="product-price">{product.price}</div>
                                    </div>

                                    <div className="order-details">
                                        <div className="avabilities">
                                            <div className="availablity active">Hot</div>
                                            <div className="availablity">Iced</div>
                                        </div>
                                        <div className="addToCard">Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Popular