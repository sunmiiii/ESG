/* HTMLCollection과 같은 live 객체는 반복문을 순회하면서 노드가 변경되는 경우
   개발자의 의도와 달라질 수 있으니 배열로 바꾸어 사용 */

/* 사용되어질 요소들 가지고오기 */
var displayedImg = document.getElementsByClassName("displayed-img")[0];
var thumbBar = document.getElementsByClassName("thumb-bar")[0];
var btn = document.getElementsByClassName("dark")[0];
var overlay = document.getElementsByClassName("overlay")[0];

/* 이미지 배열 생성 */
var imgArr = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* 이미지 요소 생성(경로와 설명까지) */
for(var i = 0; i < imgArr.length; i++){ 
  var newImg= document.createElement("img");
  /*newImg.setAttribute("src", "images/pic"+[i+1]+".jpg"); */
  newImg.setAttribute("src", "images/"+imgArr[i]);
  newImg.setAttribute("alt", imgArr[i]);
  /* thumbBar 기준으로 newImg를 자식요소로 추가한다. */
  thumbBar.appendChild(newImg);
  /* 작은 이미지들 클릭했을때 큰 이미지가 해당 이미지로 변할 수 있게 경로와 설명 바꿔주기 */
  newImg.addEventListener("click",function(newImg){
    displayedImg.src = newImg.target.src;
    displayedImg.alt = newImg.target.alt;
  });
}

/* 버튼을 클릭했을때 */
btn.addEventListener("click",function(){ 
  /* 버튼 클래스가 다크라면 라이트로 클래스명, 내용, 색상 변경 */
  if(btn.classList=="dark"){
    btn.setAttribute("class","light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  /* 버튼 클래스가 라이트라면 다크로 클래스명, 내용, 색상 변경 */
  }else{
    btn.setAttribute("class","dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
  



