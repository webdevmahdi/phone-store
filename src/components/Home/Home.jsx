import React from 'react';
import laptop from '../../assets/Images/laptop.png'
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <img src={laptop}></img>
    </div>
  )
}

export default Home