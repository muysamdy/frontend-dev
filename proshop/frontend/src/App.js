import React from 'react'; 

import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './screen/Home';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'> 
        <Container>
          <Route path="/" component={Home} exact/>
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
  </Router>
  );
}

export default App;
