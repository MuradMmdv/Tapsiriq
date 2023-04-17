import ABB from './images/abb.jpg';
import Kapital from './images/kapital.png';
import Premium from './images/premium.jpg';
import BOB from './images/Bob.jpg';
import './Card.css';

const cardMap = {
  ABB,
  Kapital,
  Premium,
  BOB,
};

function card({ cardName }) {

  console.log(cardMap[cardName]);
  return (
    <div className="cardDiv">
      <img className="card" src={cardMap[cardName]} alt="card" />
    </div>
  );
}

export default card;
