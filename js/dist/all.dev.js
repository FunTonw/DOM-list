"use strict";

var text = document.querySelector('.text');
var submit = document.querySelector('.submit');
var list = document.querySelector('.list');
var p = document.querySelector('.content');
var taskList = document.querySelector('.taskList');
var taskFin = document.querySelector('.taskFin');
submit.addEventListener("click", addContent);

function addContent() {
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
  content.textContent = text.value;
  listContent.appendChild(content);
  listSet = document.createElement('div');
  listSet.className = 'listSet';
  li.appendChild(listSet); // 完成鍵

  listCheckBtn = document.createElement('a');
  listCheckBtn.className = 'listCheckBtn far fa-calendar-check listAllBtn';
  listSet.appendChild(listCheckBtn);
  listCheckBtn.addEventListener('click', fin);

  function fin() {
    this.parentNode.parentNode.className = 'fin';
    this.remove();
  } // 刪除鍵


  listDelBtn = document.createElement('a');
  listDelBtn.className = 'listDelBtn fas fa-times listAllBtn';
  listSet.appendChild(listDelBtn);
  listDelBtn.addEventListener('click', del);

  function del() {
    this.parentNode.parentNode.remove(li);
  }

  text.value = '';
}

taskFin.addEventListener('click', finList);

function finList() {
  fin = document.querySelectorAll('.fin');
  closeList = document.querySelectorAll('.createList');

  if (document.getElementsByClassName('fin')) {
    fin.style.display = 'flex';
    return closeList.style.display = 'none';
  }
}