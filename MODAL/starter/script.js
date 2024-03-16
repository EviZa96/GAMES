'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal=function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modal.computedStyleMap.display='block'; 
}

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click',closeModal);//not closeModal().WE DONT CALL JUST DECLARE IT

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(event){
    console.log('A key was pressed!!');
    console.log(event.key);
    //if modal does NOT contain the class hidden
    if(event.key==='Escape' && !modal.classList.contains('hidden')) {
       //if modal does NOT contain the class hidden
       closeModal(); 
    }
});
