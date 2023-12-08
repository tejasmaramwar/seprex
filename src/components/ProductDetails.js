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
               
                {product.images.map((image, index) => (
                    <div className='product-image'>
                        <img
                            key={index}
                            src={image}
                            alt={`${product.name} - Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="product-details-description">
                <h2 className='text-center'>{product.name}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    )
};

export default ProductDetails;
