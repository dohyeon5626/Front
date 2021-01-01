var number=1;
var P_top=400;
function Before(){
    if(number<=1){
        return;
    }
    else{
        number--;
        var change=document.querySelector(".buttonBar > p");
        change.innerHTML=number;
        console.log(number+" Befor");
        var change=document.querySelector(".Flow");
        P_top+=670;
        change.style.top=P_top+"px";
    }
    check();
}
function After(){
    if(number>=35){
        return;
    }
    else{
        number++;
        var change=document.querySelector(".buttonBar > p");
        change.innerHTML=number;
        console.log(number+ " After");
        var change=document.querySelector(".Flow");
        P_top-=670;
        change.style.top=P_top+"px";
    }
    check();
}
function check(){
    if(number>=1&&number<=9){
        var change = document.querySelector(".y16");
        change.style.backgroundColor="gray"
        var change = document.querySelector(".y17");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y18");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y19");
        change.style.backgroundColor="rgb(201, 201, 201)"
    }
    else if(number>=10&&number<=13){
        var change = document.querySelector(".y16");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y17");
        change.style.backgroundColor="gray"
        var change = document.querySelector(".y18");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y19");
        change.style.backgroundColor="rgb(201, 201, 201)"
    }
    else if(number>=14&&number<=23){
        var change = document.querySelector(".y16");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y17");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y18");
        change.style.backgroundColor="gray"
        var change = document.querySelector(".y19");
        change.style.backgroundColor="rgb(201, 201, 201)"
    }
    else{
        var change = document.querySelector(".y16");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y17");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y18");
        change.style.backgroundColor="rgb(201, 201, 201)"
        var change = document.querySelector(".y19");
        change.style.backgroundColor="gray"
    }
}

function first_n(){
    var change=document.querySelector(".first");
    change.style.backgroundColor="rgba(0,0,0,0)";
    setTimeout(function(){
        var change=document.querySelector(".first");
        change.style.display="none";
    },1300);
    var change=document.querySelector(".Flow");
    change.style.top="400px";
    check();
}
function year_16(){
    number=1;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=400;
    change.style.top=P_top+"px";
    check();
}
function year_17(){
    number=10;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=-5630;
    change.style.top=P_top+"px";
    check();
}
function year_18(){
    number=14;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=-8310;
    change.style.top=P_top+"px";
    check();
}
function year_19(){
    number=24;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=-15010;
    change.style.top=P_top+"px";
    check();
}