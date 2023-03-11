import React from 'react'
import "./index.css"


const Header = () => {
  return (
    <header style={{height:'10vh',
     backgroundColor: '#E39F0B',
     }}>
        <div className='left__side'>
        <img src='logo.png'/>   
        <h3>Food</h3>
        <h3>Variedades</h3>
        <h3>Lanches</h3>
        <h3>Pizzas</h3>
        <h3>Doces</h3>
        <h3>Promoções</h3>

        </div>

        <div className='right__side'>

        <h3>Minhas Compras</h3>
        <img src="carrinho.png" alt="carrinho de compras" />

        </div>

    </header>
    
  )
}

export default Header