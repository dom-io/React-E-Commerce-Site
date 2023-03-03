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
      src: leatherCasual,
      title: 'Casual Leather Jacket',
      price: 70.99,
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

  let display;
  for (let i = 0; i < images.length; i++) {
    display = images[i];
  }

  return (
    <div>
      <div>
        <button className="product-btns">
          <figure>
            <img src={display.src} alt={display.title} />
          </figure>
          <title>{display.title}</title>
          <price>{display.price}</price>
        </button>
      </div>
    </div>
  );
};

export default Products;
