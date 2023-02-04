const ul = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        menuBtn.style.color = '#fff';
        menuBtn.classList.remove('open');
    }
    else{
        ul.classList.add('open');
        menuBtn.style.color = '#fff';
        menuBtn.classList.add('open');
    }
}

new TypeIt("#atuacao", {
    strings: "Desenvolvedora Web Júnior",
    speed: 200,
    waitUntilVisible: true,
    loop: true,
  }).go();