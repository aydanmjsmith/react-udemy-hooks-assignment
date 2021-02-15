import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ingredientList, setIngredientList] = useState([]); 

  const addIngredientHandler = (ingredient) => {
    setIngredientList([...ingredientList, { id:Math.random(), ...ingredient }]);
  };

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
