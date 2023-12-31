import React from 'react';
import laptop from '../../assets/Images/laptop.png';
import './Home.css';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner'>
        <div className="home-text">
          <h1>Small studios Big<br />ideas</h1>
          <p> Laptops are characterized by their clamshell design, consisting of two main parts: a hinged screen and a keyboard. This design allows them to be easily opened and closed for transport and use</p>
          <Link target='_blank' to={'https://www.amazon.com/A315-24P-R7VH-Display-Quad-Core-Processor-Graphics/dp/B0BS4BP8FB/ref=sr_1_3?crid=2IKY761PSNXCP&keywords=laptop&qid=1694401759&sprefix=laptop%2Caps%2C1225&sr=8-3&th=1'}>Learn More</Link>
        </div>
        <div className='image'>
          <img src={laptop}></img>
        </div>
      </div>
    <hr></hr>
      <div className="reviews-section">
        <h1>Customer reviews(3)</h1>
        <Reviews></Reviews>
        <Link className='all-reviews' to='/reviews'>See all reviews</Link>
      </div>
      <hr></hr>
      <div className='blog-section'>
        <h1>Blogs</h1>
        <Blogs></Blogs>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home