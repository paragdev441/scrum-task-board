import React from 'react';
import ContentEditable from 'react-contenteditable';

const CardBody = ({
  id,
  body,
  flipState,
  isFrontNotEditable,
  type,
  setFlippedState,
  handleName,
  handleDelete,
}) => {
  return (
    <p
      onClick={() => (isFrontNotEditable ? setFlippedState(flipState) : null)}
      className="card"
    >
      <ContentEditable
        className={!isFrontNotEditable ? 'focused-editable-block' : ''}
        html={body}
        disabled={isFrontNotEditable} // use true to disable edition
        onChange={({ target }) => handleName(id, type, target.value)}
      />
      <span className="delete-card" onClick={() => handleDelete(id)}>
        X
      </span>
    </p>
  );
};

export default CardBody;
