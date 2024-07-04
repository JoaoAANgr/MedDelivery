import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
            <img className="w-[28px] h-[28px]" src="/market.png" alt="cart" />
            <img className="w-[28px] h-[28px]" src="/user.png" alt="user" onClick={() => setShowModal(true)} />
          </div>
        </div>

        <div>
          <nav className="flex justify-center gap-[80px] bg-blue-900 text-gray-50 border-1">
            <a href="index.html">Planos</a>
            <a href="store.html">Produtos</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
          </nav>
        </div>
      </header>
      
      <main>
        <div className="flex justify-center gap-x-20 p-12">
          <img className="w-[800px] rounded-lg" src="/mapa1.png" alt="mapa" />

          <div className="mt-14">
            <h1 className="text-blue-950 font-bold text-ellipsis text-[2.5rem] text-center">Entregamos seus medicamentos próximo à sua casa!</h1>
            <p className="mt-8">Levamos medicamentos a mais de 20 colônias da região</p>
            <img className="flex items-center w-[150px]" src="/rota.png" alt="rota" />
          </div>
        </div>

        <section className="flex flex-col items-center py-[1.875rem]">
          <h2 className="text-blue-950 font-bold text-[2.5rem] w-4/5 m-auto mb-20 text-center">Conheça nossos planos</h2>

          <section className="grid grid-cols-3 grid-rows-2 justify-items-center gap-24">
            <div className="card bg-stone-200 p-2 w-[30vh] rounded shadow text-justify">
              <img className="w-[65px]" src="/save-money.png" alt="promo1" />
              <h5>Plano 1</h5>
              <h6 className="p-1">Sorteios mensais e os melhores descontos em medicamentos. Que legal!</h6>
              <h6>R$ 9,99</h6>
            </div>

            <div className="card bg-stone-200 p-2 w-[30vh] rounded shadow text-justify">
              <img className="w-[65px]" src="/meteor-rain.png" alt="promo2" />
              <h5>Plano 2</h5>
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptatibus.</h6>
              <h6>R$ 19,99</h6>
            </div>

            <div className="card bg-stone-200 p-2 w-[30vh] rounded shadow text-justify">
              <img className="w-[65px]" src="/award.png" alt="promo3" />
              <h5>Plano 3</h5>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
              <h6>R$ 39,99</h6>
            </div>
          </section>

          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </section>
      </main>
      
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
