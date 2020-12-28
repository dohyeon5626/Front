function valueAssignment(x,y){ // 배열에 값을 저장하는 함수
    if(color == "black"){ // 값을 배열에 저장 (black - 1 / white - 2)
        pan[x][y]=1;
    }
    else{
        pan[x][y]=2;
    }
}
function changeColor(){ // 돌의 색깔을 바꾸는 함수
    change++;
    var selectedItem = document.querySelector(".dol_color");
    var selectedItem_p = document.querySelector(".dol_turn");
    if(change%2 ==0 ){
        color = "black"
        selectedItem.style.backgroundColor="black"; 
        selectedItem.style.boxShadow = "1px 1px 20px 1px  #55555556 inset";
        selectedItem_p.innerHTML="BLACK";
    }
    else{
        color = "white";
        selectedItem.style.backgroundColor="white"; 
        selectedItem.style.boxShadow = "1px 1px 20px 1px #00000056 inset";
        selectedItem_p.innerHTML="WHITE";
    }
    change = change%2;
}

function OPrint(x,y){ // 화면에 표시하는 함수
    var selectedItem = document.querySelector(" .x_" + x + "> .y_" + y); 
    selectedItem.style.backgroundColor = color;
    selectedItem.style.borderRadius = "30px";
    if(color == "white") {
        selectedItem.style.boxShadow = "1px 1px 20px 1px #00000056 inset";
    }
    else{
        selectedItem.style.boxShadow = "1px 1px 20px 1px  #55555556 inset";
    }
}

function cancel(){ // 모달창을 닫는 함수
    var c=document.querySelector("#modal");
    c.style.display="none";
}

function End(){ // 기권할 시 승리를 판정하여 모달창을 띄우는 함수
    var c=document.querySelector("#modal");
    c.style.display="flex";
    var c=document.querySelector("#modal > p.people");
    if(color == "black"){
        c.innerHTML = "흰돌이 승리하였습니다";
    }
    else{
        c.innerHTML = "검은돌이 승리하였습니다";
    }
    finish=1;
}

