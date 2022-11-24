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

let starImg;
let folderImg;
let parDiv;
let modalContentDiv;
let divHea;
let pCon;
let closeBtn;
let folderArr=[];
let modalArr=[];
let closeArr=[];
let count = 0;

let body = document.querySelector('body');
let desktop = document.querySelector('.desktop');

/** 이미지를 가져오기 위해 필요한 것들 */
let imgDiv = document.createElement('div');
imgDiv.setAttribute('class', 'imgDiv');

desktop.append(imgDiv);
class folder {
	constructor(number) {
		this.number = number;
		this.folderIcon();
	};
	/** 아이콘 이미지 불러오기! */
	
	folderIcon() {
		for (let i = 0; i < this.number; i++) {
			folderImg = document.createElement('img');
			folderImg.setAttribute('src','./icon/folderImg.png'); // 페이지 로딩 될때 이미지 미리 로딩
			folderImg.setAttribute('class', 'folderImg' + i);
			imgDiv.append(folderImg);
			modalCreate();
			modalArr[i]= parDiv;
			folderArr[i] = folderImg;
			console.log(i+'번째 생성중');	
		}
		// for(let j = 0; j < this.number; j++){
		// 	(function(j){
		// 		folderArr[j].addEventListener('click',function(){
		// 			closeArr[j]=closeBtn;
		// 			modalArr[j].classList.remove('hidden');
		// 			console.log('히든지웠나?'+modalArr);
		// 			closeArr[j].addEventListener('click',function(){
		// 				modalArr[j].classList.add('hidden');
		// 				console.log('히든있냐고!!!!?'+modalArr);
		// 				});
		// 			});
		// 	})(j);
		// }

		folderArr.forEach(function(c){
			c.addEventListener('click',function(){
				console.log(c.className);
				/** [^0-9]는 숫자가 아닌 문자들을 의미하는 패턴이며, 
				    g는 문자열에서 모든 패턴을 찾으라는 의미 */
				const num = /[^0-9]/g;
				/** num 해당하는 모든 패턴을 찾아서 ""으로 변환
				 	숫자가 아닌 문자들이 모두 제거 */
				let index = c.className.replace(num, "");
				console.log(modalArr[index]);
				modalArr[index].classList.remove('hidden');
				let close = modalArr[index].children[0].lastChild;
				close.addEventListener('click',function(){
					modalArr[index].classList.add('hidden');
				})
			})
		})
		// for(let j = 0; j < this.number; j++){
		// 	(function(j){
		// 		folderArr[j].addEventListener('click',function(){
		// 			closeArr[j]=closeBtn;
		// 			modalArr[j].classList.remove('hidden');
		// 			console.log('히든지웠나?'+modalArr);
		// 			closeArr[j].addEventListener('click',function(){
		// 				modalArr[j].classList.add('hidden');
		// 				console.log('히든있냐고!!!!?'+modalArr);
		// 				});
		// 			});
		// 	})(j);
		// }
	};
		// let num = 0;
		// imgs.forEach(function (e) {
		// 	if (e.className === ('folderImg'+num)) {
		// 		e.addEventListener('click', function(){
		// 			e.className.remove('hidden');
		// 		});
		// 		num++;
		// 	}
		// });
	
};


class Icon {
	constructor(num){
		this.num = num;
		this.starIcon();
	}
	starIcon() {
		for (let i = 0; i < this.num; i++) {
			starImg = document.createElement('img');
			starImg.setAttribute('src','./icon/iconImg.png'); // 페이지 로딩 될때 이미지 미리 로딩
			starImg.setAttribute('class', 'iconImg' + i);
			imgDiv.append(starImg);
			console.log(i+'번째 생성중');
		}
	};
	

};

function modalCreate() {
	parDiv = document.createElement('div');
	parDiv.setAttribute('class', 'modal' + count);
	parDiv.classList.add('folderImg' + count); // 이미지 생성시 클래스 이름 맞춰줌
	parDiv.classList.add('hidden');
	parDiv.classList.add('modalCss');
	desktop.appendChild(parDiv);
	modalContentDiv = document.createElement('div');
	modalContentDiv.setAttribute('class', 'modelContent');
	parDiv.append(modalContentDiv);
	divHea = document.createElement('div');
	divHea.setAttribute('class', 'divHea');
	count++;
	divHea.textContent = '머리' + count;
	pCon = document.createElement('p');
	closeBtn = document.createElement('button');
	pCon.textContent = '나는 모달!';
	closeBtn.textContent = '닫기';
	modalContentDiv.append(divHea, pCon, closeBtn);

	// function displayModal() {
	// 	parDiv.classList.toggle('hidden');
	// 	console.log(this);
	// };

	// function folderImgClick(e) {
	// 	e.addEventListener('click', displayModal);
	// 	console.log('이미지 배열에서 작동중!');
	// };

	// function removeClose(){
	//     parDiv.parentNode.removeChild(parDiv);
	// };

	//closeBtn.addEventListener('click', displayModal);
	// closeBtn.addEventListener('click', removeClose);
};



class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

