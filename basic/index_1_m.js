function vali(telno) {
    if (/^\d{2,3}\-\d{3,4}\-\d{4}$/.test(telno)) return true;
    if (/^\d{9,11}$/.test(telno)) return true;
    return false;
  }

function solution(telno) {
    const tel = telno.replace(/-/g,'');
    let tell = "";
    const failure = ["전국", "X"];
    const failure2 = ["국제", "X"];
    const map = {
        "010": "휴대폰",
        "011": "휴대폰", "016": "휴대폰", "017": "휴대폰", "018": "휴대폰", "019": "휴대폰",
        "031": "경기", "032": "인천", "033": "강원",
        "041": "충청", "042": "대전", "044": "세종",
        "051": "부산", "052": "울산", "053": "대구",
        "054": "경북", "055": "경남",
        "061": "전남", "062": "광주", "063": "전북",
        "064": "제주"
    };

    //국제번호인지 판별하기위해 순서 변경
    const top = tel.substring(0, 3);
    const ext = tel.substring(tel.length - 4);
    
    //국제전화 로직
    if(top === '001' || top === '002') {
        //앞 3자리 자르기
        //const라서 tel 지정을 계속 실패..
       tell = tel.substring(3,tel.length);
    

    if (tell.length> 12 || tell.length < 8) return failure2;
        return ["국제","O"];
    };
    if (!vali(tel)) {
        return failure;
      }

    if (tel.length > 11 || tel.length < 9) return failure;
    else if (tel[0] !== '0') return failure;

   

    if (tel[1] === '2') {
        if (tel.length !== 10) return ["서울", "X"];
        if (ext[0] === ext[1] && ext[1] === ext[2] && ext[2] === ext[3]) return ["서울", "X"];
        return ["서울", "O"];
    }
    else if (tel[1] === '1') {
        if (!map[top]) return failure;
        if (tel[2] !== '0') return ["휴대폰", "X"];
        if (tel.length === 11 && parseInt(tel[3]) % 2 === 0) return ["휴대폰", "O"];
        return ["휴대폰", "X"];
    }
    else if (map[top]) {
        if (tel.length === 10 && tel[3] === '0') return [map[top], "X"];
        return [map[top], "O"];
    }
    

    return failure;
}

//첫번째 조건
console.log("첫번째 조건");
console.log(solution("02123456")); //failure
console.log(solution("010904210751"));//failure
console.log(solution("1234567890")) ;//failure
console.log(solution("123-4567-8900")) ;//failure

//두번째 조건
console.log("두번째 조건");
console.log(solution("02-1234-5678"));
console.log(solution("02-1234-56789")); //길이 10
console.log(solution("02-1234-5555")); //뒷자리 4개가 같으면 틀림

//세번째 조건
console.log("세번째 조건");
console.log(solution("010-9042-1075")); 
console.log(solution("013-90421075")); //!map[top]
console.log(solution("016-9042-1075")); //tel[2] !== '0'
console.log(solution("010-9042-10751")); //11자리
console.log(solution("010-8042-1075"));

//네번째 조건
console.log("네번째 조건");
console.log(solution("031-0123-4567"));
console.log(solution("032-0123-4567"));
console.log(solution("033-0012-3456"));
console.log(solution("055-1123-456"));
console.log(solution("055-0123-456"));

console.log("다섯번째 조건");
console.log(solution("0011231231"));
console.log(solution("001-1231-231123"));
console.log(solution("0011231231123898"));
console.log(solution("00112312311238982"));


//먼저 디버그로 결과값을 뽑아봤을 때, 현재 -있을 시 적용이 되지않는다
//서울 판단조건 :길이가 10이고 , 뒷 네자리가 동일하지않으면 서울번호
//휴대폰 판단조건 : 두번째 자리가 1이어야하고 map[top] 에 들어있으며, 셋째 자리가 0이 아니라면 틀린 휴대폰 번호 , 길이가 11자리이며 4번째 자리가 짝수이면 맞는 휴대폰 번호 그외 틀린번호

//디버깅해서 개선 : replace를 사용하여 - 제거
//const tel = telno => const tel =telno.replace(/-/g,'');

//001, 002로 시작하는 번호 국제번호로 앞 3자리 제외 8~12자리 허용 로직 추가 : 국제번호를 판별하기 위해 순서변경
//입출력 확인