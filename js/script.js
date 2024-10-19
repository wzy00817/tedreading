// 开始下拉菜单
document.body.addEventListener('click', function (event) {
    // 开始导航栏
    let allDropdowns = document.querySelectorAll('.dropdown');
    
    if (event.target.closest('.dropbt')) {
        let dropdown = event.target.querySelector('.dropdown');
        dropdown.style.height = (dropdown.style.height === "0px" || dropdown.style.height === "") ? dropdown.scrollHeight + 'px' : "0px";
        // dropdown.addEventListener('click', (event) => {
        //     event.stopPropagation(); 
        // });
    } else {
        allDropdowns.forEach(dp => {
            dp.style.height = "0px";
        });
    }
    // 结束导航栏

    // 开始点击隐藏/显示英文框
    let container = event.target.closest('.content');
    if (container) {
        let hiddenText = container.querySelector('p');
        hiddenText.style.height = (hiddenText.style.height === "0px" || hiddenText.style.height === "") ? hiddenText.scrollHeight + 'px' : "0px";
    }
    // 结束点击隐藏/显示英文框

        ///////////
        // if (event.target.closest('.coloritem')) {
        //     // var colorId = colorIdd.classList;
        //     window.alert('`${colorId}`');
        //     let colorItem = document.querySelector(`.${colorId}`);
        //     let color = window.getComputedStyle(colorItem,null).getPropertyValue("background-color");
            
        //     let contents = document.querySelectorAll('.content');
        //     contents.forEach(content => {
        //         content.style.backgroundColor = '#000000';
        //     })
        // }
            ///////////

    // END
});
// 结束下拉菜单

开始更改颜色
网页背景颜色
function changeBgColor(color) {
    document.body.style.backgroundImage=`linear-gradient(to bottom right, #d1d9e0, ${color})`;
}
// 英文框背景颜色
function changeEnBgColor(color) {
    let contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.backgroundColor = color;
    });
}
// 中文框背景颜色
function changeCnBgColor(color) {
    let contents = document.querySelectorAll('.details');
    contents.forEach(content => {
        content.style.backgroundColor = color;
    });
}
// 结束更改颜色

