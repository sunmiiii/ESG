// HTMLCollection과 같은 live 객체는 반복문을 순회하면서 노드가 변경되는 경우
// 개발자의 의도와 달라질 수 있으니 배열로 바꾸어 사용
var displayedImg = document.getElementsByClassName("displayed-img")[0];
var thumbBar = document.getElementsByClassName("thumb-bar")[0];
var btn = document.getElementsByTagName("button")[0];
var overlay = document.getElementsByClassName("overlay")[0];

var imgs = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]
var alts = {
  "pic1.jpg" : "eye",
  "pic2.jpg" : "wave",
  "pic3.jpg" : "flower",
  "pic4.jpg" : "pharoah",
  "pic5.jpg" : "butterfly",
}

for(var i = 0; i < imgs.length; i++){ 
  var newImg= document.createElement("img");
  newImg.setAttribute("src","images/pic"+[i+1]+".jpg");
  newImg.setAttribute("alt",alts[imgs]);
  thumbBar.appendChild(newImg);
  newImg.addEventListener("click",function(opt){
    displayedImg.src = opt.target.src;
    displayedImg.alt = opt.target.alt;
  })
}

btn.addEventListener("click",function(){ 
  if(btn.classList=="dark"){
    btn.setAttribute("class","light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }else{
    btn.setAttribute("class","dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})
  



