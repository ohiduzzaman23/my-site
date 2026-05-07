import React from "react";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { useLocation } from "react-router";

const DeliveryInfo = () => {
  const loaction = useLocation();
  const orderDetails = loaction.state;
  const { quantity, totalPrice } = orderDetails;

  //Delivery Charge + total price
  const deliveryCharge = 120;
  const netPrice = totalPrice + deliveryCharge;

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Delivery Information Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded shadow-sm">
          <h2 className="text-xl font-medium mb-6">Delivery Information</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Region</label>
              <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400 bg-white">
                <option>Please choose your region</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Please enter your phone number"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">City</label>
              <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400 bg-white">
                <option>Please choose your city</option>
              </select>
            </div>

            {/* House No */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Building / House No / Floor / Street
              </label>
              <input
                type="text"
                placeholder="Please enter"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Area</label>
              <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400 bg-white">
                <option>Please choose your area</option>
              </select>
            </div>

            {/* Colony / Suburb */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Colony / Suburb / Locality / Landmark
              </label>
              <input
                type="text"
                placeholder="Please enter"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="For Example: House# 123, Street# 123, ABC Road"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-orange-400"
              />
            </div>
          </form>

          {/* Delivery Label Buttons */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Select a label for effective delivery:
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-cyan-500 text-gray-600 px-6 py-2 rounded uppercase text-sm">
                <FaBriefcase className="text-gray-400" /> Office
              </button>
              <button className="flex items-center gap-2 border border-orange-500 text-gray-600 px-6 py-2 rounded uppercase text-sm">
                <FaHome className="text-gray-400" /> Home
              </button>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 text-lg">Invoice and Contact Info</h3>
            <button className="text-cyan-500 text-sm font-medium">Edit</button>
          </div>

          <div className="border-t pt-4 space-y-3">
            <h3 className="text-lg font-medium text-gray-800">Order Summary</h3>
            <div className="flex justify-between text-gray-600">
              <span>Items Total ({quantity})</span>
              <span className="font-semibold text-black">৳ {totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span className="font-semibold text-black">
                ৳ {deliveryCharge}
              </span>
            </div>

            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-2xl font-semibold text-orange-500">
                  {netPrice}
                </span>
              </div>
              <p className="text-right text-xs text-gray-500 mt-1">
                VAT included, where applicable
              </p>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md font-bold text-lg mt-4 hover:bg-orange-600 transition-colors">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
