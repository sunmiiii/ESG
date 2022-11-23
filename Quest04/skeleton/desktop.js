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
let iconFile = ['./icon/folderImg.png', './icon/iconImg.png'];
let imgs = [];
let imgDiv = document.createElement('div');
imgDiv.setAttribute('class', 'imgDiv');
let modelDiv = document.createElement('div');
let modelContent = document.createElement('div');
let pTagModal = document.createElement('p');
let modalBtn = document.createElement('button');
/** 데스크탑에 div태그 두개 만든거 넣어줌! */
desktop.append(imgDiv, modelDiv);

modelDiv.setAttribute('class', 'modal');
modelDiv.append(modelContent, pTagModal, modalBtn);
modelContent.setAttribute('class', 'modal_content');
modelContent.append(pTagModal, modalBtn);
pTagModal.textContent = '모달창입니돠';
modalBtn.textContent = '버튼클릭시 모달 벗어남!';

function displayModal() {
	modelDiv.classList.toggle('hidden');
};

imgs.forEach(function (e) {
	e.addEventListener('click', displayModal);
});

modalBtn.addEventListener('click', displayModal);



class Desktop {
	/** 모달 div안에 사용할 p태그, 버튼태그 넣어줌! */
	constructor() {

	};
	imgClickModel() {

	};


};

class Icon {
	constructor(number, srcNum) {
		this.number = number;
		this.srcNum = srcNum;
		this.selectIconNum();
	};
	/** 아이콘 이미지 불러오기! */
	selectIconNum() {
		for (let i = 0; i < this.number; i++) {
			imgs[i] = new Image(); // 이미지객체생성
			imgs[i].src = iconFile[this.srcNum]; // 페이지 로딩 될때 이미지 미리 로딩
			imgs[i].setAttribute('class', 'iconImg');
			imgDiv.appendChild(imgs[i]);
		}
		console.log(imgs);
	};
};

class Folder {
	constructor(number, srcNum) {
		this.number = number;
		this.srcNum = srcNum;
		this.selectFolderNum();
	};
	/** 폴더 이미지 불러오기! */
	selectFolderNum() {
		for (let i = 0; i < this.number; i++) {
			imgs[i] = new Image(); // 이미지객체생성
			imgs[i].src = iconFile[this.srcNum]; // 페이지 로딩 될때 이미지 미리 로딩
			imgs[i].setAttribute('class', 'folderImg');
			imgDiv.appendChild(imgs[i]);
		}
		console.log(imgs);
	};
};


class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};


/** dom 요소 가져오기*/

// var folderIconImg = document.createElement('img');
// folderIconImg.setAttribute('class','folderIconImg');
// folderIconImg.setAttribute('src','./icon/folderImg.png');
// desktop.appendChild(folderIconImg);

// var iconImg = document.createElement('img');
// iconImg.setAttribute('class','iconImg');
// iconImg.setAttribute('src','./icon/iconImg.png');
// desktop.appendChild(iconImg);


/** ******************폴더이미지 아이콘이미지 생성*********************** */

// var folderNum = Number(prompt('몇개의 폴더를 받아올래용?', 1));
// var iconNum = Number(prompt('몇개의 아이콘을 받아올래용?', 1));

// /** 반복할 횟수를 매개변수 number에, 이미지 경로 배열에서 지정번호 가져옴 srcNum*/
// function selectNum(number,srcNum){
// 	for(var i = 0; i < number; i++){
// 		imgs[i] = new Image(); // 이미지객체생성
// 		imgs[i].src = iconFile[srcNum]; // 페이지 로딩 될때 이미지 미리 로딩
// 		desktop.appendChild(imgs[i]);
// 	}
// };

// /** 함수 사용해서 반복회수, 지정경로 정해줌 */
// selectNum(folderNum, 0);
// selectNum(iconNum, 1);

/** ******************폴더이미지 아이콘이미지 생성*********************** */

