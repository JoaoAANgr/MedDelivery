import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Importe o componente Dropdown

const Header = ({ isLoggedIn, onLogout, onLogin, loggedInUser }) => {
  const handleLogout = () => {
    onLogout(); // Chama a função de logout fornecida via props
  };

  const handleLoginClick = () => {
    onLogin(); // Chama a função para abrir o modal de login
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar a visibilidade do dropdown
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Limpa o timeout para evitar esconder o dropdown
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // Ajuste o tempo conforme necessário
  };

  return (
    <header className="w-full">
      <div className="flex justify-center gap-2 items-stretch p-0 text-gray-50 bg-blue-900">
        <img className="w-7" src="/coupon.png" alt="promo" />
        <h2>Promoções de Inverno! Confira.</h2>
      </div>

      <div className="flex justify-between h-[130px] p-2 bg-sky-500">
        <div className="flex my-5 font-bold">
          <img className="w-[28px] h-[28px] my-5" src="/telephone.png" alt="menu" />
          <h4 className="my-5 mx-1">0800 400 500</h4>
        </div>

        <h1 className="text-7xl">MedDelivery</h1>

        <div className="flex justify-center gap-x-2 my-5">
          {isLoggedIn ? (
            <>
              <p className="text-gray-800">Olá, {loggedInUser ? loggedInUser.nome : 'Usuário'}!</p>
              <button
                className="ml-4 bg-blue-900 text-white h-[30px] px-3 rounded text-sm flex items-center justify-center hover:bg-blue-800"
                onClick={handleLogout}
                style={{ marginTop: '-0.2px' }} 
              >
                Sair
              </button>
            </>
          ) : (
            <img
              className="w-[28px] h-[28px] cursor-pointer hover:bg-gray-200 rounded"
              src="/user.png"
              alt="user"
              onClick={handleLoginClick} // Abre o modal de login ao clicar no ícone de usuário
            />
          )}
          <img className="w-[28px] h-[28px]" src="/market.png" alt="cart" />
        </div>
      </div>

      <div>
        <nav className="flex justify-center gap-[80px] bg-blue-900 text-gray-50 border-1">
          <a
            href="index.html"
            className="relative block py-2 px-4 text-sm leading-5 font-medium text-gray-50 hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
          >
            Planos
          </a>

          {/* Dropdown de Produtos */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className="relative block py-2 px-4 text-sm leading-5 font-medium text-gray-50 hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
              onClick={(e) => e.preventDefault()}
            >
              Produtos
            </a>
            <Dropdown
              isOpen={isDropdownOpen}
              onMouseEnter={handleMouseEnter} // Manter o dropdown visível ao passar o mouse sobre ele
              onMouseLeave={handleMouseLeave} // Ocultar o dropdown ao tirar o mouse
            />
          </div>

          <a
            href="#"
            className="relative block py-2 px-4 text-sm leading-5 font-medium text-gray-50 hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
          >
            Sobre
          </a>
          <a
            href="#"
            className="relative block py-2 px-4 text-sm leading-5 font-medium text-gray-50 hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
