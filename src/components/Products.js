import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import products from "./productData";

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="products">
        <div className="products-title container">
          <h1 className="text-center prodHeading prod-text-shadow">Products</h1>
        </div>
        <div className="productscontent">
          <Container>
            {products.map((product) => (
              <Cards
                product={product}
                key={product.id}
                reverse={parseInt(product.id) % 2 === 0 ? true : false}
              />
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
}
