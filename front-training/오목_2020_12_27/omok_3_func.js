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
    if(change%2 ==0 ){
        color = "black"
    }
    else{
        color = "white";
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
            return 2; // 3X3
        }
        else if((uu_a+dd_a==4)||(ur_a+dl_a==4)||(rr_a+ll_a==4)||(dr_a+ul_a==4)){
            return 3; // 승리
        }
        return 0;
    }
}
function uu_f(x,y,v){
    let count=0;
    let chance=0;
    for(let i=1;1;i++){
        if(x-i<=0){ return count;}
        if(pan[x-i][y]==v){
            count++;
        }
        else if(chance==0&&pan[x-i][y]==0){
            chance++;
        }
        else if(chance==0&&pan[x-i][y]!=0){
            return -100;
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
        if(x-i<=0||y+i>19){ return count;}
        if(pan[x-i][y+i]==v){
            count++;
        }
        else if(chance==0&&pan[x-i][y+i]==0){
            chance++;
        }
        else if(chance==0&&pan[x-i][y+i]!=0){
            return -100;
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
        if(y+i>19){ return count;}
        if(pan[x][y+i]==v){
            count++;
        }
        else if(chance==0&&pan[x][y+i]==0){
            chance++;
        }
        else if(chance==0&&pan[x][y+i]!=0){
            return -100;
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
        if(x+i>19||y+i>19){ return count;}
        if(pan[x+i][y+i]==v){
            count++;
        }
        else if(chance==0&&pan[x+i][y+i]==0){
            chance++;
        }
        else if(chance==0&&pan[x+i][y+i]!=0){
            return -100;
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
        if(x+i>19){ return count;}
        if(pan[x+i][y]==v){
            count++;
        }
        else if(chance==0&&pan[x+i][y]==0){
            chance++;
        }
        else if(chance==0&&pan[x+i][y]!=0){
            return -100;
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
        if(x+i>19||y-i<=0){ return count;}
        if(pan[x+i][y-i]==v){
            count++;
        }
        else if(chance==0&&pan[x+i][y-i]==0){
            chance++;
        }
        else if(chance==0&&pan[x+i][y-i]!=0){
            return -100;
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
        if(y-i<=0){ return count;}
        if(pan[x][y-i]==v){
            count++;
        }
        else if(chance==0&&pan[x][y-i]==0){
            chance++;
        }
        else if(chance==0&&pan[x][y-i]!=0){
            return -100;
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
        if(x-i<=0||y-i<=0){ return count;}
        if(pan[x-i][y-i]==v){
            count++;
        }
        else if(chance==0&&pan[x-i][y-i]==0){
            chance++;
        }
        else if(chance==0&&pan[x-i][y-i]!=0){
            return -100;
        }
        else{
            return count;
        }
    }
}
function uu_af(x,y,v){
    let count=0;
    for(let i=1;1;i++){
        if(x-i<=0){ return count;}
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
        if(x-i<=0||y+i>19){ return count;}
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
        if(y+i>19){ return count;}
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
        if(x+i>19||y+i>19){ return count;}
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
        if(x+i>19){ return count;}
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
        if(x+i>19||y-i<=0){ return count;}
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
        if(y-i<=0){ return count;}
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
        if(x-i<=0||y-i<=0){ return count;}
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
            panValue[i][j]=0;
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

function valueAssignment_2(x,y){ // 가중치 저장하는 함수
    panValue[x][y]=-999; // 다시 선택하지 않도록 값을 줌
    let i=1; // uu, dd
    while(pan[x-i][y]==1&&x-i>0){
        i++;
    }
    let j=1;
    while(pan[x+j][y]==1&&x+j<=19){
        j++;
    }
    if(pan[x-i][y]!=2&&pan[x+j][y]!=2){
        panValue[x-i][y]+=j*j;
        panValue[x+j][y]+=i*i;
    }
    else{
        panValue[x-i][y]+=j;
        panValue[x+j][y]+=i;
    }

    i=1; // ur, dl
    while(pan[x-i][y+i]==1&&x-i>0&&y+i<=19){
        i++;
    }
    j=1;
    while(pan[x+j][y-j]==1&&x+j<=19&&y-j>0){
        j++;
    }
    if(pan[x-i][y+i]!=2&&pan[x+j][y-j]!=2){
        panValue[x-i][y+i]+=j*j;
        panValue[x+j][y-j]+=i*i;
    }
    else{
        panValue[x-i][y+i]+=j;
        panValue[x+j][y-j]+=i;
    }

    i=1; // rr, ll
    while(pan[x][y+i]==1&&y+i<=19){
        i++;
    }
    j=1;
    while(pan[x][y-j]==1&&y-j>0){
        j++;
    }
    if(pan[x][y+i]!=2&&pan[x][y-j]!=2){
        panValue[x][y+i]+=j*j;
        panValue[x][y-j]+=i*i;
    }
    else{
        panValue[x][y+i]+=j;
        panValue[x][y-j]+=i;
    }

    i=1; // dr, ul
    while(pan[x+i][y+i]==1&&x+i<=19&&y+i<=19){
        i++;
    }
    j=1;
    while(pan[x-j][y-j]==1&&x-j>0&&y-j>0){
        j++;
    }
    if(pan[x+i][y+i]!=2&&pan[x-j][y-j]!=2){
        panValue[x+i][y+i]+=j*j;
        panValue[x-j][y-j]+=i*i;
    }
    else{
        panValue[x+i][y+i]+=j;
        panValue[x-j][y-j]+=i;
    }
    return;
}
function Ocheck_3(x,y,v){ // 3개를 놓았는지 판단하는 함수
    if(pan[x][y] != 0){
        return 0; // 중복
    }
    else{
        let uua=uu_af(x,y,v);
        let ura=ur_af(x,y,v);
        let rra=rr_af(x,y,v);
        let dra=dr_af(x,y,v);
        let dda=dd_af(x,y,v);
        let dla=dl_af(x,y,v);
        let lla=ll_af(x,y,v);
        let ula=ul_af(x,y,v); // 위에는 3X3 변수
        if(uua>=3||ura>=3||rra>=3||dra>=3||dda>=3||dla>=3||lla>=3||ula>=3||uua+dda>=3||ura+dla>=3||rra+lla>=3||dra+ula>=3){
            return 1; // 3
        }
        else if(((uua+dda==2)+(ura+dla==2)+(rra+lla==2)+(dra+ula==2)>=1)+((uua+dda==3)+(ura+dla==3)+(rra+lla==3)+(dra+ula==3)>=1)>=2){
            return 1; // 4X3
        }
        return 0;
    }
}
function Ocomputer(){ // 가중치에 따라 돌을 놔줌
    let i,j;
    let max_x=1, max_y=1;
    for(i=1;i<=19;i++){ // 컴퓨터가 둔 돌 판정
        for(j=1;j<=19;j++){
            if(Ocheck(i,j)==3){ // 컴퓨터가 승리
                Oclick(i,j);
                return;
            }
            else if(Ocheck(i,j)==0||(Ocheck(i,j)==2&&role_3_3==0)){
                if(panValue[i][j]>panValue[max_x][max_y]){
                    max_x=i;
                    max_y=j;
                }
                else if(panValue[i][j]==panValue[max_x][max_y]&&Math.floor(Math.random()*10)%2==0){
                    max_x=i;
                    max_y=j;
                }
            }
        }
    }
    changeColor(); // 내가 두는 돌 판단
    for(i=1;i<=19;i++){
        for(j=1;j<=19;j++){
            if(Ocheck(i,j)==3){ // 상대가 승리
                changeColor();
                Oclick(i,j);
                return;
            }
        }
    }
    changeColor();
    let max_m_x=-1, max_m_y=-1;
    for(i=1;i<=19;i++){
        for(j=1;j<=19;j++){
            if(Ocheck_3(i,j,2)==1){ // 내가 3개를 놓음, 4*3을 놓음
                if(max_m_x==-1&&max_m_y==-1||panValue[max_m_x][max_m_y]<panValue[i][j]){
                    max_m_x=i;
                    max_m_y=j;
                }
                else if(panValue[max_m_x][max_m_y]==panValue[i][j]&&Math.floor(Math.random()*10)%2==0){
                    max_m_x=i;
                    max_m_y=j;
                }
            }
        }
    }
    if(max_m_x>=1&&max_m_y>=1){
        Oclick(max_m_x,max_m_y);
        return;
    }
    max_m_x=-1, max_m_y=-1;
    for(i=1;i<=19;i++){
        for(j=1;j<=19;j++){
            if(Ocheck_3(i,j,1)==1){ // 상대가 3개를 놓음, 4*3을 놓음
                if(max_m_x==-1&&max_m_y==-1||panValue[max_m_x][max_m_y]<panValue[i][j]){
                    max_m_x=i;
                    max_m_y=j;
                }
                else if(panValue[max_m_x][max_m_y]==panValue[i][j]&&Math.floor(Math.random()*10)%2==0){
                    max_m_x=i;
                    max_m_y=j;
                }
            }
        }
    }
    if(max_m_x>=1&&max_m_y>=1){
        Oclick(max_m_x,max_m_y);
        return;
    }
    Oclick(max_x,max_y);
    return;
}