/** 엄격모드 */
'use strict';

/**
 * 요구사항은 다음과 같습니다.
 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
 Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!
 */

let body = document.querySelector('body');
let desktop = document.querySelector('.desktop');

/** 이미지를 가져오기 위해 필요한 것들 */
let iconFile = ['./icon/folderImg.png', './icon/iconImg.png'];
let iconName = ['folderImg', 'iconImg'];
let imgs = [];
let imgDiv = document.createElement('div');
imgDiv.setAttribute('class', 'imgDiv');

desktop.append(imgDiv);

class Icon {
	constructor(number, selectNum) {
		this.number = number;
		this.selectNum = selectNum;
		this.selectIconNum();       
	};
	/** 아이콘 이미지 불러오기! */
	selectIconNum() {
		for (let i = 0; i < this.number; i++) {
            imgs[i] = document.createElement('img');
			imgs[i].src = iconFile[this.selectNum]; // 페이지 로딩 될때 이미지 미리 로딩
			imgs[i].setAttribute('class', iconName[this.selectNum]);
			imgDiv.appendChild(imgs[i]);
		}
        imgs.forEach(function(e){
            e.addEventListener('click', modalCreate);
        });
    };      
};

function modalCreate(){
let bigDiv = document.createElement('div');
bigDiv.setAttribute('class', 'modal');
desktop.appendChild(bigDiv);
let modalContentDiv = document.createElement('div');
modalContentDiv.setAttribute('class','modelContent');
bigDiv.append(modalContentDiv);
let divHea = document.createElement('div');
divHea.setAttribute('class','divHea');
divHea.textContent = '머리';
let pCon = document.createElement('p');
let closeBtn = document.createElement('button');
pCon.textContent = '나는 모달!';
closeBtn.textContent = '닫기';
modalContentDiv.append(divHea, pCon,closeBtn);

function displayModal() {
    bigDiv.classList.toggle('hidden');
    // console.log('토글토글');
};
imgs.forEach(function (e) {
        console.log(e.className)
        e.addEventListener('click', displayModal);
        
        // console.log('이미지 배열에서 작동중!');
});

function removeClose(){
    bigDiv.parentNode.removeChild(bigDiv);
};

closeBtn.addEventListener('click', displayModal);
closeBtn.addEventListener('click', removeClose);
};



class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

