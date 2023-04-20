import React from 'react';
import Header from './components/Header';
import Main from './components/CityRender';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;