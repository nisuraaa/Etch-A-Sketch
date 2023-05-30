let inputField = document.getElementById('num');
document.getElementById('submit').addEventListener('click', function () {
    const value = inputField.value;
    document.getElementsByClassName('popup')[0].style.display = 'none';
    newbox(value);
})
const container = document.getElementsByClassName('container')[0];
for (let i = 0; i < 256; i++) {
    let a = document.createElement('div');
    a.className = "box";
    a.addEventListener('mouseover', changeColor);

    container.appendChild(a);
}
function show() {
    document.getElementsByClassName('popup')[0].style.display = 'flex';

}
function changeColor(e) {
    if (e.type == 'mouseover' || e.type == 'mousedown') {

        e.target.style.backgroundColor = '#292929';
    }
}


function newbox(x) {
    container.innerHTML = '';
    for (let i = 0; i < x * x; i++) {
        let a = document.createElement('div');
        a.style.height = 600 / x + 'px';
        a.style.width = 600 / x + 'px';
        a.className = "box";
        a.addEventListener('mouseover', changeColor);

        a.addEventListener('mousedown', () => {
            mousedown = true; // Set mousedown to true when mouse button is pressed down
        });
        a.addEventListener('mouseup', () => {
            mousedown = false; // Set mousedown to false when mouse button is released
        });
        container.appendChild(a);
    }
}

function cleargrid() {

    let a = document.getElementsByClassName('box')

    for (var index = 0; index < a.length; index++) {
        a[index].style.backgroundColor = "white";
    }

}

