// 开始下拉菜单
document.body.addEventListener('click', function (event) {
// 检查点击是否发生在具有 .text-container 类的元素上
	var dropbt = event.target.closest('.dropbt');

	const dropdown = dropbt.querySelector('.dropdown');
	dropdown.addEventListener('click', (event) => {
	event.stopPropagation();  // 阻止事件冒泡
});

	if (dropbt) {
		var dp = dropbt.querySelector('.dropdown');
		// dp.style.height = dp.scrollHeight + 'px';
		dp.style.height = (dp.style.height === "0px" || dp.style.height === "") ? dp.scrollHeight + 'px' : "0px";
		// dp.style.height = (dp.style.height === "0px" || dp.style.height === "") ? 'auto' : "0px";
	}
});
// 结束下拉菜单


// 开始更改颜色
// 网页背景颜色
function changeBackgroundColor(color) {
	document.body.style.backgroundColor=color;
}
// 英文框背景颜色
function changeEnBackgroundColor(color) {
	const x = document.getElementsByClassName('content')
	for (let i = 0; i<x.length; i++) {
		x[i].style.backgroundColor = color;
	}
}
// 英文框字体颜色
function changeEnFontColor(color) {
	const x = document.getElementsByClassName('content')
	for (let i = 0; i<x.length; i++) {
		x[i].style.color = color;
	}
}
// 中文框背景颜色
function changeCnBackgroundColor(color) {
	const x = document.getElementsByClassName('details')
	for (let i = 0; i<x.length; i++) {
		x[i].style.backgroundColor = color;
	}
}
// 中文框字体颜色
function changeCnFontColor(color) {
	const x = document.getElementsByClassName('details')
	for (let i = 0; i<x.length; i++) {
		x[i].style.color = color;
	}
}
// 结束更改颜色

// 开始点击隐藏/显示英文框
document.body.addEventListener('click', function(event) {
// 检查点击是否发生在具有 .text-container 类的元素上
	var container = event.target.closest('.content');
	if (container) {
		var hiddenText = container.querySelector('p');
		// 切换文本显示状态
		// if (hiddenText.style.height === '0px' || hiddenText.style.height === '') {
			// hiddenText.style.height = hiddenText.scrollHeight + 'px';
		// } else {
			// hiddenText.style.height = '0';
		// }
		hiddenText.style.height = (hiddenText.style.height === "0px" || hiddenText.style.height === "") ? hiddenText.scrollHeight + 'px' : "0px";
	}
});
// 结束点击隐藏/显示英文框

// 开始字体选择按钮
// 为 details(中文) 段落上传并应用字体
document.getElementById('fontFile1').addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			const fontData = e.target.result;
			const font = new FontFace('CustomFont1', fontData);
			font.load().then(function(loadedFont) {
				document.fonts.add(loadedFont);
				// 应用字体到所有 details 的段落
				const class1Elements = document.querySelectorAll('.details');
				class1Elements.forEach(function(element) {
					element.style.fontFamily = 'CustomFont1';
				});
			}).catch(function(error) {
				console.error('字体加载失败:', error);
			});
		};
		reader.readAsArrayBuffer(file);
	}
});
// 为 content(英文) 段落上传并应用字体
document.getElementById('fontFile2').addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			const fontData = e.target.result;
			const font = new FontFace('CustomFont2', fontData);
			font.load().then(function(loadedFont) {
				document.fonts.add(loadedFont);
				// 应用字体到所有 content 的段落
				const class2Elements = document.querySelectorAll('.content');
				class2Elements.forEach(function(element) {
					element.style.fontFamily = 'CustomFont2';
					element.style.fontSize = '18px';
				});
			}).catch(function(error) {
				console.error('字体加载失败:', error);
			});
		};
		reader.readAsArrayBuffer(file);
	}
});
// 结束字体选择按钮