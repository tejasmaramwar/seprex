import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();

    // Static data (replace this with your actual data)
    const products = [
        { id: '1', name: 'Product 1', description: 'Description of Product 1' },
        { id: '2', name: 'Product 2', description: 'Description of Product 2' },
        // Add more products as needed
    ];

    // Find the product with the matching ID
    const product = products.find((p) => p.id === productId);

    return (
        <div className='pt-5'>
            {product ? (
                <> 
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    {/* Display other product details as needed */}
                </div>
                </>
                
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetails;
