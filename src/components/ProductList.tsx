import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="m-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28121941/pexels-photo-28121941/free-photo-of-a-person-holding-a-coffee-cup-with-a-croissant-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28121941/pexels-photo-28121941/free-photo-of-a-person-holding-a-coffee-cup-with-a-croissant-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28121941/pexels-photo-28121941/free-photo-of-a-person-holding-a-coffee-cup-with-a-croissant-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28121941/pexels-photo-28121941/free-photo-of-a-person-holding-a-coffee-cup-with-a-croissant-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/19220718/pexels-photo-19220718/free-photo-of-young-model-in-a-pink-t-shirt-and-jeans-posing-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
