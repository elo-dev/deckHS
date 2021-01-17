'use strict';

function openTabs(triggerSelector, arenaSelector){
    const btnCreateDeck = document.querySelector('#btnCreateDeck'),
          createDeck = document.querySelector('.createDeck'),
          trigger = document.querySelectorAll(triggerSelector),
          arena = document.querySelector(arenaSelector);

          trigger.forEach(item => {
            item.addEventListener('click', (e) =>{
                if(e.target.id == 'dropdownItem'){
                    createDeck.style.display = 'none';
                    arena.style.display = (arena.style.display != 'block') ? 'block' : 'none';
                    item.style.color = (item.style.color != '') ? '' : 'red';
                }
            });
            btnCreateDeck.addEventListener('click', (e) =>{
                if(e.target.id == 'btnCreateDeck'){
                    createDeck.style.display = 'block';
                    arena.style.display = 'none';
                    item.style.color = '';
                }
            });
          });
}

openTabs('.tier1-arena', '.arena1');
openTabs('.tier2-arena', '.arena2');
openTabs('.tier3-arena', '.arena3');
openTabs('.pirates_deck', '.col_pirates');
openTabs('.murloks_deck', '.col_murloks');
openTabs('.elems_deck', '.col_elems');
openTabs('.drakons_deck', '.col_drakons');
openTabs('.demons_deck', '.col_demons');
openTabs('.animals_deck', '.col_animals');
openTabs('.mehs_deck', '.col_mehs');

// ЦИКЛ ДОБАВЛЕНИЯ КАРТИНОК НА СТРАНИЦУ

let selectEntity = document.getElementById("selectEntity"),
    add = "";
    for (let i = 1; i <= 41; ++i) {
    add += `<li>
                <input type="checkbox" id="checkBoxAnimals${i}" value="${i}" />
                <label id="selectEntityImg" for="checkBoxAnimals${i}">
                    <img src="allEntity/entity${i}.png" data-img="allEntity/entity${i}.png">
                </label>
            </li>`;
}
selectEntity.innerHTML = add;

// СОЗДАНИЕ ДЕКИ

const btn = document.querySelector('.btn-success');

btn.addEventListener('click', function(){
    var userDeck = document.getElementById('userDeck');
    var firstLi = userDeck.getElementsByTagName('P')[0];
    
    var name = document.querySelector('.nameDeck').value;

    if(typeof nameCheckbox === 'string' && name.length !== 0){
        var nameArchetype = document.createElement('P');
        var nameDeck = document.createElement('H1');
        nameArchetype.innerHTML = 'Дека:' + nameCheckbox;
        nameDeck.innerHTML = name;
        userDeck.insertBefore(nameArchetype, firstLi);
        userDeck.insertBefore(nameDeck, firstLi);
    }

    // block.childNodes.forEach(el => {el.remove()});
    arr.forEach(el => {
        let img = document.createElement('img');
        img.classList.add('img_userDeck');
        img.setAttribute('src', el);
        block.insertBefore(img, firstLi);
    })

    checkbox.checked = false;
    document.querySelector('.nameDeck').value = '';
});


// ВЫВОД НАЗВАНИЯ ЧЕКБОКСА

var listCheckbox = document.querySelectorAll('[type="radio"]');
var nameCheckbox;
var checkbox;
        listCheckbox.forEach(e =>{
            e.onchange = function (event){
                nameCheckbox = event.target.nextElementSibling.textContent;
                checkbox = event.target;
            };
        });

// ДОБАВЛЕНИЕ КАРТИНКИ В МАССИВ

let img = document.querySelectorAll('[src]');
let block = document.getElementById('userDeck');
let arr = [];

img.forEach(el => {
    el.onclick = function (event){
        arr.push(event.target.getAttribute('data-img'));
    }
});