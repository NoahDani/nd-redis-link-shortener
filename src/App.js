import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="banner">
        Redis Link Shortener
      </div>
      <div className='link-url-box'>
        <form>
          <input placeholder='Paste URL here!'/>
        </form>
      </div>
      <div className='link-url-box-button'>
        <button type='submit'>Submit</button>
      </div>
      <div className='shortened-link'>
        Your Shortened URL is: 
      </div>
    </div>
  );
}

export default App;
