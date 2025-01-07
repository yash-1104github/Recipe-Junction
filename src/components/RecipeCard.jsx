import React from "react";
import { Heart, HeartPulse } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const RecipeCard = ({ details , bg , badge }) => {
  //  console.log(details);


    const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(details.strMeal));

    const addRecipeToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.strMeal === details.strMeal);

        if (isRecipeAlreadyInFavorites) {
            favorites = favorites.filter((fav) => fav.strMeal !== details.strMeal);
            setIsFavorite(false);
        } else {
            favorites.push(details);
            setIsFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };



    return (
        <>
            <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
                <a href={details.strYoutube} className="releative h-40">
                    <img src={details.strMealThumb}
                        className="rounded-md w-full h-full object-cover cursor-pointer"
                    />

                    <div
                        className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
                        onClick={(e) => {
                            e.preventDefault();
                            addRecipeToFavorites();
                        }}
                    >
                        {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
                        {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
                    </div>
                </a>
                 
                <div className="flex flex-col justify-center items-center">

                    <div className='flex mt-1'>
                        <p className='font-bold text-black text-lg tracking-wide'>{details.strMeal}</p>
                    </div>
                    
                    <div className="flex items-center ">
                        <HeartPulse size={20} />
                        <p className='p-1 font-semibold tracking-tighter my-1'>{details.strArea} Dish</p>
                    </div>

                    


                    <div className='flex gap-2 mt-auto'>

                        <NavLink to={`/${details.idMeal}`}>
                           
                            <button className={`py-2 px-5 ${badge}   text-gray-800 font-semibold rounded-md shadow-md   focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-75 hover:cursor-pointer`}>
                                View Recipe
                            </button>
                        </NavLink>
                 </div>
                



                </div>

            </div>

        </>
    );
};

export default RecipeCard;
