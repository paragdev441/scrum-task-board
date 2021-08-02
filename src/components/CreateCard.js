import React, { useState } from 'react';

const CreateCard = ({ createCard }) => {
  const [cardData, setCardData] = useState({ name: '', thought: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (cardData.name.trim() === '' && cardData.thought.trim() === '') {
      setLoading(undefined);
    } else {
      setCardData({ name: '', thought: '' });
      createCard(cardData);
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Scrum Task Board</h1>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <label>
          <span className="form-input">Front</span>
          <input
            type="text"
            id="front"
            onChange={({ target }) =>
              setCardData({ ...cardData, name: target.value })
            }
            value={cardData.name}
          />
        </label>
        <label>
          <span className="form-input">Back</span>
          <input
            type="text"
            id="back"
            onChange={({ target }) =>
              setCardData({ ...cardData, thought: target.value })
            }
            value={cardData.thought}
          />
        </label>
        <button className="submit-button" type="submit">
          Add a New Card
        </button>
        {loading === undefined ? (
          <span className="error">
            Oops! Scrumcards need a front and a back.
          </span>
        ) : null}
      </form>
    </>
  );
};

export default CreateCard;
