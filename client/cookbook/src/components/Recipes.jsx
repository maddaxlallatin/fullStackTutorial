
import React, { useState, useEffect } from 'react';
import RecipeItem from "./RecipeItem";
import api from '../axiosConfig';
import axios from 'axios';

function Recipes() {
  const [appitizerRecipes, setAppitizerRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/Appitizers and Beverages").then((response) => {
      setAppitizerRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);

  const [breadRecipes, setBreadRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/bread").then((response) => {
      setBreadRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);
  const [soupRecipes, setSoupRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/soup").then((response) => {
      setSoupRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);
  const [mainRecipes, setMainRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/main").then((response) => {
      setMainRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);
  const [vegetableRecipes, setVegetableRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/vegetables").then((response) => {
      setVegetableRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);
  const [dessertRecipes, setDessertRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/dessert").then((response) => {
      setDessertRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);
  const [otherRecipes, setOtherRecipes] = useState([]);
  useEffect(() => {
    api.get("/recipes/category/other").then((response) => {
      setOtherRecipes(response.data);
      console.log(response.data);

    }).catch((error) => {
    });
  }, []);



  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      {appitizerRecipes.length?`Appitizers and Beverages`:""}
      {appitizerRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
     {breadRecipes.length?"Bread and Muffins":""}
      {breadRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      {soupRecipes.length?`Soups, Stews, Salads and Sauces`:""}
      {soupRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      {mainRecipes.length?`Main Courses`:""}
      {mainRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      
      {vegetableRecipes.length?"Vegetable Dishes":""}
      {vegetableRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      {dessertRecipes.length?`Desserts, Pies, Cakes and Cookies`:""}
      {dessertRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}
      {otherRecipes.length?Other:""}
      {otherRecipes.map((recipe) => (
        <RecipeItem
          name={recipe.recipeName}
          ingredients={recipe.recipeIngredients}
          directions={recipe.recipeInstructions}
          category={recipe.recipeCategory}
          image={recipe.recipeImage}
        />
      ))}


    </div>
  );
}

export default Recipes;