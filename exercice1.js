const button = document.getElementById('button');
let input = document.getElementById('input');
let tab = [];
let buttonAle = document.getElementById('buttonAle');
let buttonInt = document.getElementById('buttonInt');
let buttonDel = document.getElementById('buttonDel');
let container = document.getElementById('container');
let fifth = document.getElementById('fifth');
let allDel = document.getElementById('allDel');

button.addEventListener('click', function (){
    let text  = input.value;
    input.value = "";
    let random;
    tab.push(text);

    if (tab.length >= 10) {
        container.innerHTML = tab[Math.trunc(Math.random()* tab.length)];
    }

    if (tab.length >= 5) {
        fifth.innerHTML = tab[5 -1];
    }

})

buttonAle.addEventListener('click', function () {
    tab = Math.trunc(Math.random() * 10);
})

buttonInt.addEventListener('click', function () {
    let number = 0;
    for (let i of tab) {
        container.innerHTML += '[' + number +']' + "-" + i + "<br>";
        number++;
    }
})

buttonDel.addEventListener('click', function () {
    container.innerHTML = tab.pop();
})

allDel.addEventListener('click', function () {
    container.innerHTML = "";
})