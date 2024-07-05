// App.jsx
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import CreateAccountModal from './components/CreateAccountModal';
import { FaWhatsapp } from 'react-icons/fa';
import Produtos from './components/Produtos';
import { Route, Routes } from "react-router-dom";


// Componente de limite de erro simples
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>; // Pode ser uma UI de fallback mais sofisticada
    }

    return this.props.children;
  }
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // Estado para armazenar o usuário logado
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos

  React.useEffect(() => {
    fetch('../data/produtos.json')
    .then((res) =>res.json())
    .then((data) => setProdutos(data.produtos))
  }
  , [])

  useEffect(() => {
    // Verificar se há dados de usuário no localStorage ao carregar a página
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      setLoggedInUser(user);
    }
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Aqui você pode implementar a lógica para filtrar os produtos de acordo com a categoria selecionada
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openCreateAccountModal = () => {
    setIsLoginModalOpen(false);
    setIsCreateAccountModalOpen(true);
  };

  const closeCreateAccountModal = () => {
    setIsCreateAccountModalOpen(false);
  };

  const handleLogout = () => {
    // Limpar apenas o estado local de usuário logado
    setLoggedInUser(null);
  };

  // Função para lidar com erro de login
  const handleLoginError = () => {
    toast.error('Usuário ou senha incorretos. Por favor, tente novamente.');
  };

  // Função para realizar o login
  const handleLogin = (userData) => {
    setLoggedInUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    closeLoginModal(); // Fechar modal após login
  };

  // Função para lidar com conta criada com sucesso
  const handleAccountCreated = (userData) => {
    setLoggedInUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsCreateAccountModalOpen(false); // Fechar modal após criar conta
  };

  return (
    <ErrorBoundary>
      <>
        <Header isLoggedIn={!!loggedInUser} onLogout={handleLogout} onLogin={openLoginModal} loggedInUser={loggedInUser} />
        <Routes>
        <Route path="/produtos" element={<Produtos produtos={produtos} />} />
        </Routes>
        <main>
          <div className="flex justify-center gap-x-20 p-12">
            <img className="w-[800px] rounded-lg" src="/mapa1.png" alt="mapa" />

            <div className="mt-14">
              <h1 className="text-blue-950 font-bold text-ellipsis text-[2.5rem] text-center">
                Entregamos seus medicamentos próximo à sua casa!
              </h1>
              <p className="mt-8">
                Levamos medicamentos a mais de 20 colônias da região
              </p>
              <img
                className="flex items-center w-[150px]"
                src="/rota.png"
                alt="rota"
              />
            </div>
          </div>

          <section className="flex flex-col items-center py-[1.875rem]">
            <h2 className="text-blue-950 font-bold text-[2.5rem] w-4/5 m-auto mb-20 text-center">
              Conheça nossos planos
            </h2>

            <section className="grid grid-cols-3 grid-rows-2 justify-items-center gap-24">
              <div className="card bg-stone-200 p-2 w-[30vh] rounded shadow text-justify">
                <img
                  className="w-[65px]"
                  src="/save-money.png"
                  alt="promo1"
                />
                <h5>Plano 1</h5>
                <h6 className="p-1">
                  Sorteios mensais e os melhores descontos em medicamentos. Que
                  legal!
                </h6>
                <h6>R$ 9,99</h6>
              </div>

              <div className="card bg-stone-200 p-2 w-[30vh] rounded shadow text-justify">
                <img
                  className="w-[65px]"
                  src="/meteor-rain.png"
                  alt="promo2"
                />
                <h5>Plano 2</h5>
                <h6>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam voluptatibus.
                </h6>
                <h6>R$ 19,99</h6>
              </div>

              <div className="card bg-stone-200 p-2 w-[30vh] rounded shadow text-justify">
                <img className="w-[65px]" src="/award.png" alt="promo3" />
                <h5>Plano 3</h5>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
                <h6>R$ 39,99</h6>
              </div>
            </section>
          </section>
        </main>
 {/* Botão de chat do WhatsApp */}
 <a
          href="https://wa.me/53984797562" // Substitua pelo seu número de WhatsApp
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
        {/* Componente do Modal de Login */}
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onCreateAccount={openCreateAccountModal} onLogin={handleLogin} onLoginError={handleLoginError} />

        {/* Componente do Modal de Criação de Conta */}
        <CreateAccountModal isOpen={isCreateAccountModalOpen} onClose={closeCreateAccountModal} onAccountCreated={handleAccountCreated} />

        {/* Toast Container para notificações */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
      </>
    </ErrorBoundary>
  );
}

export default App;