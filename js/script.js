let settingButton = document.querySelector('.settingButton');
let settingBox = document.querySelector('.settingBox');
let targetOptions = document.querySelector('.targetOptions');
let colorOptions = document.querySelector('.colorOptions');
let targetPoint = document.querySelectorAll('input[name="targetPoint"]');
let colorPoint= document.querySelectorAll('input[name="colorPoint"]');
let targetOption = document.querySelectorAll('.targetOption');
let optionState = {'body': '', 'details': '', 'contents': ''};
// 开始点击按钮，点击按钮，出现隐藏菜单
document.body.addEventListener('click', function(event) {
    if (event.target.closest('.settingButton')) {
        settingBox.classList.toggle('expand');
        settingButton.classList.toggle('spin');
    } else if (event.target.closest('#main')) {
        settingBox.classList.remove('expand');
        settingButton.classList.remove('spin');
    }
});
// 结束点击按钮

// 开始选项按钮框
targetOptions.addEventListener('click', function(event) {
    if (event.target.closest('.targetOption')) {
        // 点击任意按钮出现颜色框
        colorOptions.classList.add('visible');
        let targetOption = event.target.closest('.targetOption');
        // 临时变量，查看oS里对应的tO的值是否为空
        let pvA = optionState[targetOption.getAttribute('for')];
        if (pvA !== '') {
            // 修改对应颜色的input.checked
            document.querySelector(`#${pvA}`).checked = true;
        } else {
            colorPoint.forEach(i => {
                i.checked = false;
            });
        }
    }
});
// 结束选项按钮框

// 开始颜色框
colorOptions.addEventListener('click', function(event) {
    if (event.target.closest('.colorOption')) {
        let colorOption = event.target.closest('.colorOption');
        // 检查当前是哪个input选择按钮被选中
        for (let i of targetPoint) {
            let pvB = document.querySelector(`.targetOption[for=${i.id}]`);
            if (i.checked) {
                // 更新字典
                optionState[i.id] = colorOption.getAttribute('for');
                // 临时变量，改变选择按钮的颜色
                pvB.style.color = colorOption.dataset.color;
                // 更改边框颜色
                pvB.style.border = `1px dashed ${colorOption.dataset.color}`;
                // 更改颜色
                if (i.id === "body") {
                    document.body.style.background = `linear-gradient(to bottom right, #d1d9e0, ${colorOption.dataset.color})`;
                } else {
                    let tar = document.querySelectorAll(`.${i.id}`);
                    tar.forEach(t => {
                        t.style.backgroundColor = colorOption.dataset.color;
                    });
                }
                break;
            }
        }
    }
});
// 结束颜色框

// 开始点击隐藏/显示英文框
let main = document.getElementById('main');
function mainClick(event) {
    if (event.target.closest('.contents')) {
        let container = event.target.closest('.contents');
        let hiddenText = container.querySelector('p');
        if (!settingBox.classList.contains('expand')) {
            hiddenText.style.transition = (Math.ceil(hiddenText.scrollHeight / 18) ** 0.5) * 0.3 + 's';
            hiddenText.style.height = (hiddenText.style.height === "0px" || hiddenText.style.height === "") ? hiddenText.scrollHeight + 'px' : "0px";
        }
    }
}
main.addEventListener('click', mainClick);
// 结束点击隐藏/显示英文框
