package io.github.tarasCookbook.tarasCookbook;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "recipeInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Recipe {
    @Id
    private ObjectId id;
    private String recipeName;
    private String recipeImage;
    private String recipeIngredients;
    private String recipeInstructions;
    private String recipeCategory;

  public Recipe(String recipeName, String recipeImage, String recipeIngredients, String recipeInstructions, String recipeCategory) {
    this.recipeName = recipeName;
    this.recipeImage = recipeImage;
    this.recipeIngredients = recipeIngredients;
    this.recipeInstructions = recipeInstructions;
    this.recipeCategory = recipeCategory;
  }


}
