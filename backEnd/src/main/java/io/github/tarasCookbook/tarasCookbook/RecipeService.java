package io.github.tarasCookbook.tarasCookbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;
    public List<Recipe> findAllRecipes(){
        return recipeRepository.findAll();
    }

    public Optional<Recipe> findRecipeByRecipeName(String recipeName){
        return recipeRepository.findRecipeByRecipeName(recipeName);
    }
    public Optional<List<Recipe>> findRecipeByRecipeCategory(String recipeCategory){
        return recipeRepository.findRecipeByRecipeCategory(recipeCategory);
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public Recipe addRecipe(String recipeName, String recipeImage, String recipeIngredients, String recipeInstructions, String recipeCategory){
        Recipe recipe = recipeRepository.insert(new Recipe(recipeName, recipeImage, recipeIngredients, recipeInstructions, recipeCategory));

        mongoTemplate.update(Recipe.class); // add new movie to collection


        return recipe;
    }

}
