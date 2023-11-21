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