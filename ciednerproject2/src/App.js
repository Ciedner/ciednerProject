import React from 'react';
import Home from './Home';
import About from './AboutUs';
import Contact from './ContactUs';
import Login from './Login';
function App() {
  // Set initial state to display the Home component
  const [page, setPage] = React.useState('home');

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Render the appropriate component based on the current page state
  let pageComponent;
  if (page === 'home') {
    pageComponent = <Home />;
  } else if (page === 'about') {
    pageComponent = <About />;
  } else if (page === 'contact') {
    pageComponent = <Contact />;
  } else if (page === 'login') {
    pageComponent = <Login />;
  }

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => handlePageChange('home')}>Home</button></li>
          <li><button onClick={() => handlePageChange('about')}>About Us</button></li>
          <li><button onClick={() => handlePageChange('contact')}>Contact Us</button></li>
          <li><button onClick={() => handlePageChange('login')}>Log In</button></li>
        </ul>
      </nav>
      <main>
        {pageComponent}
      </main>
    </div>
  );
}

export default App;