import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MealInfo = () => {

    const { mealid } = useParams();
    const [info, setInfo] = useState();
    // console.log(mealid);

    const getInfo = async () => {
        try {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const res = await get.json();

            setInfo(res.meals[0])
            console.log(res.meals[0]);
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getInfo();
    }, [])


    const fetchIngredients = (info) => {
        console.log(info)
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = info[`strIngredient${i}`];
            const measure = info[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredientsList.push(
                    <li key={i}>
                        {measure} {ingredient}
                    </li>
                );
            } else {
                break;
            }
        }
        return ingredientsList;
    }

    return (
        <>
            <div className="bg-[#faf9fb] h-[full]  p-10 flex-1">
                {!info ? (
                    <div className="text-center text-2xl font-semibold text-gray-600">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h1 className="text-4xl font-bold text-center mb-6 text-slate-600">Recipe Details</h1>
                            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">{info.strMeal}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className=" w-full max-w-md mx-auto md:max-w-none">
                                    <img
                                        src={info.strMealThumb}
                                        alt={info.strMeal}
                                            className="w-full h-auto object-cover rounded-lg shadow-md max-h-[300px] md:max-h-none"
                                    />
                                </div>
                                <div className="w-full ml-8 ">
                                    <h3 className="text-2xl font-semibold mb-4 text-orange-600">Ingredients</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base ">
                                        {fetchIngredients(info)}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-orange-600">Instructions</h3>
                                <p className="text-gray-700 leading-relaxed">{info.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MealInfo;
