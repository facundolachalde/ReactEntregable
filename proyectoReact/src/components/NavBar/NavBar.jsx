import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <>
      <NavContainer>
        <h2 className='titulo'>Skins GAMBARG</h2>
        <input  className='buscador' type="search" placeholder='Buscar' />
        <div>
          <a href="#">Inicio</a>
          <a href="#">Stock</a>
          <a href="#">Gamb</a>
          <a href="#">CheckOut</a>
        </div>
      </NavContainer>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
.titulo{
    margin-left: 1em;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 2.5rem;
    color: #fafafa;
  }
  padding: 1rem;
  height: 80px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 1.8rem;
    color: #fafafa;
    text-decoration: none;
    margin-right: 2rem;
  }
  .buscador{
    height: 30px;
    width: 250px;
    border: none;
    padding: 1em;
    margin-right: 2em;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 1.4rem;
    border-radius: 5px;
    outline: none;
  }
  a:hover{
    color:black;
  }
  h2:hover{
    color:black;
  }
`
