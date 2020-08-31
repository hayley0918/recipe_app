import React,{ useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () =>{

  const APP_ID = 'a50e3aac'
  const APP_KEY = process.env.REACT_APP_SECRET_KEY

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pumpkin')

  useEffect( ()=>{
    getRecipes()
  },[query])

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    //console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
    //console.log(search)
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index)=>(
          <Recipe 
            key={index} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
