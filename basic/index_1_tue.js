    //param0은 배열이고 shift사용
    function play(param0) {
    let val = {
        "A" : 0,
        "B" : 0,
        "C" : 0,
        "D" : 0
    };
    //15칸 짜리 배열로 먹은 땅인지 구분
    const boardVal = 16;
    let board = Array(boardVal).fill(null);
    //플레이어 현재위치 
    let position = {
        "A" : 0,
        "B" : 0,
        "C" : 0,
        "D" : 0
    }
    while (param0.length > 0) {
        let move = param0.shift().split(",").map(Number); 
        // 참가자 순서대로 이동 처리
        ["A", "B", "C", "D"].forEach((player,index) => {
            
            // 배열에서 이동할 값(1-4)을 가져옴

            //move 4개를 하나씩 넣어줘야되는데.. 밖에다 빼자.
            position[player] = (position[player] + move[index] )% (boardVal); // 새로운 위치 계산
            //시작지점
            if (position[player]!=0 &&board[position[player]] === null) {
                board[position[player]] = player; // 소유권 부여
                val[player]++; // 소유한 장소 개수 증가
            }
        });

        // 모든 장소가 소유되었는지 확인
        if (!board.includes(null)) break;
    }
    return val;
}

console.log(play(["1,2,3,4", "4,4,3,2", "1,4,1,3", "2,3,4,4"]));
console.log(play(["1,2,3,4", "4,4,3,2", "1,3,1,3", "2,4,4,4", "1,2,1,1", "4,3,2,1", "4,4,4,4", "4,4,4,4"]));
console.log(play(["1,1,1,1", "2,2,2,2", "3,3,3,3", "4,4,4,4"]))
