// quiz 실행
function quiz(){ // 함수 정의
	let answer=prompt("사물 인터넷의 구성요소에는 (  ), 네트워크/통신, 데이터 처리, 사용자 인터페이스가 있습니다. (  )에 들어갈 알맞은 말은?","");

	if(answer==null){ // 조건문 사용
		return;
	}else isCorrect(answer);
}

// quiz 정답 확인
function isCorrect(answer){ //함수 정의
	if(answer=='센서' || answer=='sensor' ||answer=='Sensor'){ //조건문 사용
		alert("정답입니다!");
	}
	else{
		if(confirm("틀렸습니다!\n다시 푸시겠습니까?")){
			quiz();
		}else return;
	}
}

// 자바스크립트 코어 객체 Array 생성
let text = new Array("youbbqlsl@gmail.com", "https://github.com/youbbin","https://blog.naver.com/youbin5478");

let commentDiv;
function init() {
	commentDiv = document.getElementById("commentDiv"); //id 속성으로 DOM 객체 찾기

	let aArr = document.getElementsByClassName("info"); // class 속성으로 DOM 객체 찾기(getElementsByTagName 사용)
	for(let i=0; i<aArr.length; i++) { // 반복문 사용
		aArr[i].addEventListener("mouseover", over, false); // 마우스 핸들링
		aArr[i].addEventListener("mouseout", hideCommentDiv, false); // 마우스 핸들링
	}
}

function over(e) { // 이벤트 객체
	let n=0;
	switch(e.target.id) { //switch문 사용
		case "l0" : n = 0; break;
		case "l1" : n = 1; break;
		case "l2" : n = 2; break;
	}
	setCommentDiv(text[n], e);
}

function setCommentDiv(comment, e) {
	commentDiv.innerHTML = comment;
	commentDiv.style.left = e.clientX + "px"; // 마우스 이벤트 객체의 프로퍼티 (마우스 좌표)
	commentDiv.style.top = e.clientY + "px"; // 마우스 이벤트 객체의 프로퍼티 (마우스 좌표)
	commentDiv.style.border = "1px solid pink";
	commentDiv.style.background = "aliceblue";
	commentDiv.style.visibility = "visible";
	commentDiv.style.width = "250px";
	commentDiv.style.height = "20px";
}

function hideCommentDiv() {
	commentDiv.style.visibility = "hidden";
}

function load() {
	let win=window.open(); //window 객체 생성
	win.location="https://www.beddit.com/"; // location 객체
}



