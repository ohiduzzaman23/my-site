export const getStoredWishlist = () => {
  const storedWishlistString = localStorage.getItem("wishlist");
  if (storedWishlistString) {
    return JSON.parse(storedWishlistString);
  }
  return [];
};

export const addToStoredWishlist = (product) => {
  const wishlist = getStoredWishlist();
  const isExist = wishlist.find((item) => item._id === product._id);
  if (!isExist) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    return true;
  }
  return false;
};

export const removeFromStoredWishlist = (id) => {
  const wishlist = getStoredWishlist();
  const remaining = wishlist.filter((item) => item._id !== id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
};
