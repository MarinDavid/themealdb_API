const search = () =>{
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    try{
        fetch(API_URL)
            .then (response => response.json())
            .then (({meals}) => {
                meals.forEach(meal => {
                    console.log(meal.strMeal)
                });
    })
}
    catch(error){
        console.log(error);
    }
}

export {search};

