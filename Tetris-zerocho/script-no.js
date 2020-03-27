var tetris = document.querySelector('#tetris');
var blockArr = [
    ['red', true, [
        [1, 1],
        [1, 1], //정사각형 모양
    ]],
    ['blue', true, [
        [0, 2, 0],
        [2, 2, 2],
    ]],
    ['orange', true, [
        [3, 3, 0],
        [0, 3, 3],
    ]],
    ['skyblue', true, [
        [0, 4, 4],
        [4, 4, 0],
    ]],
    ['yellowgreen', true, [
        [5, 5, 5],
        [5, 0, 0],
    ]],
    ['pink', true, [
        [6, 6, 6],
        [0, 0, 6],
    ]],
    ['yellow', true, [
        [7, 7, 7, 7],
    ]],
]
var blockDict = {
    0:['white', false, []],
    1: ['red', true, [
        [1, 1],
        [1, 1], //정사각형 모양
    ]], //색(className), 움직일 수 있는지 여부, 실제 모양
    2: ['blue', true, [
        [0, 1, 0],
        [1, 1, 1],
    ]], 
    3: ['orange', true, [
        [1, 1, 0],
        [0, 1, 1],
    ]],
    4: ['skyblue', true, [
        [0, 1, 1],
        [1, 1, 0],
    ]],
    5: ['yellowgreen', true, [
        [1, 1, 1],
        [1, 0, 0],
    ]],
    6: ['pink', true, [
        [1, 1, 1],
        [0, 0, 1],
    ]],
    7: ['yellow', true, [
        [1, 1, 1, 1],
    ]],
    10: ['red', false, []],
    20: ['blue', false, []],
    30: ['orange', false, []],
    40: ['skyblue', false, []],
    50: ['yellowgreen', false, []],
    60: ['pink', false, []],
    70: ['yellow', false, []],
};
var tetrisData = [

];
function cellCreate(){
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 20; i++) {
        var tr = document.createElement('tr');
        var arr = [];
        tetrisData.push(arr);
        fragment.appendChild(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            arr.push(0);
        }
    }
    console.log(tetris, fragment);
    tetris.appendChild(fragment);
}

function screenDrawing(){
    tetrisData.forEach(function(tr, i){ //i = 줄 수
        tr.forEach(function(td, j){ //j = 칸 수
            //todo : 블록 생성할 때 이미 차있으면 게임오버
            tetris.children[i].children[j].className = blockDict[td][0];
        });
    });
}

function blockCreate(){
    var block = blockArr[Math.floor(Math.random() * 7)][2]; //두번째 = blockArr의 테트리스모양
    console.log(block);
    block.forEach(function(tr, i){ //테트리스에 복사해놓기
        tr.forEach(function(td, j){
            tetrisData[i][j+3] = td; //처음 시작 시 왼쪽 귀퉁이에 붙을 것이다. 칸(j)에 + n을 하면 n번째 칸에서 생긴다.
        });
    });
    screenDrawing();
}

function blockDown(){
    for(var i = tetrisData.length -1; i >= 0; i--){ //가장 밑 줄부터 읽어 올라가기
        tetrisData[i].forEach(function(td, j){
            if (td > 0 && td < 10){ //td= 테트리스 데이터의 칸 //움직이는 블럭들
                tetrisData[i + 1][j] = td; //한 줄 아래로 td를 보내버린다.
                tetrisData[i][j] = 0; //현재 나의 칸은 빈칸으로.
            }
        });
    }
    console.log(tetrisData);
    screenDrawing(); //데이터랑 화면을 일치시키는.
}

window.addEventListener('keydown',function(e){
    console.log(e);
    switch(e.code){
        case 'ArrowRight'://오른쪽 이동
            break;
        case 'ArronwLeft'://왼쪽 이동
            break;
        case 'ArrowDown'://아래쪽 이동
            break;
        default:
            break;
    }
});

window.addEventListener('keyup',function(e){
    switch(e.code){
        case 'Space': //한방에 내리기
            break;
        case 'ArrowUp': //방향전환
            break;
    }
});

cellCreate();
blockCreate();
setInterval(blockDown, 1000); // 1s = 1000ms 