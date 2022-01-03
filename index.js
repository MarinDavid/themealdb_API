import {searchByLetter} from './promises/letter.js';

const b = document.getElementById("b");
b.onclick = () =>{
    searchByLetter();
};

const l = document.getElementById("l");
l.addEventListener("click", function(){
    document.getElementById("main").innerHTML=" ";
})

