import React from "react";
import { useParams } from "react-router-dom";
import products from "./productData";
import "./css/productDetails.css";
import {
  Col,
  Container,
  Row,
  Carousel,
  AccordionItem,
  AccordionHeader,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

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
        <div className="productFeatuesCarousel">
          <h4 className="text-center" style={{ fontWeight: 600 }}>
            {product.sectiontitle}
          </h4>
          <Carousel
            style={{ backgroundColor: "#f0f0f0", width: "90%", margin: "auto" }}
          >
            {product.featuresTitle.map((text, index) => (
              <Carousel.Item
                key={index}
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
              >
                <div className="d-flex flex-column align-items-center">
                  <h2>{text}</h2>
                  <p>{product.features[index]}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="productDescription">
          <Container>
            <Row className="align-items-center">
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
        <div className="fourth-part">
          {product.hasOwnProperty("fourthPartImage") ? (
            <div>
              <img
                src={product.fourthPartImage}
                alt="Content"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "75%",
                }}
              />
              <h1 className="text-center">{product.fourthPartTitle}</h1>
              <p className="promisecontent">{product.fourthPartContent}</p>
            </div>
          ) : (
            <div>
              <h1 className="text-center">{product.fourthPartTitle}</h1>
              <p className="promisecontent">{product.fourthPartContent}</p>
            </div>
          )}
        </div>
        <div className="productIndustriesServe">
          <Accordion alwaysOpen>
            <AccordionItem>
              <AccordionHeader className="d-flex justify-content-center">
                Industries we serve!
              </AccordionHeader>
              <AccordionBody>
                <ul>
                  {product.industriesData.map((text, index) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
