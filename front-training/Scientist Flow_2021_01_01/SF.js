var number=1;
var P_top=400; // top의 크기를 얼마나 줄건지 (슬라이드)
function Before(){ // 슬라이드를 전으로 
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
function After(){ // 슬라이드를 후로
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
function check(){ // 현재 슬라이드의 위치 파악
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

function first_n(){ // 처음 들어갈 때 나오는 페이지
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
function year_16(){ // 중간 중간 중심 슬라이드로 바로가기
    number=1;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=400;
    change.style.top=P_top+"px";
    check();
}
function year_17(){ // 중간 중간 중심 슬라이드로 바로가기
    number=10;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=-5630;
    change.style.top=P_top+"px";
    check();
}
function year_18(){ // 중간 중간 중심 슬라이드로 바로가기
    number=14;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=-8310;
    change.style.top=P_top+"px";
    check();
}
function year_19(){ // 중간 중간 중심 슬라이드로 바로가기
    number=24;
    var change=document.querySelector(".buttonBar > p");
    change.innerHTML=number;
    var change=document.querySelector(".Flow");
    P_top=-15010;
    change.style.top=P_top+"px";
    check();
}