import Card from './Card';
import './App.css';
import { useState } from 'react';

function getRandomcard() {
  const cardArray = ['ABB', 'Kapital', 'Premium', 'BOB'];
  return cardArray[Math.floor(Math.random() * cardArray.length)];
}

function App() {
  const [cards, setcards] = useState([]);

  const handleClick = () => {
    setcards([...cards, getRandomcard()]);
  };
  const cardList = cards.map((card, index) => {
    return <Card key={index} cardName={card} />;
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Təsadüfi kart əlavə et
      </button>
      <div className="cardList">{cardList}</div>
    </div>
  );
}

export default App;
