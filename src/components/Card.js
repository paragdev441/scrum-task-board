import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBody from './CardBody';

const Card = ({ cardData: { id, name, thought }, editCard, deleteCard }) => {
  const [isFlipped, setFlippedState] = useState(false);
  const [isFrontNotEditable, setFrontNotEditable] = useState(true);

  const handleName = (id, type, value) => {
    editCard(id, type, value);
  };

  const handleDelete = (id) => {
    deleteCard(id);
  };

  return (
    <li key={id}>
      <input
        type="checkbox"
        id={`front${id}`}
        name={`front${id}`}
        onChange={({ target }) => setFrontNotEditable(!isFrontNotEditable)}
        checked={!isFrontNotEditable}
      />
      <label htmlFor={`front${id}`}>Edit</label>
      <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <CardBody
            id={id}
            body={name}
            flipState={true}
            isFrontNotEditable={isFrontNotEditable}
            type={'name'}
            setFlippedState={setFlippedState}
            handleName={handleName}
            handleDelete={handleDelete}
          />
          <CardBody
            id={id}
            body={thought}
            flipState={false}
            isFrontNotEditable={isFrontNotEditable}
            type={'thought'}
            setFlippedState={setFlippedState}
            handleName={handleName}
            handleDelete={handleDelete}
          />
        </ReactCardFlip>
      </>
    </li>
  );
};

export default Card;
