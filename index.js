var sekunden = 0;
var minuten = 0;
var sekunden1 = 0;
var minuten1 = 0;
var stunden = 0;
var stunden1 = 0;
var starten;
var an = true;

function start(){
    if(an == true){
        starten = setInterval(time,10);
        an = false;
    }
}

function stop(){
    clearInterval(starten);
    an = true;

}

function reset(){

    sekunden = 0;
    minuten = 0;
    sekunden1 = 0;
    minuten1 = 0;
    stunden = 0;
    stunden1 = 0;
    var testmin123 = document.getElementById("zeit").innerHTML = minuten1 + "" + minuten + ":" + sekunden1 + "" + sekunden;

}

function time(){
    sekunden += 1;
    if(sekunden>9){
        sekunden = 0;
        sekunden1 += 1;
    }
    if(sekunden1>5){
        sekunden1 = 0;
        minuten += 1;
    }
    if(minuten>9){
        minuten = 0;
        minuten1 += 1;
    }

    if(minuten1>5){
        minuten1 = 0;
        stunden += 1;
    }
    if(stunden>9){
        stunden = 0;
        stunden1 += 1;
    }

    if(stunden >= 1 || stunden1 >= 1){
    var testmin = document.getElementById("zeit").innerHTML = stunden1 + "" + stunden + ":" + minuten1 + "" + minuten + ":" + sekunden1 + "" + sekunden;

    }else{
    var testmin = document.getElementById("zeit").innerHTML = minuten1 + "" + minuten + ":" + sekunden1 + "" + sekunden;
    }
   
}

document.getElementById("start").onclick = function(){
    start();
}

document.getElementById("stop").onclick = function(){
    console.log("Stop!");
    stop();
}

document.getElementById("reset").onclick = function(){
    console.log("Stop!");
    reset();
}
