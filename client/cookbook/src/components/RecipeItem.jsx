import React from "react";


function RecipeItem({ name, ingredients, directions, category, image }) {
    return (
        


        <div className="">
            <div className="flex justify-center items-center text-coral font-bebasneue font-bold text-7xl">
                <span> {name} </span>
                
            </div>
            <div className="w-64 mx-auto pb-5 pt-5">
                <img src={image} alt={image?name:""} className=""/>
            </div>
        

           
            <div>
                <div className="flex justify-center x text-teal font-cutive pb-2 font-bold">
                    Ingredients
                </div>
            

                <span className="flex justify-center  font-lato whitespace-pre-line list-decimal">
                    {ingredients.split(", ").join("\n")}
                </span>
            </div>
            <br/>
            <div>
                <div className="flex justify-center text-teal font-cutive pb-2 font-bold" >
                    Directions
                </div>
            

                <span className="flex justify-center  font-lato whitespace-pre-line list-decimal w-90">
                    {directions}
                </span>

            </div>

        <br/>

        </div>
        
    );
}

export default RecipeItem;  