"use strict";

//內容上的變數
var text = document.querySelector('.text');
var wrap = document.querySelector('.wrap');
var submit = document.querySelector('.submit');
var container = document.querySelector('.container'); //輸入按鈕

submit.addEventListener("click", addCo); //輸入後的狀況

function addCo() {
  list = document.createElement('div');
  list.textContent = wrap.value;
  container.append(list); // document.querySelector('.container div').className = 'name';

  icon = document.createElement("input");
  list.append(icon);
  icon.setAttribute("type", "button");
  icon.value = "X";

  icon.onclick = function () {
    icon.parentNode.remove(list);
  };

  wrap.value = '';
}

$(document).ready(function () {
  //若點擊刪除 就清空
  $('.btn').click(function (e) {
    e.preventDefault();
    $('.container div').remove();
  }); //若點擊送出將內容加入class

  $('.submit').click(function (e) {
    e.preventDefault();
    $('.container div').addClass('displey');
    $('.container button').addClass('x');
  });
});