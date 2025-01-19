"use client";

import { useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("standard");

  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
          Checkout
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Customer Information Form */}
          <div className="lg:col-span-3 border-2 border-black rounded-lg p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-10 pb-4 border-b-2 border-black">
              Customer Information
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-semibold uppercase tracking-wide"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold uppercase tracking-wide"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-b-2 border-gray-300 focus:border-black outline-none transition-colors appearance-none text-lg"
                  >
                    <option value="">Select a country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2 border-2 border-black rounded-lg p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold mb-10 pb-4 border-b-2 border-black">
              Order Summary
            </h2>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$99.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {shippingMethod === "express" ? "$14.99" : "$9.99"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">$10.00</span>
              </div>
              <div className="border-t-2 border-black pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    {shippingMethod === "express" ? "$124.98" : "$119.98"}
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="font-semibold text-xl mb-4">Order Details</h3>
              <div className="bg-gray-100 p-6 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Product Name</span>
                  <span className="font-medium">Quantity</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Example Product</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="font-semibold text-xl mb-4">Shipping Method</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === "standard"}
                    onChange={() => setShippingMethod("standard")}
                    className="form-radio text-black focus:ring-2 focus:ring-black"
                  />
                  <span className="text-lg">Standard Shipping ($9.99)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                    className="form-radio text-black focus:ring-2 focus:ring-black"
                  />
                  <span className="text-lg">Express Shipping ($14.99)</span>
                </label>
              </div>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
              Place Order
            </button>
            <div className="mt-8 flex justify-center space-x-6">
              <Image
                src="/Footer/visa.png"
                alt="Visa"
                width={60}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/Footer/master.png"
                alt="Mastercard"
                width={60}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/Footer/paypal.png"
                alt="PayPal"
                width={60}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
