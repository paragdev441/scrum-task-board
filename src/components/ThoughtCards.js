import React, { useState } from 'react';
import Card from './Card';
import CreateCard from './CreateCard';

const ThoughtCards = ({ data }) => {
  const [newThoughts, setNewThoughts] = useState(
    data.thoughts ? data.thoughts : []
  );

  const createCard = ({ name, thought }) => {
    setNewThoughts([
      { name, thought, id: Math.floor(Math.random() * 100 + 1) },
      ...newThoughts,
    ]);
  };

  const editCard = (cardId, cardType, cardValue) => {
    const modifiedCards = newThoughts.map((item) => {
      if (item['id'] === cardId) {
        item[cardType] = cardValue;
      }

      return item;
    });

    setNewThoughts(modifiedCards);
  };

  const deleteCard = (cardId) => {
    const modifiedCards = newThoughts.filter((item) => item.id !== cardId);
    setNewThoughts(modifiedCards);
  };

  return (
    <div>
      <div id="flashcard-app" className="container">
        <CreateCard createCard={createCard} />
        <ul className="flashcard-list">
          {newThoughts?.map((thought) => (
            <Card
              key={thought.id}
              cardData={thought}
              editCard={editCard}
              deleteCard={deleteCard}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThoughtCards;
