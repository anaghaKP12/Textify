import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  return (
    <div className='container' style = {{color: props.mode ==='dark'?'white':'black'}}>
      <h1>Textify - Tools to transform your text</h1>
      <div className='row'>
          {/* <h2>Text Handling</h2> */}
          <Link to='/handleCases'>
            <button className='btn btn-primary mx-2 my-2'>Case converter</button>
          </Link>
          <Link to='/refineText'>
            <button className='btn btn-primary mx-2 my-2'>Refine Text</button>
          </Link>
          {/* Add more buttons for other text handling functionalities *
          {/* <h2>Find and Replace</h2> */}
          <Link to='/find-and-replace'>
            <button className='btn btn-primary mx-2 my-2'>Find and Replace</button>
          </Link>
          <Link to='/text-counter'>
            <button className='btn btn-primary mx-2 my-2'>Text counter</button>
          </Link>
          <Link to='/sort-text-lines'>
            <button className='btn btn-primary mx-2 my-2'>Sort text lines</button>
          </Link>
          {/* Add more buttons for other find and replace functionalities */}
        {/* Add more columns for other categories of functionalities */}
      </div>
    </div>
  );
}
