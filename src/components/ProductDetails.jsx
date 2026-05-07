import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import {
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { addToStoredWishlist } from "../utility/addToDB";

const ProductDetails = () => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const data = useLoaderData();

  const { id } = useParams();

  const products = data.find((item) => item.id === parseInt(id));
  const { price, name, ratings, thumbnail } = products;
  const totalPrice = price * quantity;

  const handleAdd = () => {
    const added = addToStoredWishlist(products);
    if (added) {
      alert("Added to Wishlist!");
    } else {
      alert("Already in Wishlist!");
    }
  };

  const handleDellivery = (e) => {
    e.preventDefault();
    navigate("/deliveryInf", {
      state: {
        product: products,
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white flex flex-col md:flex-row gap-8 font-sans">
      {/* Left side: Product Image */}
      <div className="w-full md:w-1/3">
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right side: Product Info */}
      <div className="flex-2">
        {/* Title and Icons */}
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-medium text-gray-800 leading-tight pr-10">
            {name}
          </h1>
          <div className="flex gap-3 text-gray-400 text-lg">
            <FaShareAlt className="cursor-pointer hover:text-blue-500" />
            <button onClick={handleAdd}>
              <FaRegHeart className="cursor-pointer hover:text-red-500" />
            </button>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-blue-500 text-sm cursor-pointer hover:underline">
            {ratings}
          </span>
        </div>

        {/* Brand Info */}
        <div className="mt-2 text-xs text-gray-500">
          <span>
            Brand:{" "}
            <span className="text-blue-500 cursor-pointer">No Brand</span>
          </span>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Price Section */}
        <div className="mb-4">
          <div className="text-3xl text-orange-600 font-normal">
            ৳ {totalPrice}
          </div>
          {/* <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-400 line-through">৳ 899</span>
            <span className="text-sm text-gray-700">-56%</span>
          </div> */}
        </div>

        <hr className="my-4 border-gray-100" />

        {/* Color Selection */}

        {/* Quantity Selection */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm text-gray-500">Quantity</span>
          <div className="flex items-center">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <FaMinus size={12} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 h-8 text-center border-none text-sm outline-none"
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDellivery}
            className="flex-1 bg-[#26abd4] text-white py-3 rounded-sm font-medium hover:bg-[#1f8fb1] transition-colors"
          >
            Buy Now
          </button>
          <button className="flex-1 bg-[#f57224] text-white py-3 rounded-sm font-medium hover:bg-[#d45d1a] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-gray-100 flex-1 "></div>
    </div>
  );
};

export default ProductDetails;
