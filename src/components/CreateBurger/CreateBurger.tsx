import React from 'react';
import Character from '../../../character';

interface Props {
  key: number;
  ingredients: Character[];
  index: number;
}

const CreateBurger: React.FC<Props> = (props) => {
  const addRecipe = [];

    const recipe = props.ingredients[props.index].name;

    for (let i = 0; i < props.ingredients[props.index].count; i++) {
      for (let j = 0; j < props.ingredients.length; j++) {
        if (recipe === props.ingredients[j].name) {
          addRecipe.push(
            <div className={props.ingredients[j].name} key={i}></div>
          )
        }
      }
    }
  return addRecipe;
};

export default CreateBurger;