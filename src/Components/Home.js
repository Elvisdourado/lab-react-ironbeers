import React from 'react'
import { Link } from 'react-router-dom'
import beersImage from '../assets/beers.png'
import newBeersImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png';

const Home = () => {
    return (
      <div>
        <h1> Welcome to IronBeers</h1>
        <div>
          <Link to="/AllBeers">
            <img src={beersImage} alt="" />
           <br/>All Beers
           </Link>
           <br/> Informações sobre todas as cervejas disponiveis!
        </div>

        <div>
          <Link to="/RandomBeer">
            <img src={randomBeerImg} alt="" />
           <br/> Random Beer
           </Link>
          <br/> Aqui você recebe informações de cervejas aleatórias


        </div>

        <div>
          <Link to="/NewBeer">
              <img src={newBeersImg} alt=""/>
             <br/>Create New Beer
             </Link>
             <br/> Mestre Cervejeiro? adicione sua cerveja!

        </div>
      </div>
    );
}

export default Home 