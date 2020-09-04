const loadingPage = document.querySelector('.loadingPage--container');
const animatedSvg = document.querySelector('.svg');

const animation = () => {
    setTimeout(() => {
        loadingPage.classList.add('active');
        animatedSvg.classList.add('exit');
        setTimeout(() => {
            loadingPage.classList.remove('active');
            setTimeout(() => {
                animatedSvg.classList.remove('exit');
            },1000)
        },3000)
    },1000)
}

animation();

setInterval(() => {
    animation();
}, 8000);

