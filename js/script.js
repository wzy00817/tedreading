// 开始下拉菜单
document.body.addEventListener('click', function (event) {
	// 检查点击是否发生在具有 .dropbt 类的元素上
	var dropbt = event.target.closest('.dropbt');
	// 获取所有下拉菜单
	const allDropdowns = document.querySelectorAll('.dropdown');
	// 如果点击在dropbt元素上，展开或收起该下拉菜单
	if (dropbt) {
		var dropdown = dropbt.querySelector('.dropdown');
		// 展开或收起菜单
		dropdown.style.height = (dropdown.style.height === "0px" || dropdown.style.height === "") ? dropdown.scrollHeight + 'px' : "0px";
		// 阻止点击事件冒泡到 body
		dropdown.addEventListener('click', (event) => {
			event.stopPropagation();  // 阻止事件冒泡
		});
	} else {
		// 如果点击不在dropbt元素上，关闭所有下拉菜单
		allDropdowns.forEach(dp => {
			dp.style.height = "0px";
		});
	}
});
// 结束下拉菜单

// 开始更改颜色
// 网页背景颜色
function changeBackgroundColor(color) {
	document.body.style.backgroundImage=`linear-gradient(to bottom right, #d1d9e0, ${color})`;
}
// 英文框背景颜色
function changeEnBackgroundColor(color) {
	const x = document.getElementsByClassName('content')
	for (let i = 0; i<x.length; i++) {
		x[i].style.backgroundColor = color;
	}
}
// 中文框背景颜色
function changeCnBackgroundColor(color) {
	const x = document.getElementsByClassName('details')
	for (let i = 0; i<x.length; i++) {
		x[i].style.backgroundColor = color;
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

//字体选择按钮只在via版使用
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
// 点击div框后切换至默认字体
document.getElementById('defaultFont').addEventListener('click', function() {
	const textElements = document.querySelectorAll('.content');
	textElements.forEach(function(element) {
		element.style.fontFamily = ''; // 清除字体设置，回到默认字体
		element.style.fontSize = '14px';
	});
});
// 结束字体选择按钮
