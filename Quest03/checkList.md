## 1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?

 ### 1-1. 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
※ ES는 ECMAScript의 약어
- ES1~3(1999)  
JavaScript의 가장 기본이 되는 기능만 존재함(hoisting,prototype,scope 등)  
- ES5(2009)  
배열에 forEach, map, filter, reduce, some, every와 같은 메소드 지원  
Object에 대한 getter/setter 지원  
JavaScript strict 모드 지원  
JSON지원(과거 XML 사용)  
- ES6(ES2015)  
let, const 키워드 추가  
기존의 변수는 함수 scope를 가진 var로 선언, 기존 상수형 키워드 없어 구분 키워드 let,const 추가  
arrow 문법 지원  
this 바인딩 하지 않음, 선언된 scope의 this를 가르킨다.  
iterator/generator 추가  
module import/export 추가  
Promise 도입  
- ES7(ES2016)  
"**" 제곱 연산자 제공  
Array.includes 배열에 해당 요소가 존재하는지 확인하는 메소드 제공  
- ES8(ES2017)  
async/await 제공  

 ### 1-2.자바스크립트의 표준은 어떻게 제정될까요?
 * 0단계 : 허수아비(strawman)  
 라이센스 관련 조항에 동의하고 TC39의 컨트리뷰터로 등록한 누구나 프로포절 접수가능  
 회의 안건으로 상정되고 앞서 언급된 0단계 문서에 등재되면 제안 등록 완료  
 * 1단계 : 제안(proposal)  
 가장 먼저 챔피언(champion)을 구해야함(해당 제안을 책임지고 다음 단계로 끌고 나아갈 구성원)  
 풀고자 하는 문제와 하이 레벨 API 및 잠재적 장애물 제시, 구현상으로는 폴리필, 데모 등이 필요함  
 ※ 1단계의 진입은 본격적으로 위원회 수준에서 시간과 노력을 투자해 논의할 의사를 표명한 것  
 * 2단계 : 초고(draft)  
 ECMAScript표준의 형식 언어(formal description)로 작성된 형식적인 서술(formal description)초안 필요  
 실제로 표준에 편입될 경우 사용할 명세의 초기 버전. TODO 마크 등으로 표시해 놓은 일부 불완전한 명세 허용  
 또한 실험적인(플래그에 의해 켜지고 꺼지는) 구현 요구  
 ※ 위원회가 발전시켜 궁극적으로는 표준에 포함시키고자 하는 의지가 있다고 해석할 수 있음  
 * 3단계 : 후보(candidate)  
 완성에 가깝고, 구현 주체나 사용자들로부터 피드백을 좀 더 받아보는 일만 남은 상태, 3단계는 2단계와 다르게  
 빈칸 없이 문법, 동작, API까지 모든 부분이 기술되어 있도록 마무리 된 명세가 필요  
 ※ 3단계부터는 구현상 심각한 문제가 발견되지 않는 이상 변경 불허, 해당 표준의 명세가 거의 마무리 된 상태  
 * 4단계 : 완료(finished)  
 모든 단계를 거치고 제안이 수락되어 표준에 포함되어 발표되기만을 기다리는 단계, 3단계의 프로포절이 ECMA-262의   
 단위 테스트 슈트인 Test262에 관련된 테스트가 작성되고, 최소 2개 이상의 구현이 제공되는 등의 까다로운 추가  
 조건을 모두 만족했을시 4단계로 올라올 수 있음. 이 단계에서는 별다른 이변이 없는 이상 새 표준에 포함되어 발표됨.  

## 2. 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
* 특징  
1. HTML/CSS와 완전히 통합될 수 있음  
2. 간단한 일은 간단하게 처리할 수 있게 해줌
3. 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

|차이점| JavaScript | C | Java |
|:----|:----------:|:--:|:----:|
| 출력 | console.log("hi")|printf("hi")|System.out.println("hi")|
| 문자열 접합 연산자(+) | 가능 | 불가능 | 가능 |
| 자료형 | 동적 타입 지원언어 | 정적 타입 언어 |정적 타입 언어|
| 언어 | 객체지향언어(객체 정의+객체 생성) | 클래스를 이용해 객체를 생성하는 클래스 기반 객체 지향 언어 |클래스를 이용해 객체를 생성하는 클래스 기반 객체 지향 언어|
### 2-1. 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?   
 |반복문|사용법|기타|
 |------|------|----|
 |for|for(초기값;조건;끝){반복코드}|변수에 const사용 시 값 변경이 불가하여 에러발생|
 |for in|for(const key in 객체){반복코드}|해당 객체가 상속받는 모든 프로퍼티 키 열거|
 |for of|for(const item of 이터러블){반복코드}| |
 |forEach|배열.forEach(function(value,index,array){반복코드})|콜백함수로 매개변수 요소값,인덱스,원본배열|
 |while|while(조건식){반복코드}|
 |do while|do{반복코드}while(조건식)|한번은 무조건 실행됨|
 
 ※ 배열인 경우 배열.forEach(), 객체인 경우 Object.keys(객체) - 예상치 못한 버그 예방

## 3. 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?  
- 클래스 이름 설정/변경  
document.getElementById('ex').className = '이름';  
- 클래스 추가  
document.getElementById('ex').className += '이름';  
document.getElementById('ex').classList.add('이름');  
- 클래스 변경  
document.getElementById('ex').classList.replace('변경전', '변경후');  
- 클래스 삭제  
document.getElementById('ex').classList.remove('이름');  
- 클래스 토글  
document.getElementById('ex').classList.toggle('이름');  
※ 클래스를 관리 할때는 querySelector()에 사용하는 것과 달리 클래스 이름 앞에 점(.)을 사용하지 않는다.  
 ### 3-1. IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?  

## 4. 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?  
자바스크립트에서 객체나 함수는 모두 변수(variable)이며, 변수의 유효 범위(scope)란 해당 변수가  
접근할 수 있는 변수, 객체 그리고 함수의 집합을 의미한다.  
1. 지역 변수(local variable)  
함수 내에 선언된 변수, 선언된 함수 내에서만 유효하며, 함수가 종료되면 메모리에서 사라짐  
함수의 매개변수 또한 함수 내에서 정의되는 지역 변수처럼 동작  
ex)  
function temp(){  
var temp1 = 10; // 지역변수 temp1에 10 대입  
document.write("temp1타입 : "+ typeof temp1);} // 타입 number로 나옴, 해당 밖에서 불러오면 undefined  
2. 전역 변수(global variable)  
함수 외부에서 선언된 변수, 프로그램 어느 영역에서나 접근 가능, 웹 페이지가 닫혀야만 메모리에서 사라짐  
ex)  
var temp2 = 10; // 전역 변수 선언  
function temp(){  
document.write("temp2 값 : "+ temp2); // 값 10
temp2 = 20 }// 전역 변수 값을 함수 내부에서 변경
temp(); // 함수 호출
document.write("함수 호출 후 temp2 값 : "+temp2) // 20
※ 자바스크립트에서 지역 변수를 선언할 때에는 반드시 var 키워드 사용하여 선언, 그렇지 않으면 전역 변수로 선언됨

 ### 4-1. var과 let으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?

## 5. 자바스크립트의 익명 함수는 무엇인가요?

 ### 5-1. 자바스크립트의 Arrow function은 무엇일까요?
