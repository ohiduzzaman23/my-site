import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../ProductCard";
import Carousel from "../Carousel/Carousel";
import { Container } from "../Container";

const Home = () => {
  const data = useLoaderData();
  const products = data.slice(0, 6);
  return (
    <Container>
      <div className="mt-4">
        <Carousel></Carousel>
        <div className="grid grid-cols-1 lg:my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
