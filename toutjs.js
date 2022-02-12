// js livraison

function affiche(){
    let affiche = document.getElementById("livraison");
        affiche.style.display="block"
}
function cache(){
    let cache = document.getElementById("livraison");
        cache.style.display="none"
}

// fin


function show(){
    let show = document.getElementById("container-form");
        show.style.display="block";
        show.style.transition=".9s";
}
function hide(){
    let hide = document.getElementById("container-form");
        hide.style.display="none"
}



function heart(vent){
        var currentColor = vent.style.color;
        if(currentColor=="white"){
            vent.style.color="red";
           
        }
        
        else if(currentColor=="red"){
            vent.style.color="white"
        }
}



function shopping(){
    let shopping = document.getElementById("shopping");
        shopping.style.color="red";
}
