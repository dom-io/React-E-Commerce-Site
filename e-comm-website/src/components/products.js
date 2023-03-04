import leatherBiker from '../images/leatherBiker.png';
import leatherCasual from '../images/leatherCasual.png';
import greyWarm from '../images/greyWarm.png';
import sporty from '../images/sporty.png';
import whiteWarm from '../images/whiteWarm.png';

const Products = () => {
  let images = [
    {
      src: leatherBiker,
      title: 'Biker Leather Jacket',
      price: 100.69,
    },
    {
      src: greyWarm,
      title: 'Grey Puffer Jacket',
      price: 84.39,
    },
    {
      src: whiteWarm,
      title: 'White Puffer Jacket',
      price: 99.99,
    },
    {
      src: sporty,
      title: 'Sporty Jacket',
      price: 40.99,
    },
  ];

  return (
    <div>
      <div className="product-btns-container">
        <button className="product-btns">
          <img className="display-src" src={images[0].src} alt="" />
          <div className="display-price">${images[0].price}</div>
          <div className="display-title">{images[0].title}</div>
        </button>
        <button className="product-btns">
          <img className="display-src" src={images[1].src} alt="" />
          <div className="display-price">${images[1].price}</div>
          <div className="display-title">{images[1].title}</div>
        </button>
        <button className="product-btns">
          <img className="display-src" src={images[2].src} alt="" />
          <div className="display-price">${images[2].price}</div>
          <div className="display-title">{images[2].title}</div>
        </button>
        <button className="product-btns">
          <img className="display-src" src={images[3].src} alt="" />
          <div className="display-price">${images[3].price}</div>
          <div className="display-title">{images[3].title}</div>
        </button>
      </div>
    </div>
  );
};

export default Products;
