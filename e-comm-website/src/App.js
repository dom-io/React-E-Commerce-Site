import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Router from './Router';

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
