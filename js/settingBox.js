let setting_Box = document.createElement('div');
setting_Box.className = 'settingBox';

let target_Options = document.createElement('div');
let color_Options = document.createElement('div');
target_Options.className = 'targetOptions';
color_Options.className = 'colorOptions';

let dA = {
    'body': '网页',
    'details': '中文框',
    'contents': '英文框'
};
let dB = []; // target_Options中的子元素
for (let [key, value] of Object.entries(dA)) {
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'targetPoint';
    input.id = key;
    let label = document.createElement('label');
    label.className = 'targetOption';
    label.htmlFor = key;
    label.textContent = value;
    dB.push(input);
    dB.push(label);
}
dB.forEach(i => {
    target_Options.appendChild(i);
});
let eA = {
    'fenhong': '#ffb3a7',
    'taohong': '#f47983',
    'haitanghong': '#db5a6b',
    'jiangzi': '#8c4356',
    'tuoyan': '#f9906f',
    'qiuse': '#896c39',
    'lise': '#60281e',
    'yaqing': '#424c50',
    'jianghuang': '#ffc773',
    'chase': '#b35c44',
    'cangbai': '#d1d9e0',
    'shuise': '#88ada6',
};
let eB = []; // color_Options中的子元素    
for (let [key, value] of Object.entries(eA)) {
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'colorPoint';
    input.id = `id${key}`;
    let label = document.createElement('label');
    label.className = 'colorOption';
    label.htmlFor = `id${key}`;
    label.setAttribute('data-color', value)
    label.style.backgroundColor = value;
    eB.push(input);
    eB.push(label);
}
eB.forEach(i => {
    color_Options.append(i);
});
setting_Box.appendChild(target_Options);
setting_Box.appendChild(color_Options);
document.body.insertBefore(setting_Box, document.body.firstChild);