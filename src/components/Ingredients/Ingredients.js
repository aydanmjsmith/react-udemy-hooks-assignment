import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ingredientList, setIngredientList] = useState([]); 

  const addIngredientHandler = (ingredient) => {
    setIngredientList([...ingredientList, { id:Math.random(), ...ingredient }]);
  };

  const removeIngredientHandler = (ingredientId) => {
    //const updIngredientList = ingredientList
    //  .filter( ingredient => {
    //    if (ingredient.id === ingredientId) {
    //      return false;
    //    }
    //    return true;
    //  });

    setIngredientList(prevIngredientList => prevIngredientList
      .filter( ingredient => {
        if (ingredient.id === ingredientId) {
          return false;
        }
        return true;
      }));
  }

  return (
    <div className="App">
      <IngredientForm onAddItem={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList 
          onRemoveItem={removeIngredientHandler}
          ingredients={ingredientList} />
      </section>
    </div>
  );
}

export default Ingredients;
