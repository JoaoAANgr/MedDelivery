import React from 'react'

const Produto = ({
    farmaco,
    detentor,
    medicamento,
    registro,
    concentracao,
    valor,
    imagem,
  }) => {
  return (
    <div className="flex flex-col text-center mb-8">
      <img className="h-72" src={`data/${imagem}`} alt={farmaco} />
      <p>Medicamento: {medicamento}</p>
      <h1>Composição: {farmaco}</h1>
      <p>Laboratório: {detentor}</p>
      <p>Registro: {registro}</p>
      <p>Concentração: {concentracao}</p>
      <p>Preço: {valor}</p>
      <div className="mt-4 flex flex-col gap-4 items-center text-white">
        <button className="rounded-md p-2 w-48 bg-teal-600 ">Comprar Agora</button>
        <button className="rounded-md p-2 w-48 bg-teal-600">Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default Produto
