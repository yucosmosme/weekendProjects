## 필수1

label 엘리먼트의 for 속성값은 input 엘리먼트의 (    id        ) 속성값과 값이 같아야 합니다.  

텍스트의 자간은 ( 가상클래스 ) 속성으로 조절할 수 있습니다.  

박스의 지정된 크기를 넘어선 텍스트를 감추기 위해서는 (    overflow  ) 속성의 값은 (   hidden  )로 지정해줍니다.  

input 요소의 type 속성이 email인 요소를 선택하는 CSS선택자는 (   input[type="email"{  }  ) 입니다.  

박스의 모서리를 둥글게 만드는 CSS 속성은 (  border-radius  ) 입니다.


## 필수2

form 요소의 action 속성과 method 속성의 역할은 무엇인가요?  
action은 form 태그에 입력된 내용을 처리하는 서버 프로그램의 url을 지정하는 역할을 함  
method는 사용자가 입력한 내용을 어떤 방식(get, post)으로 넘길 것인지를 지정하는 역할을 함.

label 엘리먼트의 역할은 무엇인가요?  
input tag가 여러개 있을 때 어떤게 맞는지 설명해줄 때 사용. input과 한쌍으로만 사용.

form 요소가 사용되는 이유와 사례를 한가지 이상 작성해주세요.  
여러개의 항목중 선택할 때 사용자가 입력할때 사용하는 것으로 사용자와 상호작용을 할 수 있게 해줌  
로그인할때, 검색할 떄 등등에 사용


가상 요소 선택자(::after, ::before)로 p요소 뒤에 ‘>’ 문자를 추가하는 코드를 작성해주세요.  
p::after {  
  content:">";  
}

기본적으로 라디오버튼과 체크박스 간의 차이점은 무엇인가요?  
체크박스는 여러개 선택 가능, 라디오버튼은 1개만 선택 가능

## 필수3

다음 nth-child 선택자들에 대한 내용을 정리해서 제출하세요. 
( 참고: http://nthmaster.com/ )

:nth-child(3)  
부모요소에서 3번째 요소만 선택  

:nth-child(n+2)  
부모요소에서 2번째 요소와 그 이후의 요소 선택  

:nth-child(-n+2)  
부모요소에서 2번째 요소와 그 이전의 요소 선택  

:nth-child(odd)  
부모요소에서 홀수 요소 선택  

:nth-child(even)  
부모요소에서 짝수 요소 선택  


## 필수4
 
input type이 text인 것과 password인 것의 차이는?  
text는 text박스가 생기게 되고 거기에 내용을 입력하면 그 내용이 보인다. 그리고 옆에 x표시가 표시되는데, 누르면 텍스트박스에 입력한 내용이 삭제된다.  
password도 텍스트박스가 생기는데, 내용을 입력하면 동그라미 텍스트가 시각적으로 값을 덮어버린다.

input type이 button인 것과 submit인 것의 차이는?  
둘다 폼 전송 기능을 담당하지면, button은 type 속성을 몇시하지 않으면서 submit기능을 수행하기 때문에 디자인 적 관점에서 input 요소와 달리 매우 자유롭게 쓸 수 있음.


## 필수5
https://codepen.io/shoark7/pen/YoKvNo

위 펜에서는 조선 세종 때 간행된 최초의 한글 문헌 '용비어천가'의 5장을 장마다 나눠 현대어로 적었습니다.

위 펜을 Fork 한 뒤 본인이 마음에 드는 장을 최소 2개 이상 선택해서 section 요소에 nth-child 가상 클래스를 사용해 스타일링 해보세요. ( 배경색, 글자색, 크기 등등 )

이후 링크를 제출하시면 됩니다.


## 심화1
웹 접근성을 고려해서 h2 요소의 내용 (제목 태그)가 보이지는 않되, 스크린 리더가 제목을 읽을 수 있게 하기 위한 css 코드를 작성해주세요.
( 당일 두번째 강의 05:00 ~ 내용 )

position: absolute;  
width: 1px;  
height:1px;  
overflow: hidden;  
margin: -1px;  
clip: rect {o,o,o,o};  


