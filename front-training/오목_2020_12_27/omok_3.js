var pan = new Array(21); // 판에 색깔 확인용 배열
var panValue = new Array(21); // 가중치 저장용 배열
var change = 0; // 색깔 변경 용도의 변수
var color = "black"; // 색깔을 담는 변수
var role_3_3 = 1; // 3X3 규칙 (ON - 1 / OFF - 0)
var finish=0; // 게임 종료 판단
var dolCount=0;

for (let i = 0; i < pan.length; i++) { // 2차원 배열 선언을 위한 반복문
    pan[i] = new Array(21);
    panValue[i] = new Array(21);
    for(let j = 0; j <= 19; j++){ // 초기화를 하기 위한 반복문
        pan[i][j]=0;
        panValue[i][j]=0;
    }
}
/* ----------------------- 위에는  기본 선언 -----------------------
valueAssignment(x,y); // 배열에 값을 저장하는 함수 (black - 1 / white - 2)
valueAssignment_2(x,y); // 가중치 저장하는 함수
changeColor(); // 돌의 색깔을 바꾸는 함수
OPrint(x,y); // 화면에 표시하는 함수
Ocheck(x,y); // 놓는 자리가 놓을 수 있는 자리인지 판단해 주는 함수 (중복 - 1 / 3*3 - 2 / 승리 - 3 / 정상 - 0)
----------------------- 위에는  함수 선언 -----------------------*/

function Oclick(x,y){ // 클릭 이벤트 함수 (x,y 좌표로 값이 들어옴)
    let panCheck = Ocheck(x,y);
    if(finish==1){
        return;
    }
    if(panCheck == 0){ // 정상
        valueAssignment(x,y);
        if(color=="black"){
            valueAssignment_2(x,y);
        }
        OPrint(x,y);
        dolCount++;
        tie();
        changeColor();
    }
    else if(panCheck == 1){ // 중복
        // 그냥 넘어가도록 비워둠
    }
    else if(panCheck == 2){ // 3*3 규칙 위반
        if(role_3_3 == 0){
            valueAssignment(x,y);
            OPrint(x,y);
            changeColor();
        }
        else{
            let notice = document.querySelector(".notice");
            notice.innerHTML = notice.innerHTML + "해당 자리에 놓을 수 없습니다 (3 X 3)<br/>"
        }
    }
    else if(panCheck == 3){ // 승리
        OPrint(x,y);
        var c=document.querySelector("#modal");
        c.style.display="flex";
        var c=document.querySelector("#modal > p.people");
        if(color == "black"){
            c.innerHTML = "검은돌이 승리하였습니다";
        }
        else{
            c.innerHTML = "흰돌이 승리하였습니다";
        }
        finish=1;
    }
    if(color=="white"){
        Ocomputer(); // 가중치에 따라 돌을 놔줌
    }
}