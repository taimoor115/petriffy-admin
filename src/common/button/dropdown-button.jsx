import React, { useState } from "react";

const DropdownButton = ({ options, onSelect, label, icon, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-right">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`flex items-center justify-between w-full px-4 py-2 font-semibold text-white rounded-md shadow-md bg-custom_grey_light_100 focus:outline-none ${className}`}
      >
        <span>{label}</span>
        <span className="ml-2">{icon}</span>
      </button>

      {isOpen && (
        <div className="absolute w-48 mt-2 bg-custom_grey_light_100 border border-[#262730] rounded-md shadow-lg left-3">
          {options.map((option, index) => (
            <button
              type="button"
              key={index}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className="block uppercase w-full px-4 py-2 font-semibold text-left text-white hover:bg-[#262730]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