function Ocheck(x,y){ // 놓는 자리가 놓을 수 있는 자리인지 판단해 주는 함수 (중복 - 1 / 3*3 - 2 / 승리 - 3 / 정상 - 0)
    let v;
    if(pan[x][y] != 0){
        console.log("중복");
        return 1; // 중복
    }
    else{
        if(color=="black"){
            v=1;
        }
        else{
            v=2;
        }
        let uu=uu_f(x,y,v);
        let ur=ur_f(x,y,v);
        let rr=rr_f(x,y,v);
        let dr=dr_f(x,y,v);
        let dd=dd_f(x,y,v);
        let dl=dl_f(x,y,v);
        let ll=ll_f(x,y,v);
        let ul=ul_f(x,y,v); // 위에는 3X3 변수
        let uu_a=uu_af(x,y,v);
        let ur_a=ur_af(x,y,v);
        let rr_a=rr_af(x,y,v);
        let dr_a=dr_af(x,y,v);
        let dd_a=dd_af(x,y,v);
        let dl_a=dl_af(x,y,v);
        let ll_a=ll_af(x,y,v);
        let ul_a=ul_af(x,y,v); // 위에는 승리 판정 변수
        if((uu+dd==2)+(ur+dl==2)+(rr+ll==2)+(dr+ul==2)>=2){
            console.log("3*3");
            return 2; // 3X3
        }
        else if((uu_a+dd_a==4)||(ur_a+dl_a==4)||(rr_a+ll_a==4)||(dr_a+ul_a==4)){
            console.log("승리");
            return 3; // 승리
        }
        return 0;
    }
}
function uu_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x-i<=0){ return }
        if(pan[x-i][y]==v){
            count++;
        }
        else if(chance==0&&pan[x-i][y]==0){
            chance++;
        }
        else if(chance==0&&pan[x-i][y]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function ur_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x-i<=0||y+i>=19){ return }
        if(pan[x-i][y+i]==v){
            count++;
        }
        else if(chance==0&&pan[x-i][y+i]==0){
            chance++;
        }
        else if(chance==0&&pan[x-i][y+i]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function rr_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(y+i>=19){ return }
        if(pan[x][y+i]==v){
            count++;
        }
        else if(chance==0&&pan[x][y+i]==0){
            chance++;
        }
        else if(chance==0&&pan[x][y+i]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function dr_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x+i>=19||y+i>=19){ return }
        if(pan[x+i][y+i]==v){
            count++;
        }
        else if(chance==0&&pan[x+i][y+i]==0){
            chance++;
        }
        else if(chance==0&&pan[x+i][y+i]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function dd_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x+i>=19){ return }
        if(pan[x+i][y]==v){
            count++;
        }
        else if(chance==0&&pan[x+i][y]==0){
            chance++;
        }
        else if(chance==0&&pan[x+i][y]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function dl_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x+i>=19||y-i<=0){ return }
        if(pan[x+i][y-i]==v){
            count++;
        }
        else if(chance==0&&pan[x+i][y-i]==0){
            chance++;
        }
        else if(chance==0&&pan[x+i][y-i]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function ll_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(y-i<=0){ return }
        if(pan[x][y-i]==v){
            count++;
        }
        else if(chance==0&&pan[x][y-i]==0){
            chance++;
        }
        else if(chance==0&&pan[x][y-i]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function ul_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x-i<=0||y-i<=0){ return }
        if(pan[x-i][y-i]==v){
            count++;
        }
        else if(chance==0&&pan[x-i][y-i]==0){
            chance++;
        }
        else if(chance==0&&pan[x-i][y-i]!=0){
            return 100;
        }
        else{
            return count;
        }
    }
}
function uu_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x-i<=0){ return }
        if(pan[x-i][y]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function ur_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x-i<=0||y+i>=19){ return }
        if(pan[x-i][y+i]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function rr_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(y+i>=19){ return }
        if(pan[x][y+i]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function dr_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x+i>=19||y+i>=19){ return }
        if(pan[x+i][y+i]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function dd_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x+i>=19){ return }
        if(pan[x+i][y]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function dl_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x+i>=19||y-i<=0){ return }
        if(pan[x+i][y-i]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function ll_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(y-i<=0){ return }
        if(pan[x][y-i]==v){
            count++;
        }
        else{
            return count;
        }
    }
}
function ul_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x-i<=0||y-i<=0){ return }
        if(pan[x-i][y-i]==v){
            count++;
        }
        else{
            return count;
        }
    }
}

function replay(){ // 다시 플레이 하기 위한 초기화 함수
    for (let i = 1; i < pan.length; i++) {
        for(let j = 1; j <= 19; j++){
            pan[i][j]=0;
            var cr = document.querySelector(" .x_" + i + "> .y_" + j); 
            cr.style.backgroundColor = "rgba(0,0,0,0)";
            cr.style.borderRadius = "0px";
            cr.style.boxShadow = "none";
        }
    }
    if(color=="white"){
        changeColor();
    }
    let notice = document.querySelector(".notice");
    notice.innerHTML = "";
    finish = 0;
}

function role_33(){ // 3*3규칙 ON/OFF하는 함수
    let button = document.querySelector(".dol_3X3");
    let ch = document.querySelector("div.choice > span > p");
    let ch_box = document.querySelector("div.choice > span");
    if(role_3_3 == 1){
        button.innerHTML = "OFF";
        button.style.left = "130px";
        ch.style.left = "30px";
        ch_box.style.backgroundColor = "rgb(236, 119, 119)";
        role_3_3 = 0;
    }
    else{
        button.innerHTML = "ON";
        button.style.left = "0px";
        ch.style.left = "80px";
        ch_box.style.backgroundColor = "rgb(133, 236, 119)";
        role_3_3 = 1;
    }
}

function cancel_2(){ // 규칙을 알려주는 모달창을 닫는 함수
    let modal = document.querySelector(".rule_book_modal");
    modal.style.display = "none";
}
function rule_book(){ // 규칙을 알려주는 모달창을 띄우는 함수
    let modal = document.querySelector(".rule_book_modal");
    modal.style.display = "flex";
}