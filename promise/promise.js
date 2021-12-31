const search = async () =>{
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    try{
        fetch(API_URL)
            .then (response => response.json())
            .then (data => console.log(data.meals[0].strMeal));       
    }
    catch(error){
        console.log(error);
    }
}

const buttonA = document.getElementById("#buttonA");

document.addEventListener("click", search());

