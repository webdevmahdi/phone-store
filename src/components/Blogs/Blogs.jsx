import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='post-container'>
      <div className="post">
        <h1>What is Context API?</h1>
        <p>Context API is react.js Framework. It allow us to sent data between components which can't be access with props easily. It helps us to share data direct one component to others components.</p>
      </div>
      <div className="post">
        <h1>Block, Inline and Inline block element.</h1>
        <p>
          <li>Block element will take the whole space of the section or line where it's stay. That means where it's stay it won't allow to others elements to come in it's line of section and they will be align horizontal . It will force the inline elements to be a block element if we style it in css file(display: block;).</li>
          <li>Inline element </li>
          <li>Inline elements will take up as much space as it need. And it will take possible all elements under it's line.</li>
        </p>
      </div>
      <div className="post">
        <h1>Inline-block</h1>
        <p>inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values. block The element will start on a new line and occupy the full width available.</p>
      </div>
    </div>
  )
}

export default Blogs