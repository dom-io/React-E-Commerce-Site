import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-wrapper">
        <p className="small-text">Best Pretend Online Store of the Year!</p>
        <h1 className="big-text">
          Welcome to the pretend store, we have lots of great items to look at!
        </h1>
        <Link className="home-page-store-link" to="/store">
          Shop now
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
