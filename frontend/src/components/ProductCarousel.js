import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "./../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import "./carousel.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const ProductCarousel = () => {
    const dispatch = useDispatch();

    /* const productTopRated = useSelector((state) => state.productTopRated);
    const { loading, error, products } = productTopRated; */

    /* useEffect(() => {
        dispatch(listTopProducts());
    }, [dispatch]); */

    return (
        <Carousel className="h-60">
            <Carousel.Item interval={1000}>
                <Link to={`/product/5fcf2e210c022e21084676fc`}>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt=""
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Link to={`/product/5fcf2e210c022e21084676f3`}>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt=""
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to={`/product/5fcf2e210c022e21084676ff`}>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt=""
                    />
                </Link>
            </Carousel.Item>
        </Carousel>
    );
};

export default ProductCarousel;

{
    /* <div className="carousel-background">
            <Carousel pause="hover" styles={{ background: "transparent" }}>
                {products.map((product) => (
                    <Carousel.Item key={product._id}>
                        <Link
                            to={`/product/${product._id}`}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                style={{ maxWidth: "300px" }}
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h2 className="d-none d-sm-none d-md-block">
                                    {product.name} (${product.price})
                                </h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div> */
}
