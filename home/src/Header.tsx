import React from "react";


export default function Header() {
  return (
    <div className="bg-blue-500 p-5 font-bold text-white text-3xl">
      <div className="flex">
        <div className="flex flex-grow">
          <a href="/">Fidget Spinner World</a>
          <div className="mx-5">|</div>
          <a id="cart" href="/cart">
            Cart
          </a>
        </div>
        <div className="relative flex-end">
        </div>
      </div>
    </div>
  );
}
