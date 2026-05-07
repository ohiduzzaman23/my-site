import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import { Container } from "../components/Container";

const AllProuct = () => {
  const products = useLoaderData();

  return (
    <Container>
      <div className="grid grid-cols-1 lg:my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </Container>
  );
};

export default AllProuct;
