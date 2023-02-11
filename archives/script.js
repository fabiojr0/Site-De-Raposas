const slideShow = Array.from(document.querySelectorAll('.slide'))
const h1 = Array.from(document.querySelectorAll('.tipo'));
const ul = Array.from(document.querySelectorAll('.list'));
let i = -1;
let j = 0;

let interval = setInterval(slideAuto,6000);

function slideAuto() {
    if(i >= slideShow.length - 1) {i = -1} 
    i++;
    if(i < 1 ) {j = 5}
    else {j = i - 1;}
    verify()
}
slideAuto()
function next() {
    slideAuto()
    clearInterval(interval)
}
function prev() {
    i--;
    if(i < 0) {i = 5}
    if(i == 5) {j = 0}
    else {j = i + 1}
    verify()
    clearInterval(interval)
}
function verify() {
    slideShow[i].style.display = `block`;
    slideShow[j].style.display = `none`; 
    h1[i].style.display = `block`;
    h1[j].style.display = `none`; 
    ul[i].style.display = `block`;
    ul[j].style.display = `none`;
}

const ulCurio = Array.from(document.querySelectorAll('.curio-txt'));

function curioShow(index=0) {
  ulCurio[index].style.display = 'block';
  for(let i = 0; i < ulCurio.length; i++) {
    if(i != index) {
      ulCurio[i].style.display = 'none'
    }
  }
}
curioShow()