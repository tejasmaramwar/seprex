import React from "react";
import { useParams } from "react-router-dom";
import products from "./productData";
import "./css/productDetails.css";
import { Col, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div style={{ marginTop: "100px" }}>
        <h2 className="text-center">Product not found!</h2>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-header">
        <h2 className="text-center">{product.name}</h2>
      </div>
      <div className="product-details-content">
        <div className="first-part">
          <Container>
            <Row>
              <Col md={5}>
                <img
                  src={product.image}
                  alt="Content"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Col>
              <Col md={7}>
                <p>{product.description}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="second-part">
          <h4 className="text-center" style={{ fontWeight: 600 }}>
            {product.sectiontitle}
          </h4>
          <Carousel style={{ backgroundColor: '#f0f0f0', width: '80%', margin: 'auto' }}>
            {product.featuresTitle.map((text, index) => (
              <Carousel.Item key={index} style={{ backgroundColor: '#ffffff', padding: '20px' }}>
                <div className="d-flex flex-column align-items-center">
                  <h2>{text}</h2>
                  <p>{product.features[index]}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* <div className="product-details-image">
          {product.images.map((image, index) => (
            <div className="product-image">
              <img key={index} src={image} alt="Products" />
            </div>
          ))}
        </div>
        <p>{product.description}</p> */}
      </div>
    </div>
  );
};

export default ProductDetails;
