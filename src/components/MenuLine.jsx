import React from "react";

const MenuLine = ({ name, description, price, image }) => {
  return (
    <div className="flex items-center gap-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 hover:scale-[1.02] transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-xl object-cover border border-yellow-500 shadow"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#8b0000]">{name}</h3>
        <p className="text-gray-700 text-sm mt-1 italic">{description}</p>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-yellow-600">{price} €</span>
      </div>
    </div>
  );
};

export default MenuLine;
