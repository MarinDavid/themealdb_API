const searchByLetter = () =>{
    var letter = document.getElementById("letter");
    var l = letter.value;
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`;

    var main = document.getElementById("main");
    let tpl;

    try{
        fetch(API_URL)
            .then (response => response.json())
            .then (({meals}) => {
                meals.forEach( (/*meal*/) => {
                    // console.log(meal.strMeal);
                    tpl = meals.map ((meal) => `<li>${meal.strMeal}</li>`);   
                })
                main.innerHTML = `<ul>${tpl}</ul>`;
    })
}
    catch(error){
        console.log(error);
    }
}

export {searchByLetter};

