import React from "react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../utils/utils";



export const FavoritePage = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    return (
        <>
            <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
                <div>
                    <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites Recipes</p>

                    {
                        favorites.length === 0 && (
                            <div className='h-[80vh] flex flex-col items-center gap-4'>
                                <p className="font-bold text-2xl  md:text-4xl my-4">Add Some Recipe</p>
                                <img src='/404.svg' className='h-3/4' alt='404 svg' />
                            </div>
                        )
                    }

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {favorites.map((recipe) => (
                            <RecipeCard key={recipe.strMeal} details={recipe} {...getRandomColor()} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavoritePage;