
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipeComponent from './MyRecipeComponent';

// https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=c9a0bd65&app_key=0c67e4f8cff35c7077388f3d7763a31a

function App() {
  const MY_ID = "c9a0bd65";
  const MY_KEY = "0c67e4f8cff35c7077388f3d7763a31a";
  const [mySearch, setMySearch] = useState("");
  const [myRecipes,setMyRecipes] = useState([]);

  
  useEffect(()=>{
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = response.json();
    console.log(data)
    // setMyRecipes(data.hits)
  }
  getRecipe() 
  },[])
  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)

  }
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>
      <div className='container'>
        <button>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>
      {myRecipes.map(element => (
        <MyRecipeComponent/>
      ))}
    </div>
  );
}

export default App;
