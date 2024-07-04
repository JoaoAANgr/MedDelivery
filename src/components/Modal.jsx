// src/components/Modal.jsx
import React from 'react';

function Modal({ showModal, setShowModal }) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Criar Conta</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nome:</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha:</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Criar Conta
          </button>
        </form>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;
