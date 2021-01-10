import React from 'react';
import Books from './Books';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse justify-content-md-center">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Books</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="py-5">

        <div className="container">
          <Books />
        </div>
      </div>
    </div>
  );
}

export default App;
