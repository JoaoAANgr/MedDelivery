import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CreateAccountModal = ({ isOpen, onClose, onAccountCreated }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCreateAccount = (event) => {
    event.preventDefault(); // Prevenir comportamento padrão de submissão do formulário

    // Simulação de validação e criação de conta
    const userData = {
      nome,
      email,
      senha,
    };

    onAccountCreated(userData); // Chama a função de conta criada com os dados do usuário
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
            <h2 className="text-xl font-bold mb-4">Crie sua conta</h2>
            <form onSubmit={handleCreateAccount}>
              <input
                type="text"
                placeholder="Nome"
                className="block w-full p-2 border mb-2"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="block w-full p-2 border mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                Criar Conta
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAccountModal;
