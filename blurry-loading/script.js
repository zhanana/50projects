const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');
let load = 0;
let timer = setInterval(blurring,30);
function blurring(){
    load++;
    loadText.innerText = load + '%';
    loadText.style.opacity = 1-load/100;
    bg.style.filter = `blur(${30-load/100*30}px)`;
    if(load>99){
        clearInterval(timer)
    }
}



// function blurring(){
//     load++;
//     if(load>99){
//         clearInterval(timer)
//     }
//     loadText.innerText = `${load}%`
//     loadText.style.opacity = scale(load,0,100,1,0)
//     bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
// }
// const scale = (num,in_min,in_max,out_min,out_max)=>{
//     return((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min
// }
