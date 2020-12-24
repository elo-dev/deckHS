'use strict';

function bindArena(triggerSelector, arenaSelector){
    const trigger = document.querySelectorAll(triggerSelector),
          arena = document.querySelector(arenaSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) =>{
            if(e.target.id != 'dropdownItem'){
                e.preventDefault();
                arena.style.display = 'none';
            } else if(e.target.id == 'dropdownItem'){
                arena.style.display = (arena.style.display != 'block') ? 'block' : 'none';
                document.getElementById('tierAction').style.minHeight = '0px';
                item.style.color = (item.style.color != '') ? '' : 'red';
            }
        });
    });
}

bindArena('.tier1-arena', '.arena1');
bindArena('.tier2-arena', '.arena2');
bindArena('.tier3-arena', '.arena3');
bindArena('.pirates_deck', '.col_pirates');
bindArena('.murloks_deck', '.col_murloks');
bindArena('.elems_deck', '.col_elems');
bindArena('.drakons_deck', '.col_drakons');
bindArena('.demons_deck', '.col_demons');
bindArena('.animals_deck', '.col_animals');
bindArena('.mehs_deck', '.col_mehs');
