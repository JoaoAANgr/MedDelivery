import React from 'react';

const Dropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none ${isOpen ? 'block' : 'hidden'}`}
      onMouseEnter={onMouseEnter} // Manter o dropdown visível ao passar o mouse sobre ele
      onMouseLeave={onMouseLeave} // Ocultar o dropdown ao tirar o mouse
    >
      <div className="py-1" role="none">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Medicamentos</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Vitaminas</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Suplementos</a>
      </div>
    </div>
  );
};

export default Dropdown;
