

// Создаем пункт меню перехода на xcraft
var contexts = ["page","selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Открыть  xcraft";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": openxc});
  var title = "Открыть  форум";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": openfor});
  var title = "Открыть  чат";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": openchat});
  
}




// Создаем раскрывающееся контексное меню.
var parent = chrome.contextMenus.create({"title": "Открыть в отдельном окне:"});
var child1 = chrome.contextMenus.create(
  {"title": "чат ", "parentId": parent, "onclick": Menu1});
var child2 = chrome.contextMenus.create(
  {"title": "Открыть обзор", "parentId": parent, "onclick": Menu2});
var child3 = chrome.contextMenus.create(
  {"title": "Открыть флот", "parentId": parent, "onclick": Menu3});
var child4 = chrome.contextMenus.create(
  {"title": "Открыть галактика", "parentId": parent, "onclick": Menu4});

  
  

function openxc(info, tab) {
window.open('https://xcraft.ru');
};
function openfor(info, tab) {
window.open('https://xcraft.ru/forum');
};
function openchat(info, tab) {
window.open('https://xcraft.ru/chat');
};


function Menu1(info, tab) {
window.open('https://xcraft.ru/chat','info1','height=520,width=520');

};

function Menu2(info, tab) {

window.open('https://xcraft.ru/w#overview','info2','height=520,width=520');
};

function Menu3(info, tab) {

window.open('https://xcraft.ru/w#fleet','info3','height=520,width=520');
};

function Menu4(info, tab) {

window.open('https://xcraft.ru/w#galaxy','info4','height=520,width=520');
};



