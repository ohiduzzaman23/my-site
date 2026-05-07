import React, { useEffect, useState } from "react";
import {
  getStoredWishlist,
  removeFromStoredWishlist,
} from "../utility/addToDB";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = getStoredWishlist();
    setWishlist(data);
  }, []);
  const handleRemove = (id) => {
    removeFromStoredWishlist(id);
    const remaining = wishlist.filter((item) => item._id !== id);
    setWishlist(remaining);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">
        My Wishlist ({wishlist.length})
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-xl">Your wishlist is empty!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-4 ">
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <h2 className="">{item.slug}</h2>
                </div>

                <div className="ml-10">
                  <p className="text-gray-600 font-semibold text-2xl text-red-500">
                    Price: ${item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="btn btn-outline btn-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
