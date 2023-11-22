function renderAll_travel(){
    divs = document.getElementsByClassName("north_america")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
    divs = document.getElementsByClassName("europe")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
    divs = document.getElementsByClassName("asia")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
}
function renderAll_pets(){

    divs = document.getElementsByClassName("dog")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
    divs = document.getElementsByClassName("cat")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
}
function northAmerica(){
    divs = document.getElementsByClassName("north_america")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
    divs = document.getElementsByClassName("europe")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
    divs = document.getElementsByClassName("asia")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
}
function europe(){
    divs = document.getElementsByClassName("north_america")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
    divs = document.getElementsByClassName("europe")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
    divs = document.getElementsByClassName("asia")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }  
}

function asia(){
    divs = document.getElementsByClassName("north_america")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
    divs = document.getElementsByClassName("europe")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
    divs = document.getElementsByClassName("asia")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
}
function dogs(){
    divs = document.getElementsByClassName("dog")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }
    divs = document.getElementsByClassName("cat")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
}
function cats(){
    divs = document.getElementsByClassName("dog")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "none"
    }
    divs = document.getElementsByClassName("cat")
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = "block"
    }   
}

function increase_font_size(){

    p = document.getElementsByTagName("p")
    for (let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = "white";
        p[i].style.fontSize = "2vw";
    }
    li = document.getElementsByTagName("li")
    console.log(li);
    for (let i = 3; i < li.length; i++){
        li[i].style.backgroundColor = "white";
        li[i].style.color = "black";
        li[i].style.fontSize = "2vw";
    }
}
function things_change(){

    things = document.getElementById("things")
    console.log(document.getElementsByTagName("h2")[0]);
    h2 = document.getElementsByTagName("h2")
    h1 = document.getElementsByTagName("h1")[0].textContent
    things.innerHTML = h1 + ": ";
    let i = 0;
    for ( ;i < h2.length-1; i++){
        things.innerHTML += " ("+ h2[i].textContent + "),"
    }
    things.innerHTML += " and ("+ h2[i].textContent + ")."
}
function things_default(){
    things = document.getElementById("things")
    h1 = document.getElementsByTagName("h1")[0].textContent
    things.innerHTML = h1 + ": ";

}