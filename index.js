const select = document.querySelector("select");

document.addEventListener("DOMContentLoaded", function(){
    if(select.selectedIndex===-1){
        select.selectedIndex=1;
        changeLanguage();
    }
});

const alllang=['en','ru','ua']
select.addEventListener("change",changeURLLanguage)
//змінюємо URL сторінки в залежності від вибраної мови
function changeURLLanguage(){
    let lang= select.value;
    location.href=window.location.pathname+"#"+lang;
    location.reload();
}
function changeLanguage(){
    let hash=window.location.hash;
    hash=hash.substr(1,2)
    if(!alllang.includes(hash)){
        location.href=window.location.pathname+'#lv'
    }
    select.value=hash;
    for(let key in langArr){
        document.querySelector('.'+key).innerHTML=langArr[key][hash];
    }
}
changeLanguage();

