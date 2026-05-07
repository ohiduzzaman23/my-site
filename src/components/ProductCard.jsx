import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { id, price, name, ratings, thumbnail } = product;
  return (
    <Link to={`/${id}`}>
      <div className="max-w-[285px] bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden font-sans">
        {/* image */}
        <div className="relative w-full aspect-square overflow-hidden flex">
          <img
            src={thumbnail}
            alt="mini rechargeable fan"
            className="max-w-full max-h-full object-contain "
          />
        </div>

        {/* Product Details */}
        <div className="p-3 pt-1">
          {/* Titel */}
          <h3 className="text-[13px] font-semibold text-gray-800 leading-snug h-9 line-clamp-2 mb-3">
            {name}
          </h3>

          {/* Product & Discount */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-orange-600 text-lg">৳{price}</span>
            {/* <span className="text-xs text-gray-400">-46%</span> */}
          </div>
          {/* Reating */}
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-500  text-[15px]">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <span className="text-[11px] text-blue-400">{ratings}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
