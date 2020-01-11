/**
 * 
 */

  
//Object객체가 많을 때 웹페이지마다 불러와서 사용하고 싶을때
//Javascript 파일을 하나 만들어서 거기에 객체를 모아놓고,
//각 html파일에 <script src="파일명.js"></script> 파일 불러오면 됨
//function =메소드
// function 함수이름(함수에전달되는인수의 이름){함수정의} 
// 함수이름();  ------>함수 실행


//Body라는 객체에 함수 변수 2개 (setFontCol, setBackCol) 담기
//제이쿼리 사용시
var Body ={
		setFontCol: function(colorrr){//()안에 폰트색 받기
//			document.querySelector('body').style.color = colorrr;  -> 제이쿼리 미사용시
			$('body').css('color',colorrr);
		},
		setBackCol: function(colorrr){//()안에 배경색 받기
//			document.querySelector('body').style.backgroundColor = colorrr; -> 제이쿼리 미사용시 
			$('body').css('backgroundColor',colorrr); 
		}	
}

//Link객체에 함수변수(setHyperColor) 담기
//이렇게 제이쿼리를 사용하지 않으면 더 길게 써야 한다.
//var Link = {
//	setHyperColor: function(colorrr){//colorrr 인자명에 파우더블루색 혹은 블루색 객체 전달받음
//		var alist = document.querySelectorAll('a');//a태그를 불러와서 배열처럼 만들어줌
//		var i=0;
//		while(i < alist.length){
//			alist[i].style.color = colorrr;
//			i=i+1;}
//	}
//}

//제이쿼리 사용시 반복문이 간단해진다.
//$()안에 있는 모든 웹페이지를 제이쿼리로 제어하겠다.
var Link = {
		setHyperColor:function(colorrr){
			$('a').css('color',colorrr);
		}
}
//한 함수에 배경색, 폰트색 같이 받는 방법도 있다.
// function setBackCol(backCol, fontCol){//첫번째인자 배경색 받음 , 두번째인자에 글씨색받음
// 	var target = document.querySelector('body');//코드 유지보수 유용하게 해줌
// 	target.style.backgroundColor = backCol; 
// 	target.style.color = fontCol; 
	
//버튼클릭시동작함수
function nightDayHandler(selfff){
		if(selfff.value==='darkMode'){
			Body.setFontCol('white');
			Body.setBackCol('black');//SetBackCol함수에 검정색 전달
			Link.setHyperColor('powderblue');//setColor함수에 파우더블루색 전달
			selfff.value = 'dayMode';
		} 
		else{ 
			Body.setFontCol('black');
			Body.setBackCol('white');//SetBackCol함수에 흰색 전달
			Link.setHyperColor('blue');//setColor함수에 블루색 전달
			selfff.value = 'darkMode'; 
 		}
}
