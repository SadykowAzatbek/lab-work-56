import {useState} from 'react';
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Ingredient from '../Ingredient';
import IngredientsBtn from './components/IngredientsBtn/IngredientsBtn';
import Price from './components/Price/Price';
import type Character from '../character';
import CreateBurger from './components/CreateBurger/CreateBurger';

function App() {
  const ingredient: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];

  const [ingredients, setIngredients] = useState<Character[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const countBurger = (index: number) => {
    const copyIngredients = [...ingredients];
    const person = copyIngredients[index];
    const personCopy = {...person, count: person.count + 1};
    copyIngredients[index] = personCopy;

    setIngredients(copyIngredients)
  };

  const deleteIngredient = (index: number) => {
    const copyIngredients = [...ingredients];
    const person = copyIngredients[index];
    const personCopy = {...person, count: 0};
    copyIngredients[index] = personCopy;

    setIngredients(copyIngredients);
  }

  const priceCounter = () => {
    const sum = [];

    for (let i = 0; i < ingredient.length; i++) {
      const price = ingredient[i].price * ingredients[i].count;

      sum.push(price);
    }

    const setTotalPrice: number = sum.reduce(
      (accumulator, number) =>  accumulator + number, 30);

    return setTotalPrice;
  }

  return (
    <div className='main-block'>
      <div className='ingredient-block'>
        {ingredient.map((food, index) => (
          <IngredientsBtn
            image={food.image}
            name={food.name}
            count={ingredients[index].count}
            key={index}
            ingredientClick={() => countBurger(index)}
            ingredientDelete={() => deleteIngredient(index)}
          />
        ))}
      </div>
      <div className='result-block'>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {ingredients.map((food, index) => (
            <CreateBurger ingredients={ingredients} index={index} key={index}></CreateBurger>
          ))}
          <div className="BreadBottom"></div>
        </div>
        <Price price={priceCounter()}></Price>
      </div>
    </div>
  );
}

export default App;
