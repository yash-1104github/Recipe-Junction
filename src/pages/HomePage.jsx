import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../utils/utils";



const HomePage = () => {

     const [recipe, setRecipe] = useState([]);
     const [loading, setLoading] = useState(true);

    const fetchRecipes = async (query) => {
        setLoading(true);
        setRecipe([])
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await res.json();
          
            setRecipe(data.meals);
           // console.log(data.meals);

        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes("chicken");
    }, []);

    const handleSearchRecipe = (e) => {
        e.preventDefault();
        fetchRecipes(e.target[0].value);
        
    };


    return (
        <>
            <div className='bg-[#faf9fb]  p-10 flex-1'>
                <div className="max-w-screen-lg mx-auto">
                    <form onSubmit={handleSearchRecipe}>
                        <label className="input  shadow-md flex items-center gap-2">
                            <Search size={"24"} />
                            <input
                                type="text"
                                className="text-sm md:text-md grow "
                                placeholder='What do you want to cook today?'
                            />
                        </label>
                    </form>


                    <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</h1>
                    <p className='text-slate-500 font-semibold ml-1 my-2 text-base tracking-tight'>Popular choices</p>

                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        
                        {!loading && recipe && recipe.length > 0 ? (
                            recipe.map((recipe, index) => (
                                <RecipeCard key={index} details= {recipe} {...getRandomColor()} />
                            )) 
                            ): (
                                <div className="mt-2 flex justify-center items-center p-10 ">
                                    <img
                                        src="/404.svg"
                                        alt="No Recipes Found"
                                        className="w-full h-full justify-center "
                                    />
                                </div>
                            )} 

                        {/* {loading &&
                            [...Array(9)].map((_, index) => (
                                <div key={index} className='flex flex-col gap-4 w-full'>
                                    <div className='skeleton h-32 w-full'></div>
                                    <div className='flex justify-between'>
                                        <div className='skeleton h-4 w-28'></div>
                                        <div className='skeleton h-4 w-24'></div>
                                    </div>
                                    <div className='skeleton h-4 w-1/2'></div>
                                </div>
                            ))} */}


                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

