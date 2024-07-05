import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const LoginModal = ({ isOpen, onClose, onCreateAccount, onLogin, onLoginError }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Obter dados do localStorage
    const userData = localStorage.getItem('userData');
    if (!userData) {
      onLoginError();
      return;
    }

    const savedUser = JSON.parse(userData);

    // Verificar se os dados correspondem
    if (usuario === savedUser.email && senha === savedUser.senha) {
      onLogin(savedUser);
    } else {
      onLoginError();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Faça login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Usuário"
                className="block w-full p-2 border mb-2"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                className="block w-full p-2 border mb-4"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800"
              >
                Entrar
              </button>
            </form>
            <p className="mt-4 text-center">
              Não tem conta?{' '}
              <button className="text-blue-900" onClick={onCreateAccount}>
                Crie aqui
              </button>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
