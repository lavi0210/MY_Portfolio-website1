const mainMen = document.querySelector('.mainMenu');
const closeMen = document.querySelector('.closeMenu');
const openMen = document.querySelector('openMenu');


openMen.addEventListener('click',show);
closeMen.addEventListener('click',close);

function show (){
    mainMen.style.display ='flex';
    mainMen.style.top ='0';

}
function close(){
    mainMen.style.top ='100%';
}