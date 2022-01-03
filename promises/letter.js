const searchByLetter = () =>{
    var letter = document.getElementById("letter");
    var l = letter.value;
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`;

    const main = document.getElementById("main");
    const ul = document.createElement('ul');


    try{
        fetch(API_URL)
            .then (response => response.json())
            .then (({meals}) => {
                meals.forEach( (meal) => {
                    let element = document.createElement('li');
                    element.appendChild(document.createTextNode(`${meal.strMeal}`));
                    let description = document.createElement('p');
                    description.appendChild(document.createTextNode(`${meal.strInstructions}`))
                    element.appendChild(description);
                    ul.appendChild(element)
                    // console.log(meal.strMeal);
                    // const tpl = meals.map ((meal) => `<li>${meal.strMeal}</li>`);
                    // main.innerHTML = `<ul>${tpl}</ul>`;  
                })
                main.appendChild(ul);
            })
}
    catch(error){
        console.log(error);
    }
}

export {searchByLetter};

