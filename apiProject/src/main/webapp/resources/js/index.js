
// 공공데이터 포털 검색
document.getElementById("data-search-btn").addEventListener("click", function(){

    const keyWord = document.getElementById("data-search-input").value;
    
    location.href="https://www.data.go.kr/tcs/dss/selectDataSetList.do?keyword=" + keyWord +" &brm=&svcType=&instt=&recmSe=N&conditionType=init&extsn=&kwrdArray="

});


// api 호출(데스크톱)
document.getElementById("url-search-btn").addEventListener("click", async function(){

    fetchAirQualityData();
    
});
// api 호출(반응형)
document.getElementById("url-search-btn2").addEventListener("click", async function(){

    fetchAirQualityData2();
    
});
// api 호출(데스크톱)
async function fetchAirQualityData() {
    const url = document.getElementById("url-value").value;
    const outputDiv = document.getElementById("s-left-info");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const text = await response.text(); // 텍스트로 변환
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml"); // XML 파싱

        outputDiv.innerHTML="";

        // XML 데이터 처리
        const items = xml.getElementsByTagName('item');

        for(var i=0; i<items.length; i++){
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<h3>Item ${i + 1}</h3>`;

            const children =  items[i].children;

            for(var j=0; j< children.length; j++){
                const nName = children[j].nodeName;
                const info = children[j].textContent;
                const p = document.createElement('p');
                p.textContent = `태그명 : ${nName} | 값 : ${info}`;
                itemDiv.appendChild(p);
            }
            //itemDiv.innerHTML = items[i].nodeName + "<br/>" + items[i].textContent;
            itemDiv.appendChild(document.createElement('hr'));
            outputDiv.appendChild(itemDiv);
        }

    }catch (error) {
        console.error('Error:', error); // 에러 처리
    }
}

// api 호출(반응형)
async function fetchAirQualityData2() {
    const url = document.getElementById("url-value").value;
    const outputDiv2 = document.getElementById("s-left-info2");
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const text = await response.text(); // 텍스트로 변환
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml"); // XML 파싱

        outputDiv2.innerHTML="";

        // XML 데이터 처리
        const items = xml.getElementsByTagName('item');

        for(var i=0; i<items.length; i++){
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<h3>Item ${i + 1}</h3>`;

            const children =  items[i].children;

            for(var j=0; j< children.length; j++){
                const nName = children[j].nodeName;
                const info = children[j].textContent;
                const p = document.createElement('p');
                p.textContent = `태그명 : ${nName} | 값 : ${info}`;
                itemDiv.appendChild(p);
            }
            //itemDiv.innerHTML = items[i].nodeName + "<br/>" + items[i].textContent;
            itemDiv.appendChild(document.createElement('hr'));
            outputDiv2.appendChild(itemDiv);
        }

    }catch (error) {
        console.error('Error:', error); // 에러 처리
    }
}

// 태그명(데스크톱) - 버튼에 마우스 오버시, 내부 이미지 확대 효과
document.getElementById('insert-tag').addEventListener('mouseover', function() {
    var img = this.querySelector('#insert-tag img');
    img.classList.add('scale-effect');
    
    // 일정 시간 후 효과 제거 (예: 300ms 후)
    setTimeout(function() {
        img.classList.remove('scale-effect');
    }, 300);
});

// 태그명(데스크톱) - 버튼 클릭시 input 태그 추가
document.getElementById('insert-tag').addEventListener('click', function() {
    var inputContainer = document.getElementById('s-center-input');
    var inputCount = inputContainer.querySelectorAll('input').length;

    // 최대 9개의 입력 필드 추가
    if (inputCount < 10) {
        // 새로운 input 태그 생성
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.classList.add('s-center-input', 'new-input'); // 초기 상태 클래스 추가

        // 버튼 바로 위에 새로운 input 태그 추가
        var button = document.getElementById('insert-tag');
        button.parentElement.insertBefore(newInput, button); // 버튼 앞에 추가

        // 약간의 지연 후 애니메이션 효과 적용
        setTimeout(function() {
            newInput.classList.add('show');
        }, 10); // 약간의 지연을 주어 CSS transition이 적용되도록 함

        // 9개 이상인 경우 알림 표시
        if (inputCount === 10) {
            alert("최대 10개까지만 추가할 수 있습니다.");
        }
    } else {
        alert("최대 10개까지만 추가할 수 있습니다.");
    }
});


// 태그명(반응형) - 버튼에 마우스 오버시, 내부 이미지 확대 효과
document.getElementById('insert-tag2').addEventListener('mouseover', function() {
    var img = this.querySelector('#insert-tag2 img');
    img.classList.add('scale-effect2');
    
    // 일정 시간 후 효과 제거 (예: 300ms 후)
    setTimeout(function() {
        img.classList.remove('scale-effect2');
    }, 300);
});

// 태그명(반응형) - 버튼 클릭시 input 태그 추가
document.getElementById('insert-tag2').addEventListener('click', function() {
    var inputContainer = document.getElementById('s-center-input2');
    var inputCount = inputContainer.querySelectorAll('input').length;

    // 최대 5개의 입력 필드 추가
    if (inputCount < 6) {
        // 새로운 input 태그 생성
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.classList.add('s-center-input2', 'new-input2'); // 초기 상태 클래스 추가

        // 버튼 바로 위에 새로운 input 태그 추가
        var button = document.getElementById('insert-tag2');
        button.parentElement.insertBefore(newInput, button); // 버튼 앞에 추가

        // 약간의 지연 후 애니메이션 효과 적용
        setTimeout(function() {
            newInput.classList.add('show');
        }, 10); // 약간의 지연을 주어 CSS transition이 적용되도록 함

        // 5개 이상인 경우 알림 표시
        if (inputCount === 6) {
            alert("더 이상 추가할 수 없습니다.");
        }
    } else {
        alert("더 이상 추가할 수 없습니다.");
    }
});