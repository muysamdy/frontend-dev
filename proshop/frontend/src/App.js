import React from 'react'; 
import {Container} from 'react-bootstrap';

import Footer from './component/Footer';
import Header from './component/Header';
import Home from './screen/Home';

function App() {
  return (
    <div >
      <Header />
      <main className='py-3'> 
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
