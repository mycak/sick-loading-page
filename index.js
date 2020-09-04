const loadingPage = document.querySelector('.loadingPage--container');
const animatedSvg = document.querySelector('.svg');

setInterval(() => {
    loadingPage.classList.add('active');
    animatedSvg.classList.add('exit');
    setInterval(() => {
        loadingPage.classList.remove('active');
    },3000)
},1000)