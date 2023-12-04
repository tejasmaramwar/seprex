import React from 'react';
import { useParams } from 'react-router-dom';
import products from "./productData"
import "./css/productDetails.css"

const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);

    return (
        <div className="product-details-container">
            <div className="product-details-image">
                <img
                    src={product.imageSrc}
                    alt={product.name}
                    style={{ width: '100%' }}
                />
            </div>
            <div className="product-details-description">
                {/* Product details */}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {/* Add other product details as needed */}
            </div>
        </div>
    )
};

export default ProductDetails;
