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

let selectEntity = document.getElementById("selectEntity"),
    add = "";
    for (let i = 1; i <= 41; ++i) {
    add += `<li>
                <input type="checkbox" id="checkBoxAnimals${i}" />
                <label id="selectEntityImg" for="checkBoxAnimals${i}">
                    <img src="allEntity/entity${i}.png">
                </label>
            </li>`;
}
selectEntity.innerHTML = add;