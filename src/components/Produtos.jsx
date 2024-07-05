import React from 'react'
import Produto from './Produto'

const Produtos = ({produtos}) => {
    console.log(produtos)
  return (
    <div className="mt-10">
    <h1 className="font-semibold md:mt-20 text-center mb-8 text-3xl">Produtos</h1>
    <br />
    <div className="grid grid-cols-4
    ">
    {produtos.map((produto, num) => (
    <Produto
      key={num} {...produto}
    />
    ))}
    </div>
  </div>
  )
}

export default Produtos
