import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards.jsx';
import myImage from './Photos/Lasagna.jpg';

// function RecipeCards() {
//   const [recipes, setRecipes] = useState([]);
//   const [sortCategory, setSortCategory] = useState('default');

//   useEffect(() => {
//     axios.get(`your-api-url?sort=${sortCategory}`)
//       .then(response => {
//         console.log(response.data); // Add this line
//         setRecipes(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data: ', error);
//       });
//   }, [sortCategory]);

//   return (
//     <div>
//       <button onClick={() => setSortCategory('newCategory')}>Sort</button>
//       <div className="cards-container">
//         {recipes.map(recipe => (
//           <Cards key={recipe.id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }


function RecipeCards() {
  const [sortCategory, setSortCategory] = useState('default');
  const [filterId, setFilterId] = useState(null);

  const recipes = [
    { id: 1, name: 'Recipe 1' },
    { id: 2, name: 'Recipe 2'}, 
    { id: 3, name: 'Recipe 3' },
    { id: 1, name: 'Recipe 4' },
    { id: 5, name: 'Recipe 5' },
    { id: 6, name: 'Recipe 6' },
    { id: 7, name: 'Recipe 7' },
    { id: 8, name: 'Recipe 8' },
  ];

  const handleFilterClick = () => {
    if (filterId === null) {
      setFilterId(recipes[0].id);
    } else {
      setFilterId(null);
    }
  };

  return (
    <div>
      <button onClick={handleFilterClick}>Filter</button>
      <div className="cards-container">
        {recipes.map(recipe => (
          (filterId === null || recipe.id === filterId) && <Cards key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}


export default RecipeCards;