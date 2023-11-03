import React from 'react';

interface Props {
  key: number;
  name: string;
  image: string;
  count: number;
  ingredientClick: React.MouseEventHandler;
  ingredientDelete: React.MouseEventHandler;
}

const IngredientsBtn: React.FC<Props> = ({
  name,
  image,
  count,
  ingredientClick,
  ingredientDelete
}) => {
  return (
    <div>
      <div className='recipe-block' onClick={ingredientClick}>
        <img src={image} alt='food'/> {name} Count: {count}
      </div>
      <button type='button' onClick={ingredientDelete}>Delete</button>
    </div>
  );
};

export default IngredientsBtn;