let text = document.querySelector('.text');
let submit = document.querySelector('.submit');
let list = document.querySelector('.list');
let p = document.querySelector('.content');

let taskList = document.querySelector('.taskList');
let taskFin = document.querySelector('.taskFin');
let taskClear = document.querySelector('.taskClear');

submit.addEventListener("click",addContent);

function addContent(){
    
    li = document.createElement('li');
    li.className = 'createList';  
    list.appendChild(li);

    listContent = document.createElement('div');
    listContent.className = 'listContent';
    li.appendChild(listContent);

    number = document.createElement('div');
    number.className = 'number listAllBtn';
    listContent.appendChild(number);

    content = document.createElement('p');
    content.className = 'content';
    content.textContent = (text.value);
    listContent.appendChild(content);

    listSet = document.createElement('div');
    listSet.className = 'listSet';
    li.appendChild(listSet);

    // 完成鍵
    listCheckBtn = document.createElement('a');
    listCheckBtn.className = 'listCheckBtn far fa-calendar-check listAllBtn';
    listSet.appendChild(listCheckBtn);
    listCheckBtn.addEventListener('click',fin);
    function fin(){
        this.parentNode.parentNode.className = 'fin';
        this.remove();
    }

    // 刪除鍵
    listDelBtn = document.createElement('a');
    listDelBtn.className = 'listDelBtn fas fa-times listAllBtn';
    listSet.appendChild(listDelBtn);
    listDelBtn.addEventListener('click',del);
    function del(){
        this.parentNode.parentNode.remove(li);
    }
    text.value = '';

    off();
    function off(){
        li = document.querySelectorAll('.fin');
        closeList = document.querySelectorAll('.createList');
        for (let i = 0; i < li.length; i++) {
            li[i].className= 'fin off';
        }
        for (let x = 0; x < closeList.length; x++) {
             closeList[x].className = 'createList open';
        }
        }
    
}



taskFin.addEventListener('click',finList);
function finList(){
    li = document.querySelectorAll('.fin');
    closeList = document.querySelectorAll('.createList');
    for (let i = 0; i < li.length; i++) {
        li[i].className= 'fin open';
    }
    for (let x = 0; x < closeList.length; x++) {
        closeList[x].className = 'createList off';
    }
    }


taskList.addEventListener('click',offList);
function offList(){
    li = document.querySelectorAll('.fin');
    closeList = document.querySelectorAll('.createList');
    for (let i = 0; i < li.length; i++) {
        li[i].className= 'fin off';
    }
    for (let x = 0; x < closeList.length; x++) {
         closeList[x].className = 'createList open';
    }
    }
   
taskClear.addEventListener('click',clearAll);

function clearAll(){
    li = document.querySelectorAll('ul.list > li')
    for (let i = 0; i < li.length; i++) {
        li[i].remove();
   
    }
}