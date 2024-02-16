package io.github.tarasCookbook.tarasCookbook;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, ObjectId> {



   Optional<Recipe> findRecipeByRecipeName(String recipeName);
   Optional<List<Recipe>> findRecipeByRecipeCategory(String RecipeCategory);

}
