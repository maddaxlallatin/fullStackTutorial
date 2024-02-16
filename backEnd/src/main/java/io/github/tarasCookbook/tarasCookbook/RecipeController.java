package io.github.tarasCookbook.tarasCookbook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/recipes")
@CrossOrigin
public class RecipeController {

    @Autowired
    private RecipeService service;

    @GetMapping
    public ResponseEntity<List<Recipe>> getRecpies() {
        return new ResponseEntity<List<Recipe>>(service.findAllRecipes(), HttpStatus.OK);
    }
    @GetMapping("/{recipeName}")
    public ResponseEntity<Optional<Recipe>> getRecipeByName(@PathVariable String recipeName){

        return new ResponseEntity<Optional<Recipe>>(service.findRecipeByRecipeName(recipeName), HttpStatus.OK);

    }
    @GetMapping("/category/{recipeCategory}")
    public ResponseEntity<Optional<List<Recipe>>> getRecipeByCategory(@PathVariable String recipeCategory){
        return new ResponseEntity<Optional<List<Recipe>>>(service.findRecipeByRecipeCategory(recipeCategory), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Recipe> addRecipe(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Recipe>(service.addRecipe(payload.get("recipeName"), payload.get("recipeImage"), payload.get("recipeIngredients"), payload.get("recipeInstructions"), payload.get("recipeCategory")), HttpStatus.CREATED);
        //imdbId, title, releaseDate, trailerLink, poster, backdrops, genres, reviews
    }
}
