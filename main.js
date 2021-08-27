let input = document.querySelector("#add1");
let button = document.querySelector("button");
let list = document.querySelector("#list1");
let el = document.getElementsByTagName("li");

button.addEventListener('click',() => {
   let txt = input.value;
   if(txt === ""){
       alert('write something');
   }else{
       let li =document.createElement('li');
       li.innerHTML = txt;
       list.insertBefore(li, list.childNodes[0]);
       input.value = '';
   }
})